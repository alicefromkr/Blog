import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: false,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

export default withNextra({
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "./.next",
  i18n: {
    locales: ["en", "zh", "ko"],
    defaultLocale: "ko",
  },
  redirects: () => [
    {
      source: "/",
      destination: "/ko",
      permanent: true,
    },
  ],
});
