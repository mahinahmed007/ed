import express from "express";
import { db } from "../db/index.js";
import { results } from "../db/schema.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  const { userId, topic, score, total } = req.body;

  await db.insert(results).values({
    userId,
    topic,
    score,
    total,
  });
  

  res.json({ message: "Result saved" });
});
router.get("/leaderboard", async (req, res) => {
  try {
    const data = await db
      .select()
      .from(results)
      .orderBy(results.score) // ascending by default

    // 🔥 sort manually descending (since drizzle doesn't do desc easily inline)
    const sorted = data.sort((a, b) => b.score - a.score).slice(0, 10);

    res.json(sorted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
});

export default router;
