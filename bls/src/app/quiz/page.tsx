'use client'

import { useState } from "react";
import QuestionCard from "@/components/QuestionCard";
import { generateCertificate } from "@/utils/generateCertificate";

const questions = [
  {
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correct = questions.reduce(
      (acc, q, idx) => acc + (q.correctAnswer === answers[idx] ? 1 : 0),
      0
    );
    setScore(correct);
    setSubmitted(true);
    if (correct >= 1) generateCertificate(correct.toString()); 
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">BLS Quiz</h1>

      {questions.map((q, idx) => (
        <QuestionCard
          key={idx}
          index={idx}
          videoUrl={q.videoUrl}
          question={q.question}
          options={q.options}
          selected={answers[idx]}
          onAnswer={(ans) => handleAnswer(idx, ans)}
        />
      ))}

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded"
        disabled={submitted}
      >
        Submit
      </button>

      {submitted && (
        <p className="mt-4 text-lg font-semibold">
          Your Score: {score}/10{" "}
          {score >= 8 ? "(You passed! 🎉 Certificate downloaded.)" : "(Try again!)"}
        </p>
      )}
    </div>
  );
}
