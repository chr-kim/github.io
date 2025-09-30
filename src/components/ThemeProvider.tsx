import type { JSX } from "solid-js";
import { createSignal, createContext, useContext } from "solid-js";

/** 사이트 글로벌 테마 타입 */
export type ThemeType = "light" | "dark";
/** 코드 하이라이트 테마 타입 (다른 파일에서 import 가능) */
export type CodeThemeType =
  | "onedark"
  | "dracula"
  | "github"
  | "solarized-light"
  | "duotone-dark";

type ThemeProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

const ThemeContext = createContext<{
  theme: () => ThemeType;
  codeTheme: () => CodeThemeType;
  toggleTheme: () => void;
  setCode: (c: CodeThemeType) => void;
}>();

export function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = createSignal<ThemeType>("light");
  const [codeTheme, setCodeTheme] = createSignal<CodeThemeType>("onedark");

  const toggleTheme = () => {
    const nextTheme = theme() === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const setCode = (c: CodeThemeType) => {
    setCodeTheme(c);
    document.documentElement.setAttribute("data-codetheme", c);
    localStorage.setItem("code-theme", c);
  };

  return (
    <ThemeContext.Provider value={{ theme, codeTheme, toggleTheme, setCode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
