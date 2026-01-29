"use client";

import React from "react"

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  type DayData,
  type TimeBlock,
  type ContentBlock,
  MONTH_NAMES,
  WEEKDAYS,
  BLOCK_CATEGORIES,
  type TimeBlockCategory,
} from "./calendar-types";
import { TimeBlockEditor } from "./time-block-editor";
import { ContentEditor } from "./content-editor";
import { useSekkiMode } from "./sekki-context";
import { getSekki } from "./sekki-data";
import { SekkiCard } from "./sekki-card";

interface DayViewProps {
  date: Date;
  data: DayData;
  onUpdate: (data: DayData) => void;
}

type MobileTab = "schedule" | "notes";

const PANEL_WIDTH_KEY = "kair-schedule-panel-width";
const DEFAULT_PANEL_WIDTH = 340;
const MIN_PANEL_WIDTH = 200;
const MAX_PANEL_WIDTH = 600;

// Calculate duration in minutes
function getDuration(start: string, end: string): number {
  const [startH, startM] = start.split(":").map(Number);
  const [endH, endM] = end.split(":").map(Number);
  return endH * 60 + endM - (startH * 60 + startM);
}

// Format hours nicely
function formatHours(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function DayView({ date, data, onUpdate }: DayViewProps) {
  const [mobileTab, setMobileTab] = useState<MobileTab>("schedule");
  const [panelWidth, setPanelWidth] = useState(DEFAULT_PANEL_WIDTH);
  const [isResizing, setIsResizing] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Sekki mode
  const { sekkiMode } = useSekkiMode();
  const daySekki = getSekki(date);
  
  // Check if desktop and load saved panel width on mount
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    
    const saved = localStorage.getItem(PANEL_WIDTH_KEY);
    if (saved) {
      const width = parseInt(saved, 10);
      if (width >= MIN_PANEL_WIDTH && width <= MAX_PANEL_WIDTH) {
        setPanelWidth(width);
      }
    }
    
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);
  
  // Save panel width when it changes
  useEffect(() => {
    if (!isResizing) {
      localStorage.setItem(PANEL_WIDTH_KEY, panelWidth.toString());
    }
  }, [panelWidth, isResizing]);
  
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);
  
  useEffect(() => {
    if (!isResizing) return;
    
    // Lock cursor during resize
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = e.clientX - containerRect.left;
      const clampedWidth = Math.min(Math.max(newWidth, MIN_PANEL_WIDTH), MAX_PANEL_WIDTH);
      setPanelWidth(clampedWidth);
    };
    
    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing]);
  
  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const handleTimeBlocksUpdate = (timeBlocks: TimeBlock[]) => {
    onUpdate({ ...data, timeBlocks });
  };

  const handleContentBlocksUpdate = (contentBlocks: ContentBlock[]) => {
    onUpdate({ ...data, contentBlocks });
  };

  // Calculate time stats by category
  const timeBlocks = data.timeBlocks || [];
  const categoryMinutes: Partial<Record<TimeBlockCategory, number>> = {};
  let totalMinutes = 0;
  
  timeBlocks.forEach((block) => {
    const dur = getDuration(block.startTime, block.endTime);
    totalMinutes += dur;
    categoryMinutes[block.category] = (categoryMinutes[block.category] || 0) + dur;
  });

  // Get categories that have time
  const activeCategories = Object.entries(categoryMinutes).filter(([, mins]) => mins && mins > 0);

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Compact Date Header */}
      <div className="border-b border-border px-4 md:px-6 py-3 md:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Date info */}
          <div className="flex items-center gap-3">
            <div className="flex items-baseline gap-2 sm:gap-3">
              <span
                className={cn(
                  "text-4xl sm:text-5xl font-light tracking-tight tabular-nums",
                  isToday ? "text-foreground" : "text-foreground/80"
                )}
              >
                {date.getDate()}
              </span>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base tracking-wide text-foreground">
                  {WEEKDAYS[date.getDay()]}
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  {MONTH_NAMES[date.getMonth()]} {date.getFullYear()}
                </span>
              </div>
            </div>
            {isToday && (
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-muted-foreground/70 border border-border px-1.5 sm:px-2 py-0.5">
                Today
              </span>
            )}
          </div>

          {/* Day Stats Summary */}
          {totalMinutes > 0 && (
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-1 -mb-1">
              <div className="text-right flex-shrink-0">
                <span className="text-lg sm:text-2xl font-light text-foreground tabular-nums">
                  {formatHours(totalMinutes)}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground ml-1 sm:ml-2">
                  planned
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                {activeCategories.map(([cat, mins]) => {
                  const catInfo = BLOCK_CATEGORIES[cat as TimeBlockCategory];
                  if (!catInfo) {
                    return (
                      <div
                        key={cat}
                        className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm border bg-muted/50 border-muted-foreground/50"
                        title={`${formatHours(mins!)} ${cat}`}
                      >
                        <span className="text-[9px] sm:text-[10px] font-medium capitalize">{cat}</span>
                        <span className="text-[9px] sm:text-[10px] text-muted-foreground">
                          {formatHours(mins!)}
                        </span>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={cat}
                      className={cn(
                        "flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm border",
                        catInfo.bgClass,
                        catInfo.borderClass
                      )}
                      title={`${formatHours(mins!)} ${catInfo.label}`}
                    >
                      <span className="text-[9px] sm:text-[10px] font-medium">{catInfo.label}</span>
                      <span className="text-[9px] sm:text-[10px] text-muted-foreground">
                        {formatHours(mins!)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sekki Card - shown when mode is enabled */}
      {sekkiMode && (
        <div className="border-b border-border px-4 md:px-6 py-3">
          <SekkiCard sekki={daySekki} date={date} />
        </div>
      )}

      {/* Mobile Tab Switcher */}
      <div className="md:hidden border-b border-border flex">
        <button
          type="button"
          onClick={() => setMobileTab("schedule")}
          className={cn(
            "flex-1 py-2 text-[10px] uppercase tracking-widest transition-colors",
            mobileTab === "schedule" 
              ? "text-foreground bg-accent/50" 
              : "text-muted-foreground"
          )}
        >
          Schedule ({timeBlocks.length})
        </button>
        <button
          type="button"
          onClick={() => setMobileTab("notes")}
          className={cn(
            "flex-1 py-2 text-[10px] uppercase tracking-widest transition-colors border-l border-border",
            mobileTab === "notes" 
              ? "text-foreground bg-accent/50" 
              : "text-muted-foreground"
          )}
        >
          Notes ({(data.contentBlocks || []).length})
        </button>
      </div>

      {/* Main Content Area - Two Column on Desktop, Tabbed on Mobile */}
      <div ref={containerRef} className="flex-1 flex overflow-hidden">
        {/* Left Panel - Time Blocks */}
        <div 
          className={cn(
            "flex-col",
            "md:flex md:flex-shrink-0",
            mobileTab === "schedule" ? "flex flex-1 md:flex-none" : "hidden"
          )}
          style={isDesktop ? { width: panelWidth } : undefined}
        >
          <div className="hidden md:flex px-5 py-3 border-b border-border items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Schedule
            </span>
            {timeBlocks.length > 0 && (
              <span className="text-[10px] text-muted-foreground">
                {timeBlocks.length} block{timeBlocks.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-3 md:p-4">
              <TimeBlockEditor
                blocks={data.timeBlocks || []}
                onUpdate={handleTimeBlocksUpdate}
              />
            </div>
          </div>

          {/* Category Legend */}
          <div className="border-t border-border px-3 md:px-5 py-2 md:py-3">
            <div className="flex items-start justify-between gap-3">
              {/* Categories in 2 rows: 4 + 3 */}
              <div className="flex flex-col gap-1">
                {/* First row: 4 categories */}
                <div className="flex gap-2 md:gap-3">
                  {(Object.entries(BLOCK_CATEGORIES) as [TimeBlockCategory, typeof BLOCK_CATEGORIES[TimeBlockCategory]][])
                    .slice(0, 4)
                    .map(([cat, info]) => (
                      <div
                        key={cat}
                        className="flex items-center gap-1 md:gap-1.5 text-[8px] md:text-[9px] text-muted-foreground"
                      >
                        <div
                          className={cn(
                            "w-1.5 h-1.5 md:w-2 md:h-2 rounded-sm border",
                            info.bgClass,
                            info.borderClass
                          )}
                        />
                        <span>{info.label}</span>
                      </div>
                    ))}
                </div>
                {/* Second row: 3 categories */}
                <div className="flex gap-2 md:gap-3">
                  {(Object.entries(BLOCK_CATEGORIES) as [TimeBlockCategory, typeof BLOCK_CATEGORIES[TimeBlockCategory]][])
                    .slice(4)
                    .map(([cat, info]) => (
                      <div
                        key={cat}
                        className="flex items-center gap-1 md:gap-1.5 text-[8px] md:text-[9px] text-muted-foreground"
                      >
                        <div
                          className={cn(
                            "w-1.5 h-1.5 md:w-2 md:h-2 rounded-sm border",
                            info.bgClass,
                            info.borderClass
                          )}
                        />
                        <span>{info.label}</span>
                      </div>
                    ))}
                </div>
              </div>
              
              {/* View Time Types link */}
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-time-types-guide'));
                }}
                className="text-[8px] md:text-[9px] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 flex-shrink-0"
              >
                View Time Types
              </button>
            </div>
          </div>
        </div>

        {/* Resize Handle - Desktop only */}
        <div
          onMouseDown={handleMouseDown}
          className={cn(
            "hidden md:flex w-[3px] flex-shrink-0 cursor-col-resize items-center justify-center",
            "border-l border-border hover:border-muted-foreground/50 transition-colors group",
            isResizing && "border-muted-foreground/50 bg-accent/50"
          )}
        >
          <div className={cn(
            "w-px h-12 bg-transparent group-hover:bg-muted-foreground/40 transition-colors",
            isResizing && "bg-muted-foreground/40"
          )} />
        </div>

        {/* Right Panel - Notes & Content */}
        <div className={cn(
          "flex-col overflow-hidden",
          "md:flex md:flex-1",
          mobileTab === "notes" ? "flex flex-1" : "hidden"
        )}>
          <div className="hidden md:flex px-6 py-3 border-b border-border items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Notes & Tasks
            </span>
            {(data.contentBlocks || []).length > 0 && (
              <span className="text-[10px] text-muted-foreground">
                {data.contentBlocks?.length} block
                {(data.contentBlocks?.length || 0) !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 md:p-6 min-h-full">
              <ContentEditor
                blocks={data.contentBlocks || []}
                onUpdate={handleContentBlocksUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
