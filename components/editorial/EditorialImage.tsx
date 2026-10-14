import Image from "next/image";
import type { ImageAsset } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

const ACCENT_CLASS: Record<NonNullable<ImageAsset["accent"]>, string> = {
  cyan: "ring-cyan",
  pink: "ring-pink",
  yellow: "ring-yellow",
  blue: "ring-blue",
  orange: "ring-orange",
};

export function EditorialImage({
  image,
  priority = false,
  rounded = "none",
  className = "",
  sizes = "(min-width: 1024px) 60vw, 100vw",
}: {
  image: ImageAsset;
  priority?: boolean;
  rounded?: "none" | "sm" | "lg";
  className?: string;
  sizes?: string;
}) {
  const radius = rounded === "lg" ? "rounded-[28px]" : rounded === "sm" ? "rounded-lg" : "rounded-none";
  const ring = image.accent ? `ring-2 ring-offset-4 ring-offset-background ${ACCENT_CLASS[image.accent]}` : "";

  return (
    <Reveal className={className}>
      <figure>
        <div className={`relative overflow-hidden ${radius} ${ring}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={priority}
            sizes={sizes}
            className="h-auto w-full object-cover"
          />
        </div>
        {image.caption ? (
          <figcaption className="mt-3 text-sm text-muted-ink">{image.caption}</figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
