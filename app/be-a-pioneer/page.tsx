import type { Metadata } from "next";
import { ChapterHero } from "@/components/editorial/ChapterHero";
import { StorySection, StoryText } from "@/components/editorial/StorySection";
import { ImageTriptych } from "@/components/editorial/ImageTriptych";
import { MemoryGallery } from "@/components/editorial/MemoryGallery";
import { PullQuote } from "@/components/editorial/PullQuote";
import { Reveal } from "@/components/ui/Reveal";
import { CONTAINER, PAD_X, READING, SECTION_Y } from "@/lib/layout";
import {
  atHome,
  atSchool,
  atSchoolClose,
  atSchoolContinued,
  chapterMeta,
  closingStatement,
  homeQuote,
  memoryGallery,
  memoryGalleryHeading,
  society,
  societyGallery,
  societyGalleryHeading,
} from "@/content/be-a-pioneer";

export const metadata: Metadata = {
  title: "Be a Pioneer",
  description:
    "Leadership that began at home, grew at school by founding new clubs, and reached toward a student-led social initiative.",
};

export default function BeAPioneerPage() {
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

      {/* AT HOME */}
      <section className={SECTION_Y}>
        <div className={`${CONTAINER} ${PAD_X} space-y-12`}>
          <div className={READING}>
            <Reveal>
              <StoryText block={atHome} />
            </Reveal>
          </div>
          <ImageTriptych images={[atHome.images![0], atHome.images![1], atHome.images![2]]} />
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className={`${CONTAINER} ${PAD_X}`}>
          <Reveal className="mx-auto max-w-[880px] text-center">
            <p className="font-display text-[clamp(2rem,5vw,4.5rem)] font-extrabold uppercase leading-[1.05] text-ink">
              {homeQuote.quote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* AT SCHOOL */}
      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <StorySection block={atSchool} variant="text-only" />
        </div>
      </section>

      <section className={SECTION_Y}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <StorySection block={atSchoolContinued} variant="stacked" />
        </div>
      </section>

      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <StorySection block={atSchoolClose} variant="split" reverse />
        </div>
      </section>

      <section className={SECTION_Y}>
        <div className={`${CONTAINER} ${PAD_X} space-y-10`}>
          <Reveal>
            <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-extrabold text-ink">
              {memoryGalleryHeading}
            </h3>
          </Reveal>
          <MemoryGallery items={memoryGallery} />
        </div>
      </section>

      {/* SOCIETY */}
      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <StorySection block={society} variant="stacked" />
        </div>
      </section>

      <section className={SECTION_Y}>
        <div className={`${CONTAINER} ${PAD_X} space-y-10`}>
          <Reveal>
            <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-extrabold text-ink">
              {societyGalleryHeading}
            </h3>
          </Reveal>
          <MemoryGallery items={societyGallery} />
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-36">
        <div className={`${CONTAINER} ${PAD_X}`}>
          <PullQuote quote={closingStatement.quote} />
        </div>
      </section>
    </>
  );
}
