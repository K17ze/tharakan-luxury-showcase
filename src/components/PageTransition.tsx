import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Fade in animation
    gsap.fromTo(
      "#page-content",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, [location.pathname]);

  return <div id="page-content">{children}</div>;
};
