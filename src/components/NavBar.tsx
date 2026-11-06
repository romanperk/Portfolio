import { useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "../assets/logo.svg?react";
import { otherHomePath, t } from "../i18n";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: t.nav.home, id: "home" },
  { name: t.nav.experience, id: "experience" },
  { name: t.nav.projects, id: "projects" },
  { name: t.nav.contact, id: "contact" },
];

/**
 * Keeps a clicked link highlighted while the page scrolls to it. A section near the end of the
 * page may not reach the top, and scroll position alone would then highlight the wrong link.
 */
interface ClickLock {
  settled: boolean;
  timer?: ReturnType<typeof setTimeout>;
}

const settleSoon = (lock: ClickLock) => {
  clearTimeout(lock.timer);
  lock.timer = setTimeout(() => {
    lock.settled = true;
  }, 200);
};

export const NavBar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const clickLockRef = useRef<ClickLock | null>(null);

  const goTo = (id: string) => {
    if (clickLockRef.current) clearTimeout(clickLockRef.current.timer);
    const lock: ClickLock = { settled: false };
    clickLockRef.current = lock;
    settleSoon(lock);
    setActive(id);
  };

  useEffect(() => {
    const update = () => {
      const lock = clickLockRef.current;
      if (lock && !lock.settled) {
        settleSoon(lock);
        return;
      }
      // Any scroll after the click's own scroll has ended comes from the visitor.
      clickLockRef.current = null;

      const line = window.innerHeight * 0.4;
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const passed = navigation.filter(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= line;
      });
      setActive(atBottom ? navigation[navigation.length - 1].id : (passed[passed.length - 1]?.id ?? "home"));
    };

    // The browser looks for the URL's section before React has rendered it.
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-line bg-page">
      <nav aria-label={t.nav.label} className="wrap flex h-14 items-center justify-between">
        <a
          href="#home"
          onClick={() => goTo("home")}
          aria-label={t.nav.logo}
          className="text-ink [&_svg]:h-6 [&_svg]:w-auto"
        >
          <Logo aria-hidden="true" />
        </a>

        <div className="flex items-center gap-2">
          <ul className="mr-2 hidden items-center gap-6 sm:flex">
            {navigation.map(({ name, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => goTo(id)}
                  aria-current={active === id ? "location" : undefined}
                  className={`py-2 text-sm transition-colors duration-150 hover:text-ink ${
                    active === id ? "text-ink underline decoration-accent decoration-2 underline-offset-8" : "text-body"
                  }`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Keeps the visitor on the section they were reading. */}
          <a
            href={active === "home" ? otherHomePath : `${otherHomePath}#${active}`}
            hrefLang={t.languageSwitch.short.toLowerCase()}
            aria-label={t.languageSwitch.label}
            title={t.languageSwitch.label}
            className="flex size-10 items-center justify-center rounded-lg font-mono text-[13px] text-body transition-colors duration-150 hover:bg-raised hover:text-ink"
          >
            {t.languageSwitch.short}
          </a>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="flex size-10 items-center justify-center rounded-lg text-body transition-colors duration-150 hover:bg-raised hover:text-ink sm:hidden"
          >
            {menuOpen ? (
              <LuX size={18} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <LuMenu size={18} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul
          id="mobile-menu"
          className="fade-down absolute inset-x-0 top-full border-b border-line bg-page px-4 py-2 sm:hidden"
        >
          {navigation.map(({ name, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => {
                  goTo(id);
                  setMenuOpen(false);
                }}
                aria-current={active === id ? "location" : undefined}
                className={`flex h-11 items-center rounded-lg px-2 text-[15px] transition-colors duration-150 hover:bg-raised ${
                  active === id ? "font-medium text-ink" : "text-body"
                }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
