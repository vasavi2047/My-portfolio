"use client";

import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Education"
          title="Academic foundation"
          description="Formal training in computer science with a strong emphasis on algorithms, systems, and software engineering."
        />

        <div className="space-y-6">
          {education.map((item, i) => (
            <GlassCard key={item.degree} delay={i * 0.1}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.institution}</p>
                    <p className="mt-1 text-xs text-muted">{item.period}</p>
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-foreground sm:shrink-0">
                  GPA: {item.gpa}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 pl-0 sm:pl-[60px]">
                {item.highlights.map((subject) => (
                  <Badge key={subject} variant="outline">
                    {subject}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
