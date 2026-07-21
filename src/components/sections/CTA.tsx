"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../Magnetic";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Section entrance fade
    gsap.fromTo(
      containerRef.current,
      { scale: 0.96, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 border-b border-border-custom bg-[#FDFCF7]/10 dark:bg-[#0B0A08]/5"
    >
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full">
        
        {/* Immersive CTA container */}
        <div
          ref={containerRef}
          className="relative bg-foreground dark:bg-[#100F0D] text-background dark:text-[#FDFCF7] rounded-[40px] md:rounded-[56px] p-8 md:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-border-custom text-center"
        >
          {/* Subtle background nodes floating */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.08),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/10 px-3.5 py-1.5 rounded-full inline-block font-extrabold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Let&apos;s Build Together
            </span>

            {/* Editorial slogan */}
            <h2 className="font-serif text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] max-w-3xl">
              Have Something Ambitious In Mind?
            </h2>

            <p className="text-sm md:text-lg text-[#a09f9a] max-w-xl leading-relaxed">
              Let&apos;s engineer the custom web interfaces, database models, and AI workflows behind your operations.
            </p>

            {/* Magnetic Button */}
            <div className="mt-6 md:mt-8">
              <Magnetic strength={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-5 rounded-full text-xs font-sans font-bold uppercase tracking-widest shadow-xl shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-[0.97]"
                >
                  <span>Start A Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
