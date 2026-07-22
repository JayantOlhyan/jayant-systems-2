"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bot, Zap, Cpu, Globe, ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from "lucide-react";

export default function Capabilities() {
  const [activePane, setActivePane] = useState<number>(0);

  const capabilityPillars = [
    {
      id: "ai-systems",
      title: "AI Systems",
      subtitle: "Agentic Intelligence & LLM Workflows",
      icon: <Bot className="size-6 text-primary" />,
      description: "Bespoke artificial intelligence solutions, multi-agent frameworks, RAG pipelines, and LLM integrations built to automate complex reasoning tasks.",
      services: [
        "Custom AI Applications & Chatbots",
        "Agentic Task Automation & Workflows",
        "LLM Fine-tuning & RAG Knowledge Retrieval",
        "Intelligent Internal Knowledge Base Bots",
        "AI-Powered Customer Service Co-Pilots"
      ],
      tech: ["OpenAI GPT-4o", "Google Gemini 1.5", "Python FastAPI", "LangChain", "Vector DBs"],
      image: "/assets/3d/ai_systems.png"
    },
    {
      id: "automation",
      title: "Business Automation",
      subtitle: "Workflow & Operations Engineering",
      icon: <Zap className="size-6 text-primary" />,
      description: "Eliminate repetitive manual data entry, streamline lead qualification, and automate cross-platform operations using secure event-driven integrations.",
      services: [
        "WhatsApp Business Cloud Automation",
        "CRM & Sales Pipeline Lead Routing",
        "Automated PDF & Document Generation",
        "Cross-System API Webhook Pipelines",
        "Customer Support Escalation Workflows"
      ],
      tech: ["WhatsApp Cloud API", "FastAPI", "Webhooks", "PostgreSQL", "Supabase", "Redis"],
      image: "/assets/3d/automation.png"
    },
    {
      id: "digital-products",
      title: "Digital Products",
      subtitle: "SaaS Dashboards & Software Applications",
      icon: <Cpu className="size-6 text-primary" />,
      description: "End-to-end engineering of multi-tenant SaaS products, internal admin management systems, mobile applications, and enterprise dashboards.",
      services: [
        "SaaS Product Design & Full-Stack Code",
        "Internal Operations Dashboards & Admin Portals",
        "MVP Rapid Development for Startups",
        "Cross-Platform Mobile Apps (iOS & Android)",
        "Stripe Billing & Subscription Engines"
      ],
      tech: ["Next.js 16", "React 19", "Node.js", "Flutter", "Tailwind CSS", "Stripe API"],
      image: "/assets/3d/digital_products.png"
    },
    {
      id: "digital-experiences",
      title: "Digital Experiences",
      subtitle: "Creative Development & High-Craft Websites",
      icon: <Globe className="size-6 text-primary" />,
      description: "High-craft websites and web apps engineered with smooth GSAP animations, Lenis scroll mechanics, and editorial typography that convert visitors.",
      services: [
        "Premium Agency & Studio Websites",
        "Motion-Driven Interactive Showcases",
        "SEO-Optimized Product Landing Pages",
        "Creative WebGL & GSAP Micro-Interactions",
        "Headless CMS & Editorial Publishing"
      ],
      tech: ["Next.js App Router", "GSAP 3.15", "Lenis", "Tailwind CSS v4", "TypeScript"],
      image: "/assets/3d/digital_experiences.png"
    }
  ];

  return (
    <section id="capabilities" className="py-24 md:py-36 relative border-b border-border-custom bg-[#FDFCF7]/30 dark:bg-[#0B0A08]/10">
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full">
        
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16 md:mb-24">
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full mb-4 inline-block">
            SYSTEM CAPABILITIES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-base leading-tight mb-4">
            Intelligent Infrastructure. <br />
            <span className="text-primary">Four Core Pillars.</span>
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed">
            I don&apos;t build generic template sites. I engineer the connected software systems, AI pipelines, and automated workflows behind modern operations.
          </p>
        </div>

        {/* Interactive Multi-Pane Capabilities Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Vertical Toggle Controls */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {capabilityPillars.map((pillar, idx) => {
              const isActive = activePane === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePane(idx)}
                  className={`group text-left p-6 md:p-8 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "border-primary bg-card-bg shadow-lg shadow-primary/5"
                      : "border-border-custom bg-card-bg/40 hover:bg-card-bg hover:border-border-custom/80"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-3 rounded-xl border transition-colors ${
                      isActive ? "border-primary/30 bg-primary/10" : "border-border-custom bg-background"
                    }`}>
                      {pillar.icon}
                    </div>
                    <div className="flex flex-col">
                      <h3 className={`font-serif text-lg md:text-xl font-bold transition-colors ${
                        isActive ? "text-primary" : "text-text-base group-hover:text-primary"
                      }`}>
                        {pillar.title}
                      </h3>
                      <span className="font-mono text-xs text-text-muted mt-0.5">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`size-5 transition-transform duration-300 ${
                    isActive ? "rotate-90 text-primary" : "text-text-muted group-hover:translate-x-1"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Pillar Expanded Display */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border-custom bg-card-bg p-8 md:p-12 shadow-xl relative overflow-hidden transition-all duration-500">
              
              {/* Pillar Header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <span className="px-3.5 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  {capabilityPillars[activePane].subtitle}
                </span>
              </div>

              {/* 3D Visual Asset */}
              <div className="absolute top-0 right-0 w-64 h-64 -translate-y-12 translate-x-12 opacity-80 pointer-events-none mix-blend-multiply dark:mix-blend-lighten hidden md:block z-0">
                <img src={capabilityPillars[activePane].image} alt="" className="w-full h-full object-contain" />
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-bold text-text-base mb-4 relative z-10">
                {capabilityPillars[activePane].title}
              </h3>

              <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8 relative z-10 max-w-xl">
                {capabilityPillars[activePane].description}
              </p>

              {/* Deliverables List */}
              <div className="mb-10">
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-text-base mb-4 flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" /> Key System Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilityPillars[activePane].services.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl border border-border-custom/60 bg-background/50">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-text-base leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pill Grid */}
              <div className="pt-6 border-t border-border-custom/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="font-mono text-[10px] text-text-muted uppercase font-bold mr-2">Stack:</span>
                  {capabilityPillars[activePane].tech.map((t, idx) => (
                    <span key={idx} className="font-mono text-xs px-3 py-1 rounded-md border border-border-custom bg-background text-text-base font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary hover:underline"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
