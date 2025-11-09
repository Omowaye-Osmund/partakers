import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok_logo.png";
import youtubeIcon from "../assets/Youtube_logo.png";

function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: instagramIcon, url: "https://instagram.com" },
    { name: "Tiktok", icon: tiktokIcon, url: "https://tiktok.com" },
    { name: "YouTube", icon: youtubeIcon, url: "https://youtube.com" },
  ];

  return (
    <footer className="bg-linear-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">PARTAKERS</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Youth & Young Adult Ministry
            </p>
            <p className="text-gray-500">
              RCCG Precious People
              <br />
              6 Harthill Street
              <br />
              Manchester
              <br />
              M8 8AG
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to="/connect"
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Connect
              </Link>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Service Times
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold text-gray-900">Every Sunday</p>
              <p>2:00 PM - 4:30 PM</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Partakers. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm mr-2">Follow Us:</span>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:scale-110 hover:shadow-lg group"
                  title={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;