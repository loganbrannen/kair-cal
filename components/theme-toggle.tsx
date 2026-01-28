"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage first, then system preference
    const stored = localStorage.getItem("kair-theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("kair-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) {
    return (
      <div className="w-8 h-4 rounded-full bg-muted border border-border" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-theme-toggle
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={cn(
        "relative w-8 h-4 rounded-full transition-colors duration-200",
        "border border-border",
        theme === "dark" ? "bg-foreground/20" : "bg-muted"
      )}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span
        className={cn(
          "absolute top-0.5 w-2.5 h-2.5 rounded-full transition-all duration-200",
          "flex items-center justify-center text-[6px]",
          theme === "dark" 
            ? "left-[calc(100%-12px)] bg-foreground" 
            : "left-0.5 bg-foreground/70"
        )}
      />
    </button>
  );
}
