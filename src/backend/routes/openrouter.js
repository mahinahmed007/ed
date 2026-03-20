import fetch from "node-fetch";

const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function askAI(prompt) {

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost",
      "X-Title": "AI Quiz System"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct-v0.1",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 2000,
temperature: 0.7
    })
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("OpenRouter error:", text);
    throw new Error("OpenRouter API failed");
  }

  return await response.json();
}