"use client";

import { cn } from "@/lib/utils";
import { type DotColor, DOT_COLORS, DOT_LABELS } from "./calendar-types";

interface DotSelectorProps {
  selected: DotColor;
  onSelect: (color: DotColor) => void;
}

const DOT_OPTIONS = (Object.entries(DOT_COLORS) as [string, string][]).map(
  ([color, className]) => ({
    color: Number(color) as DotColor,
    className,
    label: DOT_LABELS[Number(color) as DotColor],
  })
);

export function DotSelector({ selected, onSelect }: DotSelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
        Marker
      </span>
      <div className="flex items-center gap-1.5">
        {DOT_OPTIONS.map(({ color, className, label }) => (
          <button
            key={color}
            type="button"
            onClick={() => onSelect(color)}
            title={`${label.name}: ${label.description}`}
            className={cn(
              "w-3.5 h-3.5 rounded-full transition-all duration-150",
              className,
              selected === color 
                ? "ring-1 ring-foreground ring-offset-1 ring-offset-background scale-125" 
                : "hover:scale-110"
            )}
          />
        ))}
      </div>
    </div>
  );
}
