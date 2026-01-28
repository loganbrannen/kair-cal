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
  DAY_COLORS,
  type DayColorCode,
} from "./calendar-types";
import { TimeBlockEditor } from "./time-block-editor";
import { ContentEditor } from "./content-editor";

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
  const [showDayColorPicker, setShowDayColorPicker] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dayColorPickerRef = useRef<HTMLDivElement>(null);
  
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
  
  // Close day color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dayColorPickerRef.current && !dayColorPickerRef.current.contains(e.target as Node)) {
        setShowDayColorPicker(false);
      }
    };
    if (showDayColorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showDayColorPicker]);
  
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
  
  const handleDayColorChange = (color: DayColorCode) => {
    onUpdate({ ...data, dayColor: color });
    setShowDayColorPicker(false);
  };

  // Get current day color info
  const currentDayColor = data.dayColor ? DAY_COLORS[data.dayColor] : null;

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
            
            {/* Day Color Picker */}
            <div className="relative" ref={dayColorPickerRef}>
              <button
                type="button"
                onClick={() => setShowDayColorPicker(!showDayColorPicker)}
                className={cn(
                  "flex items-center gap-1.5 px-2 py-1 rounded-sm border text-[9px] sm:text-[10px] transition-colors",
                  currentDayColor 
                    ? `${currentDayColor.bgClass} ${currentDayColor.borderClass}` 
                    : "border-border hover:border-muted-foreground/50"
                )}
                title="Set day color"
              >
                <div className={cn(
                  "w-2.5 h-2.5 rounded-full",
                  currentDayColor ? currentDayColor.bgClassSolid : "bg-muted-foreground/30"
                )} />
                <span className="hidden sm:inline text-muted-foreground">
                  {currentDayColor ? currentDayColor.label : "Color"}
                </span>
              </button>
              
              {showDayColorPicker && (
                <div className="absolute top-full left-0 mt-1 z-50 bg-popover border border-border rounded-md shadow-lg p-2 min-w-[180px]">
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground mb-2 px-1">
                    Day Color
                  </div>
                  <div className="space-y-1">
                    {(Object.entries(DAY_COLORS) as [Exclude<DayColorCode, null>, typeof DAY_COLORS[Exclude<DayColorCode, null>]][]).map(
                      ([code, info]) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => handleDayColorChange(code)}
                          className={cn(
                            "w-full flex items-center gap-2 px-2 py-1.5 rounded-sm text-left transition-colors",
                            "hover:bg-accent",
                            data.dayColor === code && "bg-accent"
                          )}
                        >
                          <div className={cn("w-3 h-3 rounded-full flex-shrink-0", info.bgClassSolid)} />
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-medium">{info.label}</div>
                            <div className="text-[8px] text-muted-foreground truncate">{info.description}</div>
                          </div>
                        </button>
                      )
                    )}
                    {data.dayColor && (
                      <>
                        <div className="border-t border-border my-1" />
                        <button
                          type="button"
                          onClick={() => handleDayColorChange(null)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-sm text-left hover:bg-accent transition-colors"
                        >
                          <div className="w-3 h-3 rounded-full flex-shrink-0 border border-muted-foreground/30" />
                          <span className="text-[10px] text-muted-foreground">Clear color</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
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
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {(Object.entries(BLOCK_CATEGORIES) as [TimeBlockCategory, typeof BLOCK_CATEGORIES[TimeBlockCategory]][]).map(
                ([cat, info]) => (
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
                )
              )}
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
