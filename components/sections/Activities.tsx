import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Activities() {
  return (
    <section id="activities" className="scroll-mt-20 border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading number="07" label="COMMUNITY" title="Activities & communities" />
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xl leading-relaxed text-muted sm:text-2xl">
              Exploring coding clubs, technology communities, and open-source
              opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-muted">
              I&apos;m interested in joining competitive programming and web
              development groups to gain practical, hands-on experience alongside my
              academic work.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}