import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Education() {
  const e = profile.education;
  return (
    <section id="education" className="scroll-mt-20 border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading number="04" label="EDUCATION" title="Academic background" />
        <Reveal>
          <div className="flex flex-col gap-6 rounded-xl border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line text-accent">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-lg font-medium">{e.program}</h3>
                <p className="text-muted">{e.institution}</p>
                <p className="text-sm text-muted">{e.location}</p>
              </div>
            </div>
            <div className="flex gap-10 font-mono text-sm">
              <div>
                <p className="text-xs tracking-widest text-muted">GPA</p>
                <p className="mt-1 text-lg">{e.gpa}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-muted">GRADE</p>
                <p className="mt-1 text-lg">{e.grade}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}