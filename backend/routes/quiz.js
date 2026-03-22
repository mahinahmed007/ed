import express from "express";
import { askAI } from "./openrouter.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { topic, level } = req.query;

  try {
   const prompt = `
Generate EXACTLY 10 MCQ questions on ${topic} (${level}).

STRICT RULES:
- Return ONLY JSON (no text before/after)
- EXACTLY 10 questions
- Each question must have 4 options
- correctIndex must be 0,1,2 or 3 ONLY
- Do NOT cut or stop midway

FORMAT:
[
 { "question": "...", "options": ["A","B","C","D"], "correctIndex": 0 }
]
`;
    const aiResponse = await askAI(prompt);

    console.log("========== OPENROUTER RAW RESPONSE ==========");
    console.log(JSON.stringify(aiResponse, null, 2));
    console.log("============================================");

  let content = aiResponse.choices[0].message.content;

content = content
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

console.log("AI RAW:", content);

// ✅ Extract JSON safely
const start = content.indexOf("[");
const end = content.lastIndexOf("]");

if (start === -1 || end === -1) {
  console.log("❌ JSON incomplete");
  return res.status(500).json({ error: "AI response incomplete" });
}

let cleanJSON = content.substring(start, end + 1);

console.log("CLEAN JSON:", cleanJSON);

let questions;

try {
  questions = JSON.parse(cleanJSON);
} catch (err) {
  console.log("❌ JSON PARSE FAILED");
  return res.status(500).json({ error: "Invalid JSON from AI" });
}

// ✅ FINAL VALIDATION
questions = questions.filter(q =>
  q &&
  q.question &&
  Array.isArray(q.options) &&
  q.options.length === 4 &&
  q.correctIndex >= 0 &&
  q.correctIndex <= 3
);

if (questions.length === 0) {
  return res.status(500).json({ error: "No valid questions" });
}

res.json(questions);

  } catch (err) {
    console.error("Quiz generation error:", err);
    res.status(500).json({ error: "Failed to generate quiz questions" });
  }
});

export default router;