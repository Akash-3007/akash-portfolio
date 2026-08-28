import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center font-mono text-[0.65rem] leading-5 text-muted sm:flex-row sm:px-6 sm:text-left sm:text-xs">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="max-w-sm text-pretty sm:max-w-none">
          Built with Next.js · Tailwind · Framer Motion —{" "}
          <span className="text-accent">Bengaluru, IN</span>
        </p>
      </div>
    </footer>
  );
}