import React, { useState, useEffect } from "react";

function Countdown() {
  const inauguralDate = new Date("2025-11-09T14:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = inauguralDate - now;

      if (distance < 0) {
        setHasEnded(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // If countdown has ended, show different message
  if (hasEnded) {
    return (
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 inline-block">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Service is Live!
          </h3>
          <p className="text-xl text-blue-100">
            Join us now for an amazing worship experience
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Inaugural Service Countdown
      </h3>

      {/* Countdown Cards - Subtle, not too bright */}
      <div className="flex justify-center gap-4 md:gap-6 mb-6">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 min-w-20 md:min-w-[100px]"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm text-blue-100 uppercase tracking-wider font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg md:text-xl text-blue-100">November 9th, 2025</p>
    </div>
  );
}

export default Countdown;