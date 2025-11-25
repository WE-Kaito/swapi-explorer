"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadImageShape } from "@tsparticles/shape-image";

/*
 * Displays a background component that displays particles resembling spaceships and stars
 * moving across the screen using the tsparticles library. Generates stars on click.
 */
export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim preset for basic shapes and movements
      await loadEmittersPlugin(engine); // Load the emitters plugin for generating spaceships
      await loadImageShape(engine); // Load the image shape for spaceship images
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        detectRetina: true,
        fpsLimit: 60,
        // Main particles configuration for stars
        particles: {
          number: { value: 150 },
          color: { value: getComputedStyle(document.documentElement).getPropertyValue("--star-particle").trim() },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.1, max: 1 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "right",
            straight: true,
            outModes: "out",
          },
        },
        // Handle events to add more stars
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            resize: { enable: true },
          },
          modes: {
            push: { quantity: 4 },
          },
        },
        // Emitters configuration for spaceships
        emitters: {
          position: { y: { min: 25, max: 75 }, x: 0 }, // Emit from the left side
          rate: { delay: 7, quantity: 1 },
          size: { width: 10, height: 100 },
          particles: {
            shape: {
              type: "image",
              options: {
                image: [
                  { src: "/assets/images/xwing.png", width: 150, height: 150 },
                  { src: "/assets/images/ywing.png", width: 150, height: 100 },
                  { src: "/assets/images/tiefighter.png", width: 130, height: 130 },
                  { src: "/assets/images/stardestroyer.png", width: 200, height: 120 },
                ],
              },
            },
            opacity: { value: 1 },
            size: { value: { min: 25, max: 75 } },
            move: {
              speed: 5,
              direction: 5, // Top-left to bottom-right, flat angle
              outModes: { default: "destroy", left: "none", top: "none" },
              straight: true,
            },
          },
        },
      }}
    />
  );
}
