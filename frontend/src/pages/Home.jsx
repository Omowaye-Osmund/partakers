// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Countdown from "../components/Countdown";

// function Home() {
//   const navigate = useNavigate();

//   // Sample media content - replace with your actual videos/images
//   const mediaItems = [
//     {
//       id: 1,
//       type: "video",
//       thumbnail: "/join_us.jpg",
//       videoUrl: "/hello.MP4",
//       title: "Inaguration Service!",
//     },
//     {
//       id: 2,
//       type: "video",
//       thumbnail: "/join_us.jpg",
//       videoUrl: "/aandc.mp4",
//       title: "Prayer Night Highlights",
//     },
//   ];

//   const whatWeDoItems = [
//     {
//       text: "Spreading the Gospel",
//       gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
//     },
//     {
//       text: "Discipling Others",
//       gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
//     },
//     {
//       text: "Performing Miracles",
//       gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
//     },
//     {
//       text: "Shining Our Light",
//       gradient: "bg-gradient-to-br from-amber-500 to-amber-600",
//     },
//     {
//       text: "Serving Community",
//       gradient: "bg-gradient-to-br from-green-500 to-green-600",
//     },
//     {
//       text: "Representing Christ",
//       gradient: "bg-gradient-to-br from-red-500 to-red-600",
//     },
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section - Simplified */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Video Background */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         >
//           <source src="/aandc.mp4" type="video/mp4" />
//         </video>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>

//         {/* Content - Simplified and Better Spaced */}
//         <div className="relative z-10 w-full px-6 py-20">
//           <div className="max-w-6xl mx-auto text-center space-y-16">
//             {/* Church Name */}
//             <div>
//               <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight leading-none">
//                 PARTAKERS
//               </h1>
//               <p className="text-xl md:text-2xl text-blue-100 font-medium">
//                 Youth & Young Adults
//               </p>
//             </div>

//             {/* Mission Statement */}
//             <div>
//               <p className="text-2xl md:text-4xl lg:text-5xl text-white leading-relaxed font-light">
//                 Discipling people to be{" "}
//                 <span className="text-amber-400 font-bold">Partakers</span> of
//                 Christ, the Holy Spirit, and God's holiness
//               </p>
//             </div>

//             {/* Service Times */}
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                 Join Us Every Sunday
//               </h2>
//               <div className="text-5xl md:text-6xl font-black text-amber-400 mb-3">
//                 2:00 PM - 4:00 PM
//               </div>
//               <p className="text-lg md:text-xl text-blue-100">
//                 RCCG Precious People Parish
//                 <p className="text-base text-white-600 text-center mt-2">
//                   6 Harthill Street
//                   <br />
//                   Manchester
//                   <br />
//                   M8 8AG
//                 </p>
//               </p>
//             </div>

//             {/* Countdown */}
//             <div>
//               <Countdown />
//             </div>

//             {/* CTA Buttons - Fixed Spacing */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4 pb-20">
//               <button
//                 onClick={() => navigate("/connect")}
//                 className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
//               >
//                 Join Us This Sunday
//               </button>
//               <button
//                 onClick={() => navigate("/about")}
//                 className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Our Mission
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator - Fixed Position */}
//         <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
//           <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center items-center">
//             <div className="w-2 h-2 bg-white rounded-full"></div>
//           </div>
//         </div>
//       </section>

//       {/* Media Highlights Section - Cleaner Apple Style */}
//       <section className="py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
//               Experience the Moment
//             </h2>
//             <p className="text-lg text-gray-400">
//               Catch up on our latest services, testimonies, and powerful moments
//             </p>
//           </div>

//           {/* Video Grid - Cleaner */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {mediaItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-video cursor-pointer transition-all duration-300 hover:scale-[1.02]"
//               >
//                 {/* Thumbnail/Placeholder */}
//                 <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
//                   {/* Play button */}
//                   <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white shadow-lg">
//                     <svg
//                       className="w-7 h-7 text-gray-900 ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Video Title */}
//                 <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black via-black/70 to-transparent">
//                   <h3 className="text-white text-lg font-semibold">
//                     {item.title}
//                   </h3>
//                 </div>

