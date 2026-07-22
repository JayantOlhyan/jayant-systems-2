import React from "react";
import BrandIntro from "@/components/BrandIntro";
import Hero from "@/components/sections/Hero";
import PortfolioSection from "@/components/sections/PortfolioSection";
import Capabilities from "@/components/sections/Capabilities";
import Philosophy from "@/components/sections/Philosophy";
import Process from "@/components/sections/Process";
import Founder from "@/components/sections/Founder";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Opening Brand Reveal Experience */}
      <BrandIntro />

      <main className="flex-1 w-full">
        {/* 1. Hero Entrance & Credentials Strip */}
        <Hero />

        {/* 2. Featured Projects alternating visual list */}
        <PortfolioSection />

        {/* 3. Interactive Accordion showing capabilities */}
        <Capabilities />

        {/* 4. Connected nodes philosophy display */}
        <Philosophy />

        {/* 5. Stepper Timeline process layout */}
        <Process />

        {/* 6. Professional Founder introduction */}
        <Founder />

        {/* 7. FAQ logistics accordions */}
        <FAQ />

        {/* 8. Ending conversion CTA banner */}
        <CTA />
      </main>
    </div>
  );
}
