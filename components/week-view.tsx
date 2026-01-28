"use client";

import React from "react"

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  type DayData,
  type DotColor,
  type DayColorCode,
  type TimeBlock,
  WEEKDAYS,
  MONTH_NAMES_SHORT,
  BLOCK_CATEGORIES,
  formatTimeRange,
  DAY_COLORS,
} from "./calendar-types";
import { DayColorPicker } from "./day-color-picker";
import { QuickAddPopover } from "./quick-add-popover";

interface WeekViewProps {
  weekStart: Date;
  getData: (year: number, month: number, day: number) => DayData;
  onUpdate: (year: number, month: number, day: number, data: DayData) => void;
  selectedDotColor: DotColor;
  onDayClick?: (date: Date) => void;
  getBlocksForDate?: (date: Date) => TimeBlock[];
}

export function WeekView({
  weekStart,
  getData,
  onUpdate,
  selectedDotColor,
  onDayClick,
  getBlocksForDate,
}: WeekViewProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  return (
    <div className="h-full flex">
      {days.map((date, i) => {
        const isToday = date.getTime() === today.getTime();
        const dayData = getData(date.getFullYear(), date.getMonth(), date.getDate());
        // Get all blocks including recurring ones
        const allBlocks = getBlocksForDate ? getBlocksForDate(date) : (dayData.timeBlocks || []);

        return (
          <WeekDayColumn
            key={i}
            date={date}
            data={dayData}
            allBlocks={allBlocks}
            isToday={isToday}
            onUpdate={(data) => onUpdate(date.getFullYear(), date.getMonth(), date.getDate(), data)}
            selectedDotColor={selectedDotColor}
            onDayClick={onDayClick}
          />
        );
      })}
    </div>
  );
}

interface WeekDayColumnProps {
  date: Date;
  data: DayData;
  allBlocks: TimeBlock[]; // All blocks including recurring
  isToday: boolean;
  onUpdate: (data: DayData) => void;
  selectedDotColor: DotColor;
  onDayClick?: (date: Date) => void;
}

function WeekDayColumn({
  date,
  data,
  allBlocks,
  isToday,
  onDayClick,
  onUpdate,
}: WeekDayColumnProps) {
  const [colorPickerPos, setColorPickerPos] = useState<{ x: number; y: number } | null>(null);
  
  // Use allBlocks which includes recurring blocks (already sorted)
  const sortedBlocks = allBlocks;
  
  // Get day color info
  const dayColorInfo = data.dayColor ? DAY_COLORS[data.dayColor] : null;

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setColorPickerPos({ x: e.clientX, y: e.clientY });
  };

  const handleColorChange = (color: DayColorCode) => {
    onUpdate({ ...data, dayColor: color });
    setColorPickerPos(null);
  };

  // Double-click navigates to day view
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDayClick?.(date);
  };

  // Day header content (for adding new blocks)
  const dayHeader = (
    <div
      onDoubleClick={handleDoubleClick}
      className={cn(
        "flex flex-col items-center py-2 border-b border-border cursor-pointer flex-shrink-0",
        "hover:bg-accent/30 transition-colors",
        !dayColorInfo && isToday && "bg-accent/50"
      )}
    >
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {WEEKDAYS[date.getDay()]}
      </span>
      <span className={cn(
        "text-lg font-light",
        isToday ? "text-foreground" : "text-foreground/80"
      )}>
        {date.getDate()}
      </span>
      <span className="text-[9px] text-muted-foreground">
        {MONTH_NAMES_SHORT[date.getMonth()]}
      </span>
    </div>
  );

  return (
    <>
      <div 
        onContextMenu={handleContextMenu}
        className={cn(
          "flex-1 flex flex-col border-r border-border min-w-0",
          dayColorInfo && dayColorInfo.bgClass
        )}
      >
        {/* Day header - wrapped in popover for quick add */}
        <QuickAddPopover
          date={date}
          data={data}
          onUpdate={onUpdate}
          onViewFullDay={() => onDayClick?.(date)}
        >
          {dayHeader}
        </QuickAddPopover>

        {/* Time blocks as cards */}
        <div className="flex-1 p-1.5 overflow-y-auto flex flex-col gap-1">
          {/* Existing blocks */}
          {sortedBlocks.map((block) => {
            const cat = BLOCK_CATEGORIES[block.category];
            // Block card content
            const blockCard = (
              <div
                className={cn(
                  "px-2 py-1.5 rounded border-l-2 cursor-pointer",
                  "hover:opacity-80 transition-opacity",
                  cat?.bgClass || "bg-muted/50",
                  cat?.borderClass || "border-muted-foreground/50"
                )}
              >
                <div className="text-[10px] font-medium truncate">
                  {block.title || cat?.label || "Event"}
                </div>
                <div className="text-[9px] text-muted-foreground">
                  {formatTimeRange(block.startTime, block.endTime)}
                </div>
              </div>
            );

            // Wrap each block in popover for editing
            return (
              <QuickAddPopover
                key={block.id}
                date={date}
                data={data}
                onUpdate={onUpdate}
                onViewFullDay={() => onDayClick?.(date)}
                editBlockId={block.id}
              >
                {blockCard}
              </QuickAddPopover>
            );
          })}
          
          {/* Always show Add button - fills remaining space when blocks exist, full space when empty */}
          <QuickAddPopover
            date={date}
            data={data}
            onUpdate={onUpdate}
            onViewFullDay={() => onDayClick?.(date)}
          >
            <div 
              onDoubleClick={handleDoubleClick}
              className={cn(
                "flex items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors rounded",
                sortedBlocks.length > 0 ? "py-2" : "flex-1"
              )}
            >
              <span className="text-[10px] text-muted-foreground/50">+ Add</span>
            </div>
          </QuickAddPopover>
        </div>
      </div>
      
      {colorPickerPos && (
        <DayColorPicker
          currentColor={data.dayColor ?? null}
          onColorChange={handleColorChange}
          onClose={() => setColorPickerPos(null)}
          position={colorPickerPos}
          dateLabel={`${MONTH_NAMES_SHORT[date.getMonth()]} ${date.getDate()}`}
        />
      )}
    </>
  );
}
