"use client";

import React, { useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MaskedImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string;
  imageClassName?: string;
  parallax?: boolean;
}

export default function MaskedImage({
  containerClassName = "",
  imageClassName = "",
  parallax = true,
  alt,
  ...imageProps
}: MaskedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const wrapper = imageWrapperRef.current;
    if (!container || !wrapper) return;

    const ctx = gsap.context(() => {
      // Reveal clip-path animation
      gsap.fromTo(
        container,
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtle scale & parallax transform
      if (parallax) {
        gsap.fromTo(
          wrapper,
          { scale: 1.15, y: -20 },
          {
            scale: 1.0,
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [parallax]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl ${containerClassName}`}
    >
      <div ref={imageWrapperRef} className="w-full h-full relative">
        <Image alt={alt} className={`object-cover ${imageClassName}`} {...imageProps} />
      </div>
    </div>
  );
}
