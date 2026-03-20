import { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { api } from "./api";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const { questions, answers, score, topic, level } = useQuiz();
  const navigate = useNavigate();

  const total = questions.length;
  const percent = Math.floor((score * 100) / total);

  const [animatedScore, setAnimatedScore] = useState(0);

  // 🎉 Score animation
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setAnimatedScore(start);
      if (start >= percent) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [percent]);

  // Save result
  useEffect(() => {
    api.post("/result", {
      topic,
      level,
      score,
      total,
    });
  }, []);

  // 🧠 Smart feedback
  const getFeedback = () => {
    if (percent >= 85) return "🔥 Excellent! You're mastering this topic!";
    if (percent >= 60) return "💪 Good job! Keep practicing to improve.";
    return "📚 Keep learning! Practice more to get better.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] flex items-center justify-center px-4">

      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/40">

        {/* HEADER */}
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Quiz Completed 🎉
        </h2>

        {/* SCORE CIRCLE */}
        <div className="flex flex-col items-center mb-8">

          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border-8 border-gray-200"></div>

            <div
              className="absolute w-full h-full rounded-full border-8 border-[#009aec]"
              style={{
                clipPath: `inset(${100 - animatedScore}% 0 0 0)`
              }}
            ></div>

            <span className="text-2xl font-bold text-[#009aec]">
              {animatedScore}%
            </span>
          </div>

          <p className="mt-4 text-gray-600">
            You scored <b>{score}</b> out of <b>{total}</b>
          </p>

          <p className="mt-2 font-semibold text-gray-800">
            {getFeedback()}
          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-5 rounded-xl shadow-sm text-center">
            <p className="text-gray-500 text-sm">Accuracy</p>
            <h3 className="text-xl font-bold text-[#009aec]">{percent}%</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm text-center">
            <p className="text-gray-500 text-sm">Correct Answers</p>
            <h3 className="text-xl font-bold text-green-600">{score}</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm text-center">
            <p className="text-gray-500 text-sm">Wrong Answers</p>
            <h3 className="text-xl font-bold text-red-500">
              {total - score}
            </h3>
          </div>

        </div>

        {/* REVIEW SECTION */}
        <div className="mb-8 max-h-[300px] overflow-y-auto space-y-4 pr-2">

          {questions.map((q, i) => {
            const correct = answers[i] === q.correctIndex;

            return (
              <div
                key={i}
                className="p-4 rounded-xl border border-gray-200 bg-white"
              >
                <p className="font-medium mb-2 text-gray-800">
                  Q{i + 1}. {q.question}
                </p>

                <p className={correct ? "text-green-600" : "text-red-500"}>
                  Your Answer: {q.options[answers[i]] || "Not Answered"}
                </p>

                {!correct && (
                  <p className="text-green-600">
                    Correct Answer: {q.options[q.correctIndex]}
                  </p>
                )}
              </div>
            );
          })}

        </div>

        {/* ACTIONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate(`/difficulty/${topic}`)}
            className="px-6 py-3 rounded-xl bg-[#009aec] text-white font-semibold hover:shadow-lg transition"
          >
            🔁 Retry Quiz
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            📊 Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}