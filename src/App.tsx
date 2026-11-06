import { Analytics } from "@vercel/analytics/react";
import { Footer } from "./components/Footer";
import { homePath, t } from "./i18n";
import { NavBar } from "./components/NavBar";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";

export default function App() {
  // The site is one page per language, and vercel.json sends every other path here too.
  if ((window.location.pathname.replace(/\/+$/, "") || "/") !== homePath) return <NotFound />;

  return (
    <>
      <a
        href="#main"
        className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60]"
      >
        {t.skipToContent}
      </a>
      <NavBar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Home />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
