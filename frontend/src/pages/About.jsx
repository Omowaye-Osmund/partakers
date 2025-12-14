// // About.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function About() {
//   const navigate = useNavigate();

//   const purposePoints = [
//     {
//       number: "1",
//       title: "Partakers of Christ",
//       verse: "Hebrews 3:14",
//       description:
//         "We share in everything Christ did - spreading the gospel, discipling others, and shining our light.",
//     },
//     {
//       number: "2",
//       title: "Partakers of the Holy Spirit",
//       verse: "Hebrews 6:4",
//       description:
//         "Empowered by the Spirit to perform miracles and represent Christ with authority.",
//     },
//     {
//       number: "3",
//       title: "Partakers of God's Holiness",
//       verse: "Hebrews 12:10",
//       description:
//         "Transformed to reflect God's holiness in our character and actions.",
//     },
//   ];

//   const identityValues = [
//     {
//       title: "Loving Selflessly",
//       description:
//         "When people think of Partakers, they should think first and foremost that we are people that love others selflessly and deeply. Not by words but by actions.",
//       scripture: "John 13:35",
//     },
//     {
//       title: "Excellence in What We Do",
//       description:
//         "We want to be people of excellence. Excellence in everything we do. Our vision is to represent Christ on Earth and that comes with responsibility to strive for excellence.",
//       scripture: "Ecclesiastes 9:10",
//     },
//     {
//       title: "Prayer & Fasting",
//       description:
//         "We are a people that prays and fasts regularly. We are nothing without Christ. We have been crucified and partakers of his death and resurrection. We are people who consistently seek the face of God.",
//       scripture: "Matthew 6:6",
//     },
//     {
//       title: "Under God's Covering",
//       description:
//         "We submit under the governance of RCCG and our covering PPP. That means we are a member of the Redeemed Christian Church of God, walking in godly alignment and spiritual authority.",
//       scripture: "Hebrews 13:17",
//     },
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80] py-16 sm:py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
//             About Partakers
//           </h1>
//           <p className="text-lg sm:text-xl text-[#E4CFB2] max-w-3xl mx-auto" style={{ fontFamily: "'Quicksand', sans-serif" }}>
//             The youth and young adult branch of RCCG Precious People Parish
//           </p>
//         </div>
//       </section>

