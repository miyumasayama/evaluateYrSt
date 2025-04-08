"use server"
import Groq from 'groq-sdk';

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY, // This is the default and can be omitted
});

type State = {
  message: string | null;
}

export const evaluateStory =  async (prevState: State, formData: FormData) => {
  console.log('formData', formData);
  const chatCompletion =await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Explain the importance of low latency LLMs' }],
    model: 'llama3-8b-8192',
  })
  console.log(chatCompletion.choices[0].message.content, formData);
  return {message: chatCompletion.choices[0].message.content};
};
