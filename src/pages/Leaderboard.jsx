import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
  const navigate = useNavigate();

  // 🔥 Dummy personal data (later connect DB)
  const data = [
    { topic: "Java", score: 9, total: 10 },
    { topic: "Python", score: 8, total: 10 },
    { topic: "Aptitude", score: 7, total: 10 },
    { topic: "English", score: 6, total: 10 },
  ];

  const best = data.reduce((a, b) =>
    a.score / a.total > b.score / b.total ? a : b
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] p-10">

      <div className="max-w-4xl mx-auto space-y-10">

        {/* HEADER */}
        <h2 className="text-3xl font-extrabold text-center">
          📊 Your Performance
        </h2>

        {/* BEST SCORE CARD */}
        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <p className="text-gray-500">Best Performance</p>

          <h3 className="text-3xl font-bold text-[#009aec] mt-2">
            {Math.round((best.score / best.total) * 100)}%
          </h3>

          <p className="text-gray-600 mt-1">
            {best.topic}
          </p>
        </div>

        {/* ALL RESULTS */}
        <div className="bg-white p-6 rounded-2xl shadow">

          <h3 className="font-semibold mb-4">
            Your Recent Results
          </h3>

          <div className="space-y-4">

            {data.map((item, i) => {
              const percent = Math.round((item.score / item.total) * 100);

              return (
                <div
                  key={i}
                  className="p-4 border rounded-xl hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">{item.topic}</p>
                    <p className="text-sm text-gray-500">
                      {item.score}/{item.total}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#009aec] rounded-full"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full py-3 bg-[#009aec] text-white rounded-xl"
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  );
}