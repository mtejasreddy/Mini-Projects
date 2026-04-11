import { useState } from "react";
import Question from "./QuizComponent/Question";
import Result from "./QuizComponent/Result";

function App() {
  const quizData = [
    {
      question: "What does JSX stand for?",
      options: ["JavaScript XML", "Java Syntax", "JSON XML", "None"],
      answer: "JavaScript XML",
    },

    {
      question: "Which hook is used for state?",
      options: ["useEffect", "useState", "useContext", "useRef"],
      answer: "useState",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {showResult ? (
        <Result score={score} total={quizData.length} />
      ) : (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          onOptionClick={handleOptionClick}
          selectedOption={selectedOption}
        />
      )}
    </div>
  );
}
export default App;
