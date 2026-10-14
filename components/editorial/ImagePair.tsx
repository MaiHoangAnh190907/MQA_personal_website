import type { ImageAsset } from "@/content/types";
import { EditorialImage } from "@/components/editorial/EditorialImage";

export function ImagePair({
  images,
  offset = true,
}: {
  images: [ImageAsset, ImageAsset];
  offset?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
      <EditorialImage image={images[0]} className={offset ? "sm:mt-12" : ""} sizes="(min-width: 640px) 45vw, 100vw" />
      <EditorialImage image={images[1]} sizes="(min-width: 640px) 45vw, 100vw" />
    </div>
  );
}
