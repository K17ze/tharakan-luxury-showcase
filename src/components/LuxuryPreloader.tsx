import { useEffect, useState } from "react";
import { gsap } from "gsap";

export const LuxuryPreloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      }
    });

    tl.to(".preloader-logo", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to(".preloader-line", {
      scaleX: 1,
      duration: 1.5,
      ease: "power3.inOut"
    }, "-=0.5")
    .to(".preloader-text", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.8")
    .to(".preloader", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }, "+=0.5");
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="preloader-logo opacity-0 scale-95 mb-8">
        <div className="text-4xl md:text-6xl font-light tracking-[0.2em]">
          <span className="text-white">THARAKAN</span>
          <span className="text-luxury-gold ml-4">TRADERS</span>
        </div>
      </div>
      
      <div className="preloader-line w-64 h-px bg-white/20 origin-left scale-x-0 mb-8" />
      
      <div className="preloader-text opacity-0 translate-y-4">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">
          Luxury Beauty Distribution
        </p>
      </div>
    </div>
  );
};
