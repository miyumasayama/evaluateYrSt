"use server";
import { paths } from "@/utils/const";
import Groq from "groq-sdk";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY, // This is the default and can be omitted
});

export type State = {
  message: string | null;
  error?: string;
};

const prompt = `文章を評価してください。以下のフォーマットで出力してください。スコアには、数字を10点中という表記で、評価には300文字以内の日本語で結果を入れてください。: <h1>スコア</h1> <p>評価</p> 文章はこちらです。`;

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
      "score",
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
  } finally {
    redirect(paths.stories.result);
  }
};
