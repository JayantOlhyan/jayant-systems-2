"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Monitor scroll movements for sticky states and hide/show effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsVisible(false); // scrolling down: hide navbar
      } else {
        setIsVisible(true); // scrolling up: show navbar
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger GSAP clip-path overlays for the mobile navigation panel
  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      // Expand circle overlay
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 92% 8%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
      // Stagger slide text items
      const links = menuRef.current.querySelectorAll(".mobile-nav-link");
      gsap.fromTo(
        links,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power3.out", delay: 0.3 }
      );
    } else {
      // Collapse circle overlay
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 92% 8%)",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  // Reset menu on route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Work", href: "/portfolio" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#FDFCF7]/85 dark:bg-[#0B0A08]/85 backdrop-blur-md border-b border-border-custom"
            : "py-6 bg-transparent"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="max-w-[1728px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-2.5 z-55 group">
            <div className="w-7 h-7 text-foreground shrink-0 relative transition-transform duration-500 group-hover:scale-105">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect
                  x="12"
                  y="12"
                  width="176"
                  height="176"
                  rx="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                />
                <path
                  d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z"
                  fill="currentColor"
                />
                <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#FF5A00" />
              </svg>
            </div>
            <span className="font-serif text-[15px] font-bold tracking-tight text-text-base leading-none">
              Jayant Web & AI Systems
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Magnetic key={item.name} strength={0.25}>
                <Link
                  href={item.href}
                  className={`text-[13px] font-sans font-semibold tracking-wide transition-colors relative py-1 hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-text-muted"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary" />
                  )}
                </Link>
              </Magnetic>
            ))}
          </div>

          {/* Start Project CTA Button / Hamburger */}
          <div className="flex items-center gap-4">
            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center bg-foreground hover:bg-primary text-background dark:bg-foreground dark:hover:bg-primary px-5 py-2.5 rounded-full text-xs font-sans font-bold tracking-wide transition-all duration-300 active:scale-[0.97]"
              >
                Start a Project
              </Link>
            </Magnetic>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center rounded-full border border-border-custom z-55 md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col gap-1 w-5">
                <span
                  className={`h-[1.5px] bg-foreground w-full rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-[5.5px]" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-foreground w-full rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-foreground w-full rounded-full transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Navigation Panel */}
      <div
        ref={menuRef}
        style={{ clipPath: "circle(0% at 92% 8%)" }}
        className="fixed inset-0 bg-[#FDFCF7] dark:bg-[#0B0A08] z-45 md:hidden flex flex-col justify-center px-8"
      >
        <div className="flex flex-col gap-6">
          <span className="font-mono text-[10px] tracking-widest text-[#FF5A00] uppercase font-bold">
            Menu
          </span>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="overflow-hidden">
                <Link
                  href={item.href}
                  className="mobile-nav-link block font-serif text-4xl font-semibold text-text-base hover:text-primary transition-colors py-1"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="overflow-hidden mt-4">
              <Link
                href="/contact"
                className="mobile-nav-link inline-block bg-primary text-white text-sm font-sans font-bold px-7 py-3 rounded-full hover:bg-primary-hover transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Contact details inside Mobile Menu */}
        <div className="absolute bottom-12 left-8 right-8 border-t border-border-custom pt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-xs font-mono text-text-muted">
            <span className="uppercase tracking-wider font-bold text-[#FF5A00]">Get in Touch</span>
            <a href="mailto:jayantwebaisystems@gmail.com" className="hover:text-primary mt-1">
              jayantwebaisystems@gmail.com
            </a>
            <a href="tel:+919667344125" className="hover:text-primary">
              +91 96673 44125
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
