import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import prayerImage from "../assets/contact-us/contact-us-prayer-request.jpeg";
import membershipImage from "../assets/contact-us/contact-us-membership-class.jpeg";
import volunteerImage from "../assets/contact-us/contact-us-volunteer.jpeg";

function ContactUs() {
  const navigate = useNavigate();
  const [prayerRequest, setPrayerRequest] = useState({
    name: "",
    email: "",
    request: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [error, setError] = useState("");

  const handlePrayerSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/prayer-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prayerRequest),
      });

      if (response.ok) {
        setSubmitStatus("sent");
        setPrayerRequest({ name: "", email: "", request: "" });
        setTimeout(() => setSubmitStatus(""), 3000);
      } else {
        throw new Error("Failed to send prayer request");
      }
    } catch (err) {
      setError("Failed to send. Please try again or email us directly.");
      setSubmitStatus("");
    }
  };

  const fontLeague = { fontFamily: "'League Spartan', sans-serif" };
  const fontQuicksand = { fontFamily: "'Quicksand', sans-serif" };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80"
            alt="Church community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F1591]/95 via-[#742F8D]/90 to-[#1D4C80]/95"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
            style={fontLeague}
          >
            Contact Us
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg text-[#E4CFB2]"
            style={fontQuicksand}
          >
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F1591] mb-2"
              style={fontLeague}
            >
              Get In Touch
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600"
              style={fontQuicksand}
            >
              Reach out to us anytime
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <a
              href="mailto:partakersppp@gmail.com"
              className="bg-white border-2 border-gray-100 rounded-lg p-4 sm:p-5 hover:border-[#91772F] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
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
                <div className="min-w-0 flex-1">
                  <h3
                    className="text-sm sm:text-base md:text-lg font-bold text-[#1F1591] mb-0.5"
                    style={fontLeague}
                  >
                    Email Us
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-gray-700 break-words"
                    style={fontQuicksand}
                  >
                    partakersppp@gmail.com
                  </p>
                </div>
              </div>
            </a>
<a
            
              href="tel:+447402706585"
              className="bg-white border-2 border-gray-100 rounded-lg p-4 sm:p-5 hover:border-[#91772F] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
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
                <div className="min-w-0 flex-1">
                  <h3
                    className="text-sm sm:text-base md:text-lg font-bold text-[#1F1591] mb-0.5"
                    style={fontLeague}
                  >
                    Call Us
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-gray-700"
                    style={fontQuicksand}
                  >
                    +44 7402 706585
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Prayer Requests with Image */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F1591] mb-2"
              style={fontLeague}
            >
              Prayer Requests
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600"
              style={fontQuicksand}
            >
              We believe in the power of prayer
            </p>
          </div>

          {/* Side-by-Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
            {/* Image Side */}
            <div className="relative rounded-xl overflow-hidden shadow-lg h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[500px] w-full">
              <img
                src={prayerImage}
                alt="People praying together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1591]/60 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <p
                  className="text-base sm:text-lg md:text-xl font-bold mb-1"
                  style={fontLeague}
                >
                  We're Praying For You
                </p>
                <p className="text-xs sm:text-sm opacity-90" style={fontQuicksand}>
                  Your prayer matters to us
                </p>
              </div>
            </div>

            {/* Form Side */}
            <form
              onSubmit={handlePrayerSubmit}
              className="bg-white border-2 border-gray-100 rounded-lg p-4 sm:p-5 md:p-6 hover:border-[#91772F] transition-all duration-300 h-full w-full"
            >
              <div className="mb-3 sm:mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm"
                  style={fontQuicksand}
                >
                  Your Name{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={prayerRequest.name}
                  onChange={(e) =>
                    setPrayerRequest({ ...prayerRequest, name: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                  style={fontQuicksand}
                  placeholder="Your name"
                />
              </div>

              <div className="mb-3 sm:mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm"
                  style={fontQuicksand}
                >
                  Your Email{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  value={prayerRequest.email}
                  onChange={(e) =>
                    setPrayerRequest({
                      ...prayerRequest,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                  style={fontQuicksand}
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm"
                  style={fontQuicksand}
                >
                  Prayer Request <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  value={prayerRequest.request}
                  onChange={(e) =>
                    setPrayerRequest({
                      ...prayerRequest,
                      request: e.target.value,
                    })
                  }
                  rows="6"
                  className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors resize-none"
                  style={fontQuicksand}
                  placeholder="Share your prayer request..."
                />
              </div>

              {error && (
                <div className="mb-3 p-2.5 bg-red-50 border border-red-200 rounded-lg">
                  <p
                    className="text-red-600 text-xs sm:text-sm"
                    style={fontQuicksand}
                  >
                    {error}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="w-full bg-gradient-to-r from-[#1F1591] to-[#742F8D] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                style={fontQuicksand}
              >
                {submitStatus === "sending"
                  ? "Sending..."
                  : submitStatus === "sent"
                  ? "Sent! ✓"
                  : "Submit Prayer Request"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Get Involved with Images */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F1591] mb-2"
              style={fontLeague}
            >
              Get Involved
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600"
              style={fontQuicksand}
            >
              Join our community and make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Membership Class Card */}
            <div className="group bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#91772F] hover:shadow-xl transition-all duration-300 w-full">
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden w-full">
                <img
                  src={membershipImage}
                  alt="Membership class"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#1F1591]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3
                  className="text-base sm:text-lg font-bold text-[#1F1591] mb-2"
                  style={fontLeague}
                >
                  Membership Class
                </h3>
                <p
                  className="text-xs sm:text-sm text-gray-700 mb-4"
                  style={fontQuicksand}
                >
                  Interested in becoming a member? Sign up for our next
                  membership class.
                </p>
                <a
                  href="https://tally.so/r/7RR8Rz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#1F1591] to-[#742F8D] text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg transition-all duration-300"
                  style={fontQuicksand}
                >
                  Register Interest
                </a>
              </div>
            </div>

            {/* Volunteer Card */}
            <div className="group bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#91772F] hover:shadow-xl transition-all duration-300 w-full">
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden w-full">
                <img
                  src={volunteerImage}
                  alt="Volunteers serving"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#1F1591]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3
                  className="text-base sm:text-lg font-bold text-[#1F1591] mb-2"
                  style={fontLeague}
                >
                  Volunteer With Us
                </h3>
                <p
                  className="text-xs sm:text-sm text-gray-700 mb-4"
                  style={fontQuicksand}
                >
                  Use your gifts to serve and make an impact in our community.
                </p>
                <a
                  href="https://tally.so/r/KYYd7k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#1F1591] to-[#742F8D] text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg transition-all duration-300"
                  style={fontQuicksand}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2"
            style={fontLeague}
          >
            Questions?
          </h2>
          <p
            className="text-sm sm:text-base text-[#E4CFB2] mb-4"
            style={fontQuicksand}
          >
            We're here to help. Reach out anytime!
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#91772F] text-white hover:bg-[#91772F]/90 px-5 sm:px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
            style={fontQuicksand}
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;