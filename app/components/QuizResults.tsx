import Image from "next/image";
import { personalities, personalityOrder } from "@/lib/quizData";
import { Results } from "@/lib/calculateResults";
import PersonalityBar from "./PersonalityBar";

interface QuizResultsProps {
  results: Results;
  onRetake: () => void;
}

export default function QuizResults({ results, onRetake }: QuizResultsProps) {
  const winner = personalities[results.winner];

  return (
    <div>
      {/* Winner hero */}
      <div className="text-center mb-8">
        <div className="inline-block bg-[#B07D4E] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          ☕ Your Coffee Personality
        </div>
        <h2
          className="text-3xl font-semibold text-[#3D2B1F] mb-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {winner.name}
        </h2>
        <p className="text-[#B07D4E] font-bold text-sm mb-1">{winner.coffee}</p>
        <p className="text-[#9E8070] text-sm italic">&ldquo;{winner.tagline}&rdquo;</p>
      </div>

      {/* Winner image */}
      <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-8">
        <Image
          src={winner.image}
          alt={winner.coffee}
          fill
          className="object-cover"
          sizes="(max-width: 600px) 100vw, 560px"
        />
      </div>

      {/* Full profile */}
      <div className="mb-8">
        <p className="text-xs font-bold tracking-widest uppercase text-[#9E8070] mb-3">
          Your Full Profile
        </p>
        <div className="space-y-3">
          {results.sortedKeys.map((key) => (
            <PersonalityBar
              key={key}
              personality={personalities[key]}
              percentage={results.percentages[key]}
              isWinner={key === results.winner}
            />
          ))}
        </div>
      </div>

      {/* All coffee images */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {personalityOrder.map((key) => {
          const p = personalities[key];
          const pct = results.percentages[key];
          if (pct === 0) return null;
          return (
            <div key={key} className="relative rounded-xl overflow-hidden">
              <div className="relative h-28">
                <Image
                  src={p.image}
                  alt={p.coffee}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="bg-[#FFFDF9] px-3 py-2">
                <p className="text-xs font-bold text-[#3D2B1F]">{p.name}</p>
                <p className="text-xs text-[#9E8070]">{pct}%</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Retake button */}
      <button
        onClick={onRetake}
        className="w-full py-4 rounded-2xl border-2 border-[#B07D4E] text-[#B07D4E] font-bold text-sm tracking-wide hover:bg-[#B07D4E] hover:text-white transition-all duration-200 cursor-pointer"
      >
        Take it again →
      </button>
    </div>
  );
}
