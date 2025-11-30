// // Countdown.jsx
// import React, { useState, useEffect } from "react";

// function Countdown() {
//   const [serviceStatus, setServiceStatus] = useState(null);

//   useEffect(() => {
//     const checkServiceTime = () => {
//       const now = new Date();
//       const dayOfWeek = now.getDay();

//       // Only check on Sundays
//       if (dayOfWeek !== 0) {
//         setServiceStatus(null);
//         return;
//       }

//       // Calculate which Sunday of the month (1st, 2nd, 3rd, etc)
//       const dayOfMonth = now.getDate();
//       const sundayOfMonth = Math.ceil(dayOfMonth / 7);

//       let serviceStart, serviceEnd;

//       if (sundayOfMonth === 1) {
//         // First Sunday: Main church service 9am - 12pm
//         serviceStart = new Date(now);
//         serviceStart.setHours(9, 0, 0, 0);
//         serviceEnd = new Date(now);
//         serviceEnd.setHours(12, 0, 0, 0);
//       } else {
//         // Every other Sunday: Youth service 2pm - 4:30pm
//         serviceStart = new Date(now);
//         serviceStart.setHours(14, 0, 0, 0);
//         serviceEnd = new Date(now);
//         serviceEnd.setHours(16, 30, 0, 0);
//       }

//       const minutesToService = Math.floor((serviceStart - now) / 60000);

//       // Within 1 hour before service
//       if (minutesToService > 0 && minutesToService <= 60) {
//         setServiceStatus({
//           type: "soon",
//           minutes: minutesToService,
//           isMainChurch: sundayOfMonth === 1,
//         });
//         return;
//       }

//       // Service is live
//       if (now >= serviceStart && now < serviceEnd) {
//         setServiceStatus({
//           type: "live",
//           isMainChurch: sundayOfMonth === 1,
//         });
//         return;
//       }

//       setServiceStatus(null);
//     };

//     checkServiceTime();
//     const timer = setInterval(checkServiceTime, 60000); // Check every minute
//     return () => clearInterval(timer);
//   }, []);

//   // Service starting soon
//   if (serviceStatus?.type === "soon") {
//     return (
//       <div className="text-center">
//         <div className="bg-amber-500 backdrop-blur-md border border-amber-400 rounded-2xl p-4 sm:p-6 inline-block animate-pulse">
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
//             Service Starts in {serviceStatus.minutes} Minute
//             {serviceStatus.minutes !== 1 ? "s" : ""}!
//           </h3>
//           <p className="text-base sm:text-lg text-white/90">
//             {serviceStatus.isMainChurch
//               ? "Get ready for main church service"
//               : "Get ready to join us"}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Service is live
//   if (serviceStatus?.type === "live") {
//     return (
//       <div className="text-center">
//         <div className="bg-red-500 backdrop-blur-md border border-red-400 rounded-2xl p-4 sm:p-6 inline-block animate-pulse">
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
//             🔴 Service is LIVE NOW!
//           </h3>
//           <p className="text-base sm:text-lg text-white/90">
//             {serviceStatus.isMainChurch
//               ? "Join us at the main church service"
//               : "Join us for an amazing experience"}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // No service info to display
//   return null;
// }

// export default Countdown;

// Countdown.jsx
import React, { useState, useEffect } from "react";

function Countdown() {
  const [serviceStatus, setServiceStatus] = useState(null);

  useEffect(() => {
    const checkServiceTime = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();

      if (dayOfWeek !== 0) {
        setServiceStatus(null);
        return;
      }

      const dayOfMonth = now.getDate();
      const sundayOfMonth = Math.ceil(dayOfMonth / 7);

      let serviceStart, serviceEnd;

      if (sundayOfMonth === 1) {
        serviceStart = new Date(now);
        serviceStart.setHours(9, 0, 0, 0);
        serviceEnd = new Date(now);
        serviceEnd.setHours(12, 0, 0, 0);
      } else {
        serviceStart = new Date(now);
        serviceStart.setHours(14, 0, 0, 0);
        serviceEnd = new Date(now);
        serviceEnd.setHours(16, 30, 0, 0);
      }

      const minutesToService = Math.floor((serviceStart - now) / 60000);

      if (minutesToService > 0 && minutesToService <= 60) {
        setServiceStatus({
          type: "soon",
          minutes: minutesToService,
          isMainChurch: sundayOfMonth === 1,
        });
        return;
      }

      if (now >= serviceStart && now < serviceEnd) {
        setServiceStatus({
          type: "live",
          isMainChurch: sundayOfMonth === 1,
        });
        return;
      }

      setServiceStatus(null);
    };

    checkServiceTime();
    const timer = setInterval(checkServiceTime, 60000);
    return () => clearInterval(timer);
  }, []);

  if (serviceStatus?.type === "soon") {
    return (
      <div className="text-center">
        <div className="bg-[#91772F] backdrop-blur-md border-2 border-[#E4CFB2] rounded-2xl p-4 sm:p-6 inline-block animate-pulse shadow-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            Service Starts in {serviceStatus.minutes} Minute
            {serviceStatus.minutes !== 1 ? "s" : ""}!
          </h3>
          <p className="text-base sm:text-lg text-white/95" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            {serviceStatus.isMainChurch
              ? "Get ready for main church service"
              : "Get ready to join us"}
          </p>
        </div>
      </div>
    );
  }

  if (serviceStatus?.type === "live") {
    return (
      <div className="text-center">
        <div className="bg-[#742F8D] backdrop-blur-md border-2 border-[#91772F] rounded-2xl p-4 sm:p-6 inline-block animate-pulse shadow-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            🔴 Service is LIVE NOW!
          </h3>
          <p className="text-base sm:text-lg text-white/95" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            {serviceStatus.isMainChurch
              ? "Join us at the main church service"
              : "Join us for an amazing experience"}
          </p>
        </div>
      </div>
    );
  }

  return null;
}

export default Countdown;