import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ACTIVITIES = [
  "Men's 100m",
  "Women's 100m",
  "Men's 200m",
  "Women's 200m",
  "Mixed 4x400 Relay",
  "Mixed 4x100 Relay",
  "Egg and Spoon Race",
  "Three Legged Race",
  "Tug of War",
  "Shot Put",
  "Mini Badminton",
  "Spectator (Just Watching)",
];

function SportsDay() {
  const navigate = useNavigate();

  const event = {
    title: "Sports Day",
    tagline: "Our First Ever Partakers Sports Day!",
    date: "Saturday, July 25th, 2026", // 🔧 update
    time: "12:45 AM - 4:00 PM", // 🔧 confirm/update
    location: "Cleavley Athletics Track",
    address: "Winton, Blantyre St, Eccles, Manchester M30 8HY",
    mapsUrl: "https://share.google/uReexCLeARwnV3EPa",
    description:
      "This is our very first Partakers Sports Day, and we can't wait to celebrate it with you! We've got a full day of activities lined up, from races to relays to just-for-fun games, so there's something for everyone whether you're competing or cheering from the sidelines. More than anything, it's a chance for us to come together as a community, meet new people, laugh a lot, and fellowship in Christ outside the four walls of church. Come as you are and bring a friend!",
  };

  const emptyPerson = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    activities: [],
    medical: "",
  };

  const [people, setPeople] = useState([{ ...emptyPerson }]);
  const [activePersonIndex, setActivePersonIndex] = useState(0);
  const [dataProtectionAccepted, setDataProtectionAccepted] = useState(false);
  const [showDataProtection, setShowDataProtection] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [error, setError] = useState("");

const updatePerson = (index, field, value) => {
  const updated = [...people];
  updated[index][field] = value;
  setPeople(updated);
  if (error) setError(""); // clear stale error as soon as the person starts fixing things
};

const toggleActivity = (index, activity) => {
  const updated = [...people];
  const current = updated[index].activities;
  updated[index].activities = current.includes(activity)
    ? current.filter((a) => a !== activity)
    : [...current, activity];
  setPeople(updated);
  if (error) setError("");
};

  const addPerson = () => {
    setPeople([...people, { ...emptyPerson }]);
    setActivePersonIndex(people.length);
  };

  const removePerson = (index) => {
    if (people.length === 1) return;
    const updated = people.filter((_, i) => i !== index);
    setPeople(updated);
    setActivePersonIndex(Math.max(0, index - 1));
  };

  const isPersonComplete = (p) =>
    p.firstName && p.lastName && p.email && p.phone && p.gender && p.activities.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!dataProtectionAccepted) {
      setError("Please accept the Data Protection Statement to continue.");
      return;
    }

    const incomplete = people.some((p) => !isPersonComplete(p));
    if (incomplete) {
      setError(
        "Please complete all required fields and select at least one activity for each person.",
      );
      return;
    }

    setSubmitStatus("sending");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // fail fast instead of hanging forever

