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
    },
    {
      title: "Excellence in What We Do",
      description:
        "We want to be people of excellence. Excellence in everything we do. Our vision is to represent Christ on Earth and that comes with responsibility to strive for excellence.",
      scripture: "Ecclesiastes 9:10",
    },
    {
      title: "Prayer & Fasting",
      description:
        "We are a people that prays and fasts regularly. We are nothing without Christ. We have been crucified and partakers of his death and resurrection. We are people who consistently seek the face of God.",
      scripture: "Matthew 6:6",
    },
    {
      title: "Under God's Covering",
      description:
        "We submit under the governance of RCCG and our covering PPP. That means we are a member of the Redeemed Christian Church of God, walking in godly alignment and spiritual authority.",
      scripture: "Hebrews 13:17",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Compact */}
      <section className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
            About Partakers
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            The youth branch of RCCG Precious People Parish
          </p>
        </div>
      </section>

      {/* Our Purpose Statement - Compact */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Purpose Statement
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              For all to be:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {purposePoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    {point.number}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-blue-600 text-xs sm:text-sm font-semibold mb-3">
                  {point.verse}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <div className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl px-6 sm:px-8 py-4 sm:py-5">
              <p className="text-lg sm:text-xl text-white font-bold">
                So we can represent Christ on Earth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identity and Values - Compact */}
      <section className="py-12 sm:py-16 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 sm:mb-12">
            Our Identity & Values
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {identityValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold mr-3 sm:mr-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {value.description}
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
                  <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                    {value.scripture}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Compact */}
      <section className="py-12 sm:py-16 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            This Is Who We Are
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
            A community of young believers passionate about representing Christ
            on Earth
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => navigate("/connect")}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Join Us This Sunday
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105"
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