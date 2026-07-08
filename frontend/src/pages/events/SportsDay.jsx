// SportsDay.jsx - Sports Day Event Page
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SportsDay() {
  const navigate = useNavigate();
  const [rsvp, setRsvp] = useState({
    name: "",
    email: "",
    guests: "1",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [error, setError] = useState("");

  // 🔧 PLACEHOLDER: Replace with real Sports Day details
  const event = {
    title: "Sports Day",
    tagline: "A short, exciting tagline about the event",
    date: "Saturday, [Month] [Day], 2026",
    time: "12:00 PM - 4:00 PM",
    location: "Precious House",
    address: "6 Harthill Street, Manchester M8 8AG",
    description:
      "Write a short paragraph describing what Sports Day is about, who it's for, and why people should come. Keep it warm, inviting, and clear.",
    image: "/src/assets/events/sports-day.jpg", // replace with real image
  };

  const handleRsvpSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/event-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...rsvp, event: event.title }),
      });

      if (response.ok) {
        setSubmitStatus("sent");
        setRsvp({ name: "", email: "", guests: "1", message: "" });
        setTimeout(() => setSubmitStatus(""), 3000);
      } else {
        throw new Error("Failed to send RSVP");
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
      {/* Hero Section */}
      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F1591]/95 via-[#742F8D]/90 to-[#1D4C80]/95"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="inline-block bg-[#91772F] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4"
            style={fontQuicksand}
          >
            Upcoming Event
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
            style={fontLeague}
          >
            {event.title}
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg text-[#E4CFB2]"
            style={fontQuicksand}
          >
            {event.tagline}
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* Date */}
            <div className="bg-white border-2 border-gray-100 rounded-xl p-4 sm:p-5 text-center hover:border-[#91772F] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3
                className="text-sm font-bold text-[#1F1591] mb-1"
                style={fontLeague}
              >
                Date
              </h3>
              <p
                className="text-xs sm:text-sm text-gray-700"
                style={fontQuicksand}
              >
                {event.date}
              </p>
            </div>

            {/* Time */}
            <div className="bg-white border-2 border-gray-100 rounded-xl p-4 sm:p-5 text-center hover:border-[#91772F] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                <svg
                  className="w-6 h-6"
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
                className="text-sm font-bold text-[#1F1591] mb-1"
                style={fontLeague}
              >
                Time
              </h3>
              <p
                className="text-xs sm:text-sm text-gray-700"
                style={fontQuicksand}
              >
                {event.time}
              </p>
            </div>

            {/* Location */}
            <div className="bg-white border-2 border-gray-100 rounded-xl p-4 sm:p-5 text-center hover:border-[#91772F] hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                <svg
                  className="w-6 h-6"
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
              <h3
                className="text-sm font-bold text-[#1F1591] mb-1"
                style={fontLeague}
              >
                Location
              </h3>
              <p
                className="text-xs sm:text-sm text-gray-700"
                style={fontQuicksand}
              >
                {event.location}
              </p>
              <p className="text-xs text-gray-500" style={fontQuicksand}>
                {event.address}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 border-2 border-gray-100 rounded-xl p-5 sm:p-6">
            <h2
              className="text-xl sm:text-2xl font-bold text-[#1F1591] mb-3"
              style={fontLeague}
            >
              About This Event
            </h2>
            <p
              className="text-sm sm:text-base text-gray-700 leading-relaxed"
              style={fontQuicksand}
            >
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F1591] mb-2"
              style={fontLeague}
            >
              Reserve Your Spot
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600"
              style={fontQuicksand}
            >
              Let us know you're coming!
            </p>
          </div>

          <form
            onSubmit={handleRsvpSubmit}
            className="bg-white border-2 border-gray-100 rounded-xl p-5 sm:p-6 hover:border-[#91772F] transition-all duration-300"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm"
                style={fontQuicksand}
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={rsvp.name}
                onChange={(e) => setRsvp({ ...rsvp, name: e.target.value })}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                style={fontQuicksand}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm"
                style={fontQuicksand}
              >
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={rsvp.email}
                onChange={(e) => setRsvp({ ...rsvp, email: e.target.value })}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                style={fontQuicksand}
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm"
                style={fontQuicksand}
              >
                Number of Guests
              </label>
              <select
                value={rsvp.guests}
                onChange={(e) => setRsvp({ ...rsvp, guests: e.target.value })}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                style={fontQuicksand}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label
                className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm"
                style={fontQuicksand}
              >
                Message{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <textarea
                value={rsvp.message}
                onChange={(e) => setRsvp({ ...rsvp, message: e.target.value })}
                rows="3"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors resize-none"
                style={fontQuicksand}
                placeholder="Any questions or dietary requirements?"
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
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
              className="w-full bg-gradient-to-r from-[#1F1591] to-[#742F8D] text-white px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50"
              style={fontQuicksand}
            >
              {submitStatus === "sending"
                ? "Sending..."
                : submitStatus === "sent"
                  ? "RSVP Sent! ✓"
                  : "RSVP Now"}
            </button>
          </form>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 sm:py-10 bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-lg sm:text-xl font-bold text-white mb-3"
            style={fontLeague}
          >
            Can't wait to see you there!
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-[#91772F] text-white hover:bg-[#91772F]/90 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
            style={fontQuicksand}
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}

export default SportsDay;
