"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface BackgroundTypographyProps {
  text: string;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
}

export default function BackgroundTypography({
  text,
  className = "",
  speed = 0.5,
  direction = "left",
}: BackgroundTypographyProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = textRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const moveDistance = direction === "left" ? -150 : 150;

      gsap.to(el, {
        x: moveDistance * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [direction, speed]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 flex items-center justify-center opacity-[0.035] dark:opacity-[0.05]">
      <div
        ref={textRef}
        className={`font-serif font-black uppercase text-[15vw] md:text-[22vw] leading-none whitespace-nowrap text-foreground tracking-tighter ${className}`}
      >
        {text}
      </div>
    </div>
  );
}
