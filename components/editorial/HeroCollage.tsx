"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ImageAsset } from "@/content/types";
import {
  CircleScribbleDoodle,
  MicDoodle,
  SparkleDoodle,
  SquiggleDoodle,
  WandStarDoodle,
  WizardHatDoodle,
} from "@/components/editorial/Doodles";

const DOODLES = {
  mic: MicDoodle,
  hat: WizardHatDoodle,
  wand: WandStarDoodle,
  sparkle: SparkleDoodle,
  squiggle: SquiggleDoodle,
  circle: CircleScribbleDoodle,
} as const;

const ACCENT_HEX: Record<NonNullable<ImageAsset["accent"]>, string> = {
  cyan: "#35D9CF",
  pink: "#FF43C6",
  yellow: "#F2E94E",
  blue: "#6B7FE8",
  orange: "#F59E62",
};

function outlineFilter(hex: string) {
  const d = 4;
  return [
    `drop-shadow(${d}px 0 0 ${hex})`,
    `drop-shadow(-${d}px 0 0 ${hex})`,
    `drop-shadow(0 ${d}px 0 ${hex})`,
    `drop-shadow(0 -${d}px 0 ${hex})`,
  ].join(" ");
}

export interface CollageSubject {
  image: ImageAsset;
  accent: NonNullable<ImageAsset["accent"]>;
  /** Tailwind classes controlling absolute position/size — write mobile
   * classes unprefixed and desktop overrides with lg: */
  className: string;
  delay?: number;
}

export interface CollageDecoration {
  kind: keyof typeof DOODLES;
  accent: NonNullable<ImageAsset["accent"]>;
  className: string;
  delay?: number;
}

export function HeroCollage({
  background,
  subjects,
  decorations = [],
  aspect = "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]",
}: {
  background?: ImageAsset;
  subjects: CollageSubject[];
  decorations?: CollageDecoration[];
  aspect?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative w-full ${aspect}`}>
      {background ? (
        <div className="absolute inset-0 overflow-hidden rounded-[28px]">
          <Image
            src={background.src}
            alt={background.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      {subjects.map((s, i) => (
        <motion.div
          key={s.image.src}
          className={`absolute ${s.className}`}
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: s.delay ?? i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ filter: outlineFilter(ACCENT_HEX[s.accent]) }}>
            <Image
              src={s.image.src}
              alt={s.image.alt}
              width={s.image.width}
              height={s.image.height}
              priority={i === 0}
              sizes="(min-width: 1024px) 32vw, 55vw"
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      ))}

      {decorations.map((d, i) => {
        const Icon = DOODLES[d.kind];
        return (
          <motion.div
            key={i}
            className={`absolute hidden sm:block ${d.className}`}
            style={{ color: ACCENT_HEX[d.accent] }}
            initial={{ opacity: 0, scale: reduced ? 1 : 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: d.delay ?? 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Icon className="h-full w-full" />
          </motion.div>
        );
      })}
    </div>
  );
}
