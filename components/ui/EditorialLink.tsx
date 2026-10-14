import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function EditorialLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const inner = (
    <span
      className={`group inline-flex items-center gap-2 font-display font-semibold text-ink border-b border-ink/30 pb-0.5 transition-colors duration-200 hover:border-ink ${className}`}
    >
      {children}
      {external ? (
        <ArrowUpRight
          className="size-[1em] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden
        />
      ) : (
        <ArrowRight
          className="size-[1em] transition-transform duration-200 group-hover:translate-x-1.5"
          aria-hidden
        />
      )}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <Link href={href}>{inner}</Link>;
}
