import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "bg-white/10 text-foreground/80",
        variant === "accent" && "bg-accent/15 text-accent",
        variant === "outline" && "border border-white/10 text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
