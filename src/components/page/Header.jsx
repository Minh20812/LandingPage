import React, { useState } from "react";
import { Plane, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="px-4 lg:px-6 h-16 fixed top-0 w-full flex items-center border-b justify-between bg-white z-50 shadow">
      <a className="flex items-center justify-center" href="/">
        <Plane className="h-6 w-6" />
        <span className="ml-2 text-xl font-bold">TravelEasy</span>
      </a>

      <button
        className="text-gray-800 lg:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full h-full bg-white transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <a href="#" className="flex items-center gap-2">
            <Plane className="h-6 w-6" />
            <span className="text-xl font-bold text-gray-800">TravelEasy</span>
          </a>
          <button
            className="text-gray-800"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="mt-8 space-y-6 px-6">
          {["Home", "Destinations", "Tours", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`${item.toLowerCase()}`}
                className="block text-lg font-medium text-gray-700 hover:text-primary-600"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-6 px-4 py-4">
        {["Home", "Destinations", "Tours", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`${item.toLowerCase()}`}
            className="text-sm font-medium text-gray-700 hover:underline underline-offset-4"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
