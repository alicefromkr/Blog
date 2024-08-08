import type { DocsThemeConfig } from "nextra-theme-docs";
import { LocaleSwitch, useConfig, ThemeSwitch } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: "Alice's Study Note",
  navbar: {
    extraContent: () => {
      return (
        <>
          {ThemeSwitch({ lite: true, className: "button-switch theme-switch" })}
          {LocaleSwitch({ className: "button-switch" })}
        </>
      );
    },
  },
  i18n: [
    { locale: "ko", name: "한국어" },
    { locale: "en", name: "English" },
  ],
};

export default config;