//                 {/* Hover Effect */}
//                 <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Who We Are Section */}
//       <section className="py-24 bg-linear-to-b from-white to-blue-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               Who We Are
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
//               The youth and young adult branch of RCCG Precious People Parish
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Loving Selflessly",
//                 desc: "Known by our deep, selfless love for others through actions, not just words.",
//                 verse: "John 13:35",
//                 gradient: "from-blue-600 to-blue-700",
//               },
//               {
//                 title: "Pursuing Excellence",
//                 desc: "Striving for excellence in everything we do, representing Christ on Earth.",
//                 verse: "Ecclesiastes 9:10",
//                 gradient: "from-amber-500 to-amber-600",
//               },
//               {
//                 title: "Prayer & Fasting",
//                 desc: "Regularly seeking God's face, knowing we are nothing without Christ.",
//                 verse: "Matthew 6:6",
//                 gradient: "from-indigo-600 to-indigo-700",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div
//                   className={`w-16 h-16 bg-linear-to-br ${item.gradient} rounded-2xl mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform`}
//                 >
//                   {idx + 1}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed mb-4 text-lg">
//                   {item.desc}
//                 </p>
//                 <p className="text-blue-600 font-semibold">{item.verse}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What We Do Section - Fixed Cards */}
//       <section className="py-24 bg-linear-to-b from-blue-50 to-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">
//             What We Do
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {whatWeDoItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`${item.gradient} p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg group`}
//               >
//                 <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
//                   {idx + 1}
//                 </div>
//                 <p className="text-white font-bold text-xl">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Countdown from "../components/Countdown";

// function Home() {
//   const navigate = useNavigate();
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   // Sample media content - replace with your actual videos/images
//   const mediaItems = [
//     {
//       id: 1,
//       type: "video",
//       videoUrl: "/hello.mp4",
//       title: "Inauguration Service!",
//     },
//     {
//       id: 2,
//       type: "video",
//       thumbnail: "/join_us.jpg",
//       videoUrl: "/aandcb.mp4",
//       title: "Welcome to church!",
//     },
//   ];

//   const whatWeDoItems = [
//     {
//       text: "Spreading the Gospel",
//       gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
//     },
//     {
//       text: "Discipling Others",
//       gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
//     },
//     {
//       text: "Performing Miracles",
//       gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
//     },
//     {
//       text: "Shining Our Light",
//       gradient: "bg-gradient-to-br from-amber-500 to-amber-600",
//     },
//     {
//       text: "Serving Community",
//       gradient: "bg-gradient-to-br from-green-500 to-green-600",
//     },
//     {
//       text: "Representing Christ",
//       gradient: "bg-gradient-to-br from-red-500 to-red-600",
//     },
//   ];

//   const handleVideoClick = (item) => {
//     setSelectedVideo(item);
//   };

//   const closeVideo = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <div className="bg-white">
//       {/* Video Modal */}
//       {selectedVideo && (
//         <div
//           className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//           onClick={closeVideo}
//         >
//           <div
//             className="relative w-full max-w-5xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeVideo}
//               className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
//             >
//               <svg
//                 className="w-10 h-10"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Video Player */}
//             <div className="bg-black rounded-lg overflow-hidden">
//               <video
//                 controls
//                 autoPlay
//                 className="w-full"
//                 src={selectedVideo.videoUrl}
//               >
//                 <source src={selectedVideo.videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <div className="p-6 bg-gray-900">
//                 <h3 className="text-2xl font-bold text-white">
//                   {selectedVideo.title}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Hero Section - Improved Responsive */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Video Background */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         >
//           <source src="/aandc.mp4" type="video/mp4" />
//         </video>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>

//         {/* Content - Improved Responsive */}
//         <div className="relative z-10 w-full px-4 sm:px-6 py-12 sm:py-20">
//           <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 lg:space-y-16">
//             {/* Church Name */}
//             <div>
//               <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-none">
//                 PARTAKERS
//               </h1>
//               <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-medium px-4">
//                 Youth & Young Adults
//               </p>
//             </div>

//             {/* Mission Statement */}
//             <div className="px-4">
//               <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-relaxed font-light">
//                 Discipling people to be{" "}
//                 <span className="text-amber-400 font-bold">Partakers</span> of
//                 Christ, the Holy Spirit, and God's holiness
//               </p>
//             </div>

