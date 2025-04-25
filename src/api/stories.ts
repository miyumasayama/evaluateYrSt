"use server";
import { paths } from "@/utils/const";
import Groq from "groq-sdk";
import { cookies } from "next/headers";
import { neon } from "@neondatabase/serverless";
import { Story } from "@/types/stories";
import { parseReviews } from "@/utils/stories/extract";
import { limit } from "@/utils/stories/const";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY, // This is the default and can be omitted
});

export type State = {
  message: string | null;
  error?: string;
};

const prompt = `文章を厳しく評価してください。以下のフォーマットで出力してください。スコアには、数字を10点中という表記で整数の得点を、評価には300文字以内の日本語で結果を入れてください。: <h1>スコア</h1> <p>評価</p> 文章はこちらです。`;

export const evaluateStory = async (prevState: State, formData: FormData) => {
  try {
    const content = formData.get("content");
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: prompt + content }],
      model: "llama3-8b-8192",
    });
    const cookieStore = await cookies();
    cookieStore.set("content", JSON.stringify(content), {
      path: paths.stories.root,
    });
    cookieStore.set(
      "reviews",
      JSON.stringify(chatCompletion.choices[0].message.content),
      {
        path: paths.stories.root,
      }
    );
    return { message: "処理が完了しました" };
  } catch (error) {
    console.error("Error during story evaluation:", error);

    // Return a meaningful error message
    return {
      message: "エラーが発生しました。もう一度お試しください。",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

export const getStories = async (offset: number) => {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    // const data = await sql`SELECT * FROM stories`;
    // Insert the comment from the form into the Postgres database

    const data = await sql`
    SELECT * FROM stories ORDER BY id DESC LIMIT ${limit} OFFSET ${offset};
  `;

    // 総件数を取得
    const countResult = await sql`
    SELECT COUNT(*) FROM stories;
  `;
    const total = Number(countResult[0].count);

    return { data: data as Story[], total };
  } catch (error) {
    return { data: [], total: 0, error };
  }
};

export const createStory = async (
  reviews: string,
  content: string,
  words: string[]
) => {
  try {
    const { score, review } = parseReviews(reviews);
    // TODO: parse時のerror
    const sql = neon(`${process.env.DATABASE_URL}`);
    const data =
      await sql`INSERT INTO stories (content, score, review, words) VALUES (${content}, ${score}, ${review}, ${words})`;
    return data;
  } catch (error) {
    console.error(error);
  }
};
