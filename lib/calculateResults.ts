import { PersonalityKey, personalityOrder } from "./quizData";

export interface Results {
  winner: PersonalityKey;
  percentages: Record<PersonalityKey, number>;
  sortedKeys: PersonalityKey[];
}

export function calculateResults(answers: PersonalityKey[]): Results {
  const counts: Record<PersonalityKey, number> = {
    athlete: 0,
    sweet: 0,
    relaxed: 0,
    deepworker: 0,
  };

  for (const a of answers) {
    counts[a]++;
  }

  const total = answers.length;
  const percentages = {} as Record<PersonalityKey, number>;
  for (const key of personalityOrder) {
    percentages[key] = Math.round((counts[key] / total) * 100);
  }

  const sortedKeys = [...personalityOrder].sort(
    (a, b) => percentages[b] - percentages[a]
  ) as PersonalityKey[];

  const winner = sortedKeys[0];

  return { winner, percentages, sortedKeys };
}
