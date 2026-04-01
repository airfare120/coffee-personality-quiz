import { Question, PersonalityKey } from "@/lib/quizData";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (personality: PersonalityKey) => void;
}

export default function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  return (
    <div>
      <p
        className="text-xl font-bold text-[#3D2B1F] mb-6 leading-snug"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {question.text}
      </p>
      <div className="space-y-3">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer.personality)}
            className="w-full text-left bg-[#F5EFE6] border-2 border-transparent rounded-2xl px-5 py-4 flex items-center gap-3 font-bold text-[#5C3D2E] text-sm transition-all duration-200 hover:border-[#B07D4E] hover:bg-[#FDF6EE] hover:translate-x-1 cursor-pointer"
          >
            <span className="text-xl flex-shrink-0">{answer.emoji}</span>
            <span>{answer.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
