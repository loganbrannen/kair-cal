"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { type DayData, type DotColor, type TimeBlock, DOT_COLORS, BLOCK_CATEGORIES } from "./calendar-types";
import { QuickAddPopover } from "./quick-add-popover";

export type { DotColor, DayData };

interface DayCellProps {
  day: number;
  month: number;
  year: number;
  data: DayData;
  allBlocks?: TimeBlock[]; // All blocks including recurring
  isToday: boolean;
  onUpdate: (data: DayData) => void;
  selectedDotColor: DotColor;
  onDayClick?: () => void;
}

export function DayCell({
  day,
  month,
  year,
  data,
  allBlocks,
  isToday,
  onUpdate,
  selectedDotColor,
  onDayClick,
}: DayCellProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [noteValue, setNoteValue] = useState(data.note);
  const inputRef = useRef<HTMLInputElement>(null);

  // Create date object for the popover
  const date = new Date(year, month, day);

  useEffect(() => {
    setNoteValue(data.note);
  }, [data.note]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleShiftClick = (e: React.MouseEvent) => {
    if (e.shiftKey) {
      e.stopPropagation();
      // Shift+click to toggle dot
      const hasDot = data.dots.includes(selectedDotColor);
      const newDots = hasDot
        ? data.dots.filter((d) => d !== selectedDotColor)
        : [...data.dots, selectedDotColor];
      onUpdate({ ...data, dots: newDots });
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (noteValue !== data.note) {
      onUpdate({ ...data, note: noteValue });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleBlur();
    }
    if (e.key === "Escape") {
      setNoteValue(data.note);
      setIsEditing(false);
    }
  };

  // Get unique time block categories for this day (use allBlocks which includes recurring)
  const blocks = allBlocks || data.timeBlocks || [];
  const blockCategories = blocks.length > 0
    ? [...new Set(blocks.map((b) => b.category))]
    : [];

  // Double-click navigates to day view
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDayClick?.();
  };

  const cellContent = (
    <div
      onClick={handleShiftClick}
      onDoubleClick={handleDoubleClick}
      className={cn(
        "relative border-r border-b border-border p-0.5 cursor-pointer min-h-0 overflow-hidden h-full",
        "transition-colors duration-100",
        "hover:bg-accent/30",
        isToday && "bg-accent/50"
      )}
    >
      {/* Day number */}
      <span
        className={cn(
          "absolute top-0 left-0.5 text-[8px] leading-tight z-10",
          isToday ? "text-foreground font-medium" : "text-muted-foreground"
        )}
      >
        {day}
      </span>

      {/* Dots */}
      {data.dots.length > 0 && (
        <div className="absolute top-0 right-0.5 flex gap-px z-10">
          {data.dots.slice(0, 3).map((dotColor, i) => (
            <div
              key={i}
              className={cn("w-1.5 h-1.5 rounded-full", DOT_COLORS[dotColor])}
            />
          ))}
        </div>
      )}

      {/* Time block indicators - colored bars at bottom */}
      {blockCategories.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 flex h-1">
          {blockCategories.map((cat) => {
            const catInfo = BLOCK_CATEGORIES[cat];
            // Fallback for legacy categories
            if (!catInfo) {
              return (
                <div
                  key={cat}
                  className="flex-1 bg-muted-foreground/50"
                />
              );
            }
            return (
              <div
                key={cat}
                className="flex-1"
                style={{ backgroundColor: `var(--dot-${catInfo.color})` }}
              />
            );
          })}
        </div>
      )}

      {/* Note preview - hidden in year view to keep clean */}
      {!onDayClick && isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value.slice(0, 24))}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="absolute inset-x-0.5 bottom-1 top-2.5 bg-transparent text-[7px] leading-tight text-foreground outline-none"
          maxLength={24}
        />
      ) : null}
    </div>
  );

  return (
    <QuickAddPopover
      date={date}
      data={data}
      onUpdate={onUpdate}
      onViewFullDay={onDayClick}
    >
      {cellContent}
    </QuickAddPopover>
  );
}
