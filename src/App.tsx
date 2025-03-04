import { NavBar } from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <div id="app" className="isolate text-white">
      <div aria-hidden="true" className="aurora-effect" />
      <NavBar />
      <Home />
      <Experience />
      <Projects />
      <Contact />
      <Analytics />
    </div>
  );
}
