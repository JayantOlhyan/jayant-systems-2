"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, RoundedBox, Torus, Line } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StudioLighting from "./StudioLighting";
import {
  warmMatteIvory,
  brandOrange,
  deepCharcoal,
  softOffWhite,
  brushedDarkMetal,
} from "./MaterialSystem";

// The central intelligence core
function IntelligenceCore() {
  const coreRef = useRef<THREE.Group>(null);

  // Subtle breathing rotation
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={coreRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.2, 64, 64]} material={brandOrange} castShadow receiveShadow />
        
        {/* Abstract structural rings surrounding the core */}
        <Torus args={[1.8, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]} material={brushedDarkMetal} castShadow />
        <Torus args={[2.4, 0.02, 16, 100]} rotation={[Math.PI / 3, Math.PI / 4, 0]} material={softOffWhite} />
      </Float>
    </group>
  );
}

// Peripheral connected processing modules
function ProcessingModules() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow orbital rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * -0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        {/* Module 1 (AI) */}
        <group position={[3.5, 1.5, -2]}>
          <RoundedBox args={[0.8, 0.8, 0.8]} material={warmMatteIvory} castShadow receiveShadow radius={0.1} />
          <Sphere args={[0.2, 32, 32]} position={[0, 0.6, 0]} material={brandOrange} />
        </group>


        {/* Module 2 (Automation) */}
        <group position={[-4, -1, 1]}>
          <RoundedBox args={[1.2, 0.4, 1.2]} material={deepCharcoal} castShadow receiveShadow radius={0.05} />
          <RoundedBox args={[0.6, 0.6, 0.6]} position={[0, 0.5, 0]} material={warmMatteIvory} castShadow radius={0.05} />
        </group>

        {/* Module 3 (Data) */}
        <group position={[1, -3, 2.5]}>
          <Sphere args={[0.6, 32, 32]} material={brushedDarkMetal} castShadow receiveShadow />
          <Torus args={[0.9, 0.03, 16, 50]} material={brandOrange} />
        </group>
      </Float>
    </group>
  );
}

// Flowing paths connecting different components
function ConnectionPaths() {
  const points1 = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1.5, 1, -1),
    new THREE.Vector3(3.5, 1.5, -2),
  ];
  
  const points2 = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-2, -0.5, 0.5),
    new THREE.Vector3(-4, -1, 1),
  ];

  return (
    <group>
      <Line points={points1} color="#FF5A1F" lineWidth={2} dashed dashScale={5} dashSize={1} gapSize={0.5} opacity={0.6} transparent />
      <Line points={points2} color="#FAF9F6" lineWidth={1.5} opacity={0.4} transparent />
    </group>
  );
}

// Scene wrapper to handle mouse parallax interaction and scroll transformations
function InteractiveScene() {
  const sceneRef = useRef<THREE.Group>(null);
  const parallaxX = useRef(0);
  const parallaxY = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sceneRef.current) return;

    // Scroll-driven animation for the 3D object
    const ctx = gsap.context(() => {
      gsap.to(sceneRef.current!.position, {
        y: -5,
        z: -2,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(sceneRef.current!.rotation, {
        z: Math.PI / 4,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useFrame((state) => {
    if (sceneRef.current) {
      // Calculate target parallax based on cursor position
      const targetX = (state.pointer.y * Math.PI) / 12; 
      const targetY = (state.pointer.x * Math.PI) / 8;

      parallaxX.current += (targetX - parallaxX.current) * 0.05;
      parallaxY.current += (targetY - parallaxY.current) * 0.05;

      // Apply parallax additively so it doesn't fight GSAP scroll rotations
      sceneRef.current.rotation.x = parallaxX.current;
      sceneRef.current.rotation.y = parallaxY.current;
    }
  });

  return (
    <group ref={sceneRef}>
      <IntelligenceCore />
      <ProcessingModules />
      <ConnectionPaths />
    </group>
  );
}

export default function HeroSystem() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* 
        pointerEvents: 'none' on the container ensures we don't block normal DOM interactions,
        but we pass eventSource to document.body so R3F still gets pointer events for useFrame(state.pointer)
      */}
      <Canvas
        shadows
        dpr={[1, 2]} // Optimize pixel ratio
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        eventSource={typeof document !== 'undefined' ? document.body : undefined}
      >
        <StudioLighting />
        <InteractiveScene />
      </Canvas>
    </div>
  );
}
