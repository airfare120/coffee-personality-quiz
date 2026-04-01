export type PersonalityKey = 'athlete' | 'sweet' | 'relaxed' | 'deepworker' | 'trendy' | 'zen';

export interface Answer {
  emoji: string;
  text: string;
  personality: PersonalityKey;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface PersonalityResult {
  key: PersonalityKey;
  name: string;
  coffee: string;
  tagline: string;
  image: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Why are you in a coffee shop 80% of the time?",
    answers: [
      { emoji: "💻", text: "Head-down focus — I'm getting stuff done", personality: "deepworker" },
      { emoji: "👥", text: "Socializing with my people", personality: "relaxed" },
      { emoji: "⚡", text: "Fueling up — the workout's either coming or just happened", personality: "athlete" },
      { emoji: "📸", text: "The lighting is perfect and this place is very on-brand", personality: "trendy" },
      { emoji: "🌿", text: "I needed somewhere calm — I don't even drink coffee", personality: "zen" },
    ],
  },
  {
    id: 2,
    text: "Your ideal coffee order process:",
    answers: [
      { emoji: "⚡", text: "Depends on the day — pre-run is different from post-lift", personality: "athlete" },
      { emoji: "📋", text: "Already decided before I walked in", personality: "deepworker" },
      { emoji: "🌡️", text: "Based on feel — some days hot, some days cold", personality: "relaxed" },
      { emoji: "🤔", text: "Takes 3 minutes — I always ask about the seasonal specials", personality: "sweet" },
      { emoji: "✨", text: "Whatever's trending — I saw it on my feed this morning", personality: "trendy" },
      { emoji: "🌱", text: "I ask what's herbal and caffeine-free", personality: "zen" },
    ],
  },
  {
    id: 3,
    text: "It's Saturday morning. What's your ideal plan?",
    answers: [
      { emoji: "🏔️", text: "Early trail run before anyone else wakes up", personality: "athlete" },
      { emoji: "💻", text: "Grab my laptop and head to a coffee shop for a 3-hour block", personality: "deepworker" },
      { emoji: "🥐", text: "Slow brunch with friends, no agenda", personality: "relaxed" },
      { emoji: "🧁", text: "Farmers market, then treat myself to something indulgent", personality: "sweet" },
      { emoji: "📷", text: "Aesthetic café, good lighting, document the whole thing", personality: "trendy" },
      { emoji: "🧘", text: "Morning meditation, journaling, slow breakfast — no rush", personality: "zen" },
    ],
  },
  {
    id: 4,
    text: "Pick a Netflix habit:",
    answers: [
      { emoji: "📊", text: "Documentaries about peak performance or business", personality: "athlete" },
      { emoji: "🎬", text: "One show at a time, focused chunks — no binging", personality: "deepworker" },
      { emoji: "🛋️", text: "Whatever's on — I'm just happy to be horizontal", personality: "relaxed" },
      { emoji: "🍿", text: "Full series in a weekend, snacks mandatory", personality: "sweet" },
      { emoji: "💅", text: "Whatever everyone's talking about — I want to be in the conversation", personality: "trendy" },
      { emoji: "🌊", text: "Nature docs or something about mindfulness — maybe no screen at all", personality: "zen" },
    ],
  },
  {
    id: 5,
    text: "You have a free hour. You:",
    answers: [
      { emoji: "🏃", text: "Squeeze in a workout", personality: "athlete" },
      { emoji: "📝", text: "Knock out something on the to-do list", personality: "deepworker" },
      { emoji: "😴", text: "Do absolutely nothing and feel great about it", personality: "relaxed" },
      { emoji: "🛍️", text: "Treat yourself to something small", personality: "sweet" },
      { emoji: "📲", text: "Scroll, post, and see what's trending", personality: "trendy" },
      { emoji: "🌬️", text: "Breathe. Stretch. Maybe a walk. Zero agenda.", personality: "zen" },
    ],
  },
  {
    id: 6,
    text: "Your bag contains:",
    answers: [
      { emoji: "🧴", text: "Protein bar, water bottle, resistance band", personality: "athlete" },
      { emoji: "🎧", text: "Laptop, noise-canceling headphones, charger", personality: "deepworker" },
      { emoji: "📱", text: "Just my phone, keys, and a good attitude", personality: "relaxed" },
      { emoji: "💄", text: "Snacks, lip balm, at least one unnecessary purchase", personality: "sweet" },
      { emoji: "🎀", text: "Wireless earbuds, reusable cup, ring light for emergencies", personality: "trendy" },
      { emoji: "🫙", text: "Reusable water bottle, journal, a few crystals maybe", personality: "zen" },
    ],
  },
  {
    id: 7,
    text: "Pick a vacation:",
    answers: [
      { emoji: "🧗", text: "Adventure trip — hiking, surfing, something physical", personality: "athlete" },
      { emoji: "🏙️", text: "A city to explore solo at my own pace", personality: "deepworker" },
      { emoji: "🏖️", text: "Beach. Hammock. Done.", personality: "relaxed" },
      { emoji: "🍝", text: "Food tour somewhere delicious", personality: "sweet" },
      { emoji: "🗼", text: "A city with great cafés, photo ops, and things to post about", personality: "trendy" },
      { emoji: "🏔️", text: "A retreat somewhere quiet — mountains, hot springs, fully offline", personality: "zen" },
    ],
  },
];

export const personalities: Record<PersonalityKey, PersonalityResult> = {
  athlete: {
    key: "athlete",
    name: "The Athlete",
    coffee: "Double Espresso",
    tagline: "Fuel for whatever's next",
    image: "/espresso.jpg",
  },
  sweet: {
    key: "sweet",
    name: "Sweet Enthusiast",
    coffee: "Salted Caramel Mocha with Whip",
    tagline: "Go big or go home",
    image: "/mocha.jpg",
  },
  relaxed: {
    key: "relaxed",
    name: "The Relaxed & Happy",
    coffee: "Oat Milk Cortado",
    tagline: "Simple. Clean. Perfect.",
    image: "/cortado.jpg",
  },
  deepworker: {
    key: "deepworker",
    name: "The Deep Worker",
    coffee: "Cold Brew",
    tagline: "The coffee shop is your office",
    image: "/cold-brew.jpg",
  },
  trendy: {
    key: "trendy",
    name: "The Trendsetter",
    coffee: "Matcha Latte",
    tagline: "Aesthetic first, always",
    image: "/matcha.jpg",
  },
  zen: {
    key: "zen",
    name: "The Zen Temple",
    coffee: "Hibiscus Ginger Tea",
    tagline: "My body is a temple. My cup is proof.",
    image: "/hibiscus-tea.jpg",
  },
};

export const personalityOrder: PersonalityKey[] = ["athlete", "sweet", "relaxed", "deepworker", "trendy", "zen"];
