import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export const NavBar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex gap-x-12 mx-auto">
          {navigation.map((item) => (
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
          ))}
        </div>
      </nav>
    </header>
  );
};
