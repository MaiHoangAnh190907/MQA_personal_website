import Image from "next/image";
import type { MemoryItem } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

export function MemoryGallery({ items }: { items: MemoryItem[] }) {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
      {items.map((item, i) => (
        <Reveal key={item.image.src} delay={(i % 3) * 0.05}>
          <figure>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-muted-ink">{item.caption}</figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
