import type { Metadata } from "next";
import { ChapterHero } from "@/components/editorial/ChapterHero";
import { StorySection } from "@/components/editorial/StorySection";
import { MediaMoment } from "@/components/editorial/MediaMoment";
import { PAD_X, READING, SECTION_Y } from "@/lib/layout";
import { chapterMeta, piano, singing, singingMoment } from "@/content/my-little-corner";

export const metadata: Metadata = {
  title: "My Little Studio",
  description: "Singing, piano, and a Tày folk tradition — the quiet, personal corner behind the speeches.",
};

const NARROW = "max-w-[1040px] mx-auto";

export default function MyLittleCornerPage() {
  return (
    <>
      <section className="pt-14 sm:pt-16 lg:pt-10">
        <div className={`${NARROW} ${PAD_X}`}>
          <ChapterHero
            eyebrow={chapterMeta.eyebrow}
            title={chapterMeta.title}
            intro={chapterMeta.intro}
            accent={chapterMeta.accent}
          />
        </div>
      </section>

      {/* SINGING */}
      <section className={SECTION_Y}>
        <div className={`${NARROW} ${PAD_X}`}>
          <StorySection block={singing} variant="split" />
        </div>
      </section>

      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${NARROW} ${PAD_X} ${READING} mx-auto`}>
          <MediaMoment data={singingMoment} />
        </div>
      </section>

      {/* PIANO */}
      <section className={`${SECTION_Y} lg:py-[180px]`}>
        <div className={`${NARROW} ${PAD_X}`}>
          <StorySection block={piano} variant="stacked" align="center" />
        </div>
      </section>
    </>
  );
}
