import { useSyncExternalStore } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { t } from "../i18n";

type Theme = "light" | "dark";

const systemTheme = (): Theme => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const chosenTheme = () => document.documentElement.dataset.theme as Theme | undefined;

// Follows the OS until the visitor picks a theme, and any change to `data-theme` on <html>.
const subscribe = (onChange: () => void) => {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  const observer = new MutationObserver(onChange);
  query.addEventListener("change", onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  return () => {
    query.removeEventListener("change", onChange);
    observer.disconnect();
  };
};
const currentTheme = () => chosenTheme() ?? systemTheme();
// The prerendered HTML can't know the theme; React swaps in the real one right after hydrating.
const serverTheme = (): Theme => "light";

export const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, currentTheme, serverTheme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    document.documentElement.dataset.theme = next;
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
      className="flex size-11 items-center justify-center rounded-lg text-body transition-colors duration-150 hover:bg-raised hover:text-ink"
    >
      <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
};
