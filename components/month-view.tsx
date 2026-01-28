"use client";

import React from "react";

import { cn } from "@/lib/utils";
import {
  type DayData,
  type DotColor,
  type CalendarData,
  type DayColorCode,
  WEEKDAYS,
  getDaysInMonth,
  getFirstDayOfMonth,
  isToday,
  BLOCK_CATEGORIES,
  formatTimeRange,
  DOT_COLORS,
  DAY_COLORS,
  MONTH_NAMES_SHORT,
} from "./calendar-types";
import { useState } from "react";
import { DayColorPicker } from "./day-color-picker";
import { QuickAddPopover } from "./quick-add-popover";

interface MonthViewProps {
  year: number;
  month: number;
  data: CalendarData;
  onDayUpdate: (month: number, day: number, data: DayData) => void;
  selectedDotColor: DotColor;
  onDayClick: (day: number) => void;
}

function DayCellLarge({
  day,
  month,
  year,
  data,
  isCurrentDay,
  onUpdate,
  selectedDotColor,
  onDayClick,
}: {
  day: number;
  month: number;
  year: number;
  data: DayData;
  isCurrentDay: boolean;
  onUpdate: (data: DayData) => void;
  selectedDotColor: DotColor;
  onDayClick: () => void;
}) {
  const [colorPickerPos, setColorPickerPos] = useState<{ x: number; y: number } | null>(null);

  const timeBlocks = data.timeBlocks || [];
  const sortedBlocks = [...timeBlocks].sort((a, b) => a.startTime.localeCompare(b.startTime));
  const visibleBlocks = sortedBlocks.slice(0, 3);
  const moreCount = timeBlocks.length - 3;

  // Get day color info
  const dayColorInfo = data.dayColor ? DAY_COLORS[data.dayColor] : null;

  // Create date object for the popover
  const date = new Date(year, month, day);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setColorPickerPos({ x: e.clientX, y: e.clientY });
  };

  const handleColorChange = (color: DayColorCode) => {
    onUpdate({ ...data, dayColor: color });
    setColorPickerPos(null);
  };

  const cellContent = (
    <div
      onContextMenu={handleContextMenu}
      className={cn(
        "relative border-r border-b border-border p-1 cursor-pointer min-h-0 flex flex-col gap-0.5 overflow-hidden h-full",
        "transition-colors duration-100",
        !dayColorInfo && "hover:bg-accent/30",
        !dayColorInfo && isCurrentDay && "bg-accent/50",
        dayColorInfo && dayColorInfo.bgClass,
        dayColorInfo && "hover:opacity-80"
      )}
    >
      {/* Day number */}
      <span
        className={cn(
          "text-[10px] leading-none flex-shrink-0",
          isCurrentDay ? "text-foreground font-medium" : "text-muted-foreground"
        )}
      >
        {day}
      </span>

      {/* Time blocks as cards */}
      <div className="flex-1 flex flex-col gap-0.5 min-h-0 overflow-hidden">
        {visibleBlocks.map((block) => {
          const cat = BLOCK_CATEGORIES[block.category];
          // Fallback for legacy categories
          if (!cat) {
            return (
              <div
                key={block.id}
                className="px-1 py-0.5 rounded-sm border-l-2 border-muted-foreground/50 bg-muted/50 text-[8px] leading-tight truncate"
                title={`${block.title} (${formatTimeRange(block.startTime, block.endTime)})`}
              >
                <span className="font-medium">{block.title}</span>
              </div>
            );
          }
          return (
            <div
              key={block.id}
              className={cn(
                "px-1 py-0.5 rounded-sm border-l-2 text-[8px] leading-tight truncate",
                cat.bgClass,
                cat.borderClass
              )}
              title={`${block.title} (${formatTimeRange(block.startTime, block.endTime)})`}
            >
              <span className="font-medium">{block.title || cat.label}</span>
            </div>
          );
        })}
        {moreCount > 0 && (
          <span className="text-[8px] text-muted-foreground">+{moreCount} more</span>
        )}
      </div>
    </div>
  );

  return (
    <>
      <QuickAddPopover
        date={date}
        data={data}
        onUpdate={onUpdate}
        onViewFullDay={onDayClick}
      >
        {cellContent}
      </QuickAddPopover>
      
      {colorPickerPos && (
        <DayColorPicker
          currentColor={data.dayColor ?? null}
          onColorChange={handleColorChange}
          onClose={() => setColorPickerPos(null)}
          position={colorPickerPos}
          dateLabel={`${MONTH_NAMES_SHORT[month]} ${day}`}
        />
      )}
    </>
  );
}

export function MonthView({
  year,
  month,
  data,
  onDayUpdate,
  selectedDotColor,
  onDayClick,
}: MonthViewProps) {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const emptyDays = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const totalCells = firstDay + daysInMonth;
  const remainingCells = (7 - (totalCells % 7)) % 7;
  const totalWeeks = Math.ceil(totalCells / 7);

  const monthKey = `${year}-${month}`;
  const monthData = data[monthKey] || {};

  return (
    <div className="h-full flex flex-col border-l border-t border-border">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-border">
        {WEEKDAYS.map((day, i) => (
          <div
            key={i}
            className="h-6 flex items-center justify-center text-[10px] font-medium text-muted-foreground border-r border-border last:border-r-0"
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
          const dayData = monthData[dayKey] || { note: "", dots: [] };

          return (
            <DayCellLarge
              key={day}
              day={day}
              month={month}
              year={year}
              data={dayData}
              isCurrentDay={isToday(year, month, day)}
              onUpdate={(newData) => onDayUpdate(month, day, newData)}
              selectedDotColor={selectedDotColor}
              onDayClick={() => onDayClick(day)}
            />
          );
        })}

        {/* Fill remaining cells */}
        {Array.from({ length: remainingCells }).map((_, i) => (
          <div key={`fill-${i}`} className="border-r border-b border-border/50" />
        ))}
      </div>
    </div>
  );
}
