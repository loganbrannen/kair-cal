"use client";

import { useState, useCallback } from "react";
import { MonthGrid } from "./month-grid";
import { MonthView } from "./month-view";
import { WeekView } from "./week-view";
import { DayView } from "./day-view";
import { ViewSwitcher } from "./view-switcher";
import { ThemeToggle } from "./theme-toggle";
import { OmniBar, type CalendarAction } from "./omni-bar";
import {
  type DayData,
  type DotColor,
  type CalendarData,
  type ViewMode,
  MONTH_NAMES,
  MONTH_NAMES_SHORT,
  getWeekStart,
} from "./calendar-types";

const STORAGE_KEY = "field-memo-data";

// Default dot color for legacy compatibility (dots are being phased out in favor of time blocks)
const DEFAULT_DOT_COLOR: DotColor = 1;

function loadData(): CalendarData {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveData(data: CalendarData) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage full or unavailable
  }
}

export function YearCalendar() {
  const today = new Date();
  const [viewMode, setViewMode] = useState<ViewMode>("year");
  const [year, setYear] = useState(() => today.getFullYear());
  const [month, setMonth] = useState(() => today.getMonth());
  const [day, setDay] = useState(() => today.getDate());
  const [data, setData] = useState<CalendarData>(() => loadData());

  const handleDayUpdate = useCallback(
    (month: number, day: number, dayData: DayData) => {
      setData((prev) => {
        const monthKey = `${year}-${month}`;
        const newData = {
          ...prev,
          [monthKey]: {
            ...prev[monthKey],
            [`${day}`]: dayData,
          },
        };
        saveData(newData);
        return newData;
      });
    },
    [year]
  );

  const months = Array.from({ length: 12 }, (_, i) => i);

  // Navigation helpers
  const navigatePrev = () => {
    if (viewMode === "year") {
      setYear((y) => y - 1);
    } else if (viewMode === "month") {
      if (month === 0) {
        setMonth(11);
        setYear((y) => y - 1);
      } else {
        setMonth((m) => m - 1);
      }
    } else if (viewMode === "week") {
      const current = new Date(year, month, day);
      current.setDate(current.getDate() - 7);
      setYear(current.getFullYear());
      setMonth(current.getMonth());
      setDay(current.getDate());
    } else if (viewMode === "day") {
      const current = new Date(year, month, day);
      current.setDate(current.getDate() - 1);
      setYear(current.getFullYear());
      setMonth(current.getMonth());
      setDay(current.getDate());
    }
  };

  const navigateNext = () => {
    if (viewMode === "year") {
      setYear((y) => y + 1);
    } else if (viewMode === "month") {
      if (month === 11) {
        setMonth(0);
        setYear((y) => y + 1);
      } else {
        setMonth((m) => m + 1);
      }
    } else if (viewMode === "week") {
      const current = new Date(year, month, day);
      current.setDate(current.getDate() + 7);
      setYear(current.getFullYear());
      setMonth(current.getMonth());
      setDay(current.getDate());
    } else if (viewMode === "day") {
      const current = new Date(year, month, day);
      current.setDate(current.getDate() + 1);
      setYear(current.getFullYear());
      setMonth(current.getMonth());
      setDay(current.getDate());
    }
  };

  const goToToday = () => {
    const now = new Date();
    setYear(now.getFullYear());
    setMonth(now.getMonth());
    setDay(now.getDate());
  };

  const getDateLabel = () => {
    if (viewMode === "year") return `${year}`;
    if (viewMode === "month") return `${MONTH_NAMES[month]} ${year}`;
    if (viewMode === "week") {
      const weekStart = getWeekStart(new Date(year, month, day));
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);
      const startMonth = MONTH_NAMES_SHORT[weekStart.getMonth()];
      const endMonth = MONTH_NAMES_SHORT[weekEnd.getMonth()];
      if (startMonth === endMonth) {
        return `${startMonth} ${weekStart.getDate()}–${weekEnd.getDate()}, ${year}`;
      }
      return `${startMonth} ${weekStart.getDate()} – ${endMonth} ${weekEnd.getDate()}`;
    }
    return `${MONTH_NAMES[month]} ${day}, ${year}`;
  };

  const getData = (y: number, m: number, d: number): DayData => {
    const monthKey = `${y}-${m}`;
    return data[monthKey]?.[`${d}`] || { note: "", dots: [] };
  };

  const handleUpdate = (y: number, m: number, d: number, dayData: DayData) => {
    setData((prev) => {
      const monthKey = `${y}-${m}`;
      const newData = {
        ...prev,
        [monthKey]: {
          ...prev[monthKey],
          [`${d}`]: dayData,
        },
      };
      saveData(newData);
      return newData;
    });
  };

  const handleDayClick = (date: Date) => {
    setYear(date.getFullYear());
    setMonth(date.getMonth());
    setDay(date.getDate());
    setViewMode("day");
  };

  const handleOmniAction = useCallback(
    (action: CalendarAction) => {
      switch (action.type) {
        case "navigate":
          if (action.payload.date) {
            setYear(action.payload.date.getFullYear());
            setMonth(action.payload.date.getMonth());
            setDay(action.payload.date.getDate());
          }
          break;
        case "set_view":
          if (action.payload.view) {
            setViewMode(action.payload.view);
          }
          break;
        case "add_note":
          if (action.payload.date && action.payload.note) {
            const d = action.payload.date;
            const y = d.getFullYear();
            const m = d.getMonth();
            const dayNum = d.getDate();
            const existing = getData(y, m, dayNum);
            handleUpdate(y, m, dayNum, {
              ...existing,
              note: action.payload.note,
            });
            // Navigate to the day
            setYear(y);
            setMonth(m);
            setDay(dayNum);
          }
          break;
        case "add_dot":
          if (action.payload.date && action.payload.dotColor) {
            const d = action.payload.date;
            const y = d.getFullYear();
            const m = d.getMonth();
            const dayNum = d.getDate();
            const existing = getData(y, m, dayNum);
            const dots = [...existing.dots];
            if (!dots.includes(action.payload.dotColor)) {
              dots.push(action.payload.dotColor);
            }
            setData((prev) => {
              const monthKey = `${y}-${m}`;
              const newData = {
                ...prev,
                [monthKey]: {
                  ...prev[monthKey],
                  [`${dayNum}`]: { ...existing, dots },
                },
              };
              saveData(newData);
              return newData;
            });
          }
          break;
      }
    },
    [year, month, day, setData]
  );

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      {/* Header */}
      <header className="flex-shrink-0 border-b border-border">
        <div className="px-2 sm:px-3 py-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <h1 className="text-[8px] sm:text-[10px] font-medium tracking-widest uppercase text-muted-foreground flex-shrink-0">
              KAIR° <span className="hidden sm:inline">(CAL)</span>
            </h1>
            
            <ViewSwitcher view={viewMode} onViewChange={setViewMode} />
            
            <div className="flex items-center gap-0.5 sm:gap-1 min-w-0">
              <button
                type="button"
                onClick={navigatePrev}
                className="w-6 h-6 sm:w-5 sm:h-5 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              >
                <span className="text-xs">&larr;</span>
              </button>
              <button
                type="button"
                onClick={goToToday}
                className="text-[9px] sm:text-[10px] font-medium tracking-wider text-foreground min-w-0 sm:min-w-[8rem] text-center hover:text-muted-foreground transition-colors truncate px-1"
              >
                {getDateLabel()}
              </button>
              <button
                type="button"
                onClick={navigateNext}
                className="w-6 h-6 sm:w-5 sm:h-5 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              >
                <span className="text-xs">&rarr;</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <p className="text-[8px] text-muted-foreground hidden lg:block">
              Click to open day
            </p>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0 overflow-hidden">
        {viewMode === "year" && (
          <div className="h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-l border-t border-border overflow-y-auto">
            {months.map((m) => {
              const monthKey = `${year}-${m}`;
              const monthData = data[monthKey] || {};

              return (
                <MonthGrid
                  key={m}
                  month={m}
                  year={year}
                  data={monthData}
                  onDayUpdate={(d, dayData) => handleDayUpdate(m, d, dayData)}
                  selectedDotColor={DEFAULT_DOT_COLOR}
                  onDayClick={(d) => handleDayClick(new Date(year, m, d))}
                />
              );
            })}
          </div>
        )}

        {viewMode === "month" && (
          <MonthView
            year={year}
            month={month}
            data={data}
            onDayUpdate={handleDayUpdate}
            selectedDotColor={DEFAULT_DOT_COLOR}
            onDayClick={(d) => handleDayClick(new Date(year, month, d))}
          />
        )}

        {viewMode === "week" && (
          <WeekView
            weekStart={getWeekStart(new Date(year, month, day))}
            getData={getData}
            onUpdate={handleUpdate}
            selectedDotColor={DEFAULT_DOT_COLOR}
            onDayClick={handleDayClick}
          />
        )}

        {viewMode === "day" && (
          <DayView
            date={new Date(year, month, day)}
            data={getData(year, month, day)}
            onUpdate={(dayData) => handleUpdate(year, month, day, dayData)}
          />
        )}
      </main>

      {/* Floating Omni Bar */}
      <OmniBar onAction={handleOmniAction} />
    </div>
  );
}
