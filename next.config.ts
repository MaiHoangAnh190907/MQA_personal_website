import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip auto-generating AGENTS.md / CLAUDE.md scaffolding on every dev run.
  agentRules: false,
  images: {
    // Placeholder assets shipped under /public/images are locally-generated
    // SVGs (see README "Image replacement guide"). Real photography should
    // replace them as .jpg/.webp — SVG support stays on only for the
    // placeholder set.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
