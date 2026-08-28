import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading number="03" label="EXPERIENCE" title="Where I contribute" />
        <ol className="relative ml-2 border-l border-line">
          {profile.experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <li className="relative pb-12 pl-8 last:pb-0">
                <span
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs tracking-widest text-muted">{e.period}</p>
                <h3 className="mt-2 text-base font-medium sm:text-lg">{e.role}</h3>
                <p className="text-sm text-accent">{e.org}</p>
                {e.location && <p className="mt-1 text-sm text-muted">{e.location}</p>}
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {e.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}