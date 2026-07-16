// AnnouncementBar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AnnouncementBar() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const fontQuicksand = { fontFamily: "'Quicksand', sans-serif" };

  return (
    <div className="bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-2 sm:gap-3 relative">
        <p
          className="text-white text-xs sm:text-sm font-semibold text-center pr-6"
          style={fontQuicksand}
        >
          🥾 Registration for our Sports Day is now open!{" "}
          <button
            onClick={() => navigate("/events/sports-day")}
            className="underline font-bold hover:text-[#E4CFB2] transition-colors"
          >
            Register Now →
          </button>
        </p>

        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 sm:right-4 text-white/70 hover:text-white transition-colors text-lg leading-none"
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBar;
