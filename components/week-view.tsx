"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  type DayData,
  type TimeBlock,
  WEEKDAYS,
  MONTH_NAMES_SHORT,
  BLOCK_CATEGORIES,
  formatTime,
} from "./calendar-types";
import { QuickAddPopover } from "./quick-add-popover";
import { useSekkiMode } from "./sekki-context";
import { getSekki } from "./sekki-data";
import { SekkiSubheader } from "./sekki-badge";

// Timeline configuration
const START_HOUR = 8; // 8 AM
const END_HOUR = 23; // 11 PM (shows 8 AM - 10 PM)
const TOTAL_HOURS = END_HOUR - START_HOUR; // 15 hours

// Generate array of hours to display
const HOURS = Array.from({ length: END_HOUR - START_HOUR }, (_, i) => START_HOUR + i);

// Helper to convert time string (HH:MM) to percentage from top
function timeToPercent(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  // Clamp hours to visible range
  const clampedHours = Math.max(START_HOUR, Math.min(END_HOUR, hours));
  const totalMinutes = (clampedHours - START_HOUR) * 60 + (hours >= START_HOUR && hours < END_HOUR ? minutes : 0);
  return (totalMinutes / (TOTAL_HOURS * 60)) * 100;
}

// Helper to format hour for display
function formatHour(hour: number): string {
  if (hour === 0) return "12 AM";
  if (hour === 12) return "12 PM";
  if (hour < 12) return `${hour} AM`;
  return `${hour - 12} PM`;
}

interface WeekViewProps {
  weekStart: Date;
  getData: (year: number, month: number, day: number) => DayData;
  onUpdate: (year: number, month: number, day: number, data: DayData) => void;
  onDayClick?: (date: Date) => void;
  getBlocksForDate?: (date: Date) => TimeBlock[];
}

