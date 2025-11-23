import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "../components/Countdown";

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const slides = [
    "https://res.cloudinary.com/dgtybnlwy/image/upload/w_1920,q_auto,f_auto/v1763850093/IMG_3436_dr5vgj.jpg",
    "https://res.cloudinary.com/dgtybnlwy/image/upload/w_1920,q_auto,f_auto/v1763850127/phonto_1_qmlrnj.jpg",
    "https://res.cloudinary.com/dgtybnlwy/image/upload/w_1920,q_auto,f_auto/v1763850080/IMG_0591_ulgarn.jpg",
    "https://res.cloudinary.com/dgtybnlwy/image/upload/w_1920,q_auto,f_auto/v1763850064/IMG_0668_ons4mg.jpg",
    "https://res.cloudinary.com/dgtybnlwy/image/upload/w_1920,q_auto,f_auto/v1763849994/IMG_0550_knshl0.jpg",
  ];

  useEffect(() => {
    slides.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [index]: true }));
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const whatWeDoItems = [
    {
      title: "Spreading the Gospel",
      desc: "Sharing the good news of Christ with our community and beyond",
    },
    {
      title: "Discipling Others",
      desc: "Mentoring and growing together in faith and knowledge",
    },
    {
      title: "Performing Miracles",
      desc: "Witnessing God's power through prayer and faith",
    },
    {
      title: "Shining Our Light",
      desc: "Being examples of Christ's love in everything we do",
    },
    {
      title: "Serving Community",
      desc: "Making a positive impact through acts of service",
    },
    {
      title: "Representing Christ",
      desc: "Living as ambassadors of His grace and truth",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - More Compact */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-800 via-indigo-800 to-purple-800"></div>

        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {imagesLoaded[index] && (
                <img
                  src={slide}
                  alt={`Service highlight ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              )}
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-linear-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70"></div>

        <div className="relative z-10 w-full px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-3 sm:mb-4 tracking-tight drop-shadow-2xl">
                PARTAKERS
              </h1>
              <p className="text-lg sm:text-xl text-white font-medium drop-shadow-lg">
                Youth & Young Adults
              </p>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-light max-w-3xl mx-auto drop-shadow-lg">
              Discipling people to be{" "}
              <span className="text-amber-400 font-bold">Partakers</span> of
              Christ, the Holy Spirit, and God's holiness
            </p>

            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-5 sm:p-6 max-w-xl mx-auto border border-white/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                Join Us Every Sunday
              </h2>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-2 drop-shadow-lg">
                2:00 PM - 4:30 PM
              </div>
              <div className="text-sm sm:text-base text-white">
                <p className="font-semibold">RCCG Precious People Parish</p>
                <p className="text-white/90 mt-1">
                  6 Harthill Street, Manchester M8 8AG
                </p>
              </div>
            </div>

            <Countdown />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
              <button
                onClick={() => navigate("/connect")}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Join Us This Sunday
              </button>
              <button
                onClick={() => navigate("/about")}
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105"
              >
                Our Mission
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-amber-400"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Who We Are - Compact */}
      <section className="py-12 sm:py-16 bg-linear-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The youth and young adult branch of RCCG Precious People Parish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "Loving Selflessly",
                desc: "Known by our deep, selfless love for others through actions, not just words.",
                verse: "John 13:35",
              },
              {
                title: "Pursuing Excellence",
                desc: "Striving for excellence in everything we do, representing Christ on Earth.",
                verse: "Ecclesiastes 9:10",
              },
              {
                title: "Prayer & Fasting",
                desc: "Regularly seeking God's face, knowing we are nothing without Christ.",
                verse: "Matthew 6:6",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl mb-4 flex items-center justify-center text-white text-lg sm:text-xl font-bold group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                  {item.desc}
                </p>
                <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                  {item.verse}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Compact */}
      <section className="py-12 sm:py-16 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Called to partake in Christ's work on Earth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whatWeDoItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                <div className="inline-flex items-center justify-center w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 text-white rounded-lg font-bold text-lg mb-3 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Compact */}
      <section className="py-12 sm:py-16 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Be Part of Something Greater
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            Join a community of young believers passionate about growing in
            faith and making a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => navigate("/connect")}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Connected
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105"
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