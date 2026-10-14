import type { ChapterPreview as ChapterPreviewData } from "@/content/types";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { EditorialLink } from "@/components/ui/EditorialLink";
import { Reveal } from "@/components/ui/Reveal";
import { READING } from "@/lib/layout";

const ACCENT_TEXT: Record<string, string> = {
  cyan: "text-cyan",
  pink: "text-pink",
  yellow: "text-yellow",
  blue: "text-blue",
  orange: "text-orange",
};

export function ChapterPreview({ data, reverse = false }: { data: ChapterPreviewData; reverse?: boolean }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <EditorialImage image={data.image} rounded="sm" sizes="(min-width: 1024px) 45vw, 100vw" />
      </Reveal>
      <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
        <div className={READING}>
          <p className={`text-sm font-bold uppercase tracking-[0.3em] ${ACCENT_TEXT[data.accent]}`}>
            {data.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold uppercase leading-[1.05] text-ink">
            {data.title}
          </h3>
          <p className="mt-5 text-[17px] leading-[1.75] text-muted-ink sm:text-[19px]">{data.summary}</p>
          <div className="mt-7">
            <EditorialLink href={data.href}>{data.ctaLabel}</EditorialLink>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
