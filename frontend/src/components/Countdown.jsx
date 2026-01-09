import React, { useState, useEffect } from "react";

function Countdown() {
  const [serviceStatus, setServiceStatus] = useState(null);

  useEffect(() => {
    const checkServiceTime = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();

      // Only show countdown on Sundays
      if (dayOfWeek !== 0) {
        setServiceStatus(null);
        return;
      }

      // Service is every Sunday 2:00 PM - 4:30 PM
      const serviceStart = new Date(now);
      serviceStart.setHours(14, 0, 0, 0); // 2:00 PM

      const serviceEnd = new Date(now);
      serviceEnd.setHours(16, 30, 0, 0); // 4:30 PM

      const minutesToService = Math.floor((serviceStart - now) / 60000);

      // Show "Starting Soon" 60 minutes before service (1:00 PM - 2:00 PM)
      if (minutesToService > 0 && minutesToService <= 60) {
        setServiceStatus({
          type: "soon",
          minutes: minutesToService,
        });
        return;
      }

      // Show "Live Now" during service (2:00 PM - 4:30 PM)
      if (now >= serviceStart && now < serviceEnd) {
        setServiceStatus({
          type: "live",
        });
        return;
      }

      // Hide outside these windows
      setServiceStatus(null);
    };

    checkServiceTime();
    const timer = setInterval(checkServiceTime, 60000); // Check every minute
    return () => clearInterval(timer);
  }, []);

  const fontLeague = { fontFamily: "'League Spartan', sans-serif" };
  const fontQuicksand = { fontFamily: "'Quicksand', sans-serif" };

  // Starting Soon State (Gold/Bronze box)
  if (serviceStatus?.type === "soon") {
    return (
      <div className="text-center">
        <div className="bg-[#91772F] backdrop-blur-md border-2 border-[#E4CFB2] rounded-2xl p-3 sm:p-4 inline-block animate-pulse shadow-2xl">
          <h3
            className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1"
            style={fontLeague}
          >
            Service Starts in {serviceStatus.minutes} Minute
            {serviceStatus.minutes !== 1 ? "s" : ""}!
          </h3>
          <p
            className="text-sm sm:text-base text-white/95"
            style={fontQuicksand}
          >
            Get ready to join us
          </p>
        </div>
      </div>
    );
  }

  // Live Now State (Purple box)
  if (serviceStatus?.type === "live") {
    return (
      <div className="text-center">
        <div className="bg-[#742F8D] backdrop-blur-md border-2 border-[#91772F] rounded-2xl p-3 sm:p-4 inline-block animate-pulse shadow-2xl">
          <h3
            className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1"
            style={fontLeague}
          >
            🔴 Service is LIVE NOW!
          </h3>
          <p
            className="text-sm sm:text-base text-white/95"
            style={fontQuicksand}
          >
            Join us for an amazing experience
          </p>
        </div>
      </div>
    );
  }

  // Hidden State (returns nothing)
  return null;
}

export default Countdown;
