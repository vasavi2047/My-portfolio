"use client";

import { Badge } from "@/components/ui/Badge";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-accent-secondary/15 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="accent" className="mb-6 px-4 py-1.5 text-sm">
            {personalInfo.availability}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent">
            {personalInfo.firstName}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl font-medium text-foreground/80 sm:text-2xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Projects
          </Link>
          <a
  href="/resume.pdf"
  target="_blank"
  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
>
  <Download className="h-4 w-4" />
  Resume
</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {[
            { icon: GitHubIcon, href: personalInfo.github, label: "GitHub" },
            { icon: LinkedInIcon, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
