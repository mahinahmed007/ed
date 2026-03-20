import { useNavigate } from "react-router-dom";

export default function Navbar({ user }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1
        className="text-xl font-bold text-indigo-600 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        AI Quiz System
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">
          👤 {user || "Guest"}
        </span>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
