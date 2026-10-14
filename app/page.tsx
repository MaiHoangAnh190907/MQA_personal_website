import type { Metadata } from "next";
import { HeroCollage } from "@/components/editorial/HeroCollage";
import { PullQuote } from "@/components/editorial/PullQuote";
import { StorySection } from "@/components/editorial/StorySection";
import { ChapterPreview } from "@/components/editorial/ChapterPreview";
import { Reveal } from "@/components/ui/Reveal";
import { CONTAINER, PAD_X, READING, SECTION_Y, SECTION_Y_TIGHT } from "@/lib/layout";
import { aboutMe, chapterPreviews, hero, quote, studioPreview } from "@/content/home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "A personal storytelling portfolio told in chapters — public speaking, leadership, AI for good, and music.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-14 sm:pt-16 lg:pt-10">
        <div className={`${CONTAINER} ${PAD_X}`}>
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-pink">{hero.eyebrow}</p>
            <h1 className="mt-3 font-display text-[clamp(4rem,9vw,9rem)] font-extrabold uppercase leading-[0.9] text-ink">
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className={`${READING} mt-7 text-[17px] leading-[1.75] text-muted-ink sm:text-[19px]`}>
              {hero.subtitle}
            </p>
          </Reveal>

          <div className="mt-14 lg:mt-20">
            <HeroCollage
              background={hero.background}
              subjects={[
                {
                  image: hero.subject,
                  accent: "pink",
                  className:
                    "left-1/2 bottom-[-8%] w-[62%] -translate-x-1/2 lg:left-auto lg:right-[7%] lg:bottom-[-10%] lg:w-[36%] lg:translate-x-0",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <PullQuote quote={quote.quote} attribution={quote.attribution} />
        </div>
      </section>

      {/* ABOUT ME */}
      <section className={SECTION_Y}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <StorySection block={aboutMe} variant="split" />
        </div>
      </section>

      {/* CHAPTER PREVIEWS */}
      {chapterPreviews.map((chapter, i) => (
        <section key={chapter.id} className={i === 0 ? SECTION_Y : SECTION_Y_TIGHT}>
          <div className={`${CONTAINER} ${PAD_X}`}>
            <ChapterPreview data={chapter} reverse={i % 2 === 1} />
          </div>
        </section>
      ))}

      {/* STUDIO PREVIEW */}
      <section className={`${SECTION_Y_TIGHT} pb-24 sm:pb-28 lg:pb-36`}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <ChapterPreview data={studioPreview} reverse={chapterPreviews.length % 2 === 1} />
        </div>
      </section>
    </>
  );
}
