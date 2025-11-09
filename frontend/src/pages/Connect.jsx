import React from "react";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok_logo.png";
import youtubeIcon from "../assets/Youtube_logo.png";
import clockIcon from "../assets/clock.png";
import calendarIcon from "../assets/date.png";
import locationIcon from "../assets/location.png";

function Connect() {
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
      <section className="bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Connect With Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join our community and experience God's presence every Sunday
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-linear-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Join Us Every Sunday
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Time Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={clockIcon}
                  alt="Time"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Service Time
              </h3>
              <p className="text-4xl font-bold text-blue-600 text-center">
                2:00 PM
              </p>
              <p className="text-lg text-gray-500 text-center my-2">to</p>
              <p className="text-4xl font-bold text-blue-600 text-center">
                4:00 PM
              </p>
            </div>

            {/* Day Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={calendarIcon}
                  alt="Calendar"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Every Week
              </h3>
              <p className="text-5xl font-bold text-indigo-600 text-center">
                Sunday
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={locationIcon}
                  alt="Location"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Location
              </h3>
              <p className="text-xl font-bold text-blue-600 text-center">
                RCCG Precious People
              </p>
                <p className="text-base text-gray-600 text-center mt-2">
                  6 Harthill Street
                  <br />
                  Manchester
                  <br />
                  M8 8AG
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Follow Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Platform Name */}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {social.name}
                </h3>

                {/* Handle */}
                <p className="text-gray-600 text-center mb-6">
                  {social.handle}
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <span className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Follow Us
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-linear-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions, Need prayers? you can contact us via email:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Card */}
            <a
              href="mailto:partakers@pppchurch.org"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-blue-600 font-medium">
                partakersppp@gmail.com
              </p>
            </a>

            {/* Phone Card */}
            <a
              href="tel:01618359000"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-amber-600 font-medium">
                +447535703955 or 01618359000
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            See You This Sunday
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Be part of something powerful
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block">
            <p className="text-3xl font-bold text-white mb-2">
              Every Sunday | 2:00 PM - 4:30 PM
            </p>
            <p className="text-xl text-blue-100">
              RCCG Precious People Parish
              <br />
              6 Harthill Street
              <br />
              Manchester
              <br />
              M8 8AG
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Connect;