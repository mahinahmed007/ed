import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Difficulty from "./pages/Difficulty";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Leaderboard from "./pages/Leaderboard";
import Analytics from "./pages/Analytics";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    <Route path="/analytics" element={<Analytics />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/difficulty/:topic" element={<Difficulty />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
