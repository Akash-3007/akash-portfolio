"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Akash-3007",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akash-kinjawadekar-021683314/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/akash3007_",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl sm:h-[30rem] sm:w-[30rem]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500"
          >
            06 — Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: "easeOut" as const,
            }}
            className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Let&apos;s build something useful.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.16,
              ease: "easeOut" as const,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            I&apos;m always interested in learning, building, collaborating,
            and connecting with people working on interesting ideas.
          </motion.p>

          <motion.a
            href="mailto:akashkinjawadekar7@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.24,
              ease: "easeOut" as const,
            }}
            className="group mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5 sm:mt-10 sm:gap-3 sm:px-7 sm:py-4"
          >
            <Mail size={17} />
            Send me an email
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.32,
            ease: "easeOut" as const,
          }}
          className="mx-auto mt-20 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Email
              </p>

              <a
                href="mailto:akashkinjawadekar7@gmail.com"
                className="mt-3 block break-all text-sm text-zinc-200 transition-colors hover:text-white sm:text-base"
              >
                akashkinjawadekar7@gmail.com
              </a>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Find me online
              </p>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}