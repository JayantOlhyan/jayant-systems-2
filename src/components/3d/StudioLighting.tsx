"use client";

import React from "react";
import { Environment, SpotLight } from "@react-three/drei";

export default function StudioLighting() {
  return (
    <>

      {/* Ambient lighting to lift the darkest shadows */}
      <ambientLight intensity={0.4} color="#F3F0E9" />

      {/* Main key light (warm) */}
      <SpotLight
        position={[10, 10, 10]}
        angle={0.4}
        penumbra={1}
        intensity={2.5}
        color="#FAF9F6"
        castShadow
        shadow-bias={-0.0001}
      />

      {/* Secondary fill light (slightly cooler to balance) */}
      <SpotLight
        position={[-10, 5, -10]}
        angle={0.6}
        penumbra={1}
        intensity={1.0}
        color="#e0e5ff"
      />

      {/* subtle rim light for depth */}
      <SpotLight
        position={[0, -5, -15]}
        angle={0.8}
        penumbra={1}
        intensity={1.5}
        color="#FF5A1F" // Brand orange hint in the rim
      />

      {/* Environment map for realistic reflections (materials like metal and glass rely on this) */}
      <Environment preset="studio" />
    </>
  );
}
