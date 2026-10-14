import type { StoryBlock } from "@/content/types";
import { READING } from "@/lib/layout";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { ImagePair } from "@/components/editorial/ImagePair";

export function StoryText({ block, align = "left" }: { block: StoryBlock; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto text-center" : ""}>
      {block.eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-ink">
          {block.eyebrow}
        </p>
      ) : null}
      {block.heading ? (
        <h2 className="mb-6 font-display text-[clamp(2rem,4vw,4rem)] font-extrabold leading-[1.05] text-ink">
          {block.heading}
        </h2>
      ) : null}
      <div className="space-y-5">
        {block.body.map((p, i) => (
          <p key={i} className="text-[17px] leading-[1.75] text-muted-ink sm:text-[19px]">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

/**
 * `stacked`  — text (reading width) then image(s) full width below
 * `split`    — text and a single image side by side (reverse to flip sides)
 * `text-only`— just the text block, no images
 */
export function StorySection({
  block,
  variant = "stacked",
  reverse = false,
  align = "left",
}: {
  block: StoryBlock;
  variant?: "stacked" | "split" | "text-only";
  reverse?: boolean;
  align?: "left" | "center";
}) {
  const images = block.images ?? [];

  if (variant === "text-only" || images.length === 0) {
    return (
      <div className={`${READING} ${align === "center" ? "mx-auto" : ""}`}>
        <Reveal>
          <StoryText block={block} align={align} />
        </Reveal>
      </div>
    );
  }

  if (variant === "split" && images.length >= 1) {
    return (
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <StoryText block={block} align={align} />
        </Reveal>
        <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
          <EditorialImage image={images[0]} sizes="(min-width: 1024px) 45vw, 100vw" />
        </Reveal>
      </div>
    );
  }

  // stacked
  return (
    <div className="space-y-10">
      <div className={READING}>
        <Reveal>
          <StoryText block={block} align={align} />
        </Reveal>
      </div>
      {images.length === 2 ? (
        <ImagePair images={[images[0], images[1]]} />
      ) : (
        <EditorialImage image={images[0]} sizes="100vw" />
      )}
    </div>
  );
}
