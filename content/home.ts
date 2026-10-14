import type { ChapterPreview, ImageAsset, PullQuoteData, StoryBlock } from "@/content/types";

export const hero = {
  eyebrow: "WELCOME",
  titleLines: ["WELCOME", "TO MY BLOG"],
  subtitle:
    "A running journal of the stages I've stood on, the rooms I've tried to change, and the quieter corners where I go to recharge.",
  background: {
    src: "/images/home/hero-bg.jpg",
    alt: "Smiling in front of the projector screen, pointing to the VSA's Second Meeting slides",
    width: 2560,
    height: 1920,
  } satisfies ImageAsset,
  subject: {
    src: "/images/home/hero-subject.svg",
    alt: "Placeholder — cutout portrait, subject speaking into a microphone",
    width: 900,
    height: 1200,
    accent: "pink",
  } satisfies ImageAsset,
};

export const quote: PullQuoteData = {
  quote:
    "I used to think a microphone was just a tool for being heard. Now I know it's an invitation — to listen first, and speak in a way that makes room for someone else's voice too.",
};

export const aboutMe: StoryBlock = {
  id: "about-me",
  eyebrow: "About me",
  heading: "People usually associate me with a mic.",
  body: [
    "It started long before I understood what stage fright even was — singing off-key at family gatherings, narrating school announcements nobody asked me to narrate, raising my hand a little too eagerly in class discussions.",
    "Somewhere between primary school assemblies and my first real debate round, that instinct turned into something more deliberate. I started chasing microphones on purpose: student council speeches, Model United Nations conferences, and eventually a TEDx stage that still doesn't quite feel real when I think back on it.",
    "This site is my attempt to make sense of that thread — how a habit of raising my hand slowly became a way of thinking about leadership, technology, and the quieter art of listening.",
  ],
  images: [
    {
      src: "/images/home/about-me.svg",
      alt: "Placeholder — portrait with microphone",
      width: 1000,
      height: 1250,
      accent: "cyan",
    },
  ],
};

export const chapterPreviews: ChapterPreview[] = [
  {
    id: "speak-to-empower",
    eyebrow: "Chap 1",
    title: "Speak to Empower",
    summary:
      "How a childhood love of the microphone turned into debate rounds, MUN conferences, a TEDx talk, and eventually, a bootcamp built to hand the mic to someone else.",
    image: {
      src: "/images/home/chapter-1-preview.svg",
      alt: "Placeholder — public speaking moment",
      width: 1200,
      height: 900,
      accent: "cyan",
    },
    ctaLabel: "Explore more",
    href: "/speak-to-empower",
    accent: "cyan",
  },
  {
    id: "be-a-pioneer",
    eyebrow: "Chap 2",
    title: "Be a Pioneer",
    summary:
      "Leadership that started with two younger siblings at home, grew into founding new clubs at school, and eventually reached toward a student-led social initiative.",
    image: {
      src: "/images/home/chapter-2-preview.svg",
      alt: "Placeholder — leadership and student council moment",
      width: 1200,
      height: 900,
      accent: "yellow",
    },
    ctaLabel: "Explore more",
    href: "/be-a-pioneer",
    accent: "yellow",
  },
  {
    id: "ai-for-good",
    eyebrow: "Chap 3",
    title: "AI for Good",
    summary:
      "An internship, a TEDx talk, and a research paper later, I'm still asking the same question: how do we design AI that makes people more curious, not less?",
    image: {
      src: "/images/home/chapter-3-preview.svg",
      alt: "Placeholder — AI and research work",
      width: 1200,
      height: 900,
      accent: "blue",
    },
    ctaLabel: "Click here",
    href: "/ai-for-good",
    accent: "blue",
  },
];

export const studioPreview: ChapterPreview = {
  id: "my-little-corner",
  eyebrow: "My little studio",
  title: "Intro my little studio",
  summary:
    "Underneath the speeches and the spreadsheets is a much quieter hobby — singing, piano, and a folk tradition passed down from my mother.",
  image: {
    src: "/images/home/studio-preview.svg",
    alt: "Placeholder — singing or piano moment",
    width: 1200,
    height: 900,
    accent: "orange",
  },
  ctaLabel: "Click here",
  href: "/my-little-corner",
  accent: "orange",
};
