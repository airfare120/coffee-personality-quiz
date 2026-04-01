"use client";

import { useState } from "react";
import { questions, PersonalityKey } from "@/lib/quizData";
import { calculateResults } from "@/lib/calculateResults";
import ProgressBar from "./ProgressBar";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";

export default function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<PersonalityKey[]>([]);

  const isComplete = answers.length === questions.length;

  function handleAnswer(personality: PersonalityKey) {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleRetake() {
    setCurrentIndex(0);
    setAnswers([]);
  }

  const results = isComplete ? calculateResults(answers) : null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-[#FFFDF9] rounded-3xl shadow-xl p-8 w-full max-w-lg">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block bg-[#B07D4E] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            ☕ Coffee Personality Quiz
          </div>
          <h1
            className="text-2xl font-semibold text-[#3D2B1F] leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What&apos;s Your Coffee Personality?
          </h1>
          <p className="text-[#9E8070] text-sm mt-1">
            Answer a few questions to find your perfect cup
          </p>
        </div>

        {!isComplete && (
          <ProgressBar step={currentIndex} total={questions.length} />
        )}

        {!isComplete ? (
          <QuizQuestion
            question={questions[currentIndex]}
            onAnswer={handleAnswer}
          />
        ) : (
          results && <QuizResults results={results} onRetake={handleRetake} />
        )}
      </div>
    </div>
  );
}
