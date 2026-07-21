"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { GraduationCap, Award, ExternalLink, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Founder() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".founder-img",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-img",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".founder-info",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-info",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 md:py-36 border-b border-border-custom bg-[#FDFCF7]/10 dark:bg-[#0B0A08]/5">
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Caption */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start founder-img">
            <div className="w-full max-w-[420px] aspect-[4/5] rounded-[36px] overflow-hidden border border-border-custom shadow-xl relative bg-neutral-200 dark:bg-neutral-800">
              <Image
                src="/jayant.webp"
                alt="Jayant Olhyan Portrait - Founder of Jayant Web & AI Systems"
                fill
                priority
                sizes="(max-w-768px) 100vw, 420px"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex flex-col items-center lg:items-start">
              <span className="font-serif text-sm font-bold text-text-base leading-none">
                Jayant Olhyan
              </span>
              <span className="text-[10px] font-mono text-text-muted mt-1 uppercase font-bold tracking-widest">
                Founder / AI & Product Engineer
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start founder-info">
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1.5 rounded-full mb-6 inline-block font-extrabold">
              Founder Profile
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-6 leading-tight">
              Direct Partnership.<br />
              No Middlemen.
            </h2>
            
            <div className="space-y-4 text-sm md:text-base text-text-muted leading-relaxed mb-8 max-w-2xl">
              <p>
                Hi, I&apos;m Jayant. I build custom websites, AI automation systems, and digital products for businesses that want to increase conversion and operate more efficiently.
              </p>
              <p>
                I partner directly with startup founders and business owners. When you work with me, there are no account executives, sales managers, or delayed relay chains. You work directly with the engineer coding your platform.
              </p>
              <p>
                For custom tasks that fall outside my specialized scope, I collaborate with a vetted network of designer and copywriter partners, while remaining your single point of contact and accountability.
              </p>
            </div>

            {/* Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl border-t border-border-custom pt-8">
              
              {/* College 1 */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-[#141311] border border-border-custom">
                <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans text-xs font-bold text-text-base block">MSIT Delhi</span>
                  <span className="text-[10px] text-text-muted">B.Tech Computer Science (CSE)</span>
                </div>
              </div>

              {/* College 2 */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-[#141311] border border-border-custom">
                <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans text-xs font-bold text-text-base block">IIT Guwahati</span>
                  <span className="text-[10px] text-text-muted">B.Sc. Data Science & AI</span>
                </div>
              </div>

              {/* Award */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-[#141311] border border-border-custom">
                <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans text-xs font-bold text-text-base block">Hackathon Finalist</span>
                  <span className="text-[10px] text-text-muted">ET GenAI Hackathon 2025 Placement</span>
                </div>
              </div>

              {/* Safety Guarantee */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-[#141311] border border-border-custom">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans text-xs font-bold text-text-base block">Strict Code Ownership</span>
                  <span className="text-[10px] text-text-muted">100% IP Handover upon Completion</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
