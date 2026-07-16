// Events.jsx - Upcoming Events Listing
import React from "react";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();

  // 🔧 Add real events here as they come up. Leave empty array for empty state.
  const events = [
    // {
    //   slug: "sports-day",
    //   title: "Sports Day",
    //   tagline: "A short, exciting tagline about the event",
    //   date: "Saturday, [Month] [Day], 2026",
    //   time: "12:00 PM - 4:00 PM",
    //   location: "Precious House",
    //   image: "/src/assets/events/sports-day.jpg",
    // },
  ];

  const fontLeague = { fontFamily: "'League Spartan', sans-serif" };
  const fontQuicksand = { fontFamily: "'Quicksand', sans-serif" };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2" style={fontLeague}>
            Upcoming Events
          </h1>
          <p className="text-base sm:text-lg text-[#E4CFB2]" style={fontQuicksand}>
            Come do life with us
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {events.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E4CFB2]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#91772F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700 text-base sm:text-lg font-semibold mb-1" style={fontLeague}>
                No events scheduled right now
              </p>
              <p className="text-gray-500 text-sm sm:text-base" style={fontQuicksand}>
                Check back soon, or follow us on social media for updates!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/events/${event.slug}`)}
                  className="group cursor-pointer bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#91772F] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span
                        className="inline-block bg-[#91772F] text-white px-3 py-1 rounded-full text-xs font-bold"
                        style={fontQuicksand}
                      >
                        {event.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1F1591] mb-1" style={fontLeague}>
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3" style={fontQuicksand}>
                      {event.tagline}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mb-1" style={fontQuicksand}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500" style={fontQuicksand}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <span
                      className="inline-block mt-4 text-[#742F8D] font-semibold text-xs sm:text-sm group-hover:underline"
                      style={fontQuicksand}
                    >
                      View Details →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Events;