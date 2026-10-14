import type { PullQuoteData } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { SquiggleDoodle } from "@/components/editorial/Doodles";

export function PullQuote({ quote, attribution }: PullQuoteData) {
  return (
    <Reveal className="mx-auto max-w-[720px] text-center">
      <SquiggleDoodle className="mx-auto mb-6 h-4 w-24 text-pink" />
      <p className="font-display text-[clamp(1.5rem,3.4vw,2.75rem)] font-semibold leading-[1.3] text-ink">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution ? (
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-muted-ink">
          {attribution}
        </p>
      ) : null}
    </Reveal>
  );
}
