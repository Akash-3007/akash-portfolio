import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  const { education } = profile;
  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading number="01" label="ABOUT" title="A little about me" />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-5 leading-relaxed text-muted">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <p className="mb-4 font-mono text-xs tracking-[0.25em] text-muted">
                AREAS I&apos;M ACTIVELY EXPLORING
              </p>
              <ul className="flex flex-wrap gap-2">
                {profile.interests.map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="mb-5 font-mono text-xs tracking-[0.25em] text-accent">
                ACADEMIC SNAPSHOT
              </p>
              <dl className="space-y-4 text-sm">
                {[
                  ["Program", education.program],
                  ["University", education.institution],
                  ["Location", education.location],
                  ["GPA", education.gpa],
                  ["Grade", education.grade],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-line pb-3 last:border-0">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}