import type { MediaMomentData, StoryBlock } from "@/content/types";

export const chapterMeta = {
  eyebrow: "My little studio",
  title: "My Little Studio",
  accent: "orange" as const,
  intro: [
    "Away from stages and spreadsheets, this is the corner of my life that stays quiet on purpose — singing, piano, and a folk tradition my mother handed down to me.",
  ],
};

export const singing: StoryBlock = {
  id: "singing",
  eyebrow: "01",
  heading: "Singing",
  body: [
    "I was singing long before I was speaking in public on purpose — off-key renditions at family gatherings, the kind of performances that are only charming because you're seven years old and unbothered by pitch.",
    "I stopped for a while, the way most kids quietly drop a hobby once school gets serious. What brought it back wasn't a stage — it was my mother, and the Tày folk songs she grew up with. Hát then, sung over the resonant plucking of a đàn tính, is nothing like the pop songs I used to butcher as a kid. It's slower, older, and it asks you to mean every note instead of just hitting it.",
    "Taking lessons again as a teenager felt strange at first — relearning something I thought I already knew how to do. But singing hát then with my mother, even badly, taught me more about heritage than any classroom ever did. It's one of the only times I stop performing and just listen.",
  ],
  images: [
    {
      src: "/images/studio/singing-01.svg",
      alt: "Placeholder — childhood performance on stage",
      width: 1000,
      height: 1250,
      accent: "orange",
    },
  ],
};

export const singingMoment: MediaMomentData = {
  type: "image",
  src: "/images/studio/singing-02.svg",
  caption: "Practicing hát then with đàn tính accompaniment",
  date: "Ongoing",
  description:
    "A folk tradition passed down from my mother — slower and older than anything I grew up singing, and still the thing that grounds me most.",
  width: 1000,
  height: 750,
};

export const piano: StoryBlock = {
  id: "piano",
  eyebrow: "02",
  heading: "Piano",
  body: [
    "I started piano the way a lot of kids do — because my parents signed me up, not because I asked for it. For years, practice was a negotiation: fifteen minutes today in exchange for screen time tomorrow, scales played resentfully with one eye on the clock.",
    "Then COVID happened, lessons stopped, and so did I. Twelve years of muscle memory sat untouched for the better part of a year, which is its own kind of quiet loss.",
    "What surprised me was coming back to it voluntarily — no parent signing me up this time, no clock to negotiate with. Piano became something closer to a release valve: the one hour where nothing needs to be persuasive, diplomatic, or optimized. Just a scale, played slowly, for no one but myself.",
  ],
  images: [
    {
      src: "/images/studio/piano-01.svg",
      alt: "Placeholder — practicing piano at home",
      width: 1000,
      height: 1250,
      accent: "blue",
    },
    {
      src: "/images/studio/piano-02.svg",
      alt: "Placeholder — recital moment",
      width: 1000,
      height: 750,
      accent: "cyan",
    },
  ],
};
