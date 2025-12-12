// Footer.jsx - Fully Responsive
import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok_logo.png";
import youtubeIcon from "../assets/Youtube_logo.png";

function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: instagramIcon,
      url: "https://www.instagram.com/partakersmanchester?igsh=M2k5aHllcDJvdTZq",
    },
    {
      name: "TikTok",
      icon: tiktokIcon,
      url: "https://www.tiktok.com/@partakerschurch?_r=1&_t=ZS-91Ex1o2AElc",
    },
    {
      name: "YouTube",
      icon: youtubeIcon,
      url: "https://youtube.com/@partakersmanchester?si=NKs7ZA-h24moG9Rm",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <h3 
              className="text-xl sm:text-2xl font-bold text-[#1F1591] mb-2 sm:mb-3" 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              PARTAKERS
            </h3>
            <p className="text-sm sm:text-base text-[#742F8D] font-semibold mb-2 sm:mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Youth & Young Adult Ministry
            </p>
            <div className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              <p className="font-medium text-gray-700">RCCG Precious People</p>
              <p>6 Harthill Street</p>
              <p>Manchester M8 8AG</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-600 hover:text-[#91772F] transition-colors duration-200 text-xs sm:text-sm"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-600 hover:text-[#91772F] transition-colors duration-200 text-xs sm:text-sm"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                About Us
              </Link>
              <Link
                to="/connect"
                className="block text-gray-600 hover:text-[#91772F] transition-colors duration-200 text-xs sm:text-sm"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Connect
              </Link>
            </div>
          </div>

          {/* Service Times */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              Service Times
            </h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              <div>
                <p className="font-semibold text-gray-700">First Sunday</p>
                <p className="text-gray-600">3:00 PM - 5:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Other Sundays</p>
                <p className="text-gray-600">2:00 PM - 4:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-[10px] sm:text-xs text-center sm:text-left order-2 sm:order-1" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            © 2025 Partakers. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3 order-1 sm:order-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:border-[#91772F] hover:shadow-md transition-all duration-300"
                title={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;