// Connect.jsx - Clean & Consistent like About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok_logo.png";
import youtubeIcon from "../assets/Youtube_logo.png";

function Connect() {
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: "Instagram",
      icon: instagramIcon,
      url: "https://www.instagram.com/partakersmanchester?igsh=M2k5aHllcDJvdTZq",
      handle: "@Partakersmanchester",
    },
    {
      name: "TikTok",
      icon: tiktokIcon,
      url: "https://www.tiktok.com/@partakerschurch?_r=1&_t=ZS-91Ex1o2AElc",
      handle: "@partakerschurch",
    },
    {
      name: "YouTube",
      icon: youtubeIcon,
      url: "https://youtube.com/@partakersmanchester?si=NKs7ZA-h24moG9Rm",
      handle: "@Partakersmanchester",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            Connect With Us
          </h1>
          <p className="text-lg sm:text-xl text-[#E4CFB2] max-w-3xl mx-auto" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Join our community and experience God's presence every Sunday
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1591] mb-3 sm:mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              Service Times
            </h2>
            <p className="text-lg sm:text-xl text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Join us every Sunday
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {/* First Sunday */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-[#91772F] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-[#1F1591] to-[#742F8D] rounded-xl mb-4 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  1
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F1591] mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                First Sunday
              </h3>
              <p className="text-[#742F8D] text-xs sm:text-sm font-semibold mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                of each month
              </p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'League Spartan', sans-serif" }}>3:00 PM</span>
                <span className="text-xl text-gray-600">—</span>
                <span className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'League Spartan', sans-serif" }}>5:00 PM</span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Youth & Young Adults Service
              </p>
            </div>

            {/* Other Sundays */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-[#91772F] hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-[#1F1591] to-[#742F8D] rounded-xl mb-4 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  2
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F1591] mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                Other Sundays
              </h3>
              <p className="text-[#742F8D] text-xs sm:text-sm font-semibold mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                of the month
              </p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'League Spartan', sans-serif" }}>2:00 PM</span>
                <span className="text-xl text-gray-600">—</span>
                <span className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'League Spartan', sans-serif" }}>4:30 PM</span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Youth & Young Adults Service
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="mt-8 sm:mt-10 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-[#91772F] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-[#1F1591] to-[#742F8D] rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold mr-3 sm:mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F1591]" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                    Location
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                <span className="font-semibold text-gray-900">Precious House</span><br />
                6 Harthill Street<br />
                Manchester M8 8AG
              </p>
              <a
                href="https://maps.google.com/?q=6+Harthill+Street+Manchester+M8+8AG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-linear-to-r from-[#1F1591] to-[#742F8D] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 sm:py-16 bg-linear-to-b from-[#E4CFB2]/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1F1591] mb-10 sm:mb-12" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            Follow Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-[#91772F] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden mr-3 sm:mr-4">
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1F1591]" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                      {social.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {social.handle}
                </p>
                <span className="inline-block bg-linear-to-r from-[#1F1591] to-[#742F8D] text-white px-5 py-2 rounded-lg font-semibold text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  Follow
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1F1591] mb-10 sm:mb-12" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {/* Email */}
            <a
              href="mailto:partakersppp@gmail.com"
              className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-[#91772F] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-[#1F1591] to-[#742F8D] rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold mr-3 sm:mr-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F1591]" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                    Email Us
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                partakersppp@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+447535703955"
              className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-[#91772F] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-[#1F1591] to-[#742F8D] rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold mr-3 sm:mr-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F1591]" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                    Call Us
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                +447535703955
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-linear-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            We Can't Wait to Meet You
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#E4CFB2] mb-6 sm:mb-8" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Join us this Sunday for worship and fellowship
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#91772F] text-white hover:bg-[#91772F]/90 px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 shadow-lg"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}

export default Connect;