const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/sports-day-rsvp`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ people }),
    signal: controller.signal,
  },
);

      clearTimeout(timeoutId);

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setSubmitStatus("sent");
        setTimeout(() => {
          setPeople([{ ...emptyPerson }]);
          setActivePersonIndex(0);
          setDataProtectionAccepted(false);
          setSubmitStatus("");
        }, 2500);
      } else {
        // Show the actual backend message instead of a generic one
        throw new Error(data?.message || "Server rejected the submission");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        setError(
          "The server is taking too long to respond. Please check your connection and try again.",
        );
      } else {
        setError(
          `Submission failed: ${err.message}. Please try again or contact us directly.`,
        );
      }
      setSubmitStatus("");
    }
  };

  const fontLeague = { fontFamily: "'League Spartan', sans-serif" };
  const fontQuicksand = { fontFamily: "'Quicksand', sans-serif" };

  const p = people[activePersonIndex];
  const i = activePersonIndex;

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80] py-8 sm:py-12 md:py-14 animate-[fadeIn_0.6s_ease-out]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
            style={fontLeague}
          >
            {event.title}
          </h1>
          <p
            className="text-sm sm:text-base text-[#E4CFB2] max-w-2xl mx-auto"
            style={fontQuicksand}
          >
            {event.tagline}
          </p>
        </div>
      </section>

      {/* Key Details - Highlighted, bolder */}
      <section className="py-5 sm:py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#1F1591]/5 to-[#742F8D]/5 border-2 border-[#91772F]/30 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center sm:items-start transition-all duration-300 hover:border-[#91772F]/60 hover:shadow-md">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1F1591] to-[#742F8D] rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
              <span
                className="text-[10px] font-bold uppercase"
                style={fontQuicksand}
              >
                Sat
              </span>
              <span
                className="text-xl font-black leading-none"
                style={fontLeague}
              >
                25
              </span>
              <span
                className="text-[10px] font-bold uppercase"
                style={fontQuicksand}
              >
                July
              </span>
            </div>

            <div className="space-y-2 text-sm w-full text-center sm:text-left">
              <p
                className="text-gray-900 font-black text-lg sm:text-xl"
                style={fontLeague}
              >
                {event.date}
              </p>
              <p
                className="text-[#742F8D] font-black text-base sm:text-lg"
                style={fontLeague}
              >
                {event.time}
              </p>
              <p
                className="text-gray-800 font-bold text-sm sm:text-base"
                style={fontQuicksand}
              >
                {event.location} — {event.address}
              </p>
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-gradient-to-r from-[#1F1591] to-[#742F8D] text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                style={fontQuicksand}
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About + Activities */}
      <section className="pb-5 sm:pb-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#91772F]/40">
            <div className="p-4 sm:p-6 space-y-4">
              <p
                className="text-gray-700 text-sm sm:text-base leading-relaxed"
                style={fontQuicksand}
              >
                {event.description}
              </p>

              <div>
                <p
                  className="text-gray-900 font-bold text-sm sm:text-base mb-2"
                  style={fontQuicksand}
                >
                  Activities on the day
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                  {ACTIVITIES.filter(
                    (a) => a !== "Spectator (Just Watching)",
                  ).map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 bg-[#E4CFB2]/30 rounded-lg px-2.5 py-1.5 transition-transform duration-200 hover:scale-[1.03]"
                    >
                      <span className="text-[#742F8D] text-xs">●</span>
                      <span
                        className="text-gray-800 font-semibold text-xs sm:text-sm"
                        style={fontQuicksand}
                      >
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up */}
      <section className="pb-10 sm:pb-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white border-2 border-[#91772F]/40 rounded-xl overflow-hidden shadow-sm">
            <div className="border-b-2 border-gray-100 px-4 sm:px-6 py-3 bg-gradient-to-r from-[#1F1591]/5 to-transparent">
              <h2
                className="text-base sm:text-lg font-bold text-[#1F1591]"
                style={fontLeague}
              >
                Sign Up
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6">
              {people.length > 1 && (
                <div className="mb-4">
                  <p
                    className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-wide"
                    style={fontQuicksand}
                  >
                    Signing up {people.length} people — tap to edit
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {people.map((person, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold cursor-pointer transition-all duration-200 ${
                          idx === activePersonIndex
                            ? "bg-[#1F1591] text-white scale-105 shadow-md"
                            : isPersonComplete(person)
                              ? "bg-[#E4CFB2]/60 text-[#5C4A1A] hover:bg-[#E4CFB2]"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        style={fontQuicksand}
                        onClick={() => setActivePersonIndex(idx)}
                      >
                        <span>
                          Person {idx + 1}
                          {person.firstName ? `: ${person.firstName}` : ""}
                          {isPersonComplete(person) ? " ✓" : ""}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removePerson(idx);
                          }}
                          className="hover:text-red-400 font-normal"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-4 pb-3 border-b border-gray-100">
                <p
                  className="text-sm font-bold text-[#742F8D]"
                  style={fontQuicksand}
                >
                  {people.length > 1
                    ? `Now filling in: Person ${activePersonIndex + 1}`
                    : "Your Details"}
                </p>
              </div>

              <div
                key={activePersonIndex}
                className="space-y-3.5 sm:space-y-4 animate-[fadeIn_0.3s_ease-out]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block text-gray-900 font-bold mb-1.5 text-sm"
                      style={fontQuicksand}
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={p.firstName}
                      onChange={(e) =>
                        updatePerson(i, "firstName", e.target.value)
                      }
                      className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                      style={fontQuicksand}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-900 font-bold mb-1.5 text-sm"
                      style={fontQuicksand}
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={p.lastName}
                      onChange={(e) =>
                        updatePerson(i, "lastName", e.target.value)
                      }
                      className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                      style={fontQuicksand}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block text-gray-900 font-bold mb-1.5 text-sm"
                      style={fontQuicksand}
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={p.email}
                      onChange={(e) => updatePerson(i, "email", e.target.value)}
                      className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                      style={fontQuicksand}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-900 font-bold mb-1.5 text-sm"
                      style={fontQuicksand}
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={p.phone}
                      onChange={(e) => {
                        const digitsOnly = e.target.value.replace(/\D/g, "");
                        updatePerson(i, "phone", digitsOnly);
                      }}
                      maxLength={15}
                      className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                      style={fontQuicksand}
                      placeholder="e.g. 07123456789"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-gray-900 font-bold mb-2 text-sm"
                    style={fontQuicksand}
                  >
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-5">
                    {["Male", "Female"].map((g) => (
                      <label
                        key={g}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-800 cursor-pointer"
                        style={fontQuicksand}
                      >
                        <input
                          type="radio"
                          name={`gender-${i}`}
                          checked={p.gender === g}
                          onChange={() => updatePerson(i, "gender", g)}
                          className="w-4 h-4 accent-[#91772F]"
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-gray-900 font-bold mb-2 text-sm"
                    style={fontQuicksand}
                  >
                    Select Activities <span className="text-red-500">*</span>
                    <span className="block text-gray-500 font-normal text-xs mt-0.5">
                      Tick as many as you'd like
                    </span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-50 border-2 border-gray-200 rounded-lg p-3">
                    {ACTIVITIES.map((activity) => (
                      <label
                        key={activity}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
                          p.activities.includes(activity)
                            ? "bg-[#E4CFB2]/50 border-[#91772F] scale-[1.02]"
                            : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={p.activities.includes(activity)}
                          onChange={() => toggleActivity(i, activity)}
                          className="w-4 h-4 sm:w-5 sm:h-5 accent-[#91772F] flex-shrink-0"
                        />
                        <span
                          className="text-sm font-semibold text-gray-800"
                          style={fontQuicksand}
                        >
                          {activity}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-gray-900 font-bold mb-1.5 text-sm"
                    style={fontQuicksand}
                  >
                    Medical Concerns{" "}
                    <span className="text-gray-500 font-normal">(if any)</span>
                  </label>
                  <input
                    type="text"
                    value={p.medical}
                    onChange={(e) => updatePerson(i, "medical", e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-[#91772F] focus:outline-none transition-colors"
                    style={fontQuicksand}
                    placeholder="e.g. asthma, allergies, none"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={addPerson}
                className="w-full mt-4 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-2.5 text-sm font-bold text-gray-600 hover:border-[#91772F] hover:text-[#91772F] hover:bg-[#91772F]/5 transition-all duration-300"
                style={fontQuicksand}
              >
                <span className="text-lg leading-none">+</span> Add Another
                Person
              </button>

              <div className="mt-4 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  checked={dataProtectionAccepted}
                  onChange={(e) => setDataProtectionAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 sm:w-5 sm:h-5 accent-[#91772F] flex-shrink-0"
                />
                <p
                  className="text-sm font-medium text-gray-800"
                  style={fontQuicksand}
                >
                  I accept your{" "}
                  <button
                    type="button"
                    onClick={() => setShowDataProtection(true)}
                    className="text-[#742F8D] font-bold underline"
                  >
                    Data Protection Statement
                  </button>
                </p>
              </div>

              {error && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg animate-[fadeIn_0.3s_ease-out]">
                  <p
                    className="text-red-600 font-semibold text-xs sm:text-sm"
                    style={fontQuicksand}
                  >
                    {error}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus === "sending" || submitStatus === "sent"}
                className="w-full mt-4 bg-gradient-to-r from-[#1F1591] to-[#742F8D] text-white px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                style={fontQuicksand}
              >
                {submitStatus === "sending"
                  ? "Submitting..."
                  : submitStatus === "sent"
                    ? "Sign Up Received! ✓"
                    : "Proceed »"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Data Protection Modal */}
      {showDataProtection && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setShowDataProtection(false)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-lg sm:text-xl font-bold text-[#1F1591]"
                style={fontLeague}
              >
                Data Protection Statement
              </h3>
              <button
                onClick={() => setShowDataProtection(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div
              className="text-sm text-gray-700 space-y-4 leading-relaxed"
              style={fontQuicksand}
            >
              <p>
                Keeping your data secure is very important to us. By providing
                your personal details you agree to allow Partakers Manchester
                (RCCG Precious People Parish) to contact you either on the basis
                of the consent you have given us or for our legitimate
                interests, in accordance with current data protection
                regulations. We will never make your personal data available for
                marketing purposes to external individuals or organisations. For
                more information, email{" "}
                <a
                  href="mailto:partakersppp@gmail.com"
                  className="text-[#742F8D] underline font-semibold"
                >
                  partakersppp@gmail.com
                </a>
                .
              </p>

              <div>
                <p className="font-bold text-[#1F1591] mb-1">
                  How we collect information about you
                </p>
                <p>
                  We collect personal information each time you are in contact
                  with us. For example, when you sign up for an event, make a
                  donation, book onto a programme, request a resource, or send
                  us an email.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1F1591] mb-1">
                  Why we collect information about you
                </p>
                <p>
                  We collect information about you for the following reasons:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    To provide you with information about events and resources,
                    tailored to your interests.
                  </li>
                  <li>
                    To process donations you give us and ensure they are
                    recorded correctly.
                  </li>
                  <li>
                    To keep records of your relationship with us, for example
                    events you've attended or enquiries you've made.
                  </li>
                  <li>
                    To enhance or improve your experience on our website and
                    better meet your needs.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-[#1F1591] mb-1">
                  Keeping us up to date with your details and contact
                  preferences
                </p>
                <p>
                  Please tell us as soon as any of your contact details change
                  so we can keep our records up to date. You can change how we
                  contact you, or the kind of material we send you, at any time
                  by contacting us by phone or email using the details above.
                  You can unsubscribe from our regular emails at any time using
                  the "unsubscribe" link on the email you receive.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1F1591] mb-1">
                  Who sees your information?
                </p>
                <p>
                  The information we collect is used exclusively within
                  Partakers Manchester. We do not pass any of your personal
                  information to any other organisations and/or individuals
                  without your express consent.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1F1591] mb-1">
                  Our use of your information
                </p>
                <p>
                  By providing information you are agreeing to receive
                  communications about the work of Partakers Manchester. Each
                  time you receive an email, you will be able to update your
                  preferences and subscribe or unsubscribe from regular emails.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1F1591] mb-1">
                  How long do we keep your information?
                </p>
                <p>
                  The length of time we keep the information you have given us
                  depends on the context in which you provided it. We will only
                  keep information that is necessary for event coordination,
                  pastoral care, and for statistical purposes.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1F1591] mb-1">
                  Viewing the information we hold about you
                </p>
                <p>
                  You may request details of all the information Partakers
                  Manchester holds about you by submitting a written request to:
                  Partakers Manchester, Precious House, 6 Harthill Street,
                  Manchester M8 8AG.
                </p>
              </div>

              <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                This is our current Data Protection Statement, updated 2026.
                Please refer to this statement when necessary.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back */}
      <section className="py-6 sm:py-8 bg-gradient-to-r from-[#1F1591] via-[#742F8D] to-[#1D4C80]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-base sm:text-xl font-bold text-white mb-3"
            style={fontLeague}
          >
            Can't wait to see you there!
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-[#91772F] text-white hover:bg-[#91772F]/90 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
            style={fontQuicksand}
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}

export default SportsDay;