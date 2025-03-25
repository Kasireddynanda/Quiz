import { Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";

const initialQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Hemingway", "Tolkien", "Austen"],
    answer: "Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    answer: "H2O",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"],
    answer: "Da Vinci",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Dollar", "Euro"],
    answer: "Yen",
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    answer: "300,000 km/s",
  },
];

export default function QuizPage({ setStep, setScore, score }) {
  const [quizQuestions, setQuizQuestions] = useState(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (!quizQuestions.length) return <Card><h2>No questions available.</h2></Card>;

  const handleAnswer = (selected) => {
    if (selected === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === quizQuestions.length - 1) {
      setStep("leaderboard");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <Card style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        {quizQuestions[currentQuestionIndex].question}
      </Typography>
      {quizQuestions[currentQuestionIndex].options.map((option) => (
        <Button
          key={option}
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </Button>
      ))}
    </Card>
  );
}
