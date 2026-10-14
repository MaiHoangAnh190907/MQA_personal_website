import type { ImageAsset } from "@/content/types";
import { EditorialImage } from "@/components/editorial/EditorialImage";

export function CaptionedGallery({ images, columns = 2 }: { images: ImageAsset[]; columns?: 2 | 3 }) {
  const cols = columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-8 sm:gap-10 ${cols}`}>
      {images.map((img) => (
        <EditorialImage key={img.src} image={img} rounded="sm" sizes="(min-width: 640px) 33vw, 100vw" />
      ))}
    </div>
  );
}
