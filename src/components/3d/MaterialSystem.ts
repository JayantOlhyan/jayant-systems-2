import * as THREE from 'three';

/**
 * Core material library for the Jayant Web & AI Systems 3D universe.
 * Strictly adheres to the defined palette and "Warm, tactile, engineered" aesthetic.
 * Prevents "cyberpunk" or over-exposed chrome aesthetics.
 */

// Colors
export const COLORS = {
  canvas: '#F3F0E9',
  pureCanvas: '#FAF9F6',
  ink: '#11110F',
  orange: '#FF5A1F',
  darkSurface: '#181816',
};

// Warm Matte Ivory (for primary base structures)
export const warmMatteIvory = new THREE.MeshPhysicalMaterial({
  color: COLORS.canvas,
  metalness: 0.1,
  roughness: 0.8,
  clearcoat: 0.1,
  clearcoatRoughness: 0.3,
});

// Soft Off-White (for highlights or secondary structures)
export const softOffWhite = new THREE.MeshPhysicalMaterial({
  color: COLORS.pureCanvas,
  metalness: 0.05,
  roughness: 0.9,
});

// Deep Charcoal (for structural accents)
export const deepCharcoal = new THREE.MeshPhysicalMaterial({
  color: COLORS.ink,
  metalness: 0.2,
  roughness: 0.85,
});

// Brand Orange (for the central intelligence core and key signals)
export const brandOrange = new THREE.MeshPhysicalMaterial({
  color: COLORS.orange,
  metalness: 0.3,
  roughness: 0.4,
  emissive: COLORS.orange,
  emissiveIntensity: 0.2, // Subtle glow, not aggressive neon
  clearcoat: 0.3,
});

// Brushed Dark Metal (for mechanical/engineered parts)
export const brushedDarkMetal = new THREE.MeshStandardMaterial({
  color: COLORS.darkSurface,
  metalness: 0.8,
  roughness: 0.6,
});

// Translucent Glass (used sparingly, e.g. data capsules)
export const translucentGlass = new THREE.MeshPhysicalMaterial({
  color: COLORS.pureCanvas,
  transmission: 0.9, // glass-like
  opacity: 1,
  metalness: 0.1,
  roughness: 0.1,
  ior: 1.5,
  thickness: 0.5,
});

// Soft Rubber (for flexible cables or connectors)
export const softRubber = new THREE.MeshStandardMaterial({
  color: '#2a2a28',
  metalness: 0.0,
  roughness: 0.95,
});
