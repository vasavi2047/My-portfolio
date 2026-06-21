import { personalInfo, socialLinks } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-foreground">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-muted">
            {personalInfo.title} · {personalInfo.location}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-muted">
          © {year} {personalInfo.name.split(" ").pop()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
