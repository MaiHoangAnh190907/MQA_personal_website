import type { AchievementItem } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function AchievementList({ items }: { items: AchievementItem[] }) {
  return (
    <ul className="divide-y divide-ink/10 border-t border-b border-ink/10">
      {items.map((item, i) => {
        const content = (
          <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-ink">
                {item.category}
                {item.year ? ` · ${item.year}` : ""}
              </p>
              <p className="mt-1 font-display text-lg font-bold text-ink sm:text-xl">
                {item.title}
                {item.href ? (
                  <ArrowUpRight className="ml-1.5 inline size-4 align-super text-muted-ink" aria-hidden />
                ) : null}
              </p>
              {item.description ? (
                <p className="mt-1 max-w-[560px] text-[15px] leading-[1.7] text-muted-ink">
                  {item.description}
                </p>
              ) : null}
            </div>
          </div>
        );

        return (
          <Reveal key={item.title} delay={Math.min(i * 0.04, 0.3)}>
            <li>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          </Reveal>
        );
      })}
    </ul>
  );
}
