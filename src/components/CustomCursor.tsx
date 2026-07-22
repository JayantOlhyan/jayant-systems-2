"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverState, setHoverState] = useState<"default" | "hover" | "view" | "explore">("default");
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const mousePosRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // 1. Detect if system supports fine pointer input (mice/trackpads)
    const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    if (!finePointer) {
      setEnabled(false);
      return;
    }

    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };

      if (!hasMoved) {
        hasMoved = true;
        setEnabled(true);
        // Hide native cursor only after active movement is confirmed
        document.body.style.cursor = "none";
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, select, [role='button'], .cursor-hover");
      const projectCard = target.closest(".project-img-wrapper, .view-project-target");
      const exploreTarget = target.closest(".explore-target");

      if (projectCard) {
        setHoverState("view");
      } else if (exploreTarget) {
        setHoverState("explore");
      } else if (interactive) {
        setHoverState("hover");
      } else {
        setHoverState("default");
      }
    };

    const handleMouseLeave = () => {
      // Restore native cursor if mouse leaves window
      document.body.style.cursor = "auto";
      setEnabled(false);
      hasMoved = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth lerp movement loop
    const renderLoop = () => {
      positionRef.current.x += (mousePosRef.current.x - positionRef.current.x) * 0.25;
      positionRef.current.y += (mousePosRef.current.y - positionRef.current.y) * 0.25;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      animFrameRef.current = requestAnimationFrame(renderLoop);
    };
    animFrameRef.current = requestAnimationFrame(renderLoop);

    // Safety cleanup: ALWAYS restore native cursor on unmount or route change
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      document.body.style.cursor = "auto";
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999999] transition-all duration-300 ease-out flex items-center justify-center rounded-full ${
        hoverState === "view"
          ? "w-20 h-20 bg-primary text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-2xl border-2 border-white"
          : hoverState === "explore"
          ? "w-16 h-16 bg-primary/90 text-white font-mono text-[9px] font-bold uppercase tracking-widest backdrop-blur-sm border border-white/40"
          : hoverState === "hover"
          ? "w-12 h-12 bg-primary/20 border-2 border-primary backdrop-blur-[2px]"
          : "w-3.5 h-3.5 bg-primary border border-white/60 shadow-md"
      }`}
    >
      {hoverState === "view" && <span>VIEW</span>}
      {hoverState === "explore" && <span>EXPLORE</span>}
    </div>
  );
}
