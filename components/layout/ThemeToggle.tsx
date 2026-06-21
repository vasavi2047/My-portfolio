"use client";

import { useTheme } from "@/components/layout/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 hover:text-foreground"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
