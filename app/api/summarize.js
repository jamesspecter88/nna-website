import { scrapeLinkedInOrWebsite } from "../../../lib/scraper";
import { getOpenAIClient } from "../../../lib/openai";

export async function POST(req) {
  const { url } = await req.json();
  // In production, add validation and error handling
  const data = await scrapeLinkedInOrWebsite(url);
  // Compose a prompt for OpenAI
  const prompt = `Summarize the following person's professional background in a natural, engaging way for a B2B context.\n\nName: ${data.name}\nRole: ${data.role}\nCompany: ${data.company}\nAchievements: ${data.achievements.join(", ")}`;

  const openai = getOpenAIClient();
  const completion = await openai.createCompletion({
    model: "gpt-4",
    prompt,
    max_tokens: 120,
    temperature: 0.7,
  });
  const summary = completion.data.choices[0].text.trim();

  return new Response(JSON.stringify({ summary }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}