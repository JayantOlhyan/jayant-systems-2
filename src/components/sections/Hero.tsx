"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import HeroVisual from "./HeroVisual";
import Magnetic from "../Magnetic";

export default function Hero() {
  const headingLinesRef = useRef<HTMLSpanElement[]>([]);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Choreographed entrance animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Stagger reveal headline lines
    tl.to(headingLinesRef.current, {
      y: "0%",
      duration: 1.1,
      stagger: 0.1,
    });

    // Fade in and slide subtext
    tl.fromTo(
      subtextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );

    // Fade in buttons
    tl.fromTo(
      ctasRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    );

    // Slide up proof strip
    tl.fromTo(
      proofRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    );
  }, []);

  const proofItems = [
    "12+ Projects Shipped",
    "Hackathon Finalist (ET GenAI 2025)",
    "MSIT Delhi (B.Tech CSE)",
    "IIT Guwahati (Data Science & AI)",
    "Open Source Contributor",
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-16 md:py-24 overflow-hidden border-b border-border-custom bg-[#FDFCF7]/30 dark:bg-[#0B0A08]/10">
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full z-10">
        
        {/* Main Hero grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-custom bg-white dark:bg-[#141311] shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-wider uppercase text-text-base">
                Operational Systems & Web Engineering
              </span>
            </div>

            {/* Masked reveal editorial header */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7.5xl font-extrabold tracking-tight text-text-base leading-[1.05] mb-6 flex flex-col">
              <span className="mask-text">
                <span
                  ref={(el) => {
                    if (el) headingLinesRef.current[0] = el;
                  }}
                  className="mask-text-inner"
                >
                  Websites That
                </span>
              </span>
              <span className="mask-text">
                <span
                  ref={(el) => {
                    if (el) headingLinesRef.current[1] = el;
                  }}
                  className="mask-text-inner text-primary"
                >
                  Win Customers.
                </span>
              </span>
              <span className="mask-text">
                <span
                  ref={(el) => {
                    if (el) headingLinesRef.current[2] = el;
                  }}
                  className="mask-text-inner"
                >
                  AI Systems That
                </span>
              </span>
              <span className="mask-text">
                <span
                  ref={(el) => {
                    if (el) headingLinesRef.current[3] = el;
                  }}
                  className="mask-text-inner text-primary"
                >
                  Save Time.
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <p
              ref={subtextRef}
              className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-10"
            >
              I design custom websites, AI chatbots, WhatsApp automation, CRM workflows, and custom business systems that help ambitious businesses grow without unnecessary complexity.
            </p>

            {/* CTAs */}
            <div
              ref={ctasRef}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Magnetic strength={0.15}>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-4 text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-primary/20 active:scale-[0.98]"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.15}>
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border-custom bg-white hover:bg-[#101010]/5 dark:bg-[#141311] dark:hover:bg-[#FDFCF7]/5 px-8 py-4 text-xs font-sans font-bold uppercase tracking-wider text-text-base transition-all duration-300 active:scale-[0.98]"
                >
                  <span>View My Work</span>
                </a>
              </Magnetic>
            </div>

          </div>

          {/* Right Column: Visualizer */}
          <div className="lg:col-span-5 w-full flex justify-center z-0">
            <HeroVisual />
          </div>

        </div>

        {/* Proof Credentials Strip */}
        <div
          ref={proofRef}
          className="w-full border-t border-border-custom pt-8"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF5A00] font-extrabold mb-4 block">
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
