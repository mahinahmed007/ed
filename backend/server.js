import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import quizRoutes from "./routes/quiz.js";
import resultRoutes from "./routes/result.js";

// Load env variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// Routes
app.use("/api/quiz", quizRoutes);
app.use("/api/result", resultRoutes);

// Health check (optional but useful)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// PORT FIX (IMPORTANT for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});