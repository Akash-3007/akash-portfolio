import Reveal from "./Reveal";

export default function SectionHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 font-mono text-[0.65rem] tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.25em]">
        {number} — {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}