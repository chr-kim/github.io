import { useTheme } from "./ThemeProvider";
import type { CodeThemeType } from "./ThemeProvider";

export default function CodeBlockThemeSelector() {
  const themeCtx = useTheme();
  if (!themeCtx) throw new Error("ThemeProvider가 최상위에 필요합니다.");
  const { codeTheme, setCode } = themeCtx;

  return (
    <select value={codeTheme()} onInput={e => setCode(e.currentTarget.value as CodeThemeType)}>
      <option value="onedark">One Dark</option>
      <option value="dracula">Dracula</option>
      <option value="github">GitHub</option>
      <option value="solarized-light">Solarized Light</option>
      <option value="duotone-dark">Duotone Dark</option>
    </select>
  );
}
