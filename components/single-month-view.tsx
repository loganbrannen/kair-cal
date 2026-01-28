"use client";

import React from "react"

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  type DayData,
  type DotColor,
  WEEKDAYS,
  DOT_COLORS,
  getDaysInMonth,
  getFirstDayOfMonth,
} from "./calendar-types";

interface SingleMonthViewProps {
  month: number;
  year: number;
  data: Record<string, DayData>;
  onDayUpdate: (day: number, data: DayData) => void;
  selectedDotColor: DotColor;
  onDayClick?: (day: number) => void;
  onWeekClick?: (weekStart: Date) => void;
}

export function SingleMonthView({
  month,
  year,
  data,
  onDayUpdate,
  selectedDotColor,
  onDayClick,
  onWeekClick,
}: SingleMonthViewProps) {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const today = new Date();
  const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
  const currentDay = today.getDate();

  const emptyDays = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const totalWeeks = Math.ceil((firstDay + daysInMonth) / 7);

  // Group days into weeks for week click handling
  const getWeekStartDate = (dayInWeek: number) => {
    const d = new Date(year, month, dayInWeek);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    return d;
  };

  return (
    <div className="h-full flex flex-col border-l border-t border-border">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-border">
        {WEEKDAYS.map((day, i) => (
          <div
            key={i}
            className="py-2 text-center text-xs tracking-wide text-muted-foreground border-r border-border"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div
        className="flex-1 grid grid-cols-7"
        style={{ gridTemplateRows: `repeat(${totalWeeks}, 1fr)` }}
      >
        {/* Empty cells */}
        {emptyDays.map((_, i) => (
          <div key={`empty-${i}`} className="border-r border-b border-border/50" />
        ))}

        {/* Day cells */}
        {days.map((day) => {
          const dayKey = `${day}`;
          const dayData = data[dayKey] || { note: "", dots: [] };
          const isToday = isCurrentMonth && day === currentDay;

          return (
            <MonthDayCell
              key={day}
              day={day}
              data={dayData}
              isToday={isToday}
              onUpdate={(newData) => onDayUpdate(day, newData)}
              selectedDotColor={selectedDotColor}
              onClick={() => onDayClick?.(day)}
              onWeekClick={() => onWeekClick?.(getWeekStartDate(day))}
            />
          );
        })}

        {/* Fill remaining cells */}
        {Array.from({
          length: (7 - ((firstDay + daysInMonth) % 7)) % 7,
        }).map((_, i) => (
          <div key={`fill-${i}`} className="border-r border-b border-border/50" />
        ))}
      </div>
    </div>
  );
}

interface MonthDayCellProps {
  day: number;
  data: DayData;
  isToday: boolean;
  onUpdate: (data: DayData) => void;
  selectedDotColor: DotColor;
  onClick?: () => void;
  onWeekClick?: () => void;
}

function MonthDayCell({
  day,
  data,
  isToday,
  onUpdate,
  selectedDotColor,
  onClick,
  onWeekClick,
}: MonthDayCellProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [noteValue, setNoteValue] = useState(data.note);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setNoteValue(data.note);
  }, [data.note]);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const handleClick = (e: React.MouseEvent) => {
    if (e.shiftKey) {
      // Shift+click to toggle dot
      const hasDot = data.dots.includes(selectedDotColor);
      const newDots = hasDot
        ? data.dots.filter((d) => d !== selectedDotColor)
        : [...data.dots, selectedDotColor];
      onUpdate({ ...data, dots: newDots });
    } else if (e.altKey || e.metaKey) {
      // Alt/Cmd+click to go to week view
      onWeekClick?.();
    } else {
      setIsEditing(true);
    }
  };

  const handleDoubleClick = () => {
    onClick?.();
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (noteValue !== data.note) {
      onUpdate({ ...data, note: noteValue });
    }
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={cn(
        "relative border-r border-b border-border p-1.5 cursor-pointer flex flex-col",
        "transition-colors duration-100",
        "hover:bg-accent/30",
        isToday && "bg-accent/50"
      )}
    >
      {/* Day number and dots row */}
      <div className="flex items-start justify-between mb-1">
        <span
          className={cn(
            "text-sm leading-none",
            isToday ? "text-foreground font-medium" : "text-muted-foreground"
          )}
        >
          {day}
        </span>
        {data.dots.length > 0 && (
          <div className="flex gap-0.5">
            {data.dots.slice(0, 5).map((dotColor, i) => (
              <div
                key={i}
                className={cn("w-1.5 h-1.5 rounded-full", DOT_COLORS[dotColor])}
              />
            ))}
          </div>
        )}
      </div>

      {/* Note */}
      {isEditing ? (
        <textarea
          ref={textareaRef}
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setNoteValue(data.note);
              setIsEditing(false);
            }
          }}
          className="flex-1 bg-transparent text-xs leading-tight text-foreground outline-none resize-none min-h-0"
        />
      ) : (
        <p className="flex-1 text-xs leading-tight text-foreground/80 overflow-hidden">
          {data.note}
        </p>
      )}
    </div>
  );
}
