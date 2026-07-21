"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, MessageSquare, Compass, Code, RefreshCw, Zap } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discover",
      icon: <MessageSquare className="w-5 h-5 text-primary" />,
      subtitle: "System Audits & Goals Alignment",
      description:
        "We jump on a 15-minute consultation to map your current manual business processes, analyze friction points, and lay out actionable outcomes. No sales fluff.",
      deliverables: ["Current workflow audit", "Project scope blueprint", "Fixed-fee transparent proposal"],
    },
    {
      number: "02",
      title: "Design",
      icon: <Compass className="w-5 h-5 text-primary" />,
      subtitle: "UI Prototypes & Schema Layouts",
      description:
        "I sketch custom UI frames and draft database architectures designed around your brand's growth metrics and content guidelines. I don't use boring stock templates.",
      deliverables: ["Custom high-fidelity UI design", "Database schema models", "Interaction guidelines"],
    },
    {
      number: "03",
      title: "Build",
      icon: <Code className="w-5 h-5 text-primary" />,
      subtitle: "Frontend & Custom API Engineering",
      description:
        "I write responsive React pages and strict TypeScript codebases, hook up secure server tables, and build out custom dashboards designed to load instantly.",
      deliverables: ["Next.js/React web platforms", "Responsive client panels", "Scalable backend tables"],
    },
    {
      number: "04",
      title: "Automate",
      icon: <Zap className="w-5 h-5 text-primary" />,
      subtitle: "AI Integrations & CRM Pipelines",
      description:
        "We connect n8n/Make automation workflows, trigger instant WhatsApp customer updates, and train LLMs to act as autonomous operational agents.",
      deliverables: ["Automated CRM pipelines", "WhatsApp API triggers", "AI chatbot sync"],
    },
    {
      number: "05",
      title: "Scale",
      icon: <RefreshCw className="w-5 h-5 text-primary" />,
      subtitle: "QA Auditing & Performance Audits",
      description:
        "I audit accessibility parameters, optimize Largest Contentful Paint metrics, clean up final code, and launch. All projects include 30 days of free support.",
      deliverables: ["60 FPS interaction checks", "Core Web Vitals tuning", "30 Days launch support"],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade heading
    gsap.fromTo(
      ".process-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-heading",
          start: "top 85%",
        },
      }
    );

    // Animate each timeline card block on entry
    const cards = gsap.utils.toArray(".process-card");
    cards.forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 border-b border-border-custom bg-[#FDFCF7]/20 dark:bg-[#0B0A08]/10"
    >
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full text-left">
        
        {/* Section Header */}
        <div className="process-heading flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1.5 rounded-full mb-4 inline-block font-extrabold">
              Development Process
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-4 mt-2">
              From Concept to Shipped Code.
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              How I work with you to analyze, design, engineer, and automate your digital presence. Direct partnership, absolute transparency.
            </p>
          </div>
          <div className="bg-[#101010]/5 dark:bg-[#FDFCF7]/5 border border-border-custom px-6 py-4 rounded-2xl max-w-sm">
            <span className="font-serif font-bold text-text-base text-xs block mb-1">
              Solo Partnership Guarantee
            </span>
            <p className="text-[11px] text-text-muted leading-normal">
              Weekly progress reports, direct access to me—no project managers, sales executives, or delayed updates.
            </p>
          </div>
        </div>

        {/* Stepper Timeline List */}
        <div ref={triggerRef} className="relative max-w-4xl mx-auto flex flex-col gap-12">
          
          {/* Vertical indicator line in background */}
          <div className="absolute left-[23px] top-6 bottom-6 w-[1.5px] bg-border-custom pointer-events-none hidden sm:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="process-card flex flex-col sm:flex-row gap-6 sm:gap-12 relative"
            >
              {/* Left Side: Number Badge */}
              <div className="flex items-center gap-4 sm:flex-col sm:items-start shrink-0">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#141311] border-2 border-primary flex items-center justify-center font-mono text-xs font-black text-primary shadow-sm z-10">
                  {step.number}
                </div>
                <span className="font-serif text-lg font-bold text-text-base sm:hidden">
                  {step.title}
                </span>
              </div>

              {/* Right Side: Step Content Box */}
              <div className="flex-1 bg-white dark:bg-[#141311] border border-border-custom p-6 md:p-8 rounded-[28px] shadow-[0_4px_24px_rgba(0,0,0,0.01)] text-left">
                <div className="flex items-center justify-between border-b border-border-custom pb-4 mb-4">
                  <div>
                    <h3 className="hidden sm:block font-serif text-xl font-bold text-text-base leading-snug">
                      {step.title}
                    </h3>
                    <span className="text-xs text-[#FF5A00] font-semibold block sm:mt-1">
                      {step.subtitle}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                </div>

                <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Step Deliverables */}
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted font-bold block mb-3">
                    Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {step.deliverables.map((del, idx) => (
                      <div
                        key={idx}
                        className="text-[11px] font-sans font-semibold text-text-base bg-[#101010]/5 dark:bg-[#FDFCF7]/5 px-3 py-2 rounded-xl border border-border-custom flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="line-clamp-1">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
