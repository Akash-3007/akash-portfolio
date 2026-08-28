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
      <p className="mb-3 font-mono text-xs tracking-[0.25em] text-accent">
        {number} — {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}