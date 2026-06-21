"use client";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-secondary text-xs font-bold text-white">
              KV
            </span>
            <span className="hidden sm:inline">{personalInfo.name}</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#contact"
              className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 md:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 pt-24">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
