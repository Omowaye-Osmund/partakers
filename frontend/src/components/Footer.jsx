// import React from "react";
// import { Link } from "react-router-dom";
// import instagramIcon from "../assets/instagram.png";
// import tiktokIcon from "../assets/tiktok_logo.png";
// import youtubeIcon from "../assets/Youtube_logo.png";

// function Footer() {
//   const socialLinks = [
//     { name: "Instagram", icon: instagramIcon, url: "https://instagram.com" },
//     { name: "Tiktok", icon: tiktokIcon, url: "https://tiktok.com" },
//     { name: "YouTube", icon: youtubeIcon, url: "https://youtube.com" },
//   ];

//   return (
//     <footer className="bg-linear-to-b from-gray-50 to-white border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//           {/* Brand */}
//           <div className="md:col-span-2">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">PARTAKERS</h3>
//             <p className="text-gray-500">
//            Precious house
//               <br />
//               6 Harthill Street
//               <br />
//               Manchester
//               <br />
//               M8 8AG
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-bold text-gray-900 mb-6">
//               Quick Links
//             </h4>
//             <div className="space-y-3">
//               <Link
//                 to="/"
//                 className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/connect"
//                 className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
//               >
//                 Connect
//               </Link>
//             </div>
//           </div>

//           {/* Service Times */}
//           <div>
//             <h4 className="text-lg font-bold text-gray-900 mb-6">
//               Service Times
//             </h4>
//             <div className="space-y-2 text-gray-600">
//               <p className="font-semibold text-gray-900">Every Sunday</p>
//               <p>2:00 PM - 4:30 PM</p>
//             </div>
//           </div>
//         </div>

//         {/* Social Links & Copyright */}
//         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//           {/* Copyright */}
//           <p className="text-gray-500 text-sm text-center md:text-left">
//             © 2025 Partakers. All rights reserved.
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4">
//             <span className="text-gray-600 text-sm mr-2">Follow Us:</span>
//             <div className="flex gap-3">
//               {socialLinks.map((social, idx) => (
//                 <a
//                   key={idx}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:scale-110 hover:shadow-lg group"
//                   title={social.name}
//                 >
//                   <img
//                     src={social.icon}
//                     alt={social.name}
//                     className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok_logo.png";
import youtubeIcon from "../assets/Youtube_logo.png";

function Footer() {
  const socialLinks = [
    { 
      name: "Instagram", 
      icon: instagramIcon, 
      url: "https://www.instagram.com/partakersmanchester?igsh=M2k5aHllcDJvdTZq" 
    },
    { 
      name: "TikTok", 
      icon: tiktokIcon, 
      url: "https://www.tiktok.com/@partakerschurch?_r=1&_t=ZS-91Ex1o2AElc" 
    },
    { 
      name: "YouTube", 
      icon: youtubeIcon, 
      url: "https://youtube.com/@partakersmanchester?si=NKs7ZA-h24moG9Rm" 
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#E4CFB2] to-white border-t-2 border-[#91772F]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 
              className="text-3xl font-bold text-[#1F1591] mb-4" 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              PARTAKERS
            </h3>
            <p className="text-[#742F8D] text-lg font-semibold leading-relaxed mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Youth & Young Adult Ministry
            </p>
            <p className="text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              RCCG Precious People
              <br />
              6 Harthill Street
              <br />
              Manchester
              <br />
              M8 8AG
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#1F1591] mb-6" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-gray-700 hover:text-[#91772F] transition-colors duration-300 font-medium"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-[#91772F] transition-colors duration-300 font-medium"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                About Us
              </Link>
              <Link
                to="/connect"
                className="block text-gray-700 hover:text-[#91772F] transition-colors duration-300 font-medium"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Connect
              </Link>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-bold text-[#1F1591] mb-6" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              Service Times
            </h4>
            <div className="space-y-3 text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              {/* First Sunday */}
              <div>
                <p className="font-semibold text-[#742F8D] text-sm">First Sunday</p>
                <p className="font-medium">3:00 PM - 5:00 PM</p>
              </div>
              {/* Other Sundays */}
              <div>
                <p className="font-semibold text-[#742F8D] text-sm">Other Sundays</p>
                <p className="font-medium">2:00 PM - 4:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t-2 border-[#91772F]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-600 text-sm text-center md:text-left" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            © 2025 Partakers. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 text-sm mr-2 font-medium" style={{ fontFamily: "'Quicksand', sans-serif" }}>Follow Us:</span>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border-2 border-[#91772F] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#91772F] hover:scale-110 hover:shadow-lg group"
                  title={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;