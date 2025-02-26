import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg?react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Tech stack", href: "/techstack" },
  { name: "Contact", href: "/contact" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex items-center gap-x-12 lg:pl-8">
          <Logo />
        </div>
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none on-hover: cursor-pointer"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className={`hidden lg:flex lg:pr-8 items-center gap-x-12`}>
          {navigation.map((item) => (
            <motion.div whileHover={{ scale: 1.1 }}>
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-md font-semibold text-white underline decoration-purple-500 underline-offset-4 cursor-pointer"
                    : "text-md font-semibold text-gray-300 hover:text-white cursor-pointer"
                }
              >
                {item.name}
              </NavLink>
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
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "block text-sm font-semibold text-white bg-purple-800 px-4 py-2 rounded-lg transition-all duration-300 shadow-sm"
                  : "block text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300"
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </header>
  );
};
