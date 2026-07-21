"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Network, Database, Layers, ArrowRightLeft } from "lucide-react";

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the path line drawing on scroll
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }

    // Animate text reveal
    gsap.fromTo(
      ".philosophy-text",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".philosophy-text",
          start: "top 85%",
        },
      }
    );

    // Stagger float individual nodes
    gsap.fromTo(
      ".philosophy-node",
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".philosophy-node",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 border-b border-border-custom bg-[#FDFCF7]/10 dark:bg-[#0B0A08]/5 overflow-hidden"
    >
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Slogan Message */}
          <div className="lg:col-span-6 text-left flex flex-col items-start">
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1.5 rounded-full mb-6 inline-block font-extrabold philosophy-text">
              Core Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-extrabold tracking-tight text-text-base leading-[1.05] mb-8 philosophy-text">
              I Don&apos;t Just Build Websites.<br />
              <span className="text-primary">I Build Systems.</span>
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6 philosophy-text">
              A premium landing page is useless if it exists as an island. True growth happens when your website is actively connected to your database, your CRM, your automated WhatsApp messaging triggers, and your business operations.
            </p>
            <p className="text-sm md:text-base text-text-muted leading-relaxed philosophy-text">
              By designing everything as a single connected system, we ensure that leads are qualified instantly, operations run automatically, and you save hours of busywork every day.
            </p>
          </div>

          {/* Right Column: Visual Diagram Mapping of Systems */}
          <div className="lg:col-span-6 flex justify-center relative min-h-[380px] w-full">
            
            {/* Draw Path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 400"
              fill="none"
            >
              <path
                ref={pathRef}
                d="M 120 100 Q 250 50 380 100 T 250 300 Z"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="6,6"
              />
            </svg>

            {/* Top Node: User Website */}
            <div className="absolute top-[10%] left-[10%] z-10 philosophy-node">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#141311] border border-border-custom shadow-md min-w-[160px] text-left">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-sans text-xs font-bold text-text-base block">User Interface</span>
                  <span className="text-[10px] text-text-muted">High-Converting Web</span>
                </div>
              </div>
            </div>

            {/* Right Node: Automation Sync */}
            <div className="absolute top-[15%] right-[10%] z-10 philosophy-node">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#141311] border border-border-custom shadow-md min-w-[160px] text-left">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowRightLeft className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-sans text-xs font-bold text-text-base block">Automation Sync</span>
                  <span className="text-[10px] text-text-muted">Lead Qualifiers & APIs</span>
                </div>
              </div>
            </div>

            {/* Bottom Node: Databases & CRM */}
            <div className="absolute bottom-[10%] left-[25%] right-[25%] mx-auto z-10 philosophy-node max-w-[180px]">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#141311] border border-border-custom shadow-md min-w-[160px] text-left">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-sans text-xs font-bold text-text-base block">Infrastructure</span>
                  <span className="text-[10px] text-text-muted">Secure CRM Database</span>
                </div>
              </div>
            </div>

            {/* Central Node: AI Engine */}
            <div className="absolute top-[40%] left-[38%] z-20 philosophy-node">
              <div className="w-20 h-20 rounded-[24px] bg-foreground text-background flex items-center justify-center shadow-lg border border-border-custom">
                <Network className="w-8 h-8 text-primary animate-pulse" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
