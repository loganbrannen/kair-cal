"use client";

import { DayCell } from "./day-cell";
import {
  type DayData,
  type DotColor,
  MONTH_NAMES_SHORT,
  getDaysInMonth,
  getFirstDayOfMonth,
} from "./calendar-types";

const MONTH_NAMES = MONTH_NAMES_SHORT;

interface MonthGridProps {
  month: number;
  year: number;
  data: Record<string, DayData>;
  onDayUpdate: (day: number, data: DayData) => void;
  selectedDotColor: DotColor;
  onDayClick?: (day: number) => void;
}

export function MonthGrid({
  month,
  year,
  data,
  onDayUpdate,
  selectedDotColor,
  onDayClick,
}: MonthGridProps) {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === month && today.getFullYear() === year;
  const currentDay = today.getDate();

  const emptyDays = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Always use 6 rows for consistent height across all months
  const totalWeeks = 6;

  return (
    <div className="flex flex-col border-r border-b border-border">
      {/* Month header - minimal */}
      <div className="h-4 flex items-center px-1 border-b border-border flex-shrink-0">
        <span className="text-[9px] font-medium tracking-wider text-muted-foreground">
          {MONTH_NAMES_SHORT[month]}
        </span>
      </div>

      {/* Days grid - fixed 6 rows for consistency */}
      <div 
        className="flex-1 grid grid-cols-7"
        style={{ gridTemplateRows: `repeat(${totalWeeks}, 1fr)` }}
      >
        {/* Empty cells for alignment */}
        {emptyDays.map((_, i) => (
          <div key={`empty-${i}`} className="border-r border-b border-border/50" />
        ))}

        {/* Day cells */}
        {days.map((day) => {
          const dayKey = `${day}`;
          const dayData = data[dayKey] || { note: "", dots: [] };

          return (
            <DayCell
              key={day}
              day={day}
              month={month}
              year={year}
              data={dayData}
              isToday={isCurrentMonth && day === currentDay}
              onUpdate={(newData) => onDayUpdate(day, newData)}
              selectedDotColor={selectedDotColor}
              onDayClick={() => onDayClick?.(day)}
            />
          );
        })}

        {/* Fill remaining cells to complete 6 rows (42 total cells) */}
        {Array.from({
          length: 42 - firstDay - daysInMonth,
        }).map((_, i) => (
          <div
            key={`fill-${i}`}
            className="border-r border-b border-border/50"
          />
        ))}
      </div>
    </div>
  );
}
