import type { Metadata } from "next";
import { ChapterHero } from "@/components/editorial/ChapterHero";
import { HeroCollage } from "@/components/editorial/HeroCollage";
import { StorySection, StoryText } from "@/components/editorial/StorySection";
import { ImageTriptych } from "@/components/editorial/ImageTriptych";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { StatRow } from "@/components/editorial/StatRow";
import { Reveal } from "@/components/ui/Reveal";
import { CONTAINER, PAD_X, READING, SECTION_Y } from "@/lib/layout";
import {
  chapterMeta,
  chosenOne,
  choosingMyself,
  heroCollage,
  nextgenStats,
  nextgenVoice,
  passingTheWand,
} from "@/content/speak-to-empower";

export const metadata: Metadata = {
  title: "Speak to Empower",
  description:
    "Public speaking, debate, Model United Nations, and a TEDx talk — how a habit of raising my hand turned into a mission to hand the mic to someone else.",
};

export default function SpeakToEmpowerPage() {
  return (
    <>
      <section className="pt-14 sm:pt-16 lg:pt-10">
        <div className={`${CONTAINER} ${PAD_X}`}>
          <ChapterHero
            eyebrow={chapterMeta.eyebrow}
            title={chapterMeta.title}
            intro={chapterMeta.intro}
            accent={chapterMeta.accent}
          >
            <HeroCollage
              background={heroCollage.background}
              subjects={heroCollage.subjects.map((s, i) => ({
                ...s,
                className:
                  i === 0
                    ? "left-[4%] bottom-[-6%] w-[52%] lg:left-[6%] lg:bottom-[-8%] lg:w-[30%]"
                    : "right-[4%] top-[6%] w-[46%] lg:right-[10%] lg:top-[8%] lg:w-[26%]",
              }))}
              decorations={[
                { kind: "mic", accent: "cyan", className: "left-[46%] top-[4%] w-14" },
                { kind: "hat", accent: "yellow", className: "right-[6%] bottom-[8%] w-16" },
                { kind: "wand", accent: "pink", className: "left-[8%] top-[10%] w-12" },
              ]}
            />
          </ChapterHero>
        </div>
      </section>

      {/* THE CHOSEN ONE */}
      <section className={SECTION_Y}>
        <div className={`${CONTAINER} ${PAD_X} space-y-12`}>
          <div className={READING}>
            <Reveal>
              <StoryText block={chosenOne} />
            </Reveal>
          </div>
          <ImageTriptych
            images={[chosenOne.images![0], chosenOne.images![1], chosenOne.images![2]]}
          />
        </div>
      </section>

      {/* CHOOSING MYSELF */}
      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${CONTAINER} ${PAD_X}`}>
          <StorySection block={choosingMyself} variant="split" reverse />
        </div>
      </section>

      {/* PASSING THE WAND */}
      <section className={SECTION_Y}>
        <div className={`${CONTAINER} ${PAD_X} space-y-14`}>
          <div className={`${READING} mx-auto text-center`}>
            <Reveal>
              <StoryText block={passingTheWand} align="center" />
            </Reveal>
          </div>
          <EditorialImage
            image={passingTheWand.images![0]}
            rounded="lg"
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="mx-auto max-w-[620px]"
          />
        </div>
      </section>

      {/* NEXTGEN VOICE */}
      <section className={`${SECTION_Y} bg-surface`}>
        <div className={`${CONTAINER} ${PAD_X} space-y-14`}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <StoryText block={nextgenVoice} />
              <div className="mt-10">
                <StatRow stats={nextgenStats} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6">
                <EditorialImage image={nextgenVoice.images![0]} rounded="sm" sizes="(min-width: 1024px) 40vw, 100vw" />
                <EditorialImage image={nextgenVoice.images![1]} rounded="sm" sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
