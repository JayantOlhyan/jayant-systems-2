"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

interface BrandIntroProps {
  onComplete?: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const skipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if intro has already played in current browser session
    const hasSeenIntro = sessionStorage.getItem("jayant_intro_seen");

    if (hasSeenIntro) {
      setShouldRender(false);
      if (onComplete) onComplete();
      return;
    }

    setShouldRender(true);
    document.body.style.overflow = "hidden";

    // Initial fade in for the container
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );
    }

    // Safety fallback timer: auto-complete if video stalls or fails after 8 seconds
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 8500);

    // Mouse movement to reveal skip button
    const handleMouseMove = () => {
      setShowSkip(true);
      if (skipTimeoutRef.current) clearTimeout(skipTimeoutRef.current);
      skipTimeoutRef.current = setTimeout(() => {
        setShowSkip(false);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleMouseMove);

    return () => {
      clearTimeout(fallbackTimer);
      if (skipTimeoutRef.current) clearTimeout(skipTimeoutRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
    };
  }, []);

  const handleComplete = () => {
    if (!containerRef.current) {
      document.body.style.overflow = "";
      sessionStorage.setItem("jayant_intro_seen", "true");
      setShouldRender(false);
      if (onComplete) onComplete();
      return;
    }

    // Cinematic transition: Scale up video slightly while fading to pure black, then fade out the whole container
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        sessionStorage.setItem("jayant_intro_seen", "true");
        setShouldRender(false);
        if (onComplete) onComplete();
      },
    });

    if (videoContainerRef.current) {
      tl.to(videoContainerRef.current, {
        scale: 1.05,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);
    }

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
    }, 0.2);
  };

  const handleVideoEnded = () => {
    handleComplete();
  };

  const handleSkip = () => {
    handleComplete();
  };

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999999] bg-black text-white flex items-center justify-center overflow-hidden select-none"
    >
      {/* Centered Cinematic Video Container */}
      <div 
        ref={videoContainerRef}
        className="relative w-full h-full flex items-center justify-center"
      >
        {!videoError ? (
          <video
            ref={videoRef}
            src="/intro.mp4"
            poster="/intro-poster.jpg"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            onError={() => setVideoError(true)}
            className="w-full h-full object-contain md:object-cover max-w-[1920px] mx-auto"
          />
        ) : (
          /* Elegant Minimalist Fallback */
          <div className="flex flex-col items-center justify-center text-center p-8 opacity-80">
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-widest text-white mb-4">
              JAYANT
            </h2>
            <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/60 uppercase">
              Intelligence, Engineered
            </p>
          </div>
        )}
      </div>

      {/* Subtle Skip Button */}
      <button
        onClick={handleSkip}
        className={`absolute bottom-8 right-8 md:bottom-12 md:right-12 group inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-500 backdrop-blur-md cursor-pointer ${
          showSkip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span>Skip</span>
        <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
