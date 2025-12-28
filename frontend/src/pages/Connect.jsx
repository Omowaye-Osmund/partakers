// Connect.jsx - Service Times, Location, Social Media
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok_logo.png";
import youtubeIcon from "../assets/Youtube_logo.png";

function Connect() {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  const churchLocation = {
    lat: 53.5075,
    lng: -2.2542,
    address: "6 Harthill Street, Manchester M8 8AG",
  };

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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });

          // Calculate distance using Haversine formula
          const R = 3959; // Earth's radius in miles
          const dLat = ((churchLocation.lat - userLat) * Math.PI) / 180;
          const dLng = ((churchLocation.lng - userLng) * Math.PI) / 180;
          const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((userLat * Math.PI) / 180) *
              Math.cos((churchLocation.lat * Math.PI) / 180) *
              Math.sin(dLng / 2) *
              Math.sin(dLng / 2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          const distanceInMiles = R * c;
          setDistance(distanceInMiles.toFixed(1));
        },
        (error) => {
          console.log("Location access denied");
        }
      );
    }
  }, []);

  const handleGetDirections = () => {
    if (userLocation) {
      window.open(
        `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/6+Harthill+Street+Manchester+M8+8AG`,
        "_blank"
      );
    } else {
      window.open(
        "https://www.google.com/maps/dir//6+Harthill+Street+Manchester+M8+8AG",
        "_blank"
      );
    }
  };

  const fontLeague = { fontFamily: "'League Spartan', sans-serif" };
  const fontQuicksand = { fontFamily: "'Quicksand', sans-serif" };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
            style={fontLeague}
          >
            Connect With Us
          </h1>
          <p
            className="text-base sm:text-lg text-[#E4CFB2]"
            style={fontQuicksand}
          >
            Join our community every Sunday
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1591] mb-2"
              style={fontLeague}
            >
              Service Times
            </h2>
            <p
              className="text-base sm:text-lg text-gray-600"
              style={fontQuicksand}
            >
              Join us every Sunday
            </p>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-xl p-6 sm:p-8 hover:border-[#91772F] hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-xl mb-4 flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold text-[#1F1591] mb-3"
              style={fontLeague}
            >
              Every Sunday
            </h3>
            <div className="flex items-center justify-center gap-3 mb-3">
              <span
                className="text-4xl sm:text-5xl font-black text-gray-900"
                style={fontLeague}
              >
                2:00 PM
              </span>
              <span className="text-2xl text-gray-600">—</span>
              <span
                className="text-4xl sm:text-5xl font-black text-gray-900"
                style={fontLeague}
              >
                4:30 PM
              </span>
            </div>
            <p
              className="text-gray-700 text-base sm:text-lg"
              style={fontQuicksand}
            >
              Youth & Young Adults Service
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1591] mb-2"
              style={fontLeague}
            >
              Where We Meet
            </h2>
            <p
              className="text-base sm:text-lg text-gray-600"
              style={fontQuicksand}
            >
              Come visit us at Precious House
            </p>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-xl p-6 sm:p-8 hover:border-[#91772F] hover:shadow-xl transition-all duration-300">
            <div className="flex items-start mb-5">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl font-bold text-[#1F1591] mb-2"
                  style={fontLeague}
                >
                  Precious House
                </h3>
                <p
                  className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3"
                  style={fontQuicksand}
                >
                  6 Harthill Street
                  <br />
                  Manchester M8 8AG
                </p>
                {distance && (
                  <div className="inline-block bg-[#E4CFB2] px-4 py-2 rounded-lg mb-4">
                    <p
                      className="text-[#742F8D] font-bold text-sm"
                      style={fontQuicksand}
                    >
                      📍 {distance} miles from your location
                    </p>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleGetDirections}
              className="w-full bg-gradient-to-r from-[#1F1591] to-[#742F8D] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={fontQuicksand}
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1591] mb-2"
              style={fontLeague}
            >
              Follow Us
            </h2>
            <p
              className="text-base sm:text-lg text-gray-600"
              style={fontQuicksand}
            >
              Stay connected on social media
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-[#91772F] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1F1591]"
                    style={fontLeague}
                  >
                    {social.name}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm mb-3" style={fontQuicksand}>
                  {social.handle}
                </p>
                <span
                  className="inline-block bg-gradient-to-r from-[#1F1591] to-[#742F8D] text-white px-4 py-2 rounded-lg font-semibold text-sm"
                  style={fontQuicksand}
                >
                  Follow
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-14 bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-2"
            style={fontLeague}
          >
            We Can't Wait to Meet You
          </h2>
          <p
            className="text-base sm:text-lg text-[#E4CFB2] mb-6"
            style={fontQuicksand}
          >
            Join us this Sunday for worship and fellowship
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#91772F] text-white hover:bg-[#91772F]/90 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              style={fontQuicksand}
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1F1591] px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
              style={fontQuicksand}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Connect;
