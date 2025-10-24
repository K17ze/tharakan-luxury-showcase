import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options: {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  start?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll("[data-animate]");
    
    if (elements.length === 0) {
      // Animate the container itself
      gsap.fromTo(
        ref.current,
        {
          y: options.y ?? 50,
          opacity: options.opacity ?? 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: options.start ?? "top 85%",
          },
        }
      );
    } else {
      // Animate children with stagger
      gsap.fromTo(
        elements,
        {
          y: options.y ?? 50,
          opacity: options.opacity ?? 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 0.8,
          stagger: options.stagger ?? 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: options.start ?? "top 85%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [options.y, options.opacity, options.duration, options.stagger, options.start]);

  return ref;
};
