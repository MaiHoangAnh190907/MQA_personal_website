"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PAD_X } from "@/lib/layout";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-background/90 backdrop-blur">
        <div className={`mx-auto flex h-[76px] max-w-[1400px] items-center justify-between ${PAD_X}`}>
          <Link
            href="/"
            className="font-display text-lg font-extrabold uppercase tracking-[0.08em] text-ink"
          >
            MQA
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV_LINKS.map((link) => {
                const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`group relative text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                        active ? "text-ink" : "text-muted-ink hover:text-ink"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-[2px] bg-pink transition-all duration-200 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="-mr-2 p-2 lg:hidden"
          >
            <Menu aria-hidden className="size-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}
