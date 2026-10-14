import type { AchievementItem, ImageAsset, StoryBlock } from "@/content/types";

export const chapterMeta = {
  eyebrow: "Chap 3",
  title: "AI for Good",
  accent: "blue" as const,
  intro: [
    "Somewhere between a debate club and a research paper, I got interested in a much narrower question: does AI make students more curious, or does it just make it easier to stop being curious at all?",
  ],
};

export const heroImage: ImageAsset = {
  src: "/images/ai/hero.svg",
  alt: "Placeholder — research or classroom setting",
  width: 1400,
  height: 820,
  accent: "blue",
};

export const internship: StoryBlock = {
  id: "internship-fpt",
  eyebrow: "Internship",
  heading: "Internship at FPT",
  body: [
    "I spent a summer at FPT Smart Cloud and FPT Education working on AI-driven flipped classroom tools — systems designed to generate practice material, summaries, and feedback for students before and after class.",
    "The unglamorous part of that internship was also the most important: watching how easily 'AI-generated help' turns into 'AI does the assignment for me' if the tool isn't designed carefully. A perfectly explained answer, handed over too early, teaches a student that asking is faster than thinking.",
    "So a lot of my work became less about generation and more about restraint — designing prompts and interfaces that nudged students toward their own reasoning first, and treated the AI's explanation as a check, not a shortcut.",
  ],
  images: [
    {
      src: "/images/ai/fpt-01.svg",
      alt: "Placeholder — flipped classroom session",
      width: 1100,
      height: 800,
      accent: "cyan",
    },
  ],
};

export const tedx: StoryBlock = {
  id: "greenwich-tedx",
  eyebrow: "TEDx talk",
  heading: "Greenwich University's TEDx",
  body: [
    "\"Boon or Bane\" was the title I gave my talk, mostly because I didn't want to land on either answer too quickly. The honest position, after a summer of watching students use AI both brilliantly and lazily, is that it's a catalyst — it amplifies whatever learning habits were already there.",
    "For a curious student, AI becomes a benchmark: something to argue with, push past, and use to check their own thinking. For a disengaged one, it becomes a replacement for thinking altogether. The tool doesn't decide which — the surrounding design does, and so does the student's own relationship with lifelong learning.",
  ],
  images: [
    {
      src: "/images/ai/tedx-01.svg",
      alt: "Placeholder — Greenwich University TEDx talk",
      width: 1100,
      height: 800,
      accent: "orange",
    },
  ],
};

export const researchLink = {
  label: "My Research —",
  title: "Recognizing Students' Emotions in Vietnamese Social Media Platforms",
  href: "https://example.com/research/recognizing-students-emotions-vietnamese-social-media",
};

export const achievements: AchievementItem[] = [
  {
    title: "Horizon Academic Essay Prize",
    category: "Award",
    description: "Honorable Mention",
    year: "2024",
  },
  {
    title: "Recognizing Students' Emotions in Vietnamese Social Media Platforms",
    category: "Research publication",
    year: "2024",
    href: "https://example.com/research/recognizing-students-emotions-vietnamese-social-media",
  },
  {
    title: "The Relationship Between Students' Motivation to Use AI in Learning and Their Learning Autonomy",
    category: "Research",
    year: "2025",
  },
  {
    title: "\"Boon or Bane\" — AI as a Catalyst for Lifelong Learning",
    category: "TEDx talk",
    description: "Greenwich University",
    year: "2024",
  },
];