//             {/* Service Times */}
//             <div>
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
//                 Join Us Every Sunday
//               </h2>
//               <div className="text-4xl sm:text-5xl md:text-6xl font-black text-amber-400 mb-2 sm:mb-3">
//                 2:00 PM - 4:00 PM
//               </div>
//               <div className="text-base sm:text-lg md:text-xl text-blue-100">
//                 <p className="font-semibold">RCCG Precious People Parish</p>
//                 <p className="text-sm sm:text-base text-blue-200 mt-2">
//                   6 Harthill Street
//                   <br />
//                   Manchester
//                   <br />
//                   M8 8AG
//                 </p>
//               </div>
//             </div>

//             {/* Countdown */}
//             <div>
//               <Countdown />
//             </div>

//             {/* CTA Buttons - Improved Responsive */}
//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 pb-16 sm:pb-20 px-4">
//               <button
//                 onClick={() => navigate("/connect")}
//                 className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
//               >
//                 Join Us This Sunday
//               </button>
//               <button
//                 onClick={() => navigate("/about")}
//                 className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Our Mission
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator - Hide on mobile */}
//         <div className="hidden sm:block absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
//           <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center items-center">
//             <div className="w-2 h-2 bg-white rounded-full"></div>
//           </div>
//         </div>
//       </section>

//       {/* Media Highlights Section - Improved Responsive */}
//       <section className="py-12 sm:py-16 md:py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           {/* Section Header */}
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
//               Experience the Moment
//             </h2>
//             <p className="text-base sm:text-lg text-gray-400 px-4">
//               Catch up on our latest services, testimonies, and powerful moments
//             </p>
//           </div>

//           {/* Video Grid - Improved Responsive */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {mediaItems.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => handleVideoClick(item)}
//                 className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-video cursor-pointer transition-all duration-300 hover:scale-[1.02]"
//               >
//                 {/* Thumbnail Background */}
//                 <img
//                   src={item.thumbnail}
//                   alt={item.title}
//                   className="absolute inset-0 w-full h-full object-cover opacity-40"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40"></div>

//                 {/* Play button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white shadow-lg">
//                     <svg
//                       className="w-7 h-7 sm:w-9 sm:h-9 text-gray-900 ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Video Title */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
//                   <h3 className="text-white text-base sm:text-lg font-semibold">
//                     {item.title}
//                   </h3>
//                 </div>

//                 {/* Hover Effect */}
//                 <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Who We Are Section - Improved Responsive */}
//       <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
//               Who We Are
//             </h2>
//             <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
//               The youth and young adult branch of RCCG Precious People Parish
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//             {[
//               {
//                 title: "Loving Selflessly",
//                 desc: "Known by our deep, selfless love for others through actions, not just words.",
//                 verse: "John 13:35",
//                 gradient: "from-blue-600 to-blue-700",
//               },
//               {
//                 title: "Pursuing Excellence",
//                 desc: "Striving for excellence in everything we do, representing Christ on Earth.",
//                 verse: "Ecclesiastes 9:10",
//                 gradient: "from-amber-500 to-amber-600",
//               },
//               {
//                 title: "Prayer & Fasting",
//                 desc: "Regularly seeking God's face, knowing we are nothing without Christ.",
//                 verse: "Matthew 6:6",
//                 gradient: "from-indigo-600 to-indigo-700",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div
//                   className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mb-4 sm:mb-6 flex items-center justify-center text-white text-xl sm:text-2xl font-bold group-hover:scale-110 transition-transform`}
//                 >
//                   {idx + 1}
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-base sm:text-lg">
//                   {item.desc}
//                 </p>
//                 <p className="text-blue-600 font-semibold text-sm sm:text-base">
//                   {item.verse}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What We Do Section - Improved Responsive */}
//       <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
//             What We Do
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {whatWeDoItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`${item.gradient} p-6 sm:p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg group`}
//               >
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white font-bold text-xl sm:text-2xl group-hover:scale-110 transition-transform">
//                   {idx + 1}
//                 </div>
//                 <p className="text-white font-bold text-lg sm:text-xl">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "../components/Countdown";

