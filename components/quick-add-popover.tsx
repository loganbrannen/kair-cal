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
  type RecurrenceRule,
  type RecurrenceFrequency,
  BLOCK_CATEGORIES,
  MONTH_NAMES,
  WEEKDAYS,
  RECURRENCE_OPTIONS,
  generateId,
  addMinutesToTime,
  formatDateString,
} from "./calendar-types";

// Format time to 12-hour (9:00am)
function formatTime12h(time24: string): string {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour12}:${m.toString().padStart(2, "0")}${period}`;
}

// Parse 12-hour time back to 24-hour
function parseTime12h(time12: string): string {
  const match = time12.match(/(\d+):(\d+)(am|pm)/i);
  if (!match) return "09:00";
  let [, h, m, period] = match;
  let hour = parseInt(h);
  if (period.toLowerCase() === "pm" && hour !== 12) hour += 12;
  if (period.toLowerCase() === "am" && hour === 12) hour = 0;
  return `${hour.toString().padStart(2, "0")}:${m}`;
}

interface QuickAddPopoverProps {
  children: React.ReactNode;
  date: Date;
  data: DayData;
  onUpdate: (data: DayData) => void;
  onViewFullDay?: () => void;
  /** If provided, opens in edit mode for this block */
  editBlockId?: string;
  /** If provided, use this as the default start time for new blocks */
  defaultStartTime?: string;
}

const CATEGORY_KEYS = Object.keys(BLOCK_CATEGORIES) as TimeBlockCategory[];
const MOBILE_BREAKPOINT = 768;

// Quick duration options (in minutes)
const QUICK_DURATIONS = [15, 30, 45, 60, 90, 120];

// Recurrence options for dropdown (Google Cal style)
const REPEAT_OPTIONS = [
  { value: "none", label: "Does not repeat" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
  { value: "weekdays", label: "Every weekday (Mon–Fri)" },
  { value: "custom", label: "Custom..." },
];

// Get next available start time based on existing blocks
function getNextAvailableTime(blocks: TimeBlock[]): string {
  if (blocks.length === 0) return "09:00";
  const sorted = [...blocks].sort((a, b) => a.endTime.localeCompare(b.endTime));
  const lastEnd = sorted[sorted.length - 1].endTime;
  // Don't go past 23:00
  if (lastEnd >= "23:00") return "09:00";
  return lastEnd;
}

// Format duration for display
function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function QuickAddPopover({
  children,
  date,
  data,
  onUpdate,
  onViewFullDay,
  editBlockId,
  defaultStartTime,
}: QuickAddPopoverProps) {
  // Use state to track mobile after mount to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [repeatValue, setRepeatValue] = useState("none");
  const [showCustomRepeat, setShowCustomRepeat] = useState(false);
  const [recurrence, setRecurrence] = useState<RecurrenceRule>({
    frequency: "weekly",
    interval: 1,
    daysOfWeek: [],
  });
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

  // Reset form when opening - only depend on `open` to avoid infinite loops
  useEffect(() => {
    if (open) {
      const blocks = data.timeBlocks || [];
      const blockToEdit = editBlockId ? blocks.find((b) => b.id === editBlockId) : null;
      
      if (blockToEdit) {
        setNewBlock({ ...blockToEdit });
        // Calculate duration from existing block
        const [startH, startM] = blockToEdit.startTime.split(":").map(Number);
        const [endH, endM] = blockToEdit.endTime.split(":").map(Number);
        const dur = (endH * 60 + endM) - (startH * 60 + startM);
        setSelectedDuration(dur > 0 ? dur : 60);
        // Set recurrence state from block
        if (blockToEdit.recurrence) {
          setRepeatValue("custom");
          setShowCustomRepeat(true);
          setRecurrence(blockToEdit.recurrence);
        } else {
          setRepeatValue("none");
          setShowCustomRepeat(false);
        }
      } else {
        // Use defaultStartTime if provided, otherwise find next available slot
        const start = defaultStartTime || getNextAvailableTime(blocks);
        const dateStr = formatDateString(date);
        setNewBlock({
          startTime: start,
          endTime: addMinutesToTime(start, 60),
          title: "",
          category: "focus",
          startDate: dateStr,
        });
        setSelectedDuration(60);
        setRepeatValue("none");
        setShowCustomRepeat(false);
        setRecurrence({ frequency: "weekly", interval: 1, daysOfWeek: [] });
      }
      // Focus input after a short delay
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

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

  // Handle repeat dropdown change
  const handleRepeatChange = (value: string) => {
    setRepeatValue(value);
    if (value === "custom") {
      setShowCustomRepeat(true);
    } else if (value === "none") {
      setShowCustomRepeat(false);
    } else if (value === "weekdays") {
      // Auto-configure for weekdays
      setRecurrence({ frequency: "weekly", interval: 1, daysOfWeek: [1, 2, 3, 4, 5] });
      setShowCustomRepeat(false);
    } else {
      // daily, weekly, monthly, yearly
      setRecurrence({ frequency: value as RecurrenceFrequency, interval: 1, daysOfWeek: [] });
      setShowCustomRepeat(false);
    }
  };

  const handleAddBlock = () => {
    if (!newBlock.title?.trim()) return;

    const dateStr = formatDateString(date);
    
    // Build recurrence based on repeat selection
    let blockRecurrence: RecurrenceRule | undefined;
    if (repeatValue !== "none") {
      if (repeatValue === "weekdays") {
        blockRecurrence = { frequency: "weekly", interval: 1, daysOfWeek: [1, 2, 3, 4, 5] };
      } else if (repeatValue === "custom") {
        blockRecurrence = recurrence;
      } else {
        blockRecurrence = { frequency: repeatValue as RecurrenceFrequency, interval: 1 };
      }
    }

    const block: TimeBlock = {
      id: editingBlock?.id || generateId(),
      startTime: newBlock.startTime || "09:00",
      endTime: newBlock.endTime || "10:00",
      title: newBlock.title.trim(),
      category: newBlock.category || "focus",
      startDate: dateStr,
      // Recurrence: include if not "none"
      ...(blockRecurrence ? { recurrence: blockRecurrence } : {}),
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

  // Short day name
  const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
  const monthName = MONTH_NAMES[date.getMonth()];
  const dateDisplay = `${dayName}, ${monthName} ${date.getDate()}`;

  const formContent = (
    <div className="flex flex-col gap-3">
      {/* Title input - clean underline style */}
      <input
        ref={inputRef}
        type="text"
        value={newBlock.title || ""}
        onChange={(e) => setNewBlock({ ...newBlock, title: e.target.value })}
        onKeyDown={handleKeyDown}
        placeholder="Add title"
        className="w-full text-base bg-transparent border-b border-border/50 px-0 py-2 placeholder:text-muted-foreground/40 outline-none focus:border-foreground transition-colors"
        autoFocus
      />

      {/* Date & Time row - Google Cal style inline */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">{dateDisplay}</span>
        <span className="text-muted-foreground/50">·</span>
        <input
          type="time"
          value={newBlock.startTime || "09:00"}
          onChange={(e) => handleStartTimeChange(e.target.value)}
          className="bg-muted/50 px-2 py-1 rounded text-sm outline-none focus:ring-1 focus:ring-foreground/20 w-[90px]"
        />
        <span className="text-muted-foreground">–</span>
        <span className="text-muted-foreground tabular-nums">
          {formatTime12h(newBlock.endTime || "10:00")}
        </span>
      </div>

      {/* Duration pills - compact row */}
      <div className="flex gap-1">
        {QUICK_DURATIONS.map((mins) => (
          <button
            key={mins}
            type="button"
            onClick={() => handleDurationChange(mins)}
            className={cn(
              "text-xs px-2 py-1 rounded transition-all",
              selectedDuration === mins
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {formatDuration(mins)}
          </button>
        ))}
      </div>

      {/* Category - color dots (Google Cal style) */}
      <div className="flex items-center gap-1">
        {CATEGORY_KEYS.map((catKey) => {
          const c = BLOCK_CATEGORIES[catKey];
          const isSelected = newBlock.category === catKey;
          // Get the color class and extract for the dot
          const colorClass = c.borderClass.replace("border-", "bg-");
          return (
            <button
              key={catKey}
              type="button"
              onClick={() => setNewBlock({ ...newBlock, category: catKey })}
              className={cn(
                "group relative w-6 h-6 rounded-full flex items-center justify-center transition-all",
                isSelected ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "hover:scale-110"
              )}
              title={c.label}
            >
              <span className={cn("w-4 h-4 rounded-full", colorClass)} />
            </button>
          );
        })}
        <span className="text-xs text-muted-foreground ml-2">
          {BLOCK_CATEGORIES[newBlock.category || "focus"].label}
        </span>
      </div>

      {/* Repeat dropdown - Google Cal style */}
      <select
        value={repeatValue}
        onChange={(e) => handleRepeatChange(e.target.value)}
        className="text-sm bg-muted/50 px-3 py-2 rounded outline-none focus:ring-1 focus:ring-foreground/20 cursor-pointer w-full"
      >
        {REPEAT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom repeat options (only shown when "Custom..." selected) */}
      {showCustomRepeat && (
        <div className="flex flex-col gap-2 p-3 bg-muted/30 rounded-md">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Every</span>
            <input
              type="number"
              min={1}
              max={99}
              value={recurrence.interval}
              onChange={(e) => setRecurrence({ ...recurrence, interval: Math.max(1, parseInt(e.target.value) || 1) })}
              className="w-12 bg-background px-2 py-1 rounded text-center outline-none focus:ring-1 focus:ring-foreground/20"
            />
            <select
              value={recurrence.frequency}
              onChange={(e) => setRecurrence({ ...recurrence, frequency: e.target.value as RecurrenceFrequency })}
              className="bg-background px-2 py-1 rounded outline-none focus:ring-1 focus:ring-foreground/20"
            >
              {RECURRENCE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {recurrence.interval === 1 
                    ? opt.label.replace(/ly$/, "").toLowerCase() 
                    : opt.label.replace(/ly$/, "s").toLowerCase()}
                </option>
              ))}
            </select>
          </div>
          
          {/* Days of week for weekly */}
          {recurrence.frequency === "weekly" && (
            <div className="flex gap-1">
              {WEEKDAYS.map((day, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    const days = recurrence.daysOfWeek || [];
                    const newDays = days.includes(i)
                      ? days.filter((d) => d !== i)
                      : [...days, i].sort();
                    setRecurrence({ ...recurrence, daysOfWeek: newDays });
                  }}
                  className={cn(
                    "w-7 h-7 text-xs rounded-full transition-colors",
                    (recurrence.daysOfWeek || []).includes(i)
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {day.charAt(0)}
                </button>
              ))}
            </div>
          )}
          
          {/* End date */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Ends</span>
            <input
              type="date"
              value={recurrence.endDate || ""}
              onChange={(e) => setRecurrence({ ...recurrence, endDate: e.target.value || undefined })}
              className="bg-background px-2 py-1 rounded outline-none focus:ring-1 focus:ring-foreground/20"
            />
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex items-center justify-end gap-2 pt-1">
        {editingBlock && (
          <button
            type="button"
            onClick={handleDeleteBlock}
            className="text-sm px-3 py-1.5 text-destructive hover:bg-destructive/10 rounded transition-colors"
          >
            Delete
          </button>
        )}
        {onViewFullDay && (
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onViewFullDay();
            }}
            className="text-sm px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            More options
          </button>
        )}
        <button
          type="button"
          onClick={handleAddBlock}
          disabled={!newBlock.title?.trim()}
          className="text-sm px-4 py-1.5 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );

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
          <DrawerHeader className="pb-0">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-base font-medium">
                {editingBlock ? "Edit" : "New event"}
              </DrawerTitle>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>
          </DrawerHeader>
          <div className="px-4 pb-6">{formContent}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  // Desktop: use Popover - clean, minimal header
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-4"
        align="start"
        side="right"
        sideOffset={8}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
        >
          <span className="text-lg leading-none">×</span>
        </button>
        {formContent}
      </PopoverContent>
    </Popover>
  );
}
