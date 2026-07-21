"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Award, Code, CheckCircle2, ShieldCheck } from "lucide-react";
import Magnetic from "../Magnetic";

export default function Founder() {
  const credentials = [
    {
      title: "B.Tech in Computer Science",
      institution: "Maharaja Surajmal Institute of Technology (MSIT Delhi)",
      icon: <GraduationCap className="size-5 text-primary" />,
    },
    {
      title: "B.Sc in Data Science & AI",
      institution: "Indian Institute of Technology Guwahati (IIT Guwahati)",
      icon: <GraduationCap className="size-5 text-primary" />,
    },
    {
      title: "Top 10 Hackathon Finalist",
      institution: "ET GenAI Hackathon 2025 (Healthkinator AI System)",
      icon: <Award className="size-5 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-36 relative border-b border-border-custom bg-background">
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Credential Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden border border-border-custom shadow-2xl bg-neutral-900 group">
              <Image
                src="/jayant.webp"
                alt="Jayant Olhyan - Founder & Lead Systems Engineer at Jayant Web & AI Systems"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase mb-1">
                  FOUNDER & AI ENGINEER
                </span>
                <h3 className="font-serif text-2xl font-bold">Jayant Olhyan</h3>
                <p className="text-xs text-white/70">New Delhi, India • Global Client Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Narrative & Direct Partnership */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full mb-6 inline-block">
              FOUNDER ACCOUNTABILITY
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base leading-tight mb-6">
              Direct Senior Engineering. <br />
              <span className="text-primary">Zero Agency Layers.</span>
            </h2>

            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6">
              When you partner with Jayant Web & AI Systems, you work directly with me — the systems architect coding your AI pipelines, automation bots, and web applications.
            </p>

            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8">
              No account executives, no junior relay chains, and no generic template offshore handoffs. I take total technical accountability from initial discovery architecture to deployment and ongoing scaling.
            </p>

            {/* Academic & Professional Credentials */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {credentials.map((cred, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-border-custom bg-card-bg/60 flex flex-col justify-between">
                  <div className="p-2 rounded-lg border border-border-custom bg-background w-fit mb-3">
                    {cred.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-text-base leading-snug">{cred.title}</h4>
                    <p className="text-[10px] text-text-muted font-mono mt-1">{cred.institution}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Magnetic strength={0.15}>
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-4 text-xs font-mono font-bold transition-all shadow-lg active:scale-[0.98]"
                >
                  <span>Book Strategy Call With Founder</span>
                  <ArrowRight className="size-4" />
                </a>
              </Magnetic>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border-custom bg-card-bg hover:bg-neutral-100 dark:hover:bg-neutral-800 px-8 py-4 text-xs font-mono font-bold text-text-base transition-all"
              >
                <span>Read Full Background</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