function Home() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Sample media content - replace with your actual videos/images
  const mediaItems = [
    {
      id: 1,
      type: "video",
      thumbnail: "/join_us.jpg",
      videoUrl: "/hello.mp4",
      title: "Inauguration Service!",
    },
    {
      id: 2,
      type: "video",
      thumbnail: "/join_us.jpg",
      videoUrl: "/aandcb.mp4",
      title: "Welcome to church!",
    },
  ];

  const whatWeDoItems = [
    {
      text: "Spreading the Gospel",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      text: "Discipling Others",
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
    {
      text: "Performing Miracles",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      text: "Shining Our Light",
      gradient: "bg-gradient-to-br from-amber-500 to-amber-600",
    },
    {
      text: "Serving Community",
      gradient: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      text: "Representing Christ",
      gradient: "bg-gradient-to-br from-red-500 to-red-600",
    },
  ];

  const handleVideoClick = (item) => {
    setSelectedVideo(item);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-white">
      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden">
              <video
                controls
                autoPlay
                className="w-full"
                src={selectedVideo.videoUrl}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-gray-900">
                <h3 className="text-2xl font-bold text-white">
                  {selectedVideo.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Improved Responsive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/aandc.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>

        {/* Content - Improved Responsive */}
        <div className="relative z-10 w-full px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Church Name */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-none">
                PARTAKERS
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-medium px-4">
                Youth & Young Adults
              </p>
            </div>

            {/* Mission Statement */}
            <div className="px-4">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-relaxed font-light">
                Discipling people to be{" "}
                <span className="text-amber-400 font-bold">Partakers</span> of
                Christ, the Holy Spirit, and God's holiness
              </p>
            </div>

            {/* Service Times */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Join Us Every Sunday
              </h2>
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-amber-400 mb-2 sm:mb-3">
                2:00 PM - 4:00 PM
              </div>
              <div className="text-base sm:text-lg md:text-xl text-blue-100">
                <p className="font-semibold">RCCG Precious People Parish</p>
                <p className="text-sm sm:text-base text-blue-200 mt-2">
                  6 Harthill Street
                  <br />
                  Manchester
                  <br />
                  M8 8AG
                </p>
              </div>
            </div>

            {/* Countdown */}
            <div>
              <Countdown />
            </div>

            {/* CTA Buttons - Improved Responsive */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 pb-16 sm:pb-20 px-4">
              <button
                onClick={() => navigate("/connect")}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Join Us This Sunday
              </button>
              <button
                onClick={() => navigate("/about")}
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Our Mission
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hide on mobile */}
        <div className="hidden sm:block absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center items-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Media Highlights Section - Using Video Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
              Experience the Moment
            </h2>
            <p className="text-base sm:text-lg text-gray-400 px-4">
              Catch up on our latest services, testimonies, and powerful moments
            </p>
          </div>

          {/* Video Grid - Shows actual video preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleVideoClick(item)}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-video cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Video Preview (muted, no controls) */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>

                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white shadow-lg">
                    <svg
                      className="w-7 h-7 sm:w-9 sm:h-9 text-gray-900 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Video Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="text-white text-base sm:text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section - Improved Responsive */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Who We Are
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              The youth and young adult branch of RCCG Precious People Parish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Loving Selflessly",
                desc: "Known by our deep, selfless love for others through actions, not just words.",
                verse: "John 13:35",
                gradient: "from-blue-600 to-blue-700",
              },
              {
                title: "Pursuing Excellence",
                desc: "Striving for excellence in everything we do, representing Christ on Earth.",
                verse: "Ecclesiastes 9:10",
                gradient: "from-amber-500 to-amber-600",
              },
              {
                title: "Prayer & Fasting",
                desc: "Regularly seeking God's face, knowing we are nothing without Christ.",
                verse: "Matthew 6:6",
                gradient: "from-indigo-600 to-indigo-700",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mb-4 sm:mb-6 flex items-center justify-center text-white text-xl sm:text-2xl font-bold group-hover:scale-110 transition-transform`}
                >
                  {idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-base sm:text-lg">
                  {item.desc}
                </p>
                <p className="text-blue-600 font-semibold text-sm sm:text-base">
                  {item.verse}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section - Improved Responsive */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whatWeDoItems.map((item, idx) => (
              <div
                key={idx}
                className={`${item.gradient} p-6 sm:p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg group`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white font-bold text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <p className="text-white font-bold text-lg sm:text-xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;