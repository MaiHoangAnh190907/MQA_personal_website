import type { MemoryItem, PullQuoteData, StoryBlock } from "@/content/types";

export const chapterMeta = {
  eyebrow: "Chap 2",
  title: "Be a Pioneer",
  accent: "yellow" as const,
  intro: [
    "Leadership, for me, didn't start with a title. It started at home, moved to school, and eventually asked me to think past both.",
  ],
};

export const atHome: StoryBlock = {
  id: "at-home",
  eyebrow: "01",
  heading: "At home",
  body: [
    "My first leadership role came with no election and no business card — just two younger siblings who copied everything I did, whether I wanted them to or not.",
    "I learned the basics there before I had language for them: that people notice what you do more than what you say, that patience is a skill and not just a personality trait, and that setting a good example is exhausting in a way that giving instructions never is.",
  ],
  images: [
    {
      src: "/images/pioneer/home-01.svg",
      alt: "Placeholder — with younger siblings at home",
      width: 1000,
      height: 1250,
      accent: "yellow",
    },
    {
      src: "/images/pioneer/home-02.svg",
      alt: "Placeholder — family moment",
      width: 1000,
      height: 750,
      accent: "cyan",
    },
    {
      src: "/images/pioneer/home-03.svg",
      alt: "Placeholder — teaching siblings something new",
      width: 1000,
      height: 750,
      accent: "pink",
    },
  ],
};

export const homeQuote: PullQuoteData = {
  quote: "In short, you set the spirit.",
};

export const atSchool: StoryBlock = {
  id: "at-school",
  eyebrow: "02",
  heading: "At school",
  body: [
    "I landed in what my school called a 'pioneering class' — the first cohort of a new program, which meant there was no tradition to inherit and no upperclassmen to copy. Everything we wanted to exist, we had to build ourselves.",
    "So we did. A few classmates and I founded the school's first Model United Nations club, mostly because we were tired of traveling to other schools' conferences and wanted one of our own to host. We had no faculty advisor who had run one before, no budget line for it, and no idea how many rules we were about to write from scratch.",
  ],
  images: [],
};

export const atSchoolContinued: StoryBlock = {
  id: "at-school-continued",
  body: [
    "That same instinct — build it if it doesn't exist — carried into a TEDx license, a business club, and eventually a seat advocating for a stronger student council structure, one with actual budget authority instead of just event-planning duties.",
    "None of it happened in a straight line. The TEDx application was rejected once before it was approved. The business club's first pitch competition had exactly one team present, including ours. Progress at school looked less like a highlight reel and more like a long series of second attempts.",
  ],
  images: [
    {
      src: "/images/pioneer/school-01.svg",
      alt: "Placeholder — founding the Model United Nations club, wide feature image",
      width: 1600,
      height: 1000,
    },
  ],
};

export const atSchoolClose: StoryBlock = {
  id: "at-school-close",
  body: [
    "What I'd tell the version of myself who started that pioneering class is that being first only feels lonely until the second cohort shows up. And eventually, they did — younger students who joined MUN not knowing it hadn't always existed, which is exactly the point.",
  ],
  images: [
    {
      src: "/images/pioneer/school-02.svg",
      alt: "Placeholder — TEDx organizing team",
      width: 900,
      height: 1100,
      accent: "yellow",
    },
  ],
};

export const memoryGalleryHeading = "A few memories along the way";

export const memoryGallery: MemoryItem[] = [
  {
    image: {
      src: "/images/pioneer/memory-01.svg",
      alt: "Placeholder — student council retreat",
      width: 900,
      height: 1100,
    },
    caption: "Student council retreat — the year we actually made a real budget spreadsheet 📊",
  },
  {
    image: {
      src: "/images/pioneer/memory-02.svg",
      alt: "Placeholder — packing boxes for a charity drive",
      width: 900,
      height: 700,
    },
    caption: "Packing boxes until midnight for the winter charity drive",
  },
  {
    image: {
      src: "/images/pioneer/memory-03.svg",
      alt: "Placeholder — thank-you gifts from juniors",
      width: 900,
      height: 900,
    },
    caption: "The handmade thank-you cards that made all the late nights worth it 🥹",
  },
  {
    image: {
      src: "/images/pioneer/memory-04.svg",
      alt: "Placeholder — backstage before TEDx",
      width: 900,
      height: 700,
    },
    caption: "Backstage, ninety seconds before walking out for TEDx",
  },
  {
    image: {
      src: "/images/pioneer/memory-05.svg",
      alt: "Placeholder — Halloween with the club",
      width: 900,
      height: 1100,
    },
    caption: "The one Halloween meeting that turned into a full costume contest 🎃",
  },
  {
    image: {
      src: "/images/pioneer/memory-06.svg",
      alt: "Placeholder — pizza night after an event",
      width: 900,
      height: 700,
    },
    caption: "Pizza night, the tradition that survived every leadership handover",
  },
  {
    image: {
      src: "/images/pioneer/memory-07.svg",
      alt: "Placeholder — handmade thank-you cards",
      width: 900,
      height: 900,
    },
    caption: "Every card we wrote back to first-year delegates ✍️",
  },
  {
    image: {
      src: "/images/pioneer/memory-08.svg",
      alt: "Placeholder — closing ceremony, final bow",
      width: 900,
      height: 700,
    },
    caption: "Closing ceremony — the last bow before handing it all over",
  },
];

export const society: StoryBlock = {
  id: "society",
  eyebrow: "03",
  heading: "Society",
  body: [
    "School leadership eventually ran into its own ceiling — every initiative, no matter how good, still only reached one building. So I started looking outward, toward the students who never had a pioneering class to join in the first place.",
    "That's where Sustentia came from: a student-led initiative around ESG — environmental, social, and governance education — built for underserved students who had never heard those three letters, let alone been invited to shape how their own school communities practiced them.",
    "We ran workshops on civic engagement, built environmental games that made sustainability tangible instead of abstract, and worked with student governments to design programs that would outlast any single organizer's graduation date.",
  ],
  images: [
    {
      src: "/images/pioneer/society-01.svg",
      alt: "Placeholder — Sustentia workshop, wide feature image",
      width: 1600,
      height: 1000,
      accent: "cyan",
    },
  ],
};

export const societyGalleryHeading = "Sustentia, in pictures";

export const societyGallery: MemoryItem[] = [
  {
    image: {
      src: "/images/pioneer/society-02.svg",
      alt: "Placeholder — handprint tree activity",
      width: 900,
      height: 700,
    },
    caption: "The handprint tree every workshop group added a leaf to 🌳",
  },
  {
    image: {
      src: "/images/pioneer/society-03.svg",
      alt: "Placeholder — environmental game with students",
      width: 900,
      height: 1100,
    },
    caption: "Turning ESG into a game students actually wanted to play",
  },
  {
    image: {
      src: "/images/pioneer/society-04.svg",
      alt: "Placeholder — student government session",
      width: 900,
      height: 700,
    },
    caption: "Sitting in on a student government session for the first time",
  },
  {
    image: {
      src: "/images/pioneer/society-05.svg",
      alt: "Placeholder — behind the scenes filming",
      width: 900,
      height: 900,
    },
    caption: "Behind the scenes filming the program's first recap video 🎥",
  },
  {
    image: {
      src: "/images/pioneer/society-06.svg",
      alt: "Placeholder — teaching underserved students",
      width: 900,
      height: 700,
    },
    caption: "A workshop that ran two hours over — nobody wanted to leave",
  },
];

export const closingStatement: PullQuoteData = {
  quote: "Being first only matters if it becomes easier for the next person to follow.",
};
