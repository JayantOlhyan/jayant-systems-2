"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view-project">("default");

  useEffect(() => {
    // Check if the user is on mobile
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Apply global hidden cursor style
    const style = document.createElement("style");
    style.innerHTML = `
      @media (min-width: 768px) {
        a, button, input, select, textarea, [role="button"], [data-cursor="view"] {
          cursor: none !important;
        }
        body {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center cursor initially
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isPortfolio = target.closest('[data-cursor="view"]');
      const isClickable = target.closest('a, button, select, input, textarea, [role="button"]');

      if (isPortfolio) {
        setCursorType("view-project");
      } else if (isClickable) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      style.remove();
    };
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor hidden md:flex items-center justify-center pointer-events-none fixed z-[9999] top-0 left-0 rounded-full transition-all duration-300 ${
        cursorType === "hover"
          ? "w-10 h-10 bg-transparent border border-primary"
          : cursorType === "view-project"
          ? "w-20 h-20 bg-primary text-white scale-100"
          : "w-3 h-3 bg-primary"
      }`}
    >
      {cursorType === "view-project" && (
        <span className="text-[9px] font-sans font-extrabold uppercase tracking-widest text-white animate-fade-in">
          View
        </span>
      )}
    </div>
  );
}
