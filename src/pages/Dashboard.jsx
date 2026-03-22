import { useNavigate,Link} from "react-router-dom";
import logo from "../assets/logo.png";


const categories = [
  {
    title: "💻 Programming",
    topics: [
      { name: "Java", desc: "OOP | JVM | Collections", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", desc: "AI | Data | OOP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", desc: "STL | Memory | DSA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", desc: "DOM | ES6 | Async", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", desc: "Hooks | State | UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", desc: "Backend | APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "SQL", desc: "Queries | Joins | DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "HTML", desc: "Structure | SEO", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", desc: "Flexbox | Grid | UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "DSA", desc: "Arrays | Trees | Graphs", logo: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
    ],
  },
  {
    title: "🧠 Aptitude & Reasoning",
    topics: [
      { name: "Quantitative Aptitude", desc: "Speed | Time | Profit", logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
      { name: "Logical Reasoning", desc: "Puzzles | Patterns", logo: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png" },
      { name: "Data Interpretation", desc: "Graphs | Charts", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png" },
      { name: "Number Series", desc: "Sequences | Logic", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
    ],
  },
  {
    title: "🗣️ English & Communication",
    topics: [
      { name: "Grammar", desc: "Tenses | Rules", logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" },
      { name: "Vocabulary", desc: "Words | Synonyms", logo: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" },
      { name: "Reading Comprehension", desc: "Passages | Meaning", logo: "https://cdn-icons-png.flaticon.com/512/1048/1048941.png" },
      { name: "Verbal Ability", desc: "Sentence | Usage", logo: "https://cdn-icons-png.flaticon.com/512/3602/3602123.png" },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff]">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">
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

          <div className="flex gap-6 items-center">
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-[#009aec] transition font-medium"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/leaderboard")}
              className="px-4 py-2 bg-[#009aec] text-white rounded-lg"
            >
              🏆 Leaderboard
            </button>
            <button
              onClick={() => navigate("/analytics")}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              📈 Analytics
            </button>

          
          </div>

        </div>
      </nav>

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-10 pt-14">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Welcome Back 👋
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Continue mastering coding, aptitude & communication skills
        </p>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-10 mt-10 grid md:grid-cols-3 gap-8">
        {[
          { label: "Questions ", value: "100+" },
          { label: "Accuracy", value: "82%" },
          { label: "Topics ", value: "20+" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-xl p-7 rounded-2xl shadow-md hover:shadow-xl transition border border-white/40"
          >
            <p className="text-gray-500 text-sm">{stat.label}</p>
            <h3 className="text-3xl font-extrabold mt-2 text-[#009aec]">
              {stat.value}
            </h3>
          </div>
        ))}
      </section>

      {/* CATEGORY SECTIONS */}
      {categories.map((cat) => (
        <section key={cat.title} className="max-w-7xl mx-auto px-10 mt-16">

          {/* Section Header */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight">
              {cat.title}
            </h3>
            <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              {cat.topics.length} Topics
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

            {cat.topics.map((t) => (
              <div
                key={t.name}
                onClick={() => navigate(`/difficulty/${t.name}`)}
                className="group relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-white/50"
              >
                {/* Subtle Gradient Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#009aec]/10 to-blue-200/20 transition"></div>

                <div className="relative z-10">
                  <img
                    src={t.logo}
                    alt={t.name}
                    className="w-12 mb-4 group-hover:scale-110 transition"
                  />

                  <h4 className="font-semibold text-sm group-hover:text-[#009aec] transition">
                    {t.name}
                  </h4>

                  <p className="text-gray-500 text-xs mt-1">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </section>
      ))}

      {/* FOOTER */}
      <footer className="mt-20 border-t bg-white/60 backdrop-blur py-6 text-center text-gray-500">
        © 2026 Ace Path Quiz AI — Premium Learning Experience 🚀
      </footer>

    </div>
  );
}
