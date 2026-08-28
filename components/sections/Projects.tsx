"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    title: "Project coming soon",
    description:
      "Projects I build while developing my skills in software development, web technologies, and computer science.",
    technologies: ["Python", "Web Development"],
    github: "https://github.com/Akash-3007",
    demo: null,
    featured: true,
  },
  {
    title: "Project coming soon",
    description:
      "A future project focused on solving a practical problem with a clean and useful technical solution.",
    technologies: ["Development", "Problem Solving"],
    github: "https://github.com/Akash-3007",
    demo: null,
    featured: false,
  },
  {
    title: "Project coming soon",
    description:
      "An upcoming experiment exploring areas such as artificial intelligence, machine learning, or modern web development.",
    technologies: ["AI / ML", "Exploration"],
    github: "https://github.com/Akash-3007",
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-transparent py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut" as const,
          }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            04 — Projects
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Things I&apos;m building.
          </h2>

          <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
            A growing collection of experiments and projects as I develop my
            skills and explore different areas of technology.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut" as const,
              }}
              className={`group flex min-h-[320px] flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-7 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Code2 size={19} className="text-zinc-300" />
                </div>

                <span className="font-mono text-xs text-zinc-600">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-medium tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-zinc-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    GitHub
                    <ArrowUpRight size={15} />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
                    >
                      Live demo
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}