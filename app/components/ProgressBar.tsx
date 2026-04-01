interface ProgressBarProps {
  step: number;
  total: number;
}

export default function ProgressBar({ step, total }: ProgressBarProps) {
  const percent = Math.round((step / total) * 100);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold tracking-widest uppercase text-[#B07D4E]">
          Question {step + 1} of {total}
        </span>
        <span className="text-xs text-[#9E8070]">{percent}%</span>
      </div>
      <div className="h-2 bg-[#EDE0D0] rounded-full overflow-hidden">
        <div
          className="h-2 rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(to right, #B07D4E, #F4A860)",
          }}
        />
      </div>
    </div>
  );
}
