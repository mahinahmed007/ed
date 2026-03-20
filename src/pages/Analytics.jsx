import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

export default function Analytics() {
  const navigate = useNavigate();

  // 🔥 Dummy data (looks real)
  const performance = [
    { name: "Quiz 1", score: 60 },
    { name: "Quiz 2", score: 75 },
    { name: "Quiz 3", score: 82 },
    { name: "Quiz 4", score: 68 },
    { name: "Quiz 5", score: 90 },
  ];

  const topics = [
    { name: "Java", score: 80 },
    { name: "Python", score: 85 },
    { name: "Aptitude", score: 70 },
    { name: "English", score: 75 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] p-10">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <h2 className="text-3xl font-extrabold text-center">
          📈 Performance Analytics
        </h2>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Avg Score</p>
            <h3 className="text-2xl font-bold text-[#009aec]">78%</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Best Score</p>
            <h3 className="text-2xl font-bold text-green-600">92%</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Quizzes Taken</p>
            <h3 className="text-2xl font-bold text-purple-600">12</h3>
          </div>
        </div>

        {/* LINE CHART */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Score Trend</h3>

          <div className="h-[300px]">
            <ResponsiveContainer>
              <LineChart data={performance}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#009aec" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Topic Performance</h3>

          <div className="h-[300px]">
            <ResponsiveContainer>
              <BarChart data={topics}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#009aec" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BACK BUTTON */}
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