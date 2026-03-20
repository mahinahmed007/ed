import { useQuiz } from "../context/QuizContext";

export default function Review() {
  const { questions, answers } = useQuiz();

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Answer Review</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">
              Q{i + 1}. {q.question}
            </h3>

            <ul className="space-y-1">
              {q.options.map((opt, j) => {
                let color = "";
                if (j === q.correctIndex) color = "text-green-600";
                else if (j === answers[i]) color = "text-red-600";

                return (
                  <li key={j} className={color}>{opt}</li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
