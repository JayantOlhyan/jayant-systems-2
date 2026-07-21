"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  triggerOnScroll?: boolean;
}

export default function AnimatedHeading({
  children,
  as: Component = "h2",
  className = "",
  delay = 0,
  stagger = 0.08,
  triggerOnScroll = true,
}: AnimatedHeadingProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const maskInners = el.querySelectorAll(".mask-text-inner");
      if (maskInners.length === 0) return;

      const animationProps = {
        y: "0%",
        duration: 1.1,
        stagger,
        delay,
        ease: "power4.out",
      };

      if (triggerOnScroll) {
        gsap.to(maskInners, {
          ...animationProps,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.to(maskInners, animationProps);
      }
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, triggerOnScroll]);

  return (
    <Component ref={elementRef as any} className={className}>
      {children}
    </Component>
  );
}
