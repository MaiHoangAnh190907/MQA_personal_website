import type { StatItem } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";

export function StatRow({ stats }: { stats: StatItem[] }) {
  return (
    <div className="flex flex-wrap gap-x-14 gap-y-8">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <p className="font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-none text-ink">
            {s.value}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.15em] text-muted-ink">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
