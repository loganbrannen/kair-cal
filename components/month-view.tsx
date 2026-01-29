"use client";

import React from "react";

import { cn } from "@/lib/utils";
import {
  type DayData,
  type DotColor,
  type CalendarData,
  type TimeBlock,
  WEEKDAYS,
  getDaysInMonth,
  getFirstDayOfMonth,
  isToday,
  BLOCK_CATEGORIES,
  formatTimeRange,
} from "./calendar-types";
import { QuickAddPopover } from "./quick-add-popover";

interface MonthViewProps {
  year: number;
  month: number;
  data: CalendarData;
  onDayUpdate: (month: number, day: number, data: DayData) => void;
  selectedDotColor: DotColor;
  onDayClick: (day: number) => void;
  getBlocksForDate?: (date: Date) => TimeBlock[];
}

function DayCellLarge({
  day,
  month,
  year,
  data,
  allBlocks,
  isCurrentDay,
  onUpdate,
  onDayClick,
}: {
  day: number;
  month: number;
  year: number;
  data: DayData;
  allBlocks: TimeBlock[];
  isCurrentDay: boolean;
  onUpdate: (data: DayData) => void;
  onDayClick: () => void;
}) {
  // Use allBlocks which includes recurring blocks (already sorted)
  const visibleBlocks = allBlocks.slice(0, 3);
  const moreCount = allBlocks.length - 3;

  // Create date object for the popover
  const date = new Date(year, month, day);

  // Double-click navigates to day view
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDayClick();
  };

  const cellContent = (
      <div
      onDoubleClick={handleDoubleClick}
        className={cn(
        "relative border-r border-b border-border p-1 cursor-pointer min-h-0 flex flex-col gap-0.5 overflow-hidden h-full",
          "transition-colors duration-100",
          "hover:bg-accent/30",
          isCurrentDay && "bg-accent/50"
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
            // Format start time (e.g., "9a" or "2p")
            const [h] = block.startTime.split(":").map(Number);
            const timeStr = h === 0 ? "12a" : h === 12 ? "12p" : h > 12 ? `${h - 12}p` : `${h}a`;
            // Fallback for legacy categories
            if (!cat) {
              return (
                <div
                  key={block.id}
                  className="flex items-center gap-1 px-1 py-0.5 rounded-sm bg-muted/50 text-[8px] leading-tight truncate"
                  title={`${block.title} (${formatTimeRange(block.startTime, block.endTime)})`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                  <span className="text-muted-foreground flex-shrink-0">{timeStr}</span>
                  <span className="font-medium truncate">{block.title}</span>
                </div>
              );
            }
            return (
              <div
                key={block.id}
                className={cn(
                  "flex items-center gap-1 px-1 py-0.5 rounded-sm text-[8px] leading-tight",
                  cat.bgClass
                )}
                title={`${block.title} (${formatTimeRange(block.startTime, block.endTime)})`}
              >
                <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", cat.bgClassSolid)} />
                <span className="text-muted-foreground flex-shrink-0">{timeStr}</span>
                <span className="font-medium truncate">{block.title || cat.label}</span>
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

export function MonthView({
  year,
  month,
  data,
  onDayUpdate,
  selectedDotColor,
  onDayClick,
  getBlocksForDate,
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
    <div className="h-full flex flex-col">
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
          <div key={`empty-${i}`} className="border-r border-b border-border" />
        ))}

        {/* Day cells */}
        {days.map((d) => {
          const dayKey = `${d}`;
          const dayData = monthData[dayKey] || { note: "", dots: [] };
          const dateObj = new Date(year, month, d);
          // Get all blocks including recurring ones
          const allBlocks = getBlocksForDate ? getBlocksForDate(dateObj) : (dayData.timeBlocks || []);

          return (
            <DayCellLarge
              key={d}
              day={d}
              month={month}
              year={year}
              data={dayData}
              allBlocks={allBlocks}
              isCurrentDay={isToday(year, month, d)}
              onUpdate={(newData) => onDayUpdate(month, d, newData)}
              onDayClick={() => onDayClick(d)}
            />
          );
        })}

        {/* Fill remaining cells */}
        {Array.from({ length: remainingCells }).map((_, i) => (
          <div key={`fill-${i}`} className="border-r border-b border-border" />
        ))}
      </div>
    </div>
  );
}
