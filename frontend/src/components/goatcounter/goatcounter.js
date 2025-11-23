// src/goatcounter.js
export function loadGoatCounter() {
  // Prevent GoatCounter from loading during development
  if (import.meta.env.NODE_ENV !== "production") {
    console.log("GoatCounter disabled in development");
    return;
  }

  // Create the GoatCounter script dynamically
  const script = document.createElement("script");
  script.src = "//gc.zgo.at/count.js";
  script.async = true;

  // Tell GoatCounter which site to track
  script.setAttribute(
    "data-goatcounter",
    "https://partakers-analytics.goatcounter.com/count"
  );

  // Insert script into the DOM
  document.head.appendChild(script);
}
