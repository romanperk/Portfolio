import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { t } from "../i18n";

type Theme = "light" | "dark";

const systemTheme = (): Theme => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const chosenTheme = () => document.documentElement.dataset.theme as Theme | undefined;

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => chosenTheme() ?? systemTheme());
  const next: Theme = theme === "dark" ? "light" : "dark";

  // Keep following the OS until the visitor has picked a theme themselves.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!chosenTheme()) setTheme(systemTheme());
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked. The choice still applies to this visit.
    }
  };

  const Icon = theme === "dark" ? LuSun : LuMoon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.theme[next]}
      title={t.theme[next]}
      className="flex size-10 items-center justify-center rounded-lg text-body transition-colors duration-150 hover:bg-raised hover:text-ink"
    >
      <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
};
