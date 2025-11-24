"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadImageShape } from "@tsparticles/shape-image";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadEmittersPlugin(engine);
      await loadImageShape(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 150 },
          color: { value: "#ffffff" },
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
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            resize: { enable: true },
          },
          modes: {
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
        emitters: {
          position: { y: { min: 25, max: 75 }, x: 0 },
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
            opacity: { value: 0.8 },
            size: { value: { min: 25, max: 75 } },
            move: {
              speed: 5,
              direction: 5,
              outModes: { default: "destroy", left: "none", top: "none" },
              straight: true,
            },
          },
        },
      }}
    />
  );
}
