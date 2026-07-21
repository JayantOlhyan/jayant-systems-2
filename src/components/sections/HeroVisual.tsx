"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Brain, Code, Cpu, Workflow, Layers } from "lucide-react";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centralRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);
  const linesRef = useRef<SVGLineElement[]>([]);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Float animations for nodes
    nodesRef.current.forEach((node, i) => {
      if (!node) return;
      gsap.to(node, {
        y: "+=12",
        rotation: i % 2 === 0 ? "+=4" : "-=4",
        duration: 3 + i * 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Central core pulse and float
    if (centralRef.current) {
      gsap.to(centralRef.current, {
        y: "-=8",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    if (isTouchDevice) return;

    // Mouse interactive shift (Parallax/attraction)
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;

      // Translate mouse coordinates to percentage offsets (-0.5 to 0.5)
      const pctX = (mouseX / width) - 0.5;
      const pctY = (mouseY / height) - 0.5;

      // Animate center core
      gsap.to(centralRef.current, {
        x: pctX * 35,
        y: pctY * 35,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Animate external nodes with varied speed/direction
      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        const multiplier = 20 + i * 15;
        gsap.to(node, {
          x: pctX * multiplier,
          y: pctY * multiplier + (parseFloat(gsap.getProperty(node, "y") as string) || 0) * 0.1,
          duration: 0.6 + i * 0.1,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    const onMouseLeave = () => {
      // Return everything to standard
      gsap.to(centralRef.current, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.45)",
      });

      nodesRef.current.forEach((node) => {
        if (!node) return;
        gsap.to(node, {
          x: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.45)",
        });
      });
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Update SVG connection lines on animation ticker
  useEffect(() => {
    const central = centralRef.current;
    const nodes = nodesRef.current;
    const lines = linesRef.current;
    const container = containerRef.current;
    if (!central || !container || nodes.length === 0 || lines.length === 0) return;

    const updateLines = () => {
      const centRect = central.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      
      const centX = (centRect.left + centRect.width / 2) - contRect.left;
      const centY = (centRect.top + centRect.height / 2) - contRect.top;

      nodes.forEach((node, i) => {
        const line = lines[i];
        if (!node || !line) return;
        
        const nodeRect = node.getBoundingClientRect();
        const nodeX = (nodeRect.left + nodeRect.width / 2) - contRect.left;
        const nodeY = (nodeRect.top + nodeRect.height / 2) - contRect.top;

        line.setAttribute("x1", centX.toString());
        line.setAttribute("y1", centY.toString());
        line.setAttribute("x2", nodeX.toString());
        line.setAttribute("y2", nodeY.toString());
      });
    };

    gsap.ticker.add(updateLines);
    return () => gsap.ticker.remove(updateLines);
  }, []);

  const systemNodes = [
    {
      title: "AI Chatbots & Agents",
      icon: <Brain className="w-5 h-5 text-primary" />,
      style: { top: "10%", left: "12%" },
    },
    {
      title: "CRM Integrations",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      style: { top: "15%", right: "12%" },
    },
    {
      title: "WhatsApp Automation",
      icon: <Workflow className="w-5 h-5 text-primary" />,
      style: { bottom: "18%", left: "15%" },
    },
    {
      title: "Custom Dashboards",
      icon: <Code className="w-5 h-5 text-primary" />,
      style: { bottom: "12%", right: "18%" },
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[550px] flex items-center justify-center select-none"
    >
      {/* Background glow grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.06),transparent_65%)] pointer-events-none" />

      {/* SVG connections layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {systemNodes.map((_, i) => (
          <line
            key={i}
            ref={(el) => {
              if (el) linesRef.current[i] = el;
            }}
            stroke="url(#line-glow)"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
        ))}
      </svg>

      {/* Center core brand node */}
      <div
        ref={centralRef}
        className="relative z-10 w-32 h-32 rounded-[32px] bg-foreground text-background dark:bg-foreground dark:text-background flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-border-custom"
      >
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse pointer-events-none" />
        <div className="text-center flex flex-col items-center">
          <span className="font-serif text-4xl font-extrabold tracking-tight">J</span>
          <span className="text-[8px] font-mono uppercase tracking-widest font-bold mt-1 opacity-70">
            Systems
          </span>
        </div>
      </div>

      {/* Interactive Peripheral Nodes */}
      {systemNodes.map((node, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) nodesRef.current[i] = el;
          }}
          className="absolute z-20 transition-all duration-300"
          style={node.style}
        >
          <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-[#141311] border border-border-custom shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[130px]">
            <div className="w-10 h-10 rounded-full bg-primary/5 dark:bg-primary/10 flex items-center justify-center">
              {node.icon}
            </div>
            <span className="font-sans text-[11px] font-bold text-text-base text-center">
              {node.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
