import { Configuration, OpenAIApi } from "openai";

export function getOpenAIClient() {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  return new OpenAIApi(configuration);
}

export async function generateEmail({ targetSummary, productDescription, tone, goal }) {
  const openai = getOpenAIClient();
  const prompt = `You are an expert in B2B sales emails. Write a short, personalized cold email (max 120 words) targeting this person:\n\nSummary:\n${targetSummary}\n\nYour Product/Service:\n${productDescription}\n\nTone:\n${tone}\n\nGoal:\n${goal}\n\nMake it sound like a real person wrote it. No overused phrases.`;
  const completion = await openai.createCompletion({
    model: "gpt-4",
    prompt,
    max_tokens: 200,
    temperature: 0.7,
  });
  return completion.data.choices[0].text;
}