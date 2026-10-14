import type { ReactNode } from "react";
import { READING } from "@/lib/layout";
import { Reveal } from "@/components/ui/Reveal";

const ACCENT_TEXT: Record<string, string> = {
  cyan: "text-cyan",
  pink: "text-pink",
  yellow: "text-yellow",
  blue: "text-blue",
  orange: "text-orange",
};

export function ChapterHero({
  eyebrow,
  title,
  intro,
  accent = "pink",
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string[];
  accent?: "cyan" | "pink" | "yellow" | "blue" | "orange";
  children?: ReactNode;
}) {
  return (
    <header className="space-y-12 sm:space-y-16">
      <Reveal>
        <p className={`text-sm font-bold uppercase tracking-[0.3em] ${ACCENT_TEXT[accent]}`}>{eyebrow}</p>
        <h1 className="mt-3 font-display text-[clamp(3rem,7vw,7rem)] font-extrabold uppercase leading-[0.95] text-ink">
          {title}
        </h1>
        {intro.length > 0 ? (
          <div className={`${READING} mt-8 space-y-4`}>
            {intro.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.75] text-muted-ink sm:text-[19px]">
                {p}
              </p>
            ))}
          </div>
        ) : null}
      </Reveal>
      {children}
    </header>
  );
}
