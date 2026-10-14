import type { Metadata } from "next";
import { ChapterHero } from "@/components/editorial/ChapterHero";
import { StorySection } from "@/components/editorial/StorySection";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { AchievementList } from "@/components/editorial/AchievementList";
import { EditorialLink } from "@/components/ui/EditorialLink";
import { Reveal } from "@/components/ui/Reveal";
import { PAD_X, SECTION_Y } from "@/lib/layout";
import { achievements, chapterMeta, heroImage, internship, researchLink, tedx } from "@/content/ai-for-good";

export const metadata: Metadata = {
  title: "AI for Good",
  description:
    "An FPT internship, a TEDx talk, and a research paper — asking whether AI makes students more curious, or just makes it easier to stop being curious.",
};

const NARROW = "max-w-[1040px] mx-auto";

export default function AiForGoodPage() {
  return (
    <>
      <section className="pt-14 sm:pt-16 lg:pt-10">
        <div className={`${NARROW} ${PAD_X}`}>
          <ChapterHero
            eyebrow={chapterMeta.eyebrow}
            title={chapterMeta.title}
            intro={chapterMeta.intro}
            accent={chapterMeta.accent}
          >
            <EditorialImage image={heroImage} rounded="lg" priority sizes="(min-width: 1024px) 65vw, 100vw" />
          </ChapterHero>
        </div>
      </section>

      <section className={SECTION_Y}>
        <div className={`${NARROW} ${PAD_X}`}>
          <StorySection block={internship} variant="split" />
        </div>
      </section>

      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${NARROW} ${PAD_X}`}>
          <StorySection block={tedx} variant="split" reverse />
        </div>
      </section>

      {/* RESEARCH LINK */}
      <section className={SECTION_Y}>
        <div className={`${NARROW} ${PAD_X}`}>
          <Reveal className="border-y border-ink/10 py-12 text-center sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-ink">
              {researchLink.label}
            </p>
            <p className="mx-auto mt-4 max-w-[640px] font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight text-ink">
              {researchLink.title}
            </p>
            <div className="mt-6 flex justify-center">
              <EditorialLink href={researchLink.href} external>
                Read the paper
              </EditorialLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS & ACHIEVEMENTS */}
      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${NARROW} ${PAD_X}`}>
          <Reveal>
            <h2 className="mb-10 font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-ink">
              Projects &amp; Achievements
            </h2>
          </Reveal>
          <AchievementList items={achievements} />
        </div>
      </section>
    </>
  );
}
