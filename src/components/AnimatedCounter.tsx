import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({ end, suffix = "", duration = 2, className = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        hasAnimated.current = true;
        gsap.to(
          { value: 0 },
          {
            value: end,
            duration,
            ease: "power2.out",
            onUpdate: function () {
              setCount(Math.floor(this.targets()[0].value));
            },
          }
        );
      },
    });

    return () => {
      trigger.kill();
    };
  }, [end, duration]);

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
};
