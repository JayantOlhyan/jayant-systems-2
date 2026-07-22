"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sparkles, ArrowRight } from "lucide-react";

interface BrandIntroProps {
  onComplete?: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if intro has already played in current browser session
    const hasSeenIntro = sessionStorage.getItem("jayant_intro_seen");

    if (hasSeenIntro) {
      // Already seen in this session: skip reveal completely
      setShouldRender(false);
      if (onComplete) onComplete();
      return;
    }

    // First time in session: enable intro sequence
    setShouldRender(true);
    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    // Safety fallback timer: auto-complete if video stalls or fails after 8 seconds
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 8500);

    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleComplete = () => {
    if (!containerRef.current) {
      document.body.style.overflow = "";
      sessionStorage.setItem("jayant_intro_seen", "true");
      setShouldRender(false);
      if (onComplete) onComplete();
      return;
    }

    // Choreographed upward mask unveil transition into Hero
    gsap.to(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.1,
      ease: "power4.inOut",
      onComplete: () => {
        document.body.style.overflow = "";
        sessionStorage.setItem("jayant_intro_seen", "true");
        setShouldRender(false);
        if (onComplete) onComplete();
      },
    });
  };

  const handleVideoEnded = () => {
    handleComplete();
  };

  const handleSkip = () => {
    setIsSkipped(true);
    handleComplete();
  };

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      className="fixed inset-0 z-[999999] bg-[#060504] text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none"
    >
      {/* Top Bar: Brand Identifier & Skip Button */}
      <div className="flex items-center justify-between w-full z-20">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-white/80">
            JAYANT WEB & AI SYSTEMS
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-primary hover:border-primary text-white text-xs font-mono font-bold transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          <span>Skip Reveal</span>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Center: Video Reveal / Fallback Container */}
      <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-black/60 my-auto z-10">
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
            className="w-full h-full object-cover"
          />
        ) : (
          /* High-Craft SVG Animated Fallback */
          <div className="flex flex-col items-center text-center p-8">
            <Sparkles className="size-10 text-primary mb-4 animate-pulse" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              JAYANT WEB & AI SYSTEMS
            </h2>
            <p className="font-mono text-sm tracking-widest text-primary uppercase font-bold">
              INTELLIGENCE, ENGINEERED.
            </p>
          </div>
        )}

        {/* Subtle Video Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Bottom Bar: Brand Tagline & Technical Indicators */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full z-20 border-t border-white/10 pt-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">[SYS_INIT // 2026]</span>
          <span className="text-white/20">•</span>
          <span className="font-serif text-sm md:text-base italic text-white/90 font-semibold">
            INTELLIGENCE, ENGINEERED.
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px] text-white/60">
          <span>AI AGENTS</span>
          <span>•</span>
          <span>AUTOMATION</span>
          <span>•</span>
          <span>SYSTEMS</span>
        </div>
      </div>
    </div>
  );
}
