import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const purposePoints = [
    {
      number: "1",
      title: "Partakers of Christ",
      verse: "Hebrews 3:14",
      description: "We share in Christ's mission: spreading the gospel, discipling others, and living as lights in our generation.",
    },
    {
      number: "2",
      title: "Partakers of the Holy Spirit",
      verse: "Hebrews 6:4",
      description: "Empowered by the Spirit to walk in our God-given gifts and demonstrate that Christ is alive today.",
    },
    {
      number: "3",
      title: "Partakers of God's Holiness",
      verse: "Hebrews 12:10",
      description: "Pursuing lives set apart for God, growing daily to reflect His character in how we love and live.",
    },
  ];

  const identityValues = [
    {
      title: "Loving Selflessly",
      description: "Love is our identity. We're known by how we show up for each other, serve our community, and extend grace. Our actions speak louder than words.",
      scripture: "John 13:35",
      image: "/assets/loving_selflessly.jpg",
      imageAlt: "People showing love and care to one another",
    },
    {
      title: "Pursuing Excellence",
      description: "We bring our best to everything we do. Whether it's worship, service, or relationships, we aim for excellence because we represent Christ.",
      scripture: "Colossians 3:23",
      image: "/assets/excellence.jpg",
      imageAlt: "People working with excellence and dedication",
    },
    {
      title: "Under God's Covering",
      description: "We're proud members of the Redeemed Christian Church of God, submitted under the spiritual authority of our mother church, Precious People Parish. We walk in godly alignment, accountability, and the blessing that comes from honoring spiritual covering.",
      scripture: "Hebrews 13:17",
      image: "/assets/uGc.jpg",
      imageAlt: "Church community together in unity",
    },
  ];

  const fontLeague = { fontFamily: "'League Spartan', sans-serif" };
  const fontQuicksand = { fontFamily: "'Quicksand', sans-serif" };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2" style={fontLeague}>About Partakers</h1>
          <p className="text-base sm:text-lg text-[#E4CFB2]" style={fontQuicksand}>A generation rising to represent Christ on Earth</p>
        </div>
      </section>

      {/* Our Purpose Statement */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1591] mb-3" style={fontLeague}>What We're Called To Be</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto" style={fontQuicksand}>Discipling all believers to become:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {purposePoints.map((point, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-[#91772F] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-2xl font-black text-white" style={fontLeague}>{point.number}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1F1591] mb-2" style={fontLeague}>{point.title}</h3>
                <p className="text-[#742F8D] text-xs font-semibold mb-3" style={fontQuicksand}>{point.verse}</p>
                <p className="text-gray-700 leading-relaxed text-sm" style={fontQuicksand}>{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-r from-[#1F1591] to-[#742F8D] rounded-lg px-6 py-3">
              <p className="text-base sm:text-lg text-white font-bold" style={fontLeague}>To represent Christ on Earth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Identity and Values */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1591] mb-3" style={fontLeague}>Who We Are</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" style={fontQuicksand}>The values that define us and shape our community</p>
          </div>

          <div className="space-y-10">
            {identityValues.map((value, idx) => (
              <div key={idx} className={`group flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-center`}>
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <div className="aspect-[4/3]">
                      <img src={value.image} alt={value.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <span className="text-xl font-black text-[#1F1591]" style={fontLeague}>{idx + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#91772F] hover:shadow-xl transition-all duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1F1591] mb-3" style={fontLeague}>{value.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4" style={fontQuicksand}>{value.description}</p>
                    <div className="bg-[#E4CFB2] px-4 py-3 rounded-lg border-l-4 border-[#91772F]">
                      <p className="text-[#742F8D] font-semibold text-xs sm:text-sm" style={fontQuicksand}>{value.scripture}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-14 bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={fontLeague}>This Is Partakers</h2>
          <p className="text-base sm:text-lg text-[#E4CFB2] mb-6" style={fontQuicksand}>A community where young believers grow in faith, find their purpose, and make an eternal impact</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate("/connect")} className="bg-[#91772F] text-white hover:bg-[#91772F]/90 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg" style={fontQuicksand}>Join Us This Sunday</button>
            <button onClick={() => navigate("/")} className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1F1591] px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105" style={fontQuicksand}>Back to Home</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;