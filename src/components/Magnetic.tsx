"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MagneticProps {
  children: React.ReactElement<{ ref?: React.Ref<HTMLElement> }>;
  strength?: number;
}

export default function Magnetic({ children, strength = 0.35 }: MagneticProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      
      // Calculate cursor position relative to element center
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      // Animate element towards cursor
      gsap.to(element, {
        x: deltaX * strength,
        y: deltaY * strength,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      // Elastic spring back to center position
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return React.cloneElement(children, {
    ref: (node: HTMLElement | null) => {
      // Handle setting both local ref and forwarding to child's ref if it exists
      (elementRef as React.MutableRefObject<HTMLElement | null>).current = node;
      const { ref: childRef } = children as any;
      if (childRef) {
        if (typeof childRef === "function") {
          childRef(node);
        } else if (childRef && "current" in childRef) {
          childRef.current = node;
        }
      }
    },
  });
}
