import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";
import { TechStack } from "./pages/TechStack";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/techstack" element={<TechStack />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
