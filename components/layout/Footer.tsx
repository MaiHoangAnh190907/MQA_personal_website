import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import { PAD_X } from "@/lib/layout";

export function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className={`mx-auto max-w-[1400px] ${PAD_X} py-14 sm:py-16`}>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
              MQA
            </p>
            <p className="mt-2 max-w-[320px] text-sm leading-relaxed text-muted-ink">
              A personal journal of voice, leadership, curiosity, and music — one chapter at a time.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-ink transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="mailto:hello@yourdomain.com"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-ink transition-colors duration-200 hover:text-ink"
          >
            hello@yourdomain.com
          </a>
        </div>

        <p className="mt-12 text-xs text-muted-ink/70">
          © {new Date().getFullYear()} MQA. Built with care, one story at a time.
        </p>
      </div>
    </footer>
  );
}
