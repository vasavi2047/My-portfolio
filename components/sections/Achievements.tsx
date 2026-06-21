"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data";
import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Achievements"
          title="Highlights & recognition"
          description="Competitive programming, leadership, and community contributions that shaped my engineering journey."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent sm:block" />

          <div className="space-y-6">
            {achievements.map((item, i) => (
              <GlassCard key={item.title} delay={i * 0.1} className="sm:ml-10">
                <div className="flex items-start gap-4">
                  <div className="absolute -left-0 hidden sm:flex">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-background">
                      <Trophy className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                  <div className="sm:hidden">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                      <Trophy className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <span className="text-xs text-muted">{item.date}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent/80">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
