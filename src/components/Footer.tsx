"use client";

import React from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Solutions",
      links: [
        { name: "Build an AI Chatbot", href: "/promo/build-ai-chatbot" },
        { name: "Build Your Startup MVP", href: "/promo/build-startup-mvp" },
        { name: "Modern Business Website", href: "/promo/modern-business-website" },
        { name: "Business Automation", href: "/promo/business-automation-solutions" },
      ]
    },
    {
      title: "Work & Studio",
      links: [
        { name: "Featured Work", href: "/portfolio" },
        { name: "Our Process", href: "/process" },
        { name: "Pricing Plans", href: "/pricing" },
        { name: "About Founder", href: "/about" },
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "AI for Healthcare", href: "/industries/ai-for-healthcare" },
        { name: "AI for Education", href: "/industries/ai-for-education" },
        { name: "AI for Startups", href: "/industries/ai-for-startups" },
      ]
    }
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/JayantOlhyan" },
    { name: "LinkedIn", href: "https://linkedin.com/company/jayant-systems" },
    { name: "Twitter / X", href: "https://x.com/JayantSystems" },
    { name: "Instagram", href: "https://www.instagram.com/jayantolhyan/" },
    { name: "YouTube", href: "https://www.youtube.com/@JayantWebAISystems" }
  ];

  return (
    <footer className="w-full bg-[#101010] dark:bg-[#060504] text-[#FDFCF7] pt-24 pb-12 rounded-t-[40px] md:rounded-t-[64px] border-t border-[#1a1a1a] overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-6 md:px-12">
        
        {/* Massive Brand Footer Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-primary shrink-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <rect x="12" y="12" width="176" height="176" rx="48" fill="none" stroke="currentColor" strokeWidth="20" />
                  <path d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z" fill="currentColor" />
                  <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#FDFCF7" />
                </svg>
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                Jayant Web & AI Systems
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-5xl font-normal leading-[1.1] max-w-xl text-white">
              Designing intelligent digital systems that move businesses forward.
            </h3>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4 text-left">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-extrabold">
                  {section.title}
                </span>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs text-[#a09f9a] hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact info & socials row */}
        <div className="border-t border-[#1a1a1a] py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono text-[#a09f9a]">
            <a href="tel:+919667344125" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <span>📞</span> +91 96673 44125
            </a>
            <a href="mailto:jayantwebaisystems@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <span>✉️</span> jayantwebaisystems@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <span>📍</span> Remote (New Delhi, India)
            </span>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-mono">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a09f9a] hover:text-primary transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright and Legal links */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[10px] font-mono text-[#605f5a]">
            © {currentYear} Jayant Web & AI Systems. All Rights Reserved.
          </span>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-[#605f5a] font-mono">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <Link href="/pricing-policy" className="hover:text-primary transition-colors">
              Refund Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">
              Disclaimer
            </Link>
            <Link href="/ai-policy" className="hover:text-primary transition-colors">
              AI Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
