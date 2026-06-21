"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo, socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's connect"
          description="Interested in working together or have a question? I'd love to hear from you."
          align="center"
          className="mx-auto text-center"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <GlassCard hover={false}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {personalInfo.email}
                  </Link>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="text-sm font-medium text-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <p className="mb-3 text-xs text-muted">Social</p>
              <div className="space-y-2">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-white/5"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                  </Link>
                ))}
              </div>
            </GlassCard>
          </div>

          <GlassCard className="lg:col-span-3" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto sm:px-8"
              >
                <Send className="h-4 w-4" />
                {submitted ? "Message sent!" : "Send message"}
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
