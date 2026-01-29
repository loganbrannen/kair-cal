"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { type Sekki, getDaysUntilNextSekki, getNextSekkiTransition } from "./sekki-data";

interface SekkiCardProps {
  sekki: Sekki;
  date: Date;
  className?: string;
}

/**
 * Full sekki card for day view
 * Shows kanji, meaning, context, and wisdom in a compact format
 */
export function SekkiCard({ sekki, date, className }: SekkiCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const daysUntilNext = getDaysUntilNextSekki(date);
  const { sekki: nextSekki } = getNextSekkiTransition(date);

  return (
    <div
      className={cn(
        "border-l-2 rounded-r-md overflow-hidden transition-all",
        sekki.color.replace("/10", "/20"),
        sekki.color.replace("bg-", "border-").replace("/10", ""),
        className
      )}
    >
      {/* Header - always visible, clickable to toggle */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-3 py-1.5 hover:bg-muted/30 transition-colors text-left"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-sm opacity-80">{sekki.kanji}</span>
          <span className="text-[10px] opacity-40">·</span>
          <span className="text-[11px] font-medium">{sekki.romaji}</span>
          <span className="text-[10px] opacity-40">·</span>
          <span className="text-[11px] text-muted-foreground">{sekki.english}</span>
          <span className="text-[10px] opacity-40 ml-1">·</span>
          <span className="text-[10px] text-muted-foreground/60 italic">
            "{sekki.description}"
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-[9px] text-muted-foreground/50">
            {daysUntilNext}d → {nextSekki.english}
          </span>
          <span className={cn(
            "text-[9px] text-muted-foreground/50 transition-transform",
            isExpanded ? "rotate-180" : ""
          )}>
            ▾
          </span>
        </div>
      </button>

      {/* Expanded content - more detailed context */}
      {isExpanded && (
        <div className="px-3 pb-2 pt-1 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Context */}
            <div>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                {sekki.context}
              </p>
            </div>
            
            {/* Reflection & Wisdom */}
            <div className="space-y-1.5">
              <div>
                <span className="text-[8px] uppercase tracking-wider text-muted-foreground/50">
                  Reflect
                </span>
                <p className="text-[10px] text-foreground/70 italic">
                  {sekki.reflection}
                </p>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-wider text-muted-foreground/50">
                  Practice
                </span>
                <p className="text-[10px] text-muted-foreground">
                  {sekki.wisdom}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Minimal sekki indicator for compact spaces
 */
export function SekkiIndicator({ sekki, className }: { sekki: Sekki; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 text-[9px] text-muted-foreground/60",
        className
      )}
      title={`${sekki.romaji} · ${sekki.english}: ${sekki.description}`}
    >
      <span className="opacity-70">{sekki.kanji}</span>
      <span className="opacity-40">·</span>
      <span className="italic">{sekki.english}</span>
    </div>
  );
}
