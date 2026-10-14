import Image from "next/image";
import type { MediaMomentData } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

export function MediaMoment({ data }: { data: MediaMomentData }) {
  return (
    <Reveal>
      <figure>
        <div className="relative overflow-hidden rounded-[20px]">
          {data.type === "video" ? (
            <video
              controls
              preload="metadata"
              poster={data.poster}
              width={data.width}
              height={data.height}
              className="h-auto w-full"
            >
              <source src={data.src} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={data.src}
              alt={data.caption}
              width={data.width}
              height={data.height}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full object-cover"
            />
          )}
        </div>
        <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-3 text-sm text-muted-ink">
          <span>{data.caption}</span>
          {data.date ? <span className="text-muted-ink/60">{data.date}</span> : null}
        </figcaption>
        {data.description ? (
          <p className="mt-2 max-w-[520px] text-[15px] leading-[1.7] text-muted-ink">{data.description}</p>
        ) : null}
      </figure>
    </Reveal>
  );
}
