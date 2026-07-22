"use client";

import React, { useState } from "react";
import { projectsData } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeStudy = projectsData.find((s) => s.id === selectedId);

  // Take the featured case studies
  const featuredStudies = projectsData.filter(s => s.featured).slice(0, 4);

  // GSAP Background Choreography
  React.useEffect(() => {
    let ctx = gsap.context(() => {
      featuredStudies.forEach((study, index) => {
        const element = document.getElementById(`project-card-${study.id}`);
        if (element) {
          ScrollTrigger.create({
            trigger: element,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => {
              gsap.to("body", { backgroundColor: study.bgLight, duration: 0.8, ease: "power2.out" });
            },
            onEnterBack: () => {
              gsap.to("body", { backgroundColor: study.bgLight, duration: 0.8, ease: "power2.out" });
            },
          });
        }
      });

      // Reset background when leaving the section
      ScrollTrigger.create({
        trigger: "#work",
        start: "top bottom",
        end: "bottom top",
        onLeave: () => {
          gsap.to("body", { backgroundColor: "var(--background)", duration: 0.8 });
        },
        onLeaveBack: () => {
          gsap.to("body", { backgroundColor: "var(--background)", duration: 0.8 });
        }
      });
    });

    return () => ctx.revert();
  }, [featuredStudies]);

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left max-w-2xl">
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
              FEATURED PROJECTS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
              Solutions That Drive Results
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              Explore some of the impactful solutions we&apos;ve built for startups and businesses across industries.
            </p>
          </div>
          <div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 text-xs font-mono font-bold text-text-base transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredStudies.map((study) => (
            <motion.div
              key={study.id}
              id={`project-card-${study.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hog-card rounded-3xl overflow-hidden bg-card-bg/60 backdrop-blur-sm border border-border-custom hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Graphic Mockup Preview Container */}
              <div 
                onClick={() => setSelectedId(study.id)}
                className="w-full aspect-[16/10] flex items-center justify-center p-6 cursor-pointer overflow-hidden relative"
                style={{ backgroundColor: study.bgDark }}
              >
                <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(circle at 50% 120%, ${study.accentColor}40, transparent)` }} />
                
                {/* Mock UI Dashboard representation */}
                <div className="w-[85%] h-[85%] rounded-t-xl bg-[#0B0F19] border border-white/10 shadow-2xl flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Mock Window Header */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-[#121824]/50">
                    <div className="flex items-center gap-1">
                      <span className="size-2 rounded-full bg-red-500/80" />
                      <span className="size-2 rounded-full bg-yellow-500/80" />
                      <span className="size-2 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">{study.client}</span>
                  </div>
                  
                  {/* Mock Content */}
                  <div className="flex-1 p-4 flex flex-col gap-3 font-mono text-[9px] text-white/50 text-left">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="font-bold text-white text-[10px]">{study.title}</span>
                      <span className="text-primary text-[8px] bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded" style={{ color: study.accentColor, borderColor: `${study.accentColor}40`, backgroundColor: `${study.accentColor}15` }}>{study.category}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white/5 rounded w-3/4" />
                      <div className="h-3 bg-white/5 rounded w-1/2" />
                      <div className="h-3 bg-white/5 rounded w-5/6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Info section */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded" style={{ color: study.accentColor, borderColor: `${study.accentColor}40`, backgroundColor: `${study.accentColor}15` }}>
                      {study.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-text-base mb-2">{study.title}</h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6 line-clamp-2">
                    {study.summary}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedId(study.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline self-start"
                  style={{ color: study.accentColor }}
                >
                  <span>View Case Study</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay details */}
        <AnimatePresence>
          {selectedId && activeStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card-bg rounded-[28px] p-6 md:p-10 border border-border-custom shadow-2xl flex flex-col gap-6 text-left"
              >
                {/* Header */}
                <div className="flex justify-between items-start border-b border-border-custom/50 pb-4">
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase border px-2.5 py-0.5 rounded-full mb-2 inline-block" style={{ color: activeStudy.accentColor, borderColor: `${activeStudy.accentColor}40`, backgroundColor: `${activeStudy.accentColor}15` }}>
                      {activeStudy.category}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base">{activeStudy.title}</h3>
                    <p className="text-xs text-text-muted mt-1">Client: {activeStudy.client}</p>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-1.5 rounded-lg border border-border-custom hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                  >
                    <X className="size-4 text-text-base" />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-6 text-xs md:text-sm text-text-muted leading-relaxed">
                  <div>
                    <span className="font-serif font-bold text-text-base block mb-1">Problem Statement</span>
                    <p>{activeStudy.problem}</p>
                  </div>
                  
                  <div>
                    <span className="font-serif font-bold text-text-base block mb-1">Solution Engineered</span>
                    <p>{activeStudy.solution}</p>
                  </div>

                  {activeStudy.capabilities && (
                    <div>
                      <span className="font-serif font-bold text-text-base block mb-2">Capabilities Deployed</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeStudy.capabilities.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: activeStudy.accentColor }} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-border-custom/50 pt-4 flex items-center justify-between">
                    <div className="flex gap-6">
                      {activeStudy.metrics?.map((metric, idx) => (
                        <div key={idx}>
                          <span className="text-[10px] font-mono text-text-muted block uppercase">{metric.label}</span>
                          <span className="text-base md:text-lg font-bold" style={{ color: activeStudy.accentColor }}>{metric.value}</span>
                        </div>
                      ))}
                    </div>
                    {activeStudy.liveUrl && (
                      <a
                        href={activeStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl text-white px-5 py-2.5 text-xs font-semibold shadow-sm transition-all hover:opacity-80"
                        style={{ backgroundColor: activeStudy.accentColor }}
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
