import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await db.select().from(users).where(eq(users.email, email));

  if (!user.length) {
    return res.status(401).json({ message: "User not found" });
  }

  const match = await bcrypt.compare(password, user[0].password);
  if (!match) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: user[0].id, email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, email });
});

export default router;
