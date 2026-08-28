import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          BUILT WITH NEXT.JS · TAILWIND · FRAMER MOTION —{" "}
          <span className="text-accent">BENGALURU, IN</span>
        </p>
      </div>
    </footer>
  );
}