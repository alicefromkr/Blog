/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".lined-paper": {
          "background-size": "100% 2rem",
          "line-height": "2rem",
          position: "relative",
          "@apply bg-white dark:bg-zinc-700": {},
          "background-image": "linear-gradient(#dee 1px, transparent 1px)",
          ".dark &": {
            "background-image":
              "linear-gradient(rgba(222, 238, 238, 0.2) 1px, transparent 1px)",
          },
          // 기본 텍스트 요소들
          "& p": {
            "line-height": "2rem",
            "margin-top": "0rem",
            "margin-bottom": "0",
            "padding-top": "0.5rem",
            "padding-bottom": "0",
            "@apply text-base": {},
            "word-break": "keep-all",
            "white-space": "pre-wrap",
            "line-break": "normal",
          },
          // 제목 요소들
          "& h1": {
            "line-height": "4rem", // 2줄 높이
            "margin-top": "1.5rem",
            "margin-bottom": "2rem",
            "@apply text-4xl font-bold": {},
          },
          "& h2": {
            "line-height": "3rem", // 1.5줄 높이
            "margin-top": "2rem",
            "margin-bottom": "1.5rem",
            border: "none",
            "@apply text-3xl font-bold": {},
          },
          "& h3": {
            "line-height": "2rem",
            "margin-top": "2rem",
            "margin-bottom": "2rem",
            "@apply text-2xl font-bold": {},
          },
          "& h4, & h5, & h6": {
            "line-height": "2rem",
            "margin-top": "0.5rem",
            "margin-bottom": "0.5rem",
            "@apply text-xl font-bold": {},
          },
          "$ li": {
            "line-height": "2rem",
            "margin-top": "0rem",
            "margin-bottom": "0rem",
            "padding-top": "0rem",
            "padding-bottom": "0rem",
          },
          // 리스트 스타일링
          "& ul, & ol": {
            "line-height": "2rem",
            "padding-left": "2rem",
            "padding-top": "0rem",
            "padding-bottom": "0rem",
          },
          // 중첩된 리스트 처리
          "& ul ul, & ol ol, & ul ol, & ol ul": {
            "margin-top": "0",
            "margin-bottom": "0",
          },
        },
      });
    }),
  ],
  darkMode: "class",
};
