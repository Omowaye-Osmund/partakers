import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import partakersLogo from "../assets/home/partakers-logo.png";
import rccgLogo from "../assets/home/rccg_logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const fontQuicksand = { fontFamily: "'Quicksand', sans-serif" };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Who We Are" },
    { path: "/connect", label: "Visit Us" },
    { path: "/contact-us", label: "Get In Touch" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-[#0a0a0a] border-b border-[#91772F]/30 sticky top-0 z-50 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logos - Same size, properly aligned, pushed left */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group -ml-2">
            {/* Partakers Logo - Make it bigger by using larger h-values */}
            <img
              src={partakersLogo}
              alt="Partakers Logo"
              className="mb-8 h-20 sm:h-24 md:h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />

            <div className="mr-10 h-16 sm:h-20 w-px bg-[#91772F]/40"></div>

            {/* RCCG Logo - Keep normal size */}
            <img
              src={rccgLogo}
              alt="RCCG Logo"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm lg:text-base font-semibold transition-colors duration-300 relative group ${
                  isActive(item.path)
                    ? "text-[#91772F]"
                    : "text-white hover:text-[#91772F]"
                }`}
                style={fontQuicksand}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#91772F] transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#91772F] hover:text-[#A0826D] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-[#91772F]/30">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-[#91772F] bg-[#91772F]/10"
                      : "text-white hover:text-[#91772F] hover:bg-white/5"
                  }`}
                  style={fontQuicksand}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;