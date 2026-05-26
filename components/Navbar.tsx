"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onLogoClick?: () => void;
}

const NAV_LINKS = ["Testing", "Analysis", "About"];

export default function Navbar({ onLogoClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={onLogoClick}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span className="text-red-500 font-bold text-xl leading-none select-none">—</span>
          <span className="font-semibold text-gray-900 text-base tracking-tight group-hover:text-gray-700 transition-colors">
            Guidewire<span className="text-brand-600">AI</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="hidden md:block text-sm text-gray-400 font-medium">
            3 AI tools
          </span>
          <span className="hidden md:block w-px h-4 bg-gray-200" />
          <a
            href="#"
            className="hidden md:block text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Contact Us
          </a>
          <button className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Book a demo
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-1.5 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 mt-3 pt-3 pb-2 px-1 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
