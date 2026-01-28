"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  type DayData,
  type TimeBlock,
  type TimeBlockCategory,
  BLOCK_CATEGORIES,
  DURATION_PRESETS,
  MONTH_NAMES,
  WEEKDAYS,
  generateId,
  formatTimeRange,
  addMinutesToTime,
} from "./calendar-types";

interface QuickAddPopoverProps {
  children: React.ReactNode;
  date: Date;
  data: DayData;
  onUpdate: (data: DayData) => void;
  onViewFullDay?: () => void;
  /** If provided, opens in edit mode for this block */
  editBlockId?: string;
}

const CATEGORY_KEYS = Object.keys(BLOCK_CATEGORIES) as TimeBlockCategory[];
const MOBILE_BREAKPOINT = 768;

// Get next available start time based on existing blocks
function getNextAvailableTime(blocks: TimeBlock[]): string {
  if (blocks.length === 0) return "09:00";
  const sorted = [...blocks].sort((a, b) => a.endTime.localeCompare(b.endTime));
  const lastEnd = sorted[sorted.length - 1].endTime;
  // Don't go past 23:00
  if (lastEnd >= "23:00") return "09:00";
  return lastEnd;
}

export function QuickAddPopover({
  children,
  date,
  data,
  onUpdate,
  onViewFullDay,
  editBlockId,
}: QuickAddPopoverProps) {
  // Use state to track mobile after mount to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(60);
  const inputRef = useRef<HTMLInputElement>(null);

  // Detect mobile after mount
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const timeBlocks = data.timeBlocks || [];
  const editingBlock = editBlockId
    ? timeBlocks.find((b) => b.id === editBlockId)
    : null;

  const [newBlock, setNewBlock] = useState<Partial<TimeBlock>>(() => {
    if (editingBlock) {
      return { ...editingBlock };
    }
    const start = getNextAvailableTime(timeBlocks);
    return {
      startTime: start,
      endTime: addMinutesToTime(start, 60),
      title: "",
      category: "focus",
    };
  });

  // Reset form when opening
  useEffect(() => {
    if (open) {
      if (editingBlock) {
        setNewBlock({ ...editingBlock });
        // Calculate duration from existing block
        const [startH, startM] = editingBlock.startTime.split(":").map(Number);
        const [endH, endM] = editingBlock.endTime.split(":").map(Number);
        const dur = (endH * 60 + endM) - (startH * 60 + startM);
        setSelectedDuration(dur > 0 ? dur : 60);
      } else {
        const start = getNextAvailableTime(timeBlocks);
        setNewBlock({
          startTime: start,
          endTime: addMinutesToTime(start, 60),
          title: "",
          category: "focus",
        });
        setSelectedDuration(60);
      }
      // Focus input after a short delay
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, editingBlock, timeBlocks]);

  const handleDurationChange = (minutes: number) => {
    setSelectedDuration(minutes);
    setNewBlock((prev) => ({
      ...prev,
      endTime: addMinutesToTime(prev.startTime || "09:00", minutes),
    }));
  };

  const handleStartTimeChange = (startTime: string) => {
    setNewBlock((prev) => ({
      ...prev,
      startTime,
      endTime: addMinutesToTime(startTime, selectedDuration),
    }));
  };

  const handleAddBlock = () => {
    if (!newBlock.title?.trim()) return;

    const block: TimeBlock = {
      id: editingBlock?.id || generateId(),
      startTime: newBlock.startTime || "09:00",
      endTime: newBlock.endTime || "10:00",
      title: newBlock.title.trim(),
      category: newBlock.category || "focus",
    };

    let updatedBlocks: TimeBlock[];
    if (editingBlock) {
      updatedBlocks = timeBlocks.map((b) =>
        b.id === editingBlock.id ? block : b
      );
    } else {
      updatedBlocks = [...timeBlocks, block];
    }

    onUpdate({
      ...data,
      timeBlocks: updatedBlocks.sort((a, b) =>
        a.startTime.localeCompare(b.startTime)
      ),
    });
    setOpen(false);
  };

  const handleDeleteBlock = () => {
    if (!editingBlock) return;
    onUpdate({
      ...data,
      timeBlocks: timeBlocks.filter((b) => b.id !== editingBlock.id),
    });
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newBlock.title?.trim()) {
      e.preventDefault();
      handleAddBlock();
    }
  };

  const formContent = (
    <div className="flex flex-col gap-3">
      {/* Title input */}
      <input
        ref={inputRef}
        type="text"
        value={newBlock.title || ""}
        onChange={(e) => setNewBlock({ ...newBlock, title: e.target.value })}
        onKeyDown={handleKeyDown}
        placeholder="What are you doing?"
        className="w-full text-sm bg-transparent border-b border-border px-1 py-2 placeholder:text-muted-foreground/50 outline-none focus:border-foreground transition-colors"
        autoFocus
      />

      {/* Duration presets */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Duration
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {DURATION_PRESETS.map((preset) => (
            <button
              key={preset.minutes}
              type="button"
              onClick={() => handleDurationChange(preset.minutes)}
              className={cn(
                "text-xs px-3 py-1.5 border rounded-md transition-colors",
                selectedDuration === preset.minutes
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground"
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Time selector */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Start
          </span>
          <input
            type="time"
            value={newBlock.startTime || "09:00"}
            onChange={(e) => handleStartTimeChange(e.target.value)}
            className="text-sm bg-transparent border border-border px-2 py-1.5 rounded-md outline-none focus:border-foreground transition-colors"
          />
        </div>
        <span className="text-muted-foreground mt-5">→</span>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            End
          </span>
          <span className="text-sm px-2 py-1.5 text-muted-foreground">
            {newBlock.endTime || "10:00"}
          </span>
        </div>
      </div>

      {/* Category selector */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Category
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {CATEGORY_KEYS.map((catKey) => {
            const c = BLOCK_CATEGORIES[catKey];
            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setNewBlock({ ...newBlock, category: catKey })}
                className={cn(
                  "text-[10px] uppercase tracking-wider px-2 py-1 border rounded-md transition-colors",
                  newBlock.category === catKey
                    ? cn(c.bgClass, c.borderClass, "font-medium")
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-2 border-t border-border mt-1">
        <button
          type="button"
          onClick={handleAddBlock}
          disabled={!newBlock.title?.trim()}
          className="flex-1 text-xs uppercase tracking-wider px-4 py-2 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
        >
          {editingBlock ? "Update" : "Add Block"}
        </button>
        {editingBlock && (
          <button
            type="button"
            onClick={handleDeleteBlock}
            className="text-xs uppercase tracking-wider px-3 py-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
          >
            Delete
          </button>
        )}
      </div>

      {/* Existing blocks preview */}
      {timeBlocks.length > 0 && !editingBlock && (
        <div className="pt-2 border-t border-border">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Today ({timeBlocks.length})
          </span>
          <div className="mt-1.5 flex flex-col gap-1 max-h-24 overflow-y-auto">
            {timeBlocks
              .sort((a, b) => a.startTime.localeCompare(b.startTime))
              .map((block) => {
                const cat = BLOCK_CATEGORIES[block.category];
                return (
                  <div
                    key={block.id}
                    className={cn(
                      "px-2 py-1 rounded-sm border-l-2 text-[11px]",
                      cat?.bgClass || "bg-muted/50",
                      cat?.borderClass || "border-muted-foreground/50"
                    )}
                  >
                    <span className="font-medium">{block.title}</span>
                    <span className="text-muted-foreground ml-2">
                      {formatTimeRange(block.startTime, block.endTime)}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* View full day link */}
      {onViewFullDay && (
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            onViewFullDay();
          }}
          className="text-[11px] text-muted-foreground hover:text-foreground transition-colors text-center py-1"
        >
          View Full Day →
        </button>
      )}
    </div>
  );

  const dateLabel = `${WEEKDAYS[date.getDay()]}, ${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`;

  // Before mount, just render children without popover functionality
  // This ensures hydration matches (server renders just children)
  if (!mounted) {
    return <>{children}</>;
  }

  // Mobile: use Drawer
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <div onClick={() => setOpen(true)}>{children}</div>
        <DrawerContent>
          <DrawerHeader className="pb-2">
            <DrawerTitle className="text-base font-medium">
              {editingBlock ? "Edit Block" : "Quick Add"}
            </DrawerTitle>
            <p className="text-sm text-muted-foreground">{dateLabel}</p>
          </DrawerHeader>
          <div className="px-4 pb-6">{formContent}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  // Desktop: use Popover with controlled open state
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div onClick={() => setOpen(true)} className="contents">
          {children}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-4"
        align="start"
        side="right"
        sideOffset={8}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-medium">
              {editingBlock ? "Edit Block" : "Quick Add"}
            </h3>
            <p className="text-xs text-muted-foreground">{dateLabel}</p>
          </div>
        </div>
        {formContent}
      </PopoverContent>
    </Popover>
  );
}
