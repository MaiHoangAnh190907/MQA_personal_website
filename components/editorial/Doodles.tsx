// Hand-drawn-feeling decorative SVGs used to build the scrapbook / collage
// language across hero sections. Pure vector, no external assets, colored
// with currentColor so callers can theme via `className="text-cyan"` etc.
import type { SVGProps } from "react";

export function MicDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="32" y="8" width="36" height="64" rx="18" stroke="currentColor" strokeWidth="4" />
      <path d="M18 58c0 20 14.3 34 32 34s32-14 32-34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="92" x2="50" y2="118" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="30" y1="118" x2="70" y2="118" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function WizardHatDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M60 6 L96 100 L24 100 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <ellipse cx="60" cy="104" rx="46" ry="12" stroke="currentColor" strokeWidth="4" />
      <path d="M60 34 l6 6-6 6-6-6z" fill="currentColor" />
      <circle cx="76" cy="58" r="3" fill="currentColor" />
      <circle cx="46" cy="70" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function WandStarDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line x1="18" y1="102" x2="72" y2="48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M88 20 l6 14 14 6-14 6-6 14-6-14-14-6 14-6z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z" fill="currentColor" />
    </svg>
  );
}

export function SquiggleDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 14c8-14 16-14 24 0s16 14 24 0 16-14 24 0 16 14 24 0 16-14 24 0 16 14 24 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CircleScribbleDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M50 8c23 0 40 12 40 30 0 20-16 32-38 32-19 0-34-9-34-24 0-13 12-22 28-22 13 0 22 6 22 15 0 7-6 11-13 11"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
