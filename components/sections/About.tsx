"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Engineering with purpose"
          description={aboutContent.summary}
        />

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {aboutContent.stats.map((stat, i) => (
            <GlassCard key={stat.label} delay={i * 0.1} className="text-center">
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {aboutContent.highlights.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.1}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <span className="text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
