// Generates tasteful, on-brand placeholder images for every photo slot used
// in /content/*.ts. These are local SVGs only — nothing is scraped or
// hotlinked from the reference site. Replace each file with a real photo at
// the same path (see README "Image replacement guide").
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

const ACCENTS = {
  cyan: "#35D9CF",
  pink: "#FF43C6",
  yellow: "#F2E94E",
  blue: "#6B7FE8",
  orange: "#F59E62",
};

const TONES = {
  cyan: "#E4FAF8",
  pink: "#FFE8F7",
  yellow: "#FBF9E2",
  blue: "#EAEDFC",
  orange: "#FDEEE1",
};

function wrap(label, maxChars = 22) {
  const words = label.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > maxChars) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

function svg({ width, height, label, accent = "blue", path }) {
  const stroke = ACCENTS[accent];
  const tone = TONES[accent];
  const lines = wrap(label);
  const lineHeight = Math.max(20, Math.round(width * 0.026));
  const fontSize = lineHeight * 0.62;
  const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;
  const textEls = lines
    .map(
      (l, i) =>
        `<text x="50%" y="${startY + i * lineHeight}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#111111" opacity="0.62">${escapeXml(l)}</text>`
    )
    .join("\n    ");

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <pattern id="diag-${hash(path)}" width="28" height="28" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="28" stroke="${stroke}" stroke-opacity="0.16" stroke-width="10" />
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="${tone}" />
  <rect width="${width}" height="${height}" fill="url(#diag-${hash(path)})" />
  <rect x="14" y="14" width="${width - 28}" height="${height - 28}" fill="none" stroke="${stroke}" stroke-width="3" stroke-dasharray="2 14" stroke-linecap="round" />
  <text x="50%" y="${startY - lineHeight * 1.5}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize * 0.62}" letter-spacing="3" font-weight="700" fill="${stroke}">PLACEHOLDER</text>
  ${textEls}
  <text x="50%" y="${height - 28}" text-anchor="middle" font-family="monospace" font-size="${Math.max(11, fontSize * 0.4)}" fill="#111111" opacity="0.4">${escapeXml(path)}</text>
</svg>`;
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

const images = [
  // HOME
  { path: "images/home/hero-bg.svg", width: 1600, height: 1000, label: "Hero background — onstage speaking event, wide shot", accent: "blue" },
  { path: "images/home/hero-subject.svg", width: 900, height: 1200, label: "Hero cutout — subject speaking into microphone", accent: "pink" },
  { path: "images/home/about-me.svg", width: 1000, height: 1250, label: "About me — portrait with microphone", accent: "cyan" },
  { path: "images/home/chapter-1-preview.svg", width: 1200, height: 900, label: "Chapter 1 preview — public speaking moment", accent: "cyan" },
  { path: "images/home/chapter-2-preview.svg", width: 1200, height: 900, label: "Chapter 2 preview — leadership / student council", accent: "yellow" },
  { path: "images/home/chapter-3-preview.svg", width: 1200, height: 900, label: "Chapter 3 preview — AI / research work", accent: "blue" },
  { path: "images/home/studio-preview.svg", width: 1200, height: 900, label: "Studio preview — singing or piano", accent: "orange" },

  // SPEAK TO EMPOWER
  { path: "images/speak/hero-cutout-cyan.svg", width: 700, height: 950, label: "Speaking cutout — cyan outline version", accent: "cyan" },
  { path: "images/speak/hero-cutout-pink.svg", width: 700, height: 950, label: "Speaking cutout — pink outline version", accent: "pink" },
  { path: "images/speak/hero-cutout-yellow.svg", width: 700, height: 950, label: "Speaking cutout — yellow outline version", accent: "yellow" },
  { path: "images/speak/chosen-one-01.svg", width: 1000, height: 1250, label: "The Chosen One — first time holding a mic, childhood", accent: "pink" },
  { path: "images/speak/chosen-one-02.svg", width: 900, height: 700, label: "The Chosen One — school assembly performance", accent: "cyan" },
  { path: "images/speak/chosen-one-03.svg", width: 900, height: 1100, label: "The Chosen One — moving schools portrait", accent: "yellow" },
  { path: "images/speak/choosing-myself-01.svg", width: 1100, height: 800, label: "Choosing Myself — debate competition", accent: "blue" },
  { path: "images/speak/choosing-myself-02.svg", width: 800, height: 1000, label: "Choosing Myself — Model United Nations", accent: "cyan" },
  { path: "images/speak/passing-the-wand-01.svg", width: 1600, height: 1000, label: "Passing the Wand — TEDx stage, wide feature image", accent: "pink" },
  { path: "images/speak/passing-the-wand-02.svg", width: 900, height: 1100, label: "Passing the Wand — charity trip, sharing the mic", accent: "orange" },
  { path: "images/speak/nextgen-01.svg", width: 1000, height: 750, label: "NextGen Voice — bootcamp students presenting", accent: "cyan" },
  { path: "images/speak/nextgen-02.svg", width: 1000, height: 750, label: "NextGen Voice — students filming a report", accent: "yellow" },

  // BE A PIONEER
  { path: "images/pioneer/home-01.svg", width: 1000, height: 1250, label: "At Home — with younger siblings", accent: "yellow" },
  { path: "images/pioneer/home-02.svg", width: 1000, height: 750, label: "At Home — family moment", accent: "cyan" },
  { path: "images/pioneer/home-03.svg", width: 1000, height: 750, label: "At Home — teaching siblings", accent: "pink" },
  { path: "images/pioneer/school-01.svg", width: 1600, height: 1000, label: "At School — founding MUN, wide feature image", accent: "blue" },
  { path: "images/pioneer/school-02.svg", width: 900, height: 1100, label: "At School — TEDx organizing team", accent: "yellow" },
  { path: "images/pioneer/school-03.svg", width: 1000, height: 750, label: "At School — Student Council session", accent: "cyan" },
  { path: "images/pioneer/memory-01.svg", width: 900, height: 1100, label: "Memory — Student Council retreat", accent: "pink" },
  { path: "images/pioneer/memory-02.svg", width: 900, height: 700, label: "Memory — charity drive packing boxes", accent: "cyan" },
  { path: "images/pioneer/memory-03.svg", width: 900, height: 900, label: "Memory — thank-you gifts from juniors", accent: "yellow" },
  { path: "images/pioneer/memory-04.svg", width: 900, height: 700, label: "Memory — backstage before TEDx", accent: "blue" },
  { path: "images/pioneer/memory-05.svg", width: 900, height: 1100, label: "Memory — Halloween with the club", accent: "orange" },
  { path: "images/pioneer/memory-06.svg", width: 900, height: 700, label: "Memory — pizza night after the event", accent: "pink" },
  { path: "images/pioneer/memory-07.svg", width: 900, height: 900, label: "Memory — handmade thank-you cards", accent: "cyan" },
  { path: "images/pioneer/memory-08.svg", width: 900, height: 700, label: "Memory — final bow, closing ceremony", accent: "yellow" },
  { path: "images/pioneer/society-01.svg", width: 1600, height: 1000, label: "Society — Sustentia workshop, wide feature image", accent: "cyan" },
  { path: "images/pioneer/society-02.svg", width: 900, height: 700, label: "Society — handprint tree activity", accent: "orange" },
  { path: "images/pioneer/society-03.svg", width: 900, height: 1100, label: "Society — environmental game with students", accent: "yellow" },
  { path: "images/pioneer/society-04.svg", width: 900, height: 700, label: "Society — student government session", accent: "blue" },
  { path: "images/pioneer/society-05.svg", width: 900, height: 900, label: "Society — behind the scenes filming", accent: "pink" },
  { path: "images/pioneer/society-06.svg", width: 900, height: 700, label: "Society — team teaching underserved students", accent: "cyan" },

  // AI FOR GOOD
  { path: "images/ai/hero.svg", width: 1400, height: 820, label: "AI for Good — research or classroom setting", accent: "blue" },
  { path: "images/ai/fpt-01.svg", width: 1100, height: 800, label: "FPT internship — flipped classroom session", accent: "cyan" },
  { path: "images/ai/tedx-01.svg", width: 1100, height: 800, label: "Greenwich TEDx — Boon or Bane talk", accent: "orange" },

  // MY LITTLE STUDIO
  { path: "images/studio/singing-01.svg", width: 1000, height: 1250, label: "Singing — childhood performance on stage", accent: "orange" },
  { path: "images/studio/singing-02.svg", width: 1000, height: 750, label: "Singing — hát then with đàn tính", accent: "pink" },
  { path: "images/studio/piano-01.svg", width: 1000, height: 1250, label: "Piano — practicing at home", accent: "blue" },
  { path: "images/studio/piano-02.svg", width: 1000, height: 750, label: "Piano — recital moment", accent: "cyan" },
];

for (const img of images) {
  const full = join(PUBLIC_DIR, img.path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, svg(img));
}

console.log(`Generated ${images.length} placeholder images.`);
