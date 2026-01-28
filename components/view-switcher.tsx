"use client";

import { cn } from "@/lib/utils";
import type { ViewMode } from "./calendar-types";

interface ViewSwitcherProps {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const VIEWS: { mode: ViewMode; label: string }[] = [
  { mode: "year", label: "Y" },
  { mode: "month", label: "M" },
  { mode: "week", label: "W" },
  { mode: "day", label: "D" },
];

export function ViewSwitcher({ view, onViewChange }: ViewSwitcherProps) {
  return (
    <div className="flex items-center border border-border">
      {VIEWS.map(({ mode, label }) => (
        <button
          key={mode}
          type="button"
          onClick={() => onViewChange(mode)}
          className={cn(
            "w-6 h-5 text-[9px] font-medium tracking-wider transition-colors",
            "border-r border-border last:border-r-0",
            view === mode
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
