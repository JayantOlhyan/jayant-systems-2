"use client";

import React, { useState, useEffect } from "react";
import { faqItems } from "../../data/content";
import { Plus, Minus, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".faq-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-heading",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".faq-accordion-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-accordion-item",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section id="faq" className="py-24 md:py-36 border-b border-border-custom bg-[#FDFCF7]/20 dark:bg-[#0B0A08]/10">
      <div className="max-w-[1728px] mx-auto px-6 md:px-12 w-full text-left">
        
        {/* Section Header */}
        <div className="faq-heading text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1.5 rounded-full mb-4 inline-block font-extrabold">
            Clear Logistics
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-4 mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed">
            Everything you need to know about system delivery timelines, support retainers, and remote workflow operations.
          </p>
        </div>

        {/* FAQ Accordion Stack */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-accordion-item bg-white dark:bg-[#141311] rounded-[24px] border border-border-custom overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.01)]"
              >
                {/* Header Toggle click zone */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left font-serif text-base md:text-lg font-bold text-text-base focus:outline-none cursor-pointer group"
                >
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-border-custom flex items-center justify-center shrink-0 ml-4 transition-colors duration-300 ${
                      isOpen ? "bg-primary text-white border-primary" : "bg-neutral-50 dark:bg-neutral-800 text-text-base"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer panel (CSS transition height smooth trigger) */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-350 ease-in-out border-t border-border-custom/40 bg-[#FDFCF7]/10 dark:bg-[#0B0A08]/10 ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 md:p-8 text-xs md:text-sm text-text-muted leading-relaxed flex gap-3">
                    <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item.answer}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
