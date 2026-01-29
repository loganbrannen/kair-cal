"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { type Sekki } from "./sekki-data";

interface SekkiBadgeProps {
  sekki: Sekki;
  variant?: "compact" | "full";
  className?: string;
}

/**
 * A compact badge displaying the current sekki
 * Used in month and week view headers
 */
export function SekkiBadge({ sekki, variant = "compact", className }: SekkiBadgeProps) {
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px]",
          "bg-muted/50 text-muted-foreground border border-border/50",
          "transition-colors hover:bg-muted",
          className
        )}
        title={`${sekki.romaji} · ${sekki.english}`}
      >
        <span className="opacity-70">{sekki.kanji}</span>
        <span className="opacity-50">·</span>
        <span>{sekki.english}</span>
      </div>
    );
  }

  // Full variant with more details
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-1 rounded-md",
        "bg-muted/30 border border-border/30",
        className
      )}
    >
      <span className="text-sm opacity-80">{sekki.kanji}</span>
      <div className="flex flex-col">
        <span className="text-[10px] font-medium">{sekki.romaji}</span>
        <span className="text-[9px] text-muted-foreground">{sekki.english}</span>
      </div>
    </div>
  );
}

/**
 * A subtle text-only sekki indicator
 * Used in week view subheader
 */
export function SekkiSubheader({ sekki, className }: { sekki: Sekki; className?: string }) {
  return (
    <div
      className={cn(
        "text-[10px] text-muted-foreground/70 tracking-wide",
        className
      )}
    >
      <span className="opacity-60">{sekki.kanji}</span>
      <span className="mx-1.5 opacity-30">·</span>
      <span className="opacity-80">{sekki.romaji}</span>
      <span className="mx-1.5 opacity-30">·</span>
      <span className="opacity-60 italic">{sekki.english}</span>
    </div>
  );
}
