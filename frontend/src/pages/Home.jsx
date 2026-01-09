import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "../components/Countdown";

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentService, setCurrentService] = useState(null);

  const slides = [
    "/src/assets/home/service1.jpg",
    "/src/assets/home/service2.jpg",
    "/src/assets/home/service3.jpg",
    "/src/assets/home/service4.jpg",
    "/src/assets/home/service5.jpg",
  ];

  const whoWeAreItems = [
    {
      title: "Loving Selflessly",
      desc: "Known by our deep, selfless love for others through actions, not just words.",
      verse: "John 13:35",
      image: "/src/assets/home/loving-selflessly.jpeg",
    },
    {
      title: "Pursuing Excellence",
      desc: "Striving for excellence in everything we do, representing Christ on Earth.",
      verse: "Ecclesiastes 9:10",
      image: "/src/assets/home/pursuing_excellence.jpeg",
    },
  ];

  const whatWeDoItems = [
    {
      title: "Spreading the Gospel",
      desc: "Sharing the good news of Christ with our community and beyond",
      image: "/src/assets/home/spreading_the_gospel.jpeg",
    },
    {
      title: "Discipling Others",
      desc: "Growing together in faith and knowledge",
      image: "/src/assets/home/discipling.jpeg",
    },
    {
      title: "Shining Our Light",
      desc: "Being examples of Christ's love in everything we do",
      image: "/src/assets/home/discipling_others.jpeg",
    },
    {
      title: "Serving Community",
      desc: "Making a positive impact through acts of service to our community",
      image: "/src/assets/home/serving_the_community.jpeg",
    },
  ];

  useEffect(() => {
    const now = new Date();
    const sundayOfMonth = Math.ceil(now.getDate() / 7);
    setCurrentService({
      time: sundayOfMonth === 1 ? "3:00 PM - 5:00 PM" : "2:00 PM - 4:30 PM",
      type: sundayOfMonth === 1 ? "First Sunday" : "Regular Sunday",
    });

    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  const fontLeague = { fontFamily: "'League Spartan', sans-serif" };
  const fontQuicksand = { fontFamily: "'Quicksand', sans-serif" };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section - Fixed Text Visibility */}
      <section className="relative h-[500px] sm:h-[580px] md:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Service ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* STRONG Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

        {/* Content with Enhanced Text Shadows */}
        <div className="relative z-10 w-full px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-3 sm:space-y-4">
            <div>
              <h1
                className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-2 tracking-tight"
                style={{
                  ...fontLeague,
                  textShadow:
                    "0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)",
                }}
              >
                PARTAKERS
              </h1>
              <p
                className="text-sm sm:text-base text-white font-medium"
                style={{
                  ...fontQuicksand,
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                Youth & Young Adults
              </p>
            </div>

            <p
              className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light max-w-3xl mx-auto px-4"
              style={{
                ...fontQuicksand,
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
              }}
            >
              Discipling people to be{" "}
              <span className="text-[#91772F] font-bold">Partakers</span> of
              Christ, the Holy Spirit, and God's holiness
            </p>

            {/* Service Time Card - Back to Transparent with Strong Text Shadow */}
            <div className="bg-white/25 backdrop-blur-md rounded-2xl p-3 sm:p-4 max-w-lg mx-auto border-2 border-[#91772F]/40 shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-1">
                <svg
                  className="w-4 h-4 text-[#91772F]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2
                  className="text-sm sm:text-base font-bold text-white"
                  style={{
                    ...fontLeague,
                    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                  }}
                >
                  {currentService?.type || "Join Us Every Sunday"}
                </h2>
              </div>
              <div
                className="text-2xl sm:text-3xl font-black text-[#91772F] mb-1"
                style={{
                  ...fontLeague,
                  textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                }}
              >
                {currentService?.time || "2:00 PM - 4:30 PM"}
              </div>
              <div
                className="text-xs sm:text-sm text-white"
                style={{
                  ...fontQuicksand,
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                <p className="font-semibold">Precious House</p>
                <p className="text-white/95 text-xs">
                  6 Harthill Street, Manchester M8 8AG
                </p>
              </div>
            </div>

            <div className="py-1">
              <Countdown />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <button
                onClick={() => navigate("/connect")}
                className="group bg-[#91772F] hover:bg-[#91772F]/90 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-2xl"
                style={fontQuicksand}
              >
                <span className="flex items-center justify-center gap-2">
                  Join Us This Sunday
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => navigate("/about")}
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1F1591] px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
                style={fontQuicksand}
              >
                Our Mission
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-[#91772F]"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-10 sm:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1591] mb-2"
              style={fontLeague}
            >
              Who We Are
            </h2>
            <p
              className="text-sm sm:text-base text-gray-700"
              style={fontQuicksand}
            >
              The youth and young adult branch of RCCG Precious People Parish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {whoWeAreItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-[#91772F]"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute top-3 right-3 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#1F1591] text-xl font-bold shadow-lg"
                    style={fontLeague}
                  >
                    {idx + 1}
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className="text-lg sm:text-xl font-bold text-[#1F1591] mb-2"
                    style={fontLeague}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-700 text-sm leading-relaxed mb-3"
                    style={fontQuicksand}
                  >
                    {item.desc}
                  </p>
                  <div className="inline-block bg-[#E4CFB2] px-3 py-1.5 rounded-lg">
                    <p
                      className="text-[#742F8D] font-bold text-xs sm:text-sm"
                      style={fontQuicksand}
                    >
                      {item.verse}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1591] mb-2"
              style={fontLeague}
            >
              What We Do
            </h2>
            <p
              className="text-sm sm:text-base text-gray-700"
              style={fontQuicksand}
            >
              Called to partake in Christ's work on Earth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whatWeDoItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-[#91772F] hover:-translate-y-1"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute top-3 right-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1F1591] text-lg font-bold shadow-lg"
                    style={fontLeague}
                  >
                    {idx + 1}
                  </div>
                </div>

                <div className="p-4 border-t-4 border-[#91772F]">
                  <h3
                    className="text-sm sm:text-base font-bold text-[#1F1591] mb-2"
                    style={fontLeague}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-700 text-xs sm:text-sm leading-relaxed"
                    style={fontQuicksand}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - With Color Palette */}
      <section className="py-10 sm:py-12 bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2"
            style={fontLeague}
          >
            Be Part of Something Greater
          </h2>
          <p
            className="text-sm sm:text-base text-[#E4CFB2] mb-5"
            style={fontQuicksand}
          >
            Join a community of young believers passionate about growing in
            faith and making a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <button
              onClick={() => navigate("/connect")}
              className="bg-[#91772F] text-white hover:bg-[#91772F]/90 px-6 sm:px-7 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg"
              style={fontQuicksand}
            >
              Get Connected
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1F1591] px-6 sm:px-7 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105"
              style={fontQuicksand}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;