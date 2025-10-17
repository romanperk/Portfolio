import { NavBar } from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="app" className="isolate text-white">
      <div aria-hidden="true" className="aurora-effect" />
      <NavBar />
      <Home />
      <Experience />
      <Projects />
      <Contact />
      <footer className="w-full py-6 text-center text-gray-400 text-sm">
        <p>&copy; {currentYear} Roman Perk. All rights reserved.</p>
      </footer>
      <Analytics />
    </div>
  );
}
