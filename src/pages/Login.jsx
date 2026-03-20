import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    // Direct login (like JSP session)
    localStorage.setItem("user", email);

    // Go to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">

      <form
        onSubmit={login}
        className="bg-white p-10 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-6"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded
                     hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>

    </div>
  );
}