//       {/* Our Purpose Statement */}
//       <section className="py-12 sm:py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-10 sm:mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1591] mb-3 sm:mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
//               Our Purpose Statement
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
//               Discipling people to be:
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
//             {purposePoints.map((point, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-[#91772F] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-xl mb-4 flex items-center justify-center">
//                   <span className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>
//                     {point.number}
//                   </span>
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-bold text-[#1F1591] mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
//                   {point.title}
//                 </h3>
//                 <p className="text-[#742F8D] text-xs sm:text-sm font-semibold mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
//                   {point.verse}
//                 </p>
//                 <p className="text-gray-700 leading-relaxed text-sm sm:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }}>
//                   {point.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 sm:mt-10 text-center">
//             <div className="inline-block bg-gradient-to-r from-[#1F1591] to-[#742F8D] rounded-xl px-6 sm:px-8 py-4 sm:py-5">
//               <p className="text-lg sm:text-xl text-white font-bold" style={{ fontFamily: "'League Spartan', sans-serif" }}>
//                 So they can represent Christ on Earth
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Identity and Values */}
//       <section className="py-12 sm:py-16 bg-gradient-to-b from-[#E4CFB2]/30 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1F1591] mb-10 sm:mb-12" style={{ fontFamily: "'League Spartan', sans-serif" }}>
//             Our Identity & Values
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
//             {identityValues.map((value, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-gray-100 hover:border-[#91772F] hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex items-center mb-4 sm:mb-5">
//                   <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold mr-3 sm:mr-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
//                     {idx + 1}
//                   </div>
//                   <h3 className="text-lg sm:text-xl font-bold text-[#1F1591]" style={{ fontFamily: "'League Spartan', sans-serif" }}>
//                     {value.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>
//                   {value.description}
//                 </p>
//                 <div className="bg-[#E4CFB2]/50 border-l-4 border-[#91772F] p-3 rounded">
//                   <p className="text-[#742F8D] font-semibold text-xs sm:text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
//                     {value.scripture}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-12 sm:py-16 bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
//             This Is Who We Are
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-[#E4CFB2] mb-6 sm:mb-8" style={{ fontFamily: "'Quicksand', sans-serif" }}>
//             A community of young believers passionate about representing Christ on Earth
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
//             <button
//               onClick={() => navigate("/connect")}
//               className="bg-[#91772F] text-white hover:bg-[#91772F]/90 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-xl"
//               style={{ fontFamily: "'Quicksand', sans-serif" }}
//             >
//               Join Us This Sunday
//             </button>
//             <button
//               onClick={() => navigate("/")}
//               className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1F1591] px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105"
//               style={{ fontFamily: "'Quicksand', sans-serif" }}
//             >
//               Back to Home
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default About;



// About.jsx - With Images in Identity & Values Section
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const purposePoints = [
    {
      number: "1",
      title: "Partakers of Christ",
      verse: "Hebrews 3:14",
      description:
        "We share in everything Christ did - spreading the gospel, discipling others, and shining our light.",
    },
    {
      number: "2",
      title: "Partakers of the Holy Spirit",
      verse: "Hebrews 6:4",
      description:
        "Empowered by the Spirit to perform miracles and represent Christ with authority.",
    },
    {
      number: "3",
      title: "Partakers of God's Holiness",
      verse: "Hebrews 12:10",
      description:
        "Transformed to reflect God's holiness in our character and actions.",
    },
  ];

  const identityValues = [
    {
      title: "Loving Selflessly",
      description:
        "When people think of Partakers, they should think first and foremost that we are people that love others selflessly and deeply. Not by words but by actions.",
      scripture: "John 13:35",
      image: "src/assets/loving_selflessly.jpg", // Replace with your image URL
      imageAlt: "People showing love and care to one another",
    },
    {
      title: "Excellence in What We Do",
      description:
        "We want to be people of excellence. Excellence in everything we do. Our vision is to represent Christ on Earth and that comes with responsibility to strive for excellence.",
      scripture: "Ecclesiastes 9:10",
      image: "src/assets/excellence.jpg",
      imageAlt: "People working with excellence and dedication",
    },
    {
      title: "Prayer & Fasting",
      description:
        "We are a people that prays and fasts regularly. We are nothing without Christ. We have been crucified and partakers of his death and resurrection. We are people who consistently seek the face of God.",
      scripture: "Matthew 6:6",
      image: "src/assets/p_f.jpg",
      imageAlt: "People in prayer and worship",
    },
    {
      title: "Under God's Covering",
      description:
        "We submit under the governance of RCCG and our covering PPP. That means we are a member of the Redeemed Christian Church of God, walking in godly alignment and spiritual authority.",
      scripture: "Hebrews 13:17",
      image: "src/assets/uGc.jpg",
      imageAlt: "Church community together in unity",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            About Partakers
          </h1>
          <p className="text-lg sm:text-xl text-[#E4CFB2] max-w-3xl mx-auto" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            The youth and young adult branch of RCCG Precious People Parish
          </p>
        </div>
      </section>

      {/* Our Purpose Statement */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1591] mb-3 sm:mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
              Our Purpose Statement
            </h2>
            <p className="text-lg sm:text-xl text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Discipling people to be:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {purposePoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-[#91772F] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                    {point.number}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1591] mb-2" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  {point.title}
                </h3>
                <p className="text-[#742F8D] text-xs sm:text-sm font-semibold mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {point.verse}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <div className="inline-block bg-gradient-to-r from-[#1F1591] to-[#742F8D] rounded-xl px-6 sm:px-8 py-4 sm:py-5">
              <p className="text-lg sm:text-xl text-white font-bold" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                So they can represent Christ on Earth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identity and Values - WITH IMAGES */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#E4CFB2]/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1F1591] mb-10 sm:mb-16" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            Our Identity & Values
          </h2>

          <div className="space-y-12 sm:space-y-16">
            {identityValues.map((value, idx) => (
              <div
                key={idx}
                className={`group flex flex-col ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-6 sm:gap-8 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#1F1591]/10 to-[#742F8D]/10">
                      <img
                        src={value.image}
                        alt={value.imageAlt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Number Badge Overlay */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <span className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                          {idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 group-hover:border-[#91772F] group-hover:shadow-xl transition-all duration-500">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1F1591] mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      {value.description}
                    </p>
                    <div className="bg-gradient-to-r from-[#E4CFB2]/50 to-[#E4CFB2]/30 border-l-4 border-[#91772F] p-4 rounded-lg">
                      <p className="text-[#742F8D] font-bold text-sm sm:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                        {value.scripture}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            This Is Who We Are
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#E4CFB2] mb-6 sm:mb-8" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            A community of young believers passionate about representing Christ on Earth
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => navigate("/connect")}
              className="bg-[#91772F] text-white hover:bg-[#91772F]/90 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-xl"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Join Us This Sunday
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1F1591] px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;