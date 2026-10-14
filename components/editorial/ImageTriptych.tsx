import type { ImageAsset } from "@/content/types";
import { EditorialImage } from "@/components/editorial/EditorialImage";

export function ImageTriptych({ images }: { images: [ImageAsset, ImageAsset, ImageAsset] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-6">
      {images.map((img, i) => (
        <EditorialImage
          key={img.src}
          image={img}
          className={i === 1 ? "sm:mt-10" : ""}
          sizes="(min-width: 640px) 30vw, 100vw"
        />
      ))}
    </div>
  );
}
