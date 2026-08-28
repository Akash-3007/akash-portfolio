import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Exploring() {
  return (
    <section id="exploring" className="scroll-mt-20 border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading number="06" label="NOW" title="Currently exploring" />
        <Reveal>
          <p className="mb-8 max-w-2xl text-muted">
            Topics I&apos;m actively learning and experimenting with right now — not
            certifications, just genuine curiosity in progress.
          </p>
          <ul className="flex flex-wrap gap-3">
            {profile.exploring.map((t) => (
              <li
                key={t}
                className="rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-sm transition-colors hover:border-accent"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}