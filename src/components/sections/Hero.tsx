"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Cpu, Bot, Zap, Globe, Activity } from "lucide-react";
import { gsap } from "gsap";
import Magnetic from "../Magnetic";
import BackgroundTypography from "../BackgroundTypography";
import dynamic from "next/dynamic";

const HeroSystem = dynamic(() => import("../3d/HeroSystem"), { ssr: false });

export default function Hero() {
  const headingLinesRef = useRef<HTMLSpanElement[]>([]);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Staggered reveal of mask typography lines
      tl.to(headingLinesRef.current, {
        y: "0%",
        duration: 1.1,
        stagger: 0.12,
      });

      // Fade in supporting copy
      tl.fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      // Fade in CTAs
      tl.fromTo(
        ctasRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      );

      // Slide in verified credentials strip
      tl.fromTo(
        proofRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  const proofItems = [
    "12+ Systems Shipped",
    "ET GenAI 2025 Hackathon Finalist",
    "MSIT Delhi (B.Tech CSE)",
    "IIT Guwahati (B.Sc Data Science & AI)",
    "Open Source Contributor",
  ];

  return (
    <section id="hero-section" className="relative min-h-[92vh] flex flex-col justify-center py-16 md:py-24 overflow-hidden border-b border-border-custom bg-[#FDFCF7]/40 dark:bg-[#0B0A08]/20">
      
      {/* Background Oversized Parallax Typography */}
      <BackgroundTypography text="INTELLIGENCE" speed={0.4} direction="left" />

      {/* 3D Interactive WebGL Scene */}
      <HeroSystem />

      {/* Connected Grid Annotations (Top Corners) */}
      <div className="absolute top-6 left-6 md:left-12 font-mono text-[9px] text-text-muted/60 uppercase tracking-widest hidden sm:flex items-center gap-2 pointer-events-none z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
        <span>[SYS_STATUS // ONLINE]</span>
      </div>
      <div className="absolute top-6 right-6 md:right-12 font-mono text-[9px] text-text-muted/60 uppercase tracking-widest hidden sm:flex items-center gap-2 pointer-events-none z-10">
        <span>[LATENCY // &lt; 120MS]</span>
      </div>

      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Main Studio Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          
          {/* Left Column: Studio Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Studio Positioning Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border-custom bg-white dark:bg-[#141311] shadow-[0_2px_12px_rgba(0,0,0,0.03)] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase text-text-base">
                Creative Technology + AI Engineering Studio
              </span>
            </div>

            {/* Editorial Masked Display Headline */}
            <h1 className="font-sans text-[clamp(44px,7vw,120px)] font-bold tracking-tighter text-text-base leading-[0.95] mb-8 flex flex-col uppercase">
              <span className="mask-text">
                <span
                  ref={(el) => {
                    if (el) headingLinesRef.current[0] = el;
                  }}
                  className="mask-text-inner"
                >
                  WE DESIGN & ENGINEER
                </span>
              </span>
              <span className="mask-text">
                <span
                  ref={(el) => {
                    if (el) headingLinesRef.current[1] = el;
                  }}
                  className="mask-text-inner text-primary font-serif italic lowercase tracking-normal"
                >
                  intelligent
                </span>
              </span>
              <span className="mask-text">
                <span
                  ref={(el) => {
                    if (el) headingLinesRef.current[2] = el;
                  }}
                  className="mask-text-inner"
                >
                  DIGITAL SYSTEMS.
                </span>
              </span>
            </h1>

            {/* Studio Pillars & Supporting Copy */}
            <div ref={subtextRef} className="flex flex-col gap-5 max-w-2xl mb-10">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-text-base">
                <span className="flex items-center gap-1 text-primary"><Bot className="size-3.5" /> AI Systems</span>
                <span className="text-border-custom">•</span>
                <span className="flex items-center gap-1 text-primary"><Zap className="size-3.5" /> Automation</span>
                <span className="text-border-custom">•</span>
                <span className="flex items-center gap-1 text-primary"><Cpu className="size-3.5" /> Custom Software</span>
                <span className="text-border-custom">•</span>
                <span className="flex items-center gap-1 text-primary"><Globe className="size-3.5" /> Digital Experiences</span>
              </div>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                I engineer the intelligent software infrastructure, autonomous AI agents, automated operations pipelines, and digital experiences that power modern ambitious businesses.
              </p>
            </div>

            {/* CTAs */}
            <div
              ref={ctasRef}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Magnetic strength={0.15}>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-9 py-4 text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-primary/20 active:scale-[0.98]"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.15}>
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border-custom bg-white hover:bg-[#101010]/5 dark:bg-[#141311] dark:hover:bg-[#FDFCF7]/5 px-9 py-4 text-xs font-sans font-bold uppercase tracking-widest text-text-base transition-all duration-300 active:scale-[0.98]"
                >
                  <span>Explore Our Work</span>
                </a>
              </Magnetic>
            </div>

          </div>

          {/* Right Column: Interactive System Nodes Visualizer / 3D Fallback */}
          <div className="lg:col-span-5 w-full flex justify-center z-10 explore-target">
            {/* The 3D HeroSystem lives at the absolute background of this section via its own component */}
            <div className="w-full aspect-square md:aspect-auto md:h-full relative pointer-events-none" />
          </div>

        </div>

        {/* Verifiable Credentials Strip */}
        <div
          ref={proofRef}
          className="w-full border-t border-border-custom pt-8"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-primary font-extrabold mb-4 block">
            Verifiable Credentials & Track Record
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {proofItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="text-xs font-sans font-semibold text-text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </div>
                {idx < proofItems.length - 1 && (
                  <span className="hidden md:inline text-border-custom text-sm">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
