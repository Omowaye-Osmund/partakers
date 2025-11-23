import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.goatcounter?.count) {
      window.goatcounter.count({
        path: location.pathname + location.search,
        title: document.title,
      });
    }
  }, [location]);

  return null;
}
