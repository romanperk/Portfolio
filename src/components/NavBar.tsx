import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.svg?react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navigation.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md"
          : "backdrop-blur-xs"
      }`}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-x-12 lg:pl-8">
          <Logo />
        </div>
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:pr-8 items-center gap-x-12">
          {navigation.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={
                  activeSection === item.href.substring(1)
                    ? "text-md font-semibold text-white underline decoration-purple-500 underline-offset-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500 rounded"
                    : "text-md font-semibold text-gray-300 hover:text-white cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500 rounded"
                }
              >
                {item.name}
              </button>
            </motion.div>
          ))}
        </div>
      </nav>
      {menuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-gray-900 p-3 rounded-lg shadow-md absolute top-16 right-4 w-38 space-y-2"
        >
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={
                activeSection === item.href.substring(1)
                  ? "block w-full text-left text-sm font-semibold text-white bg-purple-800 px-4 py-2 rounded-lg transition-all duration-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
                  : "block w-full text-left text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
              }
            >
              {item.name}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
};
