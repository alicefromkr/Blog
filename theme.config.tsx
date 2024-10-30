import type { DocsThemeConfig } from "nextra-theme-docs";
import { LocaleSwitch, ThemeSwitch } from "nextra-theme-docs";
import CustomNavbar from "@components/CustmNavbar";
const config: DocsThemeConfig = {
  logo: "Alice's Study Note",
  main: ({ children }) => {
    return <main>{children}</main>;
  },
  footer: {
    component: (
      <div className="bg-sky-200 dark:bg-blue-400 py-6 px-4">
        <footer>
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-black">
              © {new Date().getFullYear()} Alice's Study Note Created by Nextra
            </div>
            <div className="text-white"></div>
          </div>
        </footer>
      </div>
    ),
  },
  navbar: {
    component: CustomNavbar,
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
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  toc: {
    backToTop: false,
    title: "",
  },
  sidebar: {
    toggleButton: false,
  },
};

export default config;
