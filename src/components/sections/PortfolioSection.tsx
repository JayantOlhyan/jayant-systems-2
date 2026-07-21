"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { projectsData, Project } from "@/data/projects";
import { ArrowRight, X, ExternalLink, Sparkles, CheckCircle2, Code2, Code, Layers } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../Magnetic";

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const img = card.querySelector(".project-img-inner");

        // ScrollTrigger entrance parallax for project mockup
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12, y: -25 },
            {
              scale: 1.0,
              y: 25,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-36 relative border-b border-border-custom bg-background"
    >
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full mb-4 inline-block">
              FEATURED WORK & PROOF
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-base leading-tight">
              Bespoke Systems. <br />
              <span className="text-primary">Real-World Outcomes.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-text-muted max-w-md leading-relaxed">
            Explore high-performance AI agents, automated workflow pipelines, and custom software systems built for ambitious organizations.
          </p>
        </div>

        {/* Immersive Full-Width Projects Stack */}
        <div className="flex flex-col gap-16 md:gap-28">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="group relative rounded-[32px] overflow-hidden border border-border-custom bg-card-bg shadow-[0_8px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[520px]">
                
                {/* Left Column: Project Copy & System Metrics */}
                <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
                  <div>
                    {/* Category & Year Tag */}
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="px-3.5 py-1 rounded-full font-mono text-[10px] font-bold tracking-wider uppercase text-white shadow-sm"
                        style={{ backgroundColor: project.accentColor }}
                      >
                        {project.category}
                      </span>
                      <span className="font-mono text-xs font-semibold text-text-muted">
                        {project.year} • {project.duration}
                      </span>
                    </div>

                    {/* Project Title & Tagline */}
                    <h3 className="font-serif text-3xl md:text-5xl font-bold text-text-base mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8">
                      {project.summary}
                    </p>

                    {/* Capabilities Tags */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="font-mono text-[11px] px-3 py-1 rounded-lg border border-border-custom bg-background text-text-base font-medium"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Strip & Action Trigger */}
                  <div className="border-t border-border-custom/80 pt-6 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase font-bold text-text-muted tracking-wider">
                        {project.metrics[0].label}
                      </span>
                      <span
                        className="font-serif text-lg font-extrabold"
                        style={{ color: project.accentColor }}
                      >
                        {project.metrics[0].value}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-2 rounded-full border border-border-custom bg-background hover:bg-primary hover:text-white px-6 py-3 text-xs font-mono font-bold transition-all duration-300 shadow-sm"
                      aria-label={`View detailed case study for ${project.title}`}
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Mockup Showcase Container */}
                <div
                  className="lg:col-span-6 relative overflow-hidden min-h-[340px] lg:min-h-full flex items-center justify-center p-8 md:p-12"
                  style={{ backgroundColor: project.bgDark }}
                >
                  {/* Subtle Background Glow */}
                  <div
                    className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
                    style={{ backgroundColor: project.accentColor }}
                  />

                  {/* Mock Browser Container */}
                  <div className="project-img-inner relative w-full aspect-[16/10] rounded-2xl border border-white/15 bg-black/60 shadow-2xl overflow-hidden flex flex-col backdrop-blur-md">
                    {/* Browser Control Bar */}
                    <div className="h-9 px-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="size-2.5 rounded-full bg-red-500/80" />
                        <span className="size-2.5 rounded-full bg-yellow-500/80" />
                        <span className="size-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">
                        {project.slug}.jayant.systems
                      </span>
                    </div>

                    {/* Mock Interface Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent text-white">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold tracking-widest uppercase text-white/80 flex items-center gap-2">
                            <Sparkles className="size-3.5 text-primary" /> {project.title} Interface
                          </span>
                          <span className="font-mono text-[10px] text-white/40 border border-white/10 px-2 py-0.5 rounded">
                            Production
                          </span>
                        </div>
                        <p className="font-serif text-lg font-bold text-white/90 line-clamp-2">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Mock Tech Badges */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="font-mono text-[10px] text-white/70 bg-white/10 px-2.5 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Case Study Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border-custom bg-background p-6 md:p-12 shadow-2xl text-text-base">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-3 rounded-full border border-border-custom bg-card-bg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col gap-4 mb-8">
              <span
                className="inline-block self-start px-3.5 py-1 rounded-full font-mono text-[10px] font-bold uppercase text-white"
                style={{ backgroundColor: activeProject.accentColor }}
              >
                {activeProject.category}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
                {activeProject.title}
              </h2>
              <p className="text-base font-medium text-text-muted">
                {activeProject.tagline}
              </p>
            </div>

            {/* System Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl border border-border-custom bg-card-bg/60 mb-10">
              {activeProject.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono text-[10px] font-bold text-text-muted uppercase">{m.label}</span>
                  <span className="font-serif text-xl font-extrabold text-primary">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Structured Problem / Solution Storytelling */}
            <div className="flex flex-col gap-8 mb-10 text-sm md:text-base leading-relaxed text-text-muted">
              <div>
                <h4 className="font-serif text-lg font-bold text-text-base mb-2">The Challenge</h4>
                <p>{activeProject.problem}</p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-text-base mb-2">The Engineering Approach</h4>
                <p>{activeProject.approach}</p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-text-base mb-2">The Delivered Solution</h4>
                <p>{activeProject.solution}</p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-10">
              <h4 className="font-serif text-sm font-bold text-text-base mb-3">Technologies & Architecture</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((t, idx) => (
                  <span key={idx} className="font-mono text-xs px-3 py-1 rounded-lg border border-border-custom bg-card-bg text-text-base font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 border-t border-border-custom/80 pt-6">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-custom bg-card-bg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-mono font-bold text-text-base transition-colors"
                >
                  <Code2 className="size-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-mono font-bold transition-colors shadow-md"
              >
                <span>Discuss Similar System</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