export function WeekView({
  weekStart,
  getData,
  onUpdate,
  onDayClick,
  getBlocksForDate,
}: WeekViewProps) {
  const { sekkiMode } = useSekkiMode();
  
  const today = new Date();
  const todayStart = new Date(today);
  todayStart.setHours(0, 0, 0, 0);

  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });
  
  // Get sekki for the middle of the week (Wednesday)
  const midWeekDate = new Date(weekStart);
  midWeekDate.setDate(midWeekDate.getDate() + 3);
  const weekSekki = getSekki(midWeekDate);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Sekki subheader - shown when mode is enabled */}
      {sekkiMode && (
        <div className="flex justify-center py-1.5 border-b border-border/50 bg-background">
          <SekkiSubheader sekki={weekSekki} />
        </div>
      )}
      
      {/* Fixed header row */}
      <div className="flex flex-shrink-0">
        {/* Time gutter header (empty spacer) */}
        <div className="w-12 flex-shrink-0 border-r border-border bg-background" />
        
        {/* Day headers */}
        {days.map((date, i) => {
          const isToday = date.getTime() === todayStart.getTime();

          return (
            <div
              key={i}
              className={cn(
                "flex-1 flex flex-col items-center py-1.5 border-r border-b border-border cursor-pointer min-w-0",
                "hover:bg-accent/30 transition-colors",
                isToday && "bg-accent/50"
              )}
              onDoubleClick={() => onDayClick?.(date)}
            >
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                {WEEKDAYS[date.getDay()]}
              </span>
              <span
                className={cn(
                  "w-7 h-7 flex items-center justify-center rounded-full text-base font-light",
                  isToday
                    ? "bg-foreground text-background"
                    : "text-foreground/80"
                )}
              >
                {date.getDate()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Timeline grid - no scroll, fills available space */}
      <div className="flex flex-1 min-h-0">
        {/* Time gutter */}
        <div className="w-12 flex-shrink-0 border-r border-border relative bg-background">
          {HOURS.map((hour, i) => (
            <div
              key={hour}
              className="absolute w-full flex items-start justify-end pr-1.5"
              style={{ top: `calc(${(i / TOTAL_HOURS) * 100}% - 6px)` }}
            >
              <span className="text-[9px] text-muted-foreground tabular-nums">
                {formatHour(hour)}
              </span>
            </div>
          ))}
        </div>

        {/* Day columns */}
        {days.map((date, i) => {
          const isToday = date.getTime() === todayStart.getTime();
          const dayData = getData(date.getFullYear(), date.getMonth(), date.getDate());
          const allBlocks = getBlocksForDate
            ? getBlocksForDate(date)
            : dayData.timeBlocks || [];

          return (
            <TimelineColumn
              key={i}
              date={date}
              data={dayData}
              allBlocks={allBlocks}
              isToday={isToday}
              currentTime={currentTime}
              onUpdate={(data) =>
                onUpdate(date.getFullYear(), date.getMonth(), date.getDate(), data)
              }
              onDayClick={onDayClick}
            />
          );
        })}
      </div>
    </div>
  );
}

interface TimelineColumnProps {
  date: Date;
  data: DayData;
  allBlocks: TimeBlock[];
  isToday: boolean;
  currentTime: Date;
  onUpdate: (data: DayData) => void;
  onDayClick?: (date: Date) => void;
}

function TimelineColumn({
  date,
  data,
  allBlocks,
  isToday,
  currentTime,
  onUpdate,
  onDayClick,
}: TimelineColumnProps) {
  // Calculate current time indicator position (only if within visible hours)
  const currentHour = currentTime.getHours();
  const showCurrentTime = isToday && currentHour >= START_HOUR && currentHour < END_HOUR;
  const currentTimePercent = showCurrentTime
    ? timeToPercent(
        `${currentTime.getHours().toString().padStart(2, "0")}:${currentTime.getMinutes().toString().padStart(2, "0")}`
      )
    : null;

  return (
    <div className="flex-1 border-r border-border relative min-w-0">
        {/* Hour grid lines */}
        {HOURS.map((hour, i) => (
          <div
            key={hour}
            className="absolute w-full border-t border-border"
            style={{ top: `${(i / TOTAL_HOURS) * 100}%` }}
          />
        ))}

        {/* Clickable areas for each hour slot - allows adding blocks */}
        {HOURS.map((hour, i) => (
          <QuickAddPopover
            key={`slot-${hour}`}
            date={date}
            data={data}
            onUpdate={onUpdate}
            onViewFullDay={() => onDayClick?.(date)}
            defaultStartTime={`${hour.toString().padStart(2, "0")}:00`}
          >
            <div
              className="absolute w-full cursor-pointer hover:bg-accent/10 transition-colors"
              style={{
                top: `${(i / TOTAL_HOURS) * 100}%`,
                height: `${(1 / TOTAL_HOURS) * 100}%`,
              }}
              onDoubleClick={() => onDayClick?.(date)}
            />
          </QuickAddPopover>
        ))}

        {/* Time blocks */}
        {allBlocks.map((block) => {
          const cat = BLOCK_CATEGORIES[block.category];
          const topPercent = timeToPercent(block.startTime);
          const bottomPercent = timeToPercent(block.endTime);
          const heightPercent = Math.max(bottomPercent - topPercent, 2); // Minimum 2%

          return (
            <QuickAddPopover
              key={block.id}
              date={date}
              data={data}
              onUpdate={onUpdate}
              onViewFullDay={() => onDayClick?.(date)}
              editBlockId={block.id}
            >
              <div
                className={cn(
                  "absolute left-0.5 right-0.5 rounded px-1 py-0.5 cursor-pointer overflow-hidden",
                  "border-l-2 shadow-sm",
                  "hover:opacity-90 hover:shadow transition-all",
                  cat?.bgClass || "bg-muted/80",
                  cat?.borderClass || "border-muted-foreground/50"
                )}
                style={{ 
                  top: `${topPercent}%`, 
                  height: `${heightPercent}%`,
                  minHeight: '18px'
                }}
              >
                <div className="text-[9px] font-medium truncate leading-tight">
                  {block.title || cat?.label || "Event"}
                </div>
                <div className="text-[8px] text-muted-foreground truncate">
                  {formatTime(block.startTime)}
                </div>
              </div>
            </QuickAddPopover>
          );
        })}

        {/* Current time indicator */}
        {currentTimePercent !== null && (
          <div
            className="absolute left-0 right-0 z-10 pointer-events-none"
            style={{ top: `${currentTimePercent}%` }}
          >
            <div className="relative flex items-center">
              <div className="w-2 h-2 rounded-full bg-dot-5 -ml-1" />
              <div className="flex-1 h-[2px] bg-dot-5" />
            </div>
          </div>
        )}
      </div>
  );
}
