"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Certifications"
          title="Verified credentials"
          description="Industry-recognized certifications that validate my expertise across cloud, frontend, and programming."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <GlassCard key={cert.name} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                    <span>{cert.date}</span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                  <Link
                    href={cert.url}
                    className="mt-3 inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent/80"
                  >
                    View credential
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
