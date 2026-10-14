import type { ImageAsset, StatItem, StoryBlock } from "@/content/types";

export const chapterMeta = {
  eyebrow: "Chap 1",
  title: "Speak to Empower",
  accent: "cyan" as const,
  intro: [
    "This is the chapter about the microphone — how holding one by accident turned into holding one on purpose, and eventually, into handing it to someone else.",
  ],
};

export const heroCollage = {
  background: {
    src: "/images/speak/passing-the-wand-01.svg",
    alt: "Placeholder — wide shot from a TEDx-style stage",
    width: 1600,
    height: 1000,
  } satisfies ImageAsset,
  subjects: [
    {
      image: {
        src: "/images/speak/hero-cutout-cyan.svg",
        alt: "Placeholder — cutout portrait, cyan outline, mid-speech",
        width: 700,
        height: 950,
        accent: "cyan",
      } satisfies ImageAsset,
      accent: "cyan" as const,
    },
    {
      image: {
        src: "/images/speak/hero-cutout-pink.svg",
        alt: "Placeholder — cutout portrait, pink outline, holding a wand",
        width: 700,
        height: 950,
        accent: "pink",
      } satisfies ImageAsset,
      accent: "pink" as const,
    },
  ],
};

export const chosenOne: StoryBlock = {
  id: "the-chosen-one",
  eyebrow: "Part one",
  heading: "The Chosen One",
  body: [
    "I got my first real microphone by accident. A teacher needed someone to read the morning announcements and pointed at the closest raised hand — mine, mostly because I hadn't been paying attention to what I was volunteering for.",
    "But something about hearing my own voice fill a hallway felt like being chosen for something bigger than a five-minute reading slot. I started looking for reasons to hold that microphone again: school assemblies, class presentations, the emcee role nobody else wanted.",
    "Then I changed schools, and the microphone disappeared along with the reputation that came with it. I was the new kid with no assemblies to host and no hallway that knew my voice. So for the first time, I had to choose myself — to raise my hand again in a room where nobody was going to point at me first.",
  ],
  images: [
    {
      src: "/images/speak/chosen-one-01.svg",
      alt: "Placeholder — first time holding a microphone, childhood",
      width: 1000,
      height: 1250,
      accent: "pink",
    },
    {
      src: "/images/speak/chosen-one-02.svg",
      alt: "Placeholder — school assembly performance",
      width: 900,
      height: 700,
      accent: "cyan",
    },
    {
      src: "/images/speak/chosen-one-03.svg",
      alt: "Placeholder — portrait after moving schools",
      width: 900,
      height: 1100,
      accent: "yellow",
    },
  ],
};

export const choosingMyself: StoryBlock = {
  id: "choosing-myself",
  eyebrow: "Part two",
  heading: "Choosing myself",
  body: [
    "Without a hallway microphone to fall back on, I went looking for speaking opportunities on purpose for the first time — debate club, because it was the loudest room in the building, and Model United Nations, because it promised an entire conference of people who also liked the sound of their own arguments.",
    "Debate made me competitive in a way I'm not always proud of. I learned to win arguments long before I learned to actually persuade anyone, and for a while those felt like the same skill. MUN was what finally separated them — a room where winning a debate and winning the room were two very different scoreboards.",
    "Diplomacy, it turned out, was less about being the loudest delegate and more about being the one other delegates wanted in the room for the next committee session too. That's the version of 'choosing myself' I actually kept: not the loudest voice, but the one people trusted to hold the floor fairly.",
  ],
  images: [
    {
      src: "/images/speak/choosing-myself-01.svg",
      alt: "Placeholder — debate competition round",
      width: 1100,
      height: 800,
      accent: "blue",
    },
    {
      src: "/images/speak/choosing-myself-02.svg",
      alt: "Placeholder — Model United Nations conference",
      width: 800,
      height: 1000,
      accent: "cyan",
    },
  ],
};

export const passingTheWand: StoryBlock = {
  id: "passing-the-wand",
  eyebrow: "Part three",
  heading: "Passing the wand",
  body: [
    "TEDx forced me to ask a question debate never had: what happens after the applause? A debate round ends in a scoreboard. A TEDx talk is supposed to end in someone else's head, staying there.",
    "Preparing that talk was the first time I thought seriously about the difference between speaking to win and speaking to be understood. I rewrote the closing line eleven times, mostly because every earlier version was still trying to sound impressive instead of trying to be honest.",
    "A charity trip not long after gave that idea a shape I could actually hold. Handing a microphone to a kid who had never used one, and watching him realize thirty strangers were actually listening — that was the moment 'voice' stopped being about my stage time, and started being about who else could stand on it.",
  ],
  images: [
    {
      src: "/images/speak/passing-the-wand-02.svg",
      alt: "Placeholder — charity trip, sharing the microphone",
      width: 900,
      height: 1100,
      accent: "orange",
    },
  ],
};

export const nextgenVoice: StoryBlock = {
  id: "nextgen-voice",
  eyebrow: "Public speaking bootcamp",
  heading: "NextGen Voice",
  body: [
    "So I built the program I wish I'd had when I was the new kid with no microphone: a public speaking bootcamp for younger students, covering everything from debate fundamentals to on-camera reporting to editorial writing.",
    "Over two six-week runs, I watched a version of my own arc happen faster and more visibly than mine ever did — students who wouldn't volunteer to read a single line in week one, presenting their own video reports by week six.",
    "The reports and short documentaries the students made are the part I'm proudest of. Not because they were polished — most weren't — but because every one of them was proof that a microphone handed to the right person at the right time does something a trophy never could.",
  ],
  images: [
    {
      src: "/images/speak/nextgen-01.svg",
      alt: "Placeholder — bootcamp students presenting",
      width: 1000,
      height: 750,
      accent: "cyan",
    },
    {
      src: "/images/speak/nextgen-02.svg",
      alt: "Placeholder — students filming a video report",
      width: 1000,
      height: 750,
      accent: "yellow",
    },
  ],
};

export const nextgenStats: StatItem[] = [
  { value: "60+", label: "students mentored" },
  { value: "2", label: "six-week programs" },
  { value: "12", label: "student-made reports" },
];
