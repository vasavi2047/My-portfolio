"use client";

import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A curated stack spanning frontend, backend, and infrastructure — always learning, always building."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <GlassCard key={category.category} delay={i * 0.1}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
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
