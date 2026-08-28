"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

type Particle = {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  drift: number;
  phase: number;
  brightness: number;
};

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  twinkle: number;
};

type Orb = {
  radiusX: number;
  radiusY: number;
  angle: number;
  speed: number;
  depth: number;
  size: number;
};

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { scrollYProgress } = useScroll();

  const scrollProgressRef = useRef(0);
  const scrollVelocityRef = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const previous = scrollProgressRef.current;

    scrollProgressRef.current = latest;
    scrollVelocityRef.current = Math.abs(latest - previous);
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let animationFrame = 0;
    let lastTime = performance.now();

    const isNarrow = window.matchMedia("(max-width: 768px)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, isNarrow ? 1.5 : 2);

    const particles: Particle[] = [];
    const stars: Star[] = [];
    const orbs: Orb[] = [];

    const particleCount = reducedMotion ? 40 : isNarrow ? 70 : 260;
    const starCount = reducedMotion ? 24 : isNarrow ? 40 : 120;
    const orbCount = reducedMotion ? 4 : isNarrow ? 6 : 11;

    const resize = () => {
      width = document.documentElement.clientWidth || window.innerWidth;
      height = window.visualViewport?.height || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("resize", resize);

    const randomDepth = () => 0.15 + Math.random() * 1.6;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: randomDepth(),
        size: 0.6 + Math.random() * 2.2,
        speed: 0.08 + Math.random() * 0.26,
        drift: -0.25 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        brightness: 0.15 + Math.random() * 0.65,
      });
    }

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: randomDepth(),
        size: 0.5 + Math.random() * 1.3,
        speed: 0.015 + Math.random() * 0.06,
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        radiusX: 120 + Math.random() * 420,
        radiusY: 70 + Math.random() * 250,
        angle: Math.random() * Math.PI * 2,
        speed: 0.04 + Math.random() * 0.12,
        depth: -0.4 + Math.random() * 1.1,
        size: 1.5 + Math.random() * 4,
      });
    }

    const drawBackground = () => {
      const gradient = context.createRadialGradient(
        width * 0.5,
        height * 0.45,
        0,
        width * 0.5,
        height * 0.45,
        Math.max(width, height),
      );

      gradient.addColorStop(0, "#0c0b12");
      gradient.addColorStop(0.45, "#08080c");
      gradient.addColorStop(1, "#030304");

      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    };

    const drawGlow = (
      x: number,
      y: number,
      radius: number,
      alpha: number,
    ) => {
      const gradient = context.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius,
      );

      gradient.addColorStop(0, `rgba(139, 124, 246, ${alpha})`);
      gradient.addColorStop(0.35, `rgba(99, 102, 241, ${alpha * 0.3})`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const drawPerspectiveGrid = (
      time: number,
      scrollEnergy: number,
    ) => {
      const horizon = height * 0.46;
      const centerX = width * 0.5;

      const horizontalLines = 16;
      const verticalLines = 18;

      context.lineWidth = 1;

      for (let i = 0; i < horizontalLines; i++) {
        const normalized = i / horizontalLines;

        const depth =
          Math.pow(normalized, 1.85) +
          ((time * 0.00006 + scrollEnergy * 0.15) % 0.03);

        const y = horizon + depth * height * 0.9;

        if (y > height) continue;

        const alpha = 0.015 + normalized * 0.035;

        context.strokeStyle = `rgba(139,124,246,${alpha})`;

        context.beginPath();
        context.moveTo(width * 0.02, y);
        context.lineTo(width * 0.98, y);
        context.stroke();
      }

      for (let i = -verticalLines; i <= verticalLines; i++) {
        const xTop = centerX + i * 34;
        const spread = width * 0.7;

        context.strokeStyle = "rgba(255,255,255,0.022)";

        context.beginPath();
        context.moveTo(centerX, horizon);
        context.lineTo(xTop + i * spread, height);
        context.stroke();
      }
    };

    const drawOrbitalSystem = (
      time: number,
      scrollEnergy: number,
    ) => {
      const cx = width * 0.5;
      const cy = height * 0.47;

      context.save();

      context.translate(cx, cy);

      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];

       orb.angle +=
  orb.speed *
  (reducedMotion ? 0.01 : 0.35 + scrollEnergy * 7);

        const angle = orb.angle;

        const perspective = 0.65 + Math.sin(angle * 1.4 + i) * 0.18;

        const x =
          Math.cos(angle) *
          orb.radiusX *
          perspective;

        const y =
          Math.sin(angle) *
          orb.radiusY *
          perspective;

        const depth =
          0.5 +
          Math.sin(angle) * 0.5;

        const size =
          orb.size *
          (0.6 + depth * 0.8);

        context.fillStyle = `rgba(170,160,255,${
          0.08 + depth * 0.22
        })`;

        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();

        if (i < 5) {
          context.strokeStyle = `rgba(139,124,246,${
            0.025 + depth * 0.04
          })`;

          context.lineWidth = 1;

          context.beginPath();
          context.ellipse(
            0,
            0,
            orb.radiusX * perspective,
            orb.radiusY * perspective,
            angle * 0.15,
            0,
            Math.PI * 2,
          );
          context.stroke();
        }
      }

      context.restore();
    };

    const updateParticles = (
      delta: number,
      scrollEnergy: number,
      time: number,
    ) => {
      const speedMultiplier =
        reducedMotion
          ? 0.05
          : 1 + scrollEnergy * 14;

      for (const particle of particles) {
        particle.z -=
  particle.speed *
  delta *
  0.018 *
  speedMultiplier;

        particle.x +=
          Math.sin(time * 0.0005 + particle.phase) *
          particle.drift *
          delta *
          0.02;

      particle.y -=
  particle.speed *
  delta *
  0.007 *
  speedMultiplier;

        if (particle.z < 0.05) {
          particle.z = 1.7;
          particle.x = Math.random() * width;
          particle.y = height * 0.35 + Math.random() * height;
        }

        if (particle.y < -30) {
          particle.y = height + 20;
        }

        if (particle.x < -30) {
          particle.x = width + 30;
        }

        if (particle.x > width + 30) {
          particle.x = -30;
        }
      }
    };

    const drawParticles = (time: number) => {
      for (const particle of particles) {
        const depth = 1 / particle.z;

        const x =
          width * 0.5 +
          (particle.x - width * 0.5) * depth;

        const y =
          height * 0.5 +
          (particle.y - height * 0.5) * depth;

        if (
          x < -50 ||
          x > width + 50 ||
          y < -50 ||
          y > height + 50
        ) {
          continue;
        }

        const size =
          particle.size *
          (0.35 + depth * 0.7);

        const pulse =
          0.72 +
          Math.sin(
            time * 0.0015 + particle.phase,
          ) *
            0.2;

        const alpha =
          particle.brightness *
          pulse *
          Math.min(depth * 0.42, 0.55);

        context.fillStyle = `rgba(168,158,255,${alpha})`;

        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();

        if (depth > 1.4) {
          context.strokeStyle = `rgba(139,124,246,${
            alpha * 0.35
          })`;

          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(
            x -
              particle.speed *
                18 *
                depth,
            y + 3,
          );
          context.stroke();
        }
      }
    };

    const drawStars = (time: number) => {
      for (const star of stars) {
        const pulse =
          0.4 +
          Math.sin(time * 0.001 + star.twinkle) *
            0.25;

        const x = star.x;
        const y = star.y;

        context.fillStyle = `rgba(255,255,255,${
          0.03 + pulse * 0.08
        })`;

        context.beginPath();
        context.arc(
          x,
          y,
          star.size * (0.7 + star.z),
          0,
          Math.PI * 2,
        );
        context.fill();
      }
    };

    const drawDataStreams = (
      time: number,
      scrollEnergy: number,
    ) => {
      const streamCount = 18;

      for (let i = 0; i < streamCount; i++) {
        const x =
          (i / streamCount) * width +
          Math.sin(i * 6.2) * 80;

        const length =
          70 +
          ((i * 91) % 160);

       const travel =
  (time * (0.016 + i * 0.001) +
    scrollEnergy * 900) %
  (height + length);

        const y =
          travel - length;

        context.strokeStyle =
          `rgba(139,124,246,${
            0.008 + (i % 3) * 0.006
          })`;

        context.lineWidth = 1;

        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(
          x + Math.sin(i * 4) * 25,
          y + length,
        );
        context.stroke();
      }
    };

    const drawCenterCore = (
      time: number,
      scrollEnergy: number,
    ) => {
      const cx = width * 0.5;
      const cy =
        height * 0.47 +
        Math.sin(time * 0.0004) * 8;

      const pulse =
        1 +
        Math.sin(time * 0.0012) * 0.05;

      const radius =
        Math.min(width, height) *
        0.055 *
        pulse;

      drawGlow(
        cx,
        cy,
        radius * 8,
        0.075 + scrollEnergy * 0.09,
      );

      context.save();

      context.translate(cx, cy);

      for (let i = 0; i < 3; i++) {
        context.rotate(
          time * 0.00015 * (i + 1) +
            scrollEnergy * 3,
        );

        context.strokeStyle =
          `rgba(156,145,255,${
            0.08 - i * 0.018
          })`;

        context.lineWidth = 1;

        context.beginPath();

        context.ellipse(
          0,
          0,
          radius * (1.7 + i * 0.65),
          radius * (0.55 + i * 0.22),
          i * 0.7,
          0,
          Math.PI * 2,
        );

        context.stroke();
      }

      const coreGradient =
        context.createRadialGradient(
          0,
          0,
          0,
          0,
          0,
          radius,
        );

      coreGradient.addColorStop(
        0,
        "rgba(230,225,255,0.95)",
      );

      coreGradient.addColorStop(
        0.18,
        "rgba(178,167,255,0.7)",
      );

      coreGradient.addColorStop(
        0.55,
        "rgba(139,124,246,0.18)",
      );

      coreGradient.addColorStop(
        1,
        "rgba(139,124,246,0)",
      );

      context.fillStyle = coreGradient;

      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.fill();

      context.restore();
    };

    const drawVignette = () => {
      const gradient =
        context.createRadialGradient(
          width * 0.5,
          height * 0.48,
          Math.min(width, height) * 0.15,
          width * 0.5,
          height * 0.48,
          Math.max(width, height) * 0.8,
        );

      gradient.addColorStop(
        0,
        "rgba(2,2,4,0)",
      );

      gradient.addColorStop(
        0.58,
        "rgba(2,2,4,0.12)",
      );

      gradient.addColorStop(
        1,
        "rgba(2,2,4,0.78)",
      );

      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    };

    const render = (now: number) => {
      const delta = Math.min(
        now - lastTime,
        40,
      );

      lastTime = now;

      const scrollEnergy =
        Math.min(
          scrollVelocityRef.current * 90,
          1.2,
        );

      const smoothScroll =
        scrollEnergy;

      scrollVelocityRef.current *= 0.91;

      drawBackground();

      /*
       * Atmospheric glows
       */
      drawGlow(
        width * 0.18,
        height * 0.24,
        Math.min(width, height) * 0.28,
        0.04,
      );

      drawGlow(
        width * 0.82,
        height * 0.68,
        Math.min(width, height) * 0.32,
        0.035,
      );

      /*
       * Deep space layers
       */
      drawStars(now);

      drawPerspectiveGrid(
        now,
        smoothScroll,
      );

      drawDataStreams(
        now,
        smoothScroll,
      );

      updateParticles(
        delta,
        smoothScroll,
        now,
      );

      drawParticles(now);

      /*
       * Main orbital computation structure
       */
      drawOrbitalSystem(
        now,
        smoothScroll,
      );

      drawCenterCore(
        now,
        smoothScroll,
      );

      drawVignette();

      animationFrame =
        requestAnimationFrame(render);
    };

    animationFrame =
      requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Depth overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(3,3,5,0.15), transparent 25%, transparent 75%, rgba(3,3,5,0.4))",
        }}
      />

      {/* Fine film/noise layer */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}