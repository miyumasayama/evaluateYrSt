"use server"
import Groq from 'groq-sdk';

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY, // This is the default and can be omitted
});

export type State = {
  content: string | null;
}

const prompt = `文章を評価してください。以下のフォーマットで出力してください。スコアには、数字を、評価には300文字以内の日本語で結果を入れてください。: <h1>スコア</h1> <p>評価</p> 文章はこちらです。`;

export const evaluateStory =  async (prevState: State, formData: FormData) => {
  const content = formData.get('content');
  const chatCompletion =await client.chat.completions.create({
    messages: [{ role: 'user', content: prompt + content}],
    model: 'llama3-8b-8192',
  })
  return {content: chatCompletion.choices[0].message.content};
};
