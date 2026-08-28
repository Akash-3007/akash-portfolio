import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading number="02" label="SKILLS" title="Technologies & foundations" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.06}>
              <div
                className={`h-full rounded-xl border p-6 transition-colors hover:bg-surface-hover ${
                  group.exploring ? "border-accent/40 bg-surface" : "border-line bg-surface"
                }`}
              >
                <p className="mb-4 font-mono text-xs tracking-[0.25em] text-muted">
                  {group.group.toUpperCase()}
                  {group.exploring && (
                    <span className="ml-2 text-accent">/ LEARNING</span>
                  )}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-line px-3 py-1.5 text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}