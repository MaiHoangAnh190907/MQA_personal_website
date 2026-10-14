export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  accent?: "cyan" | "pink" | "yellow" | "blue" | "orange";
}

export interface StoryBlock {
  id: string;
  eyebrow?: string;
  heading?: string;
  body: string[];
  images?: ImageAsset[];
}

export interface PullQuoteData {
  quote: string;
  attribution?: string;
}

export interface ChapterPreview {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: ImageAsset;
  ctaLabel: string;
  href: string;
  accent: "cyan" | "pink" | "yellow" | "blue" | "orange";
}

export interface MemoryItem {
  image: ImageAsset;
  caption: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  description?: string;
  year?: string;
  href?: string;
}

export interface MediaMomentData {
  type: "image" | "video";
  src: string;
  poster?: string;
  caption: string;
  date?: string;
  description?: string;
  width: number;
  height: number;
}
