"use client";

import React, { useState, useEffect, useRef } from "react";
import { Brain, Cpu, Database, Globe, ArrowRight, Sparkles, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  points: string[];
  examples: string[];
  tech: string[];
}

export default function Capabilities() {
  const [activeId, setActiveId] = useState<string>("ai-systems");
  const sectionRef = useRef<HTMLDivElement>(null);

  const capabilitiesData: CapabilityItem[] = [
    {
      id: "ai-systems",
      title: "AI Systems",
      subtitle: "Agentic Intelligence & LLM Workflows",
      icon: <Brain className="w-6 h-6 text-primary" />,
      description:
        "Building tailored cognitive infrastructure. I train LLMs on your proprietary files, deploy autonomous agents that resolve tasks, and engineer co-pilots that integrate with your operational systems.",
      points: [
        "Custom AI applications & LLM integrations",
        "Autonomous AI agents that execute decisions",
        "Knowledge bases trained on company data",
        "Intelligent support & CRM assistants",
        "AI-powered document processing & triage",
      ],
      examples: [
        "Rural Healthcare preliminary diagnostic agent (Healthkinator)",
        "Automated syllabus and lesson planner portal for education",
      ],
      tech: ["Gemini API", "OpenAI API", "LangChain", "FastAPI", "Python"],
    },
    {
      id: "automation",
      title: "Business Automation",
      subtitle: "Workflow & Operations Engineering",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      description:
        "Eliminating manual busywork and copy-paste spreadsheet operations. I write direct API connectors, automated lead pipelines, and custom WhatsApp bots that automate operations.",
      points: [
        "End-to-end workflow engineering (n8n, Make, Custom code)",
        "WhatsApp Business API chat triggers",
        "CRM syncing & automatic lead assignment",
        "Automated billing & notification workflows",
        "Database monitoring & event triggers",
      ],
      examples: [
        "WhatsApp appointment scheduling & reminder system",
        "Automated lead qualifier & routing pipeline",
      ],
      tech: ["n8n", "Make.com", "Node.js", "Express", "PostgreSQL"],
    },
    {
      id: "digital-products",
      title: "Digital Products",
      subtitle: "SaaS Dashboards & Software Apps",
      icon: <Database className="w-6 h-6 text-primary" />,
      description:
        "Developing robust, responsive software custom-tailored to your workflow. From multi-user admin portals to live analytical dashboards, I write scalable code designed to work.",
      points: [
        "Full-stack Web Applications & Startup MVPs",
        "CRM portals & client billing dashboards",
        "Cross-platform Mobile Apps (iOS & Android)",
        "Admin control boards & database tables",
        "API service architectures",
      ],
      examples: [
        "Civic complaints tracking and grievance platform (CivicSetu)",
        "Teacher digital workspace & resource tracker (Teacher Sathi)",
      ],
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "Firebase"],
    },
    {
      id: "digital-experiences",
      title: "Digital Experiences",
      subtitle: "High-Converting Websites & Motion",
      icon: <Globe className="w-6 h-6 text-primary" />,
      description:
        "Websites should win customers. I design premium, high-speed, and accessible web experiences featuring refined editorial layouts and smooth interactions that maximize conversions.",
      points: [
        "High-converting landing pages & corporate sites",
        "Responsive, clamp-based responsive grids",
        "GSAP & WebGL custom motion choreography",
        "Core Web Vitals & performance optimization",
        "Strict semantic HTML & WCAG accessibility",
      ],
      examples: [
        "Full design & speed rebuild of Maharaja Surajmal Institute of Technology (MSIT) site",
        "Lead capture funnel architectures for professional services",
      ],
      tech: ["Next.js 16/15", "Tailwind CSS v4", "GSAP", "Lenis", "Framer Motion"],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".capabilities-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".capabilities-heading",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".capabilities-list",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".capabilities-list",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 border-b border-border-custom bg-[#FDFCF7]/20 dark:bg-[#0B0A08]/10"
    >
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full text-left">
        
        {/* Section Header */}
        <div className="capabilities-heading max-w-2xl mb-20">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1.5 rounded-full mb-4 inline-block font-extrabold">
            Expertise & Capabilities
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-4 mt-2">
            Intelligent Infrastructure.
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed">
            I don&apos;t just build generic sites. I engineer the connected software systems, AI pipelines, and automated workflows behind modern operations.
          </p>
        </div>

        {/* Interactive Accordion Layout */}
        <div className="capabilities-list grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Accordion Left Side Toggle Titles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {capabilitiesData.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-6 md:p-8 rounded-[24px] border transition-all duration-300 flex items-start gap-4 md:gap-6 group ${
                    isActive
                      ? "bg-white dark:bg-[#141311] border-primary shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
                      : "bg-transparent border-border-custom hover:bg-white/40 dark:hover:bg-[#141311]/40"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "bg-primary/10" : "bg-neutral-100 dark:bg-neutral-800"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 text-text-muted transition-transform duration-300 ${
                      isActive ? "rotate-90 text-primary" : "group-hover:translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Accordion Right Side Detailed Expanded Box */}
          <div className="lg:col-span-7 bg-white dark:bg-[#141311] border border-border-custom rounded-[32px] p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.01)] min-h-[480px] flex flex-col justify-between">
            {capabilitiesData.map((item) => {
              if (activeId !== item.id) return null;
              return (
                <div key={item.id} className="flex flex-col gap-6 md:gap-8 text-left animate-fade-in">
                  
                  {/* Category description */}
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF5A00] font-extrabold flex items-center gap-1.5 mb-2">
                      <Sparkles className="w-3.5 h-3.5" /> {item.title} Overview
                    </span>
                    <p className="text-sm md:text-base text-text-base leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet points inclusions */}
                  <div>
                    <span className="font-serif text-sm font-bold text-text-base block mb-3">
                      Capabilities & Systems Built
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-text-muted pl-1">
                      {item.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real-world examples */}
                  <div className="border-t border-border-custom pt-6">
                    <span className="font-serif text-xs font-bold text-text-base block mb-2">
                      Shipped Examples
                    </span>
                    <ul className="text-xs text-text-muted space-y-2">
                      {item.examples.map((ex, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology stack */}
                  <div className="border-t border-border-custom pt-6">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted font-extrabold block mb-3">
                      Systems Infrastructure Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-[#a09f9a] bg-[#101010]/5 dark:bg-[#FDFCF7]/5 border border-border-custom px-2.5 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
