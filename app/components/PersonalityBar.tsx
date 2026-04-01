import { PersonalityResult } from "@/lib/quizData";

interface PersonalityBarProps {
  personality: PersonalityResult;
  percentage: number;
  isWinner: boolean;
}

export default function PersonalityBar({ personality, percentage, isWinner }: PersonalityBarProps) {
  return (
    <div className={`rounded-2xl p-4 ${isWinner ? "bg-[#FDF6EE] border-2 border-[#B07D4E]" : "bg-[#F5EFE6]"}`}>
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="font-bold text-[#3D2B1F] text-sm">{personality.name}</span>
          <span className="text-[#9E8070] text-xs ml-2">→ {personality.coffee}</span>
        </div>
        <span className="font-bold text-[#B07D4E] text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-[#EDE0D0] rounded-full overflow-hidden">
        <div
          className="h-2 rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${percentage}%`,
            background: isWinner
              ? "linear-gradient(to right, #B07D4E, #F4A860)"
              : "linear-gradient(to right, #C9A07A, #D4B896)",
          }}
        />
      </div>
    </div>
  );
}
