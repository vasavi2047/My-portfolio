"use client";

import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { githubStats } from "@/lib/data";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, Star, Users } from "lucide-react";
import Link from "next/link";

const statIcons = {
  repos: GitBranch,
  followers: Users,
  contributions: GitCommit,
};

export function GitHub() {
  return (
    <section id="github" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="GitHub"
          title="Open source activity"
          description="Active contributor with a growing portfolio of repositories and community engagement."
          align="center"
          className="mx-auto text-center"
        />

        <div className="mb-10 grid grid-cols-3 gap-4">
          {(
            [
              { key: "repos" as const, label: "Repositories", value: githubStats.repos },
              { key: "followers" as const, label: "Followers", value: githubStats.followers },
              {
                key: "contributions" as const,
                label: "Contributions",
                value: `${githubStats.contributions}+`,
              },
            ] as const
          ).map((stat, i) => {
            const Icon = statIcons[stat.key];
            return (
              <GlassCard key={stat.key} delay={i * 0.1} className="text-center">
                <Icon className="mx-auto mb-2 h-5 w-5 text-accent" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </GlassCard>
            );
          })}
        </div>

        <GlassCard className="mb-8" hover={false}>
          <p className="mb-3 text-sm font-medium text-muted">Top Languages</p>
          <div className="flex flex-wrap gap-2">
            {githubStats.topLanguages.map((lang) => (
              <Badge key={lang} variant="accent">
                {lang}
              </Badge>
            ))}
          </div>
        </GlassCard>

        <div className="grid gap-4 sm:grid-cols-3">
          {githubStats.pinnedRepos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={repo.url} target="_blank" rel="noopener noreferrer">
                <GlassCard className="h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm font-semibold text-accent">
                      {repo.name}
                    </h3>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Star className="h-3 w-3" />
                      {repo.stars}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {repo.description}
                  </p>
                  <p className="mt-3 text-xs text-muted">{repo.language}</p>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={githubStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
          >
            View GitHub Profile →
          </Link>
        </div>
      </div>
    </section>
  );
}
