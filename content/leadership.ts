import type { StoryBlock } from "@/content/types";

export const chapterMeta = {
  eyebrow: "Chap 1",
  title: "Leadership",
  accent: "cyan" as const,
  intro: [] as string[],
};

export const vsa: StoryBlock = {
  id: "vsa",
  eyebrow: "01",
  heading: "VSA",
  body: [
    "The Vietnamese Student Association (VSA) is a student led organization dedicated to preserving, promoting, and celebrating Vietnamese cultural heritage. The club serves as a cultural bridge, connecting Vietnamese American students with their roots while fostering inclusivity and cross-cultural understanding across the broader school community.",
  ],
  images: [
    {
      src: "/images/leadership/vsa-01.jpg",
      alt: "Vietnamese Student Association",
      width: 2000,
      height: 1500,
      accent: "cyan",
    },
    {
      src: "/images/leadership/vsa-02.jpg",
      alt: "Vietnamese Student Association",
      width: 2000,
      height: 1500,
      accent: "pink",
    },
  ],
};

export const biologyPeerTutoring: StoryBlock = {
  id: "biology-peer-tutoring",
  eyebrow: "02",
  heading: "Biology Peer Tutoring Initiative",
  body: [
    "Biology Peer Leading is a student driven academic support role designed to help classmates master complex biological concepts, develop effective study strategies, and build confidence in science coursework. Rather than just giving answers, a peer leader acts as a facilitator, guiding students step by step through challenging material.",
  ],
  images: [
    {
      src: "/images/leadership/biology-01.jpg",
      alt: "Biology peer tutoring",
      width: 1333,
      height: 2000,
      accent: "yellow",
    },
  ],
};

export const templeTeacher: StoryBlock = {
  id: "minh-dang-quang",
  eyebrow: "03 — Trung tâm văn hoá Việt Thiền Viện Minh Đăng Quang",
  heading: "Event Organizer & Volunteer Vietnamese Teacher",
  body: [
    "Serve as a lead language educator and cultural mentor for youth at Minh Đăng Quang Temple, dedicated to preserving Vietnamese language, cultural heritage, and intergenerational communication for young Vietnamese Americans.",
  ],
  images: [
    {
      src: "/images/leadership/temple-01.jpg",
      alt: "Minh Đăng Quang Temple",
      width: 1500,
      height: 2000,
      accent: "orange",
    },
    {
      src: "/images/leadership/temple-02.jpg",
      alt: "Minh Đăng Quang Temple",
      width: 1500,
      height: 2000,
      accent: "blue",
    },
  ],
};
