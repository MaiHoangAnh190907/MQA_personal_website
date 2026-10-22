import type { Metadata } from "next";
import { ChapterHero } from "@/components/editorial/ChapterHero";
import { StorySection } from "@/components/editorial/StorySection";
import { CONTAINER, PAD_X, SECTION_Y } from "@/lib/layout";
import { biologyPeerTutoring, chapterMeta, templeTeacher, vsa } from "@/content/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Leadership through the Vietnamese Student Association, biology peer tutoring, and teaching Vietnamese at Minh Đăng Quang Temple.",
};

export default function LeadershipPage() {
  return (
    <>
      <section className="pt-14 sm:pt-16 lg:pt-10">
        <div className={`${CONTAINER} ${PAD_X}`}>
          <ChapterHero
            eyebrow={chapterMeta.eyebrow}
            title={chapterMeta.title}
            intro={chapterMeta.intro}
            accent={chapterMeta.accent}
          />
        </div>
      </section>

      {/* VSA */}
      <section className={SECTION_Y}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <StorySection block={vsa} variant="stacked" />
        </div>
      </section>

      {/* BIOLOGY PEER TUTORING */}
      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <StorySection block={biologyPeerTutoring} variant="split" reverse />
        </div>
      </section>

      {/* MINH ĐĂNG QUANG TEMPLE */}
      <section className={SECTION_Y}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <StorySection block={templeTeacher} variant="stacked" />
        </div>
      </section>
    </>
  );
}
