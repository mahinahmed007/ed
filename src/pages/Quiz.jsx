import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

export default function Quiz() {
  const navigate = useNavigate();

  const {
    questions,
    index,
    setIndex,
    answers,
    setAnswers,
    score,
    setScore,
  } = useQuiz();

  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Preparing your quiz...
      </div>
    );
  }

  const currentQuestion = questions[index];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Loading question...
      </div>
    );
  }

  const options = Array.isArray(currentQuestion.options)
    ? currentQuestion.options
    : [];

  const handleSelect = (optionIndex) => {
    const updated = [...answers];
    updated[index] = optionIndex;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    if (answers[index] === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }

    if (index === questions.length - 1) {
      navigate("/result");
    } else {
      setIndex(index + 1);
    }
  };

  const progress = Math.round(((index + 1) / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] flex items-center justify-center px-4">

      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">

          <div className="flex items-center gap-3">
            <span className="px-4 py-1 text-sm bg-[#009aec]/10 text-[#009aec] rounded-full font-medium">
              Question {index + 1}
            </span>

            <span className="text-gray-500 text-sm">
              of {questions.length}
            </span>
          </div>

          <div className="text-sm font-medium text-gray-600">
            {progress}% Completed
          </div>

        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#009aec] to-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* QUESTION */}
        <h2 className="text-xl font-semibold text-gray-900 leading-relaxed mb-8">
          {currentQuestion.question}
        </h2>

        {/* OPTIONS */}
        <div className="space-y-4">
          {options.map((opt, i) => {
            const isSelected = answers[index] === i;

            return (
              <div
                key={i}
                onClick={() => handleSelect(i)}
                className={`group flex items-center gap-4 p-4 rounded-xl cursor-pointer border transition-all duration-200
                ${
                  isSelected
                    ? "border-[#009aec] bg-[#009aec]/10 shadow-md"
                    : "border-gray-200 hover:border-[#009aec] hover:bg-[#009aec]/5"
                }`}
              >
                {/* Custom radio */}
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${
                    isSelected
                      ? "border-[#009aec]"
                      : "border-gray-300 group-hover:border-[#009aec]"
                  }`}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 bg-[#009aec] rounded-full"></div>
                  )}
                </div>

                <span className="text-gray-800 text-sm leading-relaxed">
                  {opt}
                </span>
              </div>
            );
          })}
        </div>

        {/* BUTTON */}
        <button
          onClick={nextQuestion}
          disabled={answers[index] === undefined}
          className="w-full mt-8 py-4 rounded-xl text-white font-semibold text-lg
          bg-gradient-to-r from-[#009aec] to-blue-500
          hover:shadow-xl hover:scale-[1.02]
          disabled:opacity-50 disabled:scale-100
          transition-all duration-300"
        >
          {index === questions.length - 1
            ? "Submit Quiz 🚀"
            : "Next Question →"}
        </button>

      </div>

    </div>
  );
}