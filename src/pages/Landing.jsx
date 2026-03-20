import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] text-gray-800 overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#009aec]/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-400/20 blur-[140px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
         <Link
  to="/"
  style={{ display: "flex", alignItems: "center" }}
>
  <img
    src={logo}
    alt="EduQuiz"
    style={{
      height: "48px",
      width: "auto",
      objectFit: "contain",
      transition: "transform 0.25s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
    }}
  />
</Link>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-2.5 bg-gradient-to-r from-[#009aec] to-blue-500 text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-10 pt-32 pb-36 text-center">

        <span className="inline-block px-5 py-1.5 rounded-full text-sm bg-[#009aec]/10 text-[#009aec] font-medium mb-6 backdrop-blur">
          🚀 AI Powered Quiz Platform
        </span>

        <h1 className="text-6xl font-extrabold leading-tight max-w-4xl mx-auto tracking-tight">
          Master Programming Skills
          <br />
          with{" "}
          <span className="bg-gradient-to-r from-[#009aec] to-blue-500 bg-clip-text text-transparent">
            AI Generated Quizzes
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Practice Java, Python, React, SQL and more with real-time AI quizzes,
          adaptive difficulty, and deep performance insights.
        </p>

        <div className="flex justify-center gap-6 mt-12 flex-wrap">

          <button
            onClick={() => navigate("/dashboard")}
            className="px-10 py-4 bg-gradient-to-r from-[#009aec] to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Learning →
          </button>

          <button className="px-10 py-4 rounded-xl font-semibold border border-gray-200 bg-white/60 backdrop-blur hover:bg-white shadow-sm hover:shadow-md transition">
            Explore Platform
          </button>

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-10 pb-32">

        {[
          {
            icon: "💡",
            title: "AI Generated Questions",
            desc: "Generate quizzes instantly based on programming topics using AI.",
          },
          {
            icon: "🎯",
            title: "Smart Difficulty Levels",
            desc: "Choose Easy, Medium, or Hard levels tailored to your skills.",
          },
          {
            icon: "📊",
            title: "Performance Analytics",
            desc: "Track your progress and improve with real-time insights.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/40"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#009aec]/10 to-blue-200 text-[#009aec] text-2xl mb-5 group-hover:scale-110 transition">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg mb-2 group-hover:text-[#009aec] transition">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </section>

      {/* STATS */}
      <section className="relative py-20">

        <div className="max-w-6xl mx-auto px-10 grid md:grid-cols-3 gap-10 text-center">

          {[
            { value: "10K+", label: "Quizzes Generated" },
            { value: "5K+", label: "Active Learners" },
            { value: "50+", label: "Programming Topics" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#009aec] to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </h2>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}