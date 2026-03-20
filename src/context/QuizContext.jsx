import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);   // 🔥 MISSING BEFORE
  const [score, setScore] = useState(0);
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("");

  const resetQuiz = () => {
    setQuestions([]);
    setIndex(0);
    setAnswers([]);
    setScore(0);
    setTopic("");
    setLevel("");
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        index,
        setIndex,
        answers,        // 🔥 PROVIDE
        setAnswers,     // 🔥 PROVIDE
        score,
        setScore,
        topic,
        setTopic,
        level,
        setLevel,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => useContext(QuizContext);
