import express from "express";
import cors from "cors";
import quizRoutes from "./quiz.js";
import resultRoutes from "./result.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/quiz", quizRoutes);
app.use("/api/result", resultRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
