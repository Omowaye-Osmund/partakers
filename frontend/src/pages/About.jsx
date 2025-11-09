// import React from "react";

// function About() {
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
//       icon: "❤️",
//       title: "Loving Selflessly",
//       description:
//         "When people think of Partakers, they should think first and foremost that we are people that love others selflessly and deeply. Not by words but by actions.",
//       scripture:
//         'John 13:35 - "By this all men will know you are my disciples, if you love one another"',
//       color: "from-red-500 to-pink-500",
//     },
//     {
//       icon: "⭐",
//       title: "Excellence in What We Do",
//       description:
//         "We want to be people of excellence. Excellence in everything we do. Our vision is to represent Christ on Earth and that comes with responsibility to strive for excellence.",
//       scripture:
//         'Ecclesiastes 9:10 - "Whatever your hand finds to do, do it with all your might"',
//       color: "from-yellow-500 to-orange-500",
//     },
//   ];

//   return (
//     <div className="bg-black text-white py-20">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-[#8B7355] mb-6">
//             About Partakers
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
//             The youth and young adult branch of RCCG Precious People Parish
//             ("PPP")
//           </p>
//         </div>

//         {/* Our Purpose Statement */}
//         <section className="mb-20">
//           <h2 className="text-4xl font-bold text-center text-[#8B7355] mb-12">
//             Our Purpose Statement
//           </h2>
//           <p className="text-2xl text-center text-white mb-12 font-light">
//             Discipling people to be:
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {purposePoints.map((point, idx) => (
//               <div
//                 key={idx}
//                 className="bg-linear-to-br from-[#1a1410] to-black border-2 border-[#8B7355] rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300"
//               >
//                 <div className="text-5xl font-bold text-[#FF6B35] mb-4">
//                   {point.number}
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#8B7355] mb-2">
//                   {point.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm mb-4 italic">
//                   {point.verse}
//                 </p>
//                 <p className="text-gray-300 leading-relaxed">
//                   {point.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div className="mt-12 text-center">
//             <p className="text-2xl text-[#FF6B35] font-bold">
//               So they can represent Christ on Earth.
//             </p>
//           </div>
//         </section>

//         {/* What Christ Did */}
//         <section className="mb-20 bg-[#1a1410] rounded-3xl p-12">
//           <h2 className="text-3xl font-bold text-center text-[#8B7355] mb-8">
//             What Did Christ Do That We Are Called To Partake In?
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {[
//               { icon: "📢", text: "Spreading the Gospel" },
//               { icon: "👨‍🏫", text: "Discipling Others" },
//               { icon: "✨", text: "Performing Miracles" },
//               { icon: "💡", text: "Shining Our Light" },
//               { icon: "🤝", text: "Being Servants" },
//               { icon: "🙌", text: "All in Jesus' Name" },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-linear-to-br from-[#8B7355] to-[#FF6B35] p-6 rounded-xl text-center hover:scale-105 transition-transform"
//               >
//                 <div className="text-4xl mb-3">{item.icon}</div>
//                 <p className="text-white font-semibold">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Identity and Values */}
//         <section className="mb-20">
//           <h2 className="text-4xl font-bold text-center text-[#8B7355] mb-12">
//             Our Identity & Values
//           </h2>
//           <div className="space-y-8">
//             {identityValues.map((value, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#1a1410] border-2 border-[#8B7355]/30 rounded-2xl p-8 hover:border-[#8B7355] transition-all duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div
//                     className={`w-20 h-20 bg-linear-to-br ${value.color} rounded-full flex items-center justify-center text-4xl mr-6`}
//                   >
//                     {value.icon}
//                   </div>
//                   <h3 className="text-3xl font-bold text-[#8B7355]">
//                     {value.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-300 text-lg leading-relaxed mb-4">
//                   {value.description}
//                 </p>
//                 <div className="bg-black/50 border-l-4 border-[#FF6B35] p-4 rounded">
//                   <p className="text-[#FF6B35] italic">{value.scripture}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Additional Values */}
//         <section className="mb-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-linear-to-br from-[#8B7355] to-[#A0826D] rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 🙏 Prayer & Fasting
//               </h3>
//               <p className="text-white/90 leading-relaxed">
//                 We are a people that prays and fasts regularly. We are nothing
//                 without Christ. We have been crucified and partakers of his
//                 death and resurrection. We are people who consistently seek the
//                 face of God.
//               </p>
//             </div>
//             <div className="bg-linear-to-br from-[#FF6B35] to-[#FF8C55] rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 ⛪ Under God's Covering
//               </h3>
//               <p className="text-white/90 leading-relaxed">
//                 We submit under the governance of RCCG and our covering PPP.
//                 That means we are a member of the Redeemed Christian Church of
//                 God, walking in godly alignment and spiritual authority.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section className="text-center bg-linear-to-r from-[#8B7355] to-[#FF6B35] rounded-3xl p-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             This Is Who We Are
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             A community of young believers passionate about representing Christ
//             on Earth
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default About;


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
      gradient: "from-blue-600 to-blue-700",
    },
    {
      number: "2",
      title: "Partakers of the Holy Spirit",
      verse: "Hebrews 6:4",
      description:
        "Empowered by the Spirit to perform miracles and represent Christ with authority.",
      gradient: "from-indigo-600 to-indigo-700",
    },
    {
      number: "3",
      title: "Partakers of God's Holiness",
      verse: "Hebrews 12:10",
      description:
        "Transformed to reflect God's holiness in our character and actions.",
      gradient: "from-purple-600 to-purple-700",
    },
  ];

  const christActions = [
    { text: "Spreading the Gospel" },
    { text: "Discipling Others" },
    { text: "Performing Miracles" },
    { text: "Shining Our Light" },
    { text: "Being Servants" },
    { text: "All in Jesus' Name" },
  ];

  const identityValues = [
    {
      title: "Loving Selflessly",
      description:
        "When people think of Partakers, they should think first and foremost that we are people that love others selflessly and deeply. Not by words but by actions.",
      scripture:
        'John 13:35 - "By this all men will know you are my disciples, if you love one another"',
      gradient: "from-blue-600 to-blue-700",
    },
    {
      title: "Excellence in What We Do",
      description:
        "We want to be people of excellence. Excellence in everything we do. Our vision is to represent Christ on Earth and that comes with responsibility to strive for excellence.",
      scripture:
        'Ecclesiastes 9:10 - "Whatever your hand finds to do, do it with all your might"',
      gradient: "from-amber-500 to-amber-600",
    },
    {
      title: "Prayer & Fasting",
      description:
        "We are a people that prays and fasts regularly. We are nothing without Christ. We have been crucified and partakers of his death and resurrection. We are people who consistently seek the face of God.",
      scripture: "Matthew 6:6",
      gradient: "from-indigo-600 to-indigo-700",
    },
    {
      title: "Under God's Covering",
      description:
        "We submit under the governance of RCCG and our covering PPP. That means we are a member of the Redeemed Christian Church of God, walking in godly alignment and spiritual authority.",
      scripture: "Hebrews 13:17",
      gradient: "from-purple-600 to-purple-700",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            About Partakers
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            The youth and young adult branch of RCCG Precious People Parish
          </p>
        </div>
      </section>

      {/* Our Purpose Statement */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Purpose Statement
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-light">
              Discipling people to be:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {purposePoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${point.gradient} rounded-2xl mb-6 flex items-center justify-center`}
                >
                  <span className="text-3xl font-black text-white">
                    {point.number}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-blue-600 text-sm font-semibold mb-4">
                  {point.verse}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-6">
              <p className="text-xl sm:text-2xl text-white font-bold">
                So they can represent Christ on Earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Christ Did */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            What Did Christ Do?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We are called to partake in Christ's work
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {christActions.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 sm:p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-lg group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
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

      {/* Identity and Values */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Identity & Values
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {identityValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold mr-4 sm:mr-6`}
                  >
                    {idx + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  {value.description}
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">
                    {value.scripture}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            This Is Who We Are
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            A community of young believers passionate about representing Christ
            on Earth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button
              onClick={() => navigate("/connect")}
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Join Us This Sunday
            </button>
            <button
              onClick={() => navigate("/")}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
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