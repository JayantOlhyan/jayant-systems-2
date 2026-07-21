"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { caseStudies, CaseStudy } from "../../data/content";
import { ArrowRight, X, Check, ExternalLink, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PortfolioSection() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);

  // Take the first 4 case studies for the featured section
  const featuredStudies = caseStudies.filter(
    (study) =>
      study.id === "teachersathi" ||
      study.id === "healthkinator" ||
      study.id === "sentinelai" ||
      study.id === "msitwebsite"
  );

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate section heading
    gsap.fromTo(
      ".portfolio-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-heading",
          start: "top 85%",
        },
      }
    );

    // Scroll trigger entrance for each project card
    projectRefs.current.forEach((project, idx) => {
      if (!project) return;
      
      const img = project.querySelector(".project-img-wrapper");
      const info = project.querySelector(".project-info");

      // Parallax effect on image scroll
      if (img) {
        gsap.fromTo(
          img.querySelector("img || .mock-ui"),
          { scale: 1.15, y: -20 },
          {
            scale: 1.0,
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // Smooth slide-up for info container
      if (info) {
        gsap.fromTo(
          info,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: info,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Set project styling presets
  const getProjectTheme = (id: string) => {
    switch (id) {
      case "teachersathi":
        return {
          bg: "bg-[#F3EFE0] dark:bg-[#1C1A14]",
          accent: "#C25E00",
          textColor: "text-[#4A3B2C]",
          dotColor: "bg-[#8C6D58]",
        };
      case "healthkinator":
        return {
          bg: "bg-[#E3F2FD] dark:bg-[#111A24]",
          accent: "#00E676",
          textColor: "text-[#1B5E20]",
          dotColor: "bg-[#2E7D32]",
        };
      case "sentinelai":
        return {
          bg: "bg-[#ECEFF1] dark:bg-[#171E22]",
          accent: "#29B6F6",
          textColor: "text-[#263238]",
          dotColor: "bg-[#37474F]",
        };
      case "msitwebsite":
        return {
          bg: "bg-[#F5F5F5] dark:bg-[#161616]",
          accent: "#FF9800",
          textColor: "text-[#3E2723]",
          dotColor: "bg-[#5D4037]",
        };
      default:
        return {
          bg: "bg-white dark:bg-neutral-900",
          accent: "#FF5A00",
          textColor: "text-foreground",
          dotColor: "bg-[#FF5A00]",
        };
    }
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-36 border-b border-border-custom relative bg-[#FDFCF7]/10 dark:bg-[#0B0A08]/5"
    >
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full text-left">
        
        {/* Section Header */}
        <div className="portfolio-heading flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1.5 rounded-full mb-4 inline-block font-extrabold">
              Selected Projects
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-4 mt-2">
              Bespoke Systems. Real Outcomes.
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              Explore high-performance digital products, custom workflow portals, and integrated AI systems shipped for real-world impact.
            </p>
          </div>
          <div>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 border border-border-custom bg-white hover:bg-neutral-100 dark:bg-[#141311] dark:hover:bg-neutral-800 text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors"
            >
              <span>Explore All Work</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>

        {/* Alternate Full-Width Projects */}
        <div className="flex flex-col gap-16 md:gap-28">
          {featuredStudies.map((study, idx) => {
            const theme = getProjectTheme(study.id);
            return (
              <div
                key={study.id}
                ref={(el) => {
                  if (el) projectRefs.current[idx] = el;
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Visual Showcase (Odd indices float right, even left) */}
                <div
                  className={`lg:col-span-7 cursor-pointer overflow-hidden rounded-[36px] border border-border-custom aspect-[16/10] relative project-img-wrapper ${theme.bg} flex items-center justify-center p-6 md:p-12`}
                  data-cursor="view"
                  onClick={() => setActiveStudy(study)}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.02),transparent)] pointer-events-none" />
                  
                  {/* Visual representation of the dashboard */}
                  <div className="mock-ui w-full h-full rounded-2xl bg-[#090909] border border-white/10 shadow-2xl flex flex-col overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#121212]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                        {study.client}
                      </span>
                    </div>

                    {/* Dashboard Inner Grid */}
                    <div className="flex-1 p-5 md:p-7 flex flex-col justify-between text-left font-mono">
                      <div>
                        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                          <span className="text-white font-serif font-extrabold text-sm md:text-base">
                            {study.title}
                          </span>
                          <span className="text-[10px] text-primary border border-primary/20 bg-primary/10 px-2 py-0.5 rounded-full">
                            {study.industry}
                          </span>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="h-4 bg-white/5 rounded-md w-[85%]" />
                          <div className="h-4 bg-white/5 rounded-md w-[60%]" />
                          <div className="h-4 bg-white/5 rounded-md w-[45%]" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-white/5 pt-4">
                        <span className="text-[10px] text-white/40">SYSTEM METRIC</span>
                        <span className="text-xs text-primary font-bold">{study.result}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Context (Alternates order relative to image) */}
                <div
                  className={`lg:col-span-5 flex flex-col items-start text-left project-info ${
                    idx % 2 === 0 ? "lg:order-first" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                      {study.duration || "4 Weeks"} Build
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-text-base mb-4 leading-tight">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {study.problem}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-[#a09f9a] bg-[#101010]/5 dark:bg-[#FDFCF7]/5 border border-border-custom px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveStudy(study)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-text-base hover:text-primary group"
                  >
                    <span>Analyze Case Study</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal Overlay */}
        {activeStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <div
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
              onClick={() => setActiveStudy(null)}
            />
            
            {/* Modal Box */}
            <div className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card-bg rounded-[32px] p-6 md:p-10 border border-card-border shadow-2xl flex flex-col gap-6 text-left">
              {/* Modal Header */}
              <div className="flex justify-between items-start border-b border-border-custom pb-4">
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full mb-3 inline-block font-extrabold">
                    {activeStudy.industry}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-text-base leading-tight">
                    {activeStudy.title}
                  </h3>
                  <span className="text-xs text-text-muted mt-1.5 block">
                    Client: {activeStudy.client} • Duration: {activeStudy.duration || "4 Weeks"}
                  </span>
                </div>
                <button
                  onClick={() => setActiveStudy(null)}
                  className="p-2 rounded-full border border-border-custom hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                  aria-label="Close Case Study"
                >
                  <X className="w-4 h-4 text-text-base" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 text-xs md:text-sm text-text-muted leading-relaxed">
                
                {/* Before vs After States */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border border-red-500/10 rounded-2xl p-4 bg-red-500/[0.02]">
                    <span className="font-sans font-extrabold text-[10px] text-red-600 dark:text-red-400 block mb-1.5 uppercase tracking-widest">
                      ❌ Operational Bottleneck
                    </span>
                    <p className="text-text-base">{activeStudy.beforeState}</p>
                  </div>
                  <div className="border border-emerald-500/10 rounded-2xl p-4 bg-emerald-500/[0.02]">
                    <span className="font-sans font-extrabold text-[10px] text-emerald-600 dark:text-emerald-400 block mb-1.5 uppercase tracking-widest">
                      ✅ Automated Efficiency
                    </span>
                    <p className="text-text-base">{activeStudy.afterState}</p>
                  </div>
                </div>

                {/* Deep-dive summary */}
                <div>
                  <span className="font-serif font-extrabold text-text-base block mb-2">
                    System Solution
                  </span>
                  <p>{activeStudy.solution}</p>
                </div>

                {/* Key Features list */}
                {activeStudy.features && (
                  <div>
                    <span className="font-serif font-extrabold text-text-base block mb-3">
                      Key Deliverables Built
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeStudy.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-text-base font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies used */}
                <div>
                  <span className="font-serif font-extrabold text-text-base block mb-2">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeStudy.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-[#a09f9a] bg-[#101010]/5 dark:bg-[#FDFCF7]/5 border border-border-custom px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results & Live Redirect */}
                <div className="border-t border-border-custom pt-6 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-text-muted block uppercase tracking-wider">
                      Measurable Result
                    </span>
                    <span className="text-lg md:text-xl font-serif font-bold text-primary">
                      {activeStudy.result}
                    </span>
                  </div>
                  {activeStudy.liveWebsite && activeStudy.liveWebsite !== "#" && (
                    <a
                      href={activeStudy.liveWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3.5 text-xs font-sans font-bold uppercase tracking-wider shadow-sm transition-all"
                    >
                      <span>Visit Live System</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
