"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GH",
    label: "GitHub",
    href: "https://github.com/Akash-3007",
  },
  {
    name: "LI",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akash-kinjawadekar-021683314/",
  },
  {
    name: "IG",
    label: "Instagram",
    href: "https://www.instagram.com/akash3007_",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = (delay: number) => ({
    initial: shouldReduceMotion
      ? false
      : {
          opacity: 0,
          y: 24,
        },
    animate: shouldReduceMotion
      ? false
      : {
          opacity: 1,
          y: 0,
        },
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main content */}
          <div className="max-w-4xl">
            <motion.p
              {...animationProps(0)}
              className="mb-6 font-mono text-sm uppercase tracking-[0.22em] text-zinc-400"
            >
              Undergraduate BCA Student
            </motion.p>

            <motion.h1
              {...animationProps(0.1)}
              className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Hi, I&apos;m Akash.
              <span className="sr-only"> Kinjawadekar, BCA student at Christ University</span>
            </motion.h1>

            <motion.p
              {...animationProps(0.2)}
              className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-tight tracking-tight text-zinc-300 sm:text-3xl md:text-4xl"
            >
              Exploring software, AI, and the web.
            </motion.p>

            <motion.p
              {...animationProps(0.3)}
              className="mt-8 max-w-2xl text-pretty text-base leading-8 text-zinc-400 sm:text-lg"
            >
              I&apos;m a BCA student at Christ University, Bangalore, focused
              on building strong computer science fundamentals, practical
              software skills, and useful technology that makes life simpler.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...animationProps(0.4)}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                View my work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:border-white/30 hover:bg-white/5"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...animationProps(0.5)}
              className="mt-10 flex items-center gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 font-mono text-xs font-medium text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5 hover:text-white"
                >
                  {social.name}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right-side visual */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.96,
                  }
            }
            animate={
              shouldReduceMotion
                ? false
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: "easeOut" as const,
            }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
              {/* Outer frame */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm" />

              {/* Inner frame */}
              <div className="absolute inset-8 rounded-[1.5rem] border border-white/10 bg-black/30" />

              {/* Center element */}
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/30 bg-indigo-400/10 shadow-[0_0_80px_rgba(99,102,241,0.18)]" />

              {/* Nodes */}
              <div className="absolute left-[25%] top-[25%] h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <div className="absolute right-[22%] top-[33%] h-2 w-2 rounded-full bg-zinc-500" />
              <div className="absolute bottom-[27%] left-[30%] h-2 w-2 rounded-full bg-zinc-500" />
              <div className="absolute bottom-[22%] right-[28%] h-2.5 w-2.5 rounded-full bg-zinc-300" />

              {/* Connection lines */}
              <div
                aria-hidden="true"
                className="absolute left-[27%] top-[27%] h-px w-[24%] rotate-[28deg] bg-white/15"
              />

              <div
                aria-hidden="true"
                className="absolute right-[23%] top-[36%] h-px w-[23%] rotate-[145deg] bg-white/15"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-[28%] left-[31%] h-px w-[24%] -rotate-[25deg] bg-white/15"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-[25%] right-[31%] h-px w-[20%] rotate-[25deg] bg-white/15"
              />

              {/* Center label */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Building
                </div>

                <div className="mt-2 whitespace-nowrap text-xl font-medium text-white">
                  Useful things
                </div>
              </div>

              {/* Metadata card */}
              <div className="absolute left-6 top-6 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Focus
                </p>

                <p className="mt-1 text-sm text-zinc-200">
                  Software + AI
                </p>
              </div>

              {/* Location card */}
              <div className="absolute bottom-6 right-6 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Based in
                </p>

                <p className="mt-1 text-sm text-zinc-200">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          {...animationProps(0.7)}
          className="mt-20 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-zinc-200"
        >
          Scroll to explore
          <ArrowDown size={15} className="animate-pulse" />
        </motion.a>
      </div>
    </section>
  );
}