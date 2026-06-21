"use client";

import { GitHubIcon } from "@/components/ui/SocialIcons";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="Production-grade applications and systems I've designed and built — from concept to deployment."
        />

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <GlassCard
              key={project.title}
              delay={i * 0.1}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden",
                "md:col-span-1"
              )}
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                    <Star className="h-4 w-4 text-accent" />
                  </div>
                  <Badge variant="accent">Featured</Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Source
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent/80"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((project, i) => (
            <GlassCard key={project.title} delay={i * 0.1} className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Source
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent/80"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Link>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
