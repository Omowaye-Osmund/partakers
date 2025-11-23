import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Wait for script to load, then track
    const trackPageView = () => {
      if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({
          path: location.pathname + location.search,
        });
      }
    };

    // Try immediately
    trackPageView();

    // If script not loaded yet, try again after delay
    const timeout = setTimeout(trackPageView, 1000);

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
}

export default Analytics;
