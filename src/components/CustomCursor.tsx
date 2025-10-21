import { useEffect, useState } from "react";
import { gsap } from "gsap";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid hsl(38 60% 65%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.2s ease, opacity 0.2s ease;
    `;
    document.body.appendChild(cursor);

    const follower = document.createElement("div");
    follower.className = "cursor-follower";
    follower.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: hsl(38 60% 65%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
    `;
    document.body.appendChild(follower);

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
        cursor.style.transform = "scale(1.5)";
        cursor.style.borderColor = "hsl(0 0% 98%)";
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(false);
        cursor.style.transform = "scale(1)";
        cursor.style.borderColor = "hsl(38 60% 65%)";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cursor.remove();
      follower.remove();
    };
  }, []);

  return null;
};
