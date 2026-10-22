export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home page", href: "/" },
  { label: "Chap 1 – Leadership", href: "/leadership" },
  { label: "Chap 2 – Be a Pioneer", href: "/be-a-pioneer" },
  { label: "Chap 3 – AI for Good", href: "/ai-for-good" },
  { label: "My little studio", href: "/my-little-corner" },
];
