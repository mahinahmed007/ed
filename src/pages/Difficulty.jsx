import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { api } from "./api";
import { useState, useEffect } from "react";

export default function Difficulty() {
  const { topic } = useParams();
  const navigate = useNavigate();

  const {
    setQuestions,
    setIndex,
    setScore,
    setAnswers,
    setTopic,
    setLevel
  } = useQuiz();

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Generating questions...");

  // 🔥 Dynamic AI text
  useEffect(() => {
    if (!loading) return;

    const steps = [
      "Analyzing topic...",
      "Generating smart questions...",
      "Optimizing difficulty...",
      "Finalizing quiz...",
      "Almost ready..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(steps[i % steps.length]);
      i++;
    }, 1500);

    return () => clearInterval(interval);
  }, [loading]);

  const startQuiz = async (level) => {
    try {
      setLoading(true);

      const res = await api.get(`/api/quiz?topic=${topic}&level=${level}`);

      let questions = [];

      if (Array.isArray(res.data)) {
        questions = res.data;
      } else if (res.data?.choices?.[0]?.message?.content) {
        let content = res.data.choices[0].message.content;

        content = content
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        questions = JSON.parse(content);
      } else {
        throw new Error("Unexpected API response format");
      }

      setQuestions(questions);
      setIndex(0);
      setScore(0);
      setAnswers([]);
      setTopic(topic);
      setLevel(level);

      navigate("/quiz");

    } catch (err) {
      console.error("Quiz generation error:", err);
      alert("Failed to generate quiz questions.");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 PREMIUM LOADING SCREEN
  if (loading) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff]">

      {/* AI Loader */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        
        {/* Soft rotating ring */}
        <div className="absolute w-full h-full border-4 border-[#009aec]/20 rounded-full"></div>

        <div className="absolute w-full h-full border-4 border-transparent border-t-[#009aec] rounded-full animate-spin"></div>

        {/* Center pulse */}
        <div className="w-10 h-10 bg-[#009aec] rounded-full animate-pulse shadow-md"></div>
      </div>

      {/* Heading */}
      <h2 className="mt-10 text-2xl font-bold text-gray-800">
        Preparing your quiz...
      </h2>

      {/* Dynamic AI text */}
      <p className="text-gray-500 mt-3 text-sm">
        {loadingText}
      </p>

      {/* Topic */}
      <p className="text-gray-400 text-xs mt-2">
        Topic: {topic}
      </p>

    </div>
  );
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff]">

      <div className="w-[450px] bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40 text-center">

        <h2 className="text-3xl font-extrabold text-gray-800">
          {topic} Quiz
        </h2>

        <p className="text-gray-500 mt-2 mb-10">
          Choose your challenge level
        </p>

        {/* LEVEL CARDS */}
        <div className="space-y-5">

          {/* EASY */}
          <div
            onClick={() => startQuiz("Easy")}
            className="group cursor-pointer p-5 rounded-xl bg-green-50 border border-green-200 hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="font-semibold text-green-700">Easy</h3>
                <p className="text-sm text-gray-500">
                  Beginner friendly questions
                </p>
              </div>
              <span className="text-2xl">🟢</span>
            </div>
          </div>

          {/* MEDIUM */}
          <div
            onClick={() => startQuiz("Medium")}
            className="group cursor-pointer p-5 rounded-xl bg-yellow-50 border border-yellow-200 hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="font-semibold text-yellow-700">Medium</h3>
                <p className="text-sm text-gray-500">
                  Moderate challenge level
                </p>
              </div>
              <span className="text-2xl">🟡</span>
            </div>
          </div>

          {/* HARD */}
          <div
            onClick={() => startQuiz("Hard")}
            className="group cursor-pointer p-5 rounded-xl bg-red-50 border border-red-200 hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="font-semibold text-red-700">Hard</h3>
                <p className="text-sm text-gray-500">
                  Advanced & tricky questions
                </p>
              </div>
              <span className="text-2xl">🔴</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}