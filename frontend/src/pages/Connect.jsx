// import React from "react";
// import instagramIcon from "../assets/instagram.png";
// import tiktokIcon from "../assets/tiktok_logo.png";
// import youtubeIcon from "../assets/Youtube_logo.png";
// import clockIcon from "../assets/clock.png";
// import calendarIcon from "../assets/date.png";
// import locationIcon from "../assets/location.png";

// function Connect() {
//   const socialLinks = [
//     {
//       name: "Instagram",
//       icon: instagramIcon,
//       url: "https://www.instagram.com/partakersmanchester?igsh=M2k5aHllcDJvdTZq",
//       handle: "@Partakersmanchester",
//     },
//     {
//       name: "TikTok",
//       icon: tiktokIcon,
//       url: "https://www.tiktok.com/@partakerschurch?_r=1&_t=ZS-91Ex1o2AElc",
//       handle: "@partakerschurch",
//     },
//     {
//       name: "YouTube",
//       icon: youtubeIcon,
//       url: "https://youtube.com/@partakersmanchester?si=NKs7ZA-h24moG9Rm",
//       handle: "@Partakersmanchester",
//     },
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 py-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
//             Connect With Us
//           </h1>
//           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//             Join our community and experience God's presence every Sunday
//           </p>
//         </div>
//       </section>

//       {/* Service Times */}
//       <section className="py-20 bg-linear-to-b from-white to-blue-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             Join Us Every Sunday
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Time Card */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-20 h-20 mx-auto mb-6">
//                 <img
//                   src={clockIcon}
//                   alt="Time"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
//                 Service Time
//               </h3>
//               <p className="text-4xl font-bold text-blue-600 text-center">
//                 2:00 PM
//               </p>
//               <p className="text-lg text-gray-500 text-center my-2">to</p>
//               <p className="text-4xl font-bold text-blue-600 text-center">
//                 4:00 PM
//               </p>
//             </div>

//             {/* Day Card */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-20 h-20 mx-auto mb-6">
//                 <img
//                   src={calendarIcon}
//                   alt="Calendar"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
//                 Every Week
//               </h3>
//               <p className="text-5xl font-bold text-indigo-600 text-center">
//                 Sunday
//               </p>
//             </div>

//             {/* Location Card */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-20 h-20 mx-auto mb-6">
//                 <img
//                   src={locationIcon}
//                   alt="Location"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
//                 Location
//               </h3>
//               <p className="text-xl font-bold text-blue-600 text-center">
//                 RCCG Precious People
//               </p>
//                 <p className="text-base text-gray-600 text-center mt-2">
//                   6 Harthill Street
//                   <br />
//                   Manchester
//                   <br />
//                   M8 8AG
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Social Media */}
//       <section className="py-20 bg-linear-to-b from-blue-50 to-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Follow Our Journey
//             </h2>
//             <p className="text-xl text-gray-600">
//               Stay updated with our latest content
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {socialLinks.map((social, idx) => (
//               <a
//                 key={idx}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
//               >
//                 {/* Icon */}
//                 <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden">
//                   <img
//                     src={social.icon}
//                     alt={social.name}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>

//                 {/* Platform Name */}
//                 <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
//                   {social.name}
//                 </h3>

//                 {/* Handle */}
//                 <p className="text-gray-600 text-center mb-6">
//                   {social.handle}
//                 </p>

//                 {/* CTA Button */}
//                 <div className="flex justify-center">
//                   <span className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
//                     Follow Us
//                   </span>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-20 bg-linear-to-b from-white to-blue-50">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Get In Touch
//             </h2>
//             <p className="text-xl text-gray-600">
//               Have questions, Need prayers? you can contact us via email:
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Email Card */}
//             <a
//               href="mailto:partakers@pppchurch.org"
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
//             >
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg
//                   className="w-8 h-8 text-blue-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
//               <p className="text-blue-600 font-medium">
//                 partakersppp@gmail.com
//               </p>
//             </a>

//             {/* Phone Card */}
//             <a
//               href="tel:01618359000"
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
//             >
//               <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg
//                   className="w-8 h-8 text-amber-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
//               <p className="text-amber-600 font-medium">
//                 +447535703955 or 01618359000
//               </p>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-24 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
//             See You This Sunday
//           </h2>
//           <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
//             Be part of something powerful
//           </p>
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block">
//             <p className="text-3xl font-bold text-white mb-2">
//               Every Sunday | 2:00 PM - 4:30 PM
//             </p>
//             <p className="text-xl text-blue-100">
//               RCCG Precious People Parish
//               <br />
//               6 Harthill Street
//               <br />
//               Manchester
//               <br />
//               M8 8AG
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Connect;


import React from "react";
import { useNavigate } from "react-router-dom";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok_logo.png";
import youtubeIcon from "../assets/Youtube_logo.png";

function Connect() {
  const navigate = useNavigate();

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
      <section className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 animate-fade-in">
            Connect With Us
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 animate-fade-in-delayed">
            Join our community and grow in faith together
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Service Times
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Every Sunday at RCCG Precious People Parish
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* First Sunday */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-1">
              <div className="bg-blue-600 px-5 py-3 group-hover:bg-blue-700 transition-colors duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white">First Sunday</h3>
                <p className="text-blue-100 text-xs sm:text-sm">of each month</p>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-baseline justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">3:00</span>
                  <span className="text-xl sm:text-2xl text-gray-600 mx-2">—</span>
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">5:00</span>
                  <span className="text-lg sm:text-xl text-gray-600 ml-2">PM</span>
                </div>
                <p className="text-center text-gray-600 font-medium text-sm sm:text-base">
                  Youth & Young Adults
                </p>
              </div>
            </div>

            {/* Other Sundays */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-indigo-300 transition-all duration-500 hover:-translate-y-1">
              <div className="bg-indigo-600 px-5 py-3 group-hover:bg-indigo-700 transition-colors duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white">Other Sundays</h3>
                <p className="text-indigo-100 text-xs sm:text-sm">of the month</p>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-baseline justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">2:00</span>
                  <span className="text-xl sm:text-2xl text-gray-600 mx-2">—</span>
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">4:30</span>
                  <span className="text-lg sm:text-xl text-gray-600 ml-2">PM</span>
                </div>
                <p className="text-center text-gray-600 font-medium text-sm sm:text-base">
                  Youth & Young Adults
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-1">
                    <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Location</h3>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">Precious House</p>
                  <p className="text-gray-600 text-sm">6 Harthill Street, Manchester M8 8AG</p>
                </div>
                <a
                  href="https://maps.google.com/?q=6+Harthill+Street+Manchester+M8+8AG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Follow Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Stay connected and join our online community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-2"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  {social.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">{social.handle}</p>
                <span className="inline-block px-4 py-2 bg-blue-600 group-hover:bg-blue-700 text-white rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 group-hover:scale-105">
                  Follow
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600">We'd love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <a
              href="mailto:partakersppp@gmail.com"
              className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-blue-600 font-medium text-xs sm:text-sm">
                partakersppp@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+447535703955"
              className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-blue-600 font-medium text-xs sm:text-sm">+447535703955</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            We Can't Wait to Meet You
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6">
            Join us this Sunday for worship and fellowship
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}

export default Connect;