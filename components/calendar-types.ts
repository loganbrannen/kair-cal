export type DotColor = 1 | 2 | 3 | 4 | 5 | 6 | 7;

// Day color codes - uses the same 7-color system as markers/dots
export type DayColorCode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | null;

export const DAY_COLORS: Record<Exclude<DayColorCode, null>, {
  label: string;
  description: string;
  bgClass: string;
  bgClassSolid: string;
  borderClass: string;
}> = {
  1: {
    label: "Focus",
    description: "Deep work, important projects",
    bgClass: "bg-dot-1/15",
    bgClassSolid: "bg-dot-1",
    borderClass: "border-dot-1/50",
  },
  2: {
    label: "Joy",
    description: "Celebrations, fun, special moments",
    bgClass: "bg-dot-2/20",
    bgClassSolid: "bg-dot-2",
    borderClass: "border-dot-2/50",
  },
  3: {
    label: "Health",
    description: "Workouts, recovery, wellness",
    bgClass: "bg-dot-3/15",
    bgClassSolid: "bg-dot-3",
    borderClass: "border-dot-3/50",
  },
  4: {
    label: "Rest",
    description: "Vacation, downtime, recharge",
    bgClass: "bg-dot-4/20",
    bgClassSolid: "bg-dot-4",
    borderClass: "border-dot-4/50",
  },
  5: {
    label: "Social",
    description: "Family, friends, relationships",
    bgClass: "bg-dot-5/15",
    bgClassSolid: "bg-dot-5",
    borderClass: "border-dot-5/50",
  },
  6: {
    label: "Create",
    description: "Making, building, creative work",
    bgClass: "bg-dot-6/15",
    bgClassSolid: "bg-dot-6",
    borderClass: "border-dot-6/50",
  },
  7: {
    label: "Review",
    description: "Planning, reflection, admin",
    bgClass: "bg-dot-7/20",
    bgClassSolid: "bg-dot-7",
    borderClass: "border-dot-7/50",
  },
};

// Consolidated: time block categories now use the 7-color system
export type TimeBlockCategory = "focus" | "joy" | "health" | "rest" | "social" | "create" | "review";

export interface TimeBlock {
  id: string;
  startTime: string; // HH:MM format
  endTime: string;   // HH:MM format
  title: string;
  category: TimeBlockCategory;
}

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface BulletItem {
  id: string;
  text: string;
}

export interface LinkData {
  url: string;
  title?: string;
  description?: string;
}

export interface CodeData {
  language: string;
  code: string;
}

export interface ContentBlock {
  id: string;
  type: "text" | "checklist" | "bullets" | "code" | "link" | "divider" | "heading";
  content: string | ChecklistItem[] | BulletItem[] | CodeData | LinkData;
}

// Duration presets in minutes for quick time block creation
export const DURATION_PRESETS = [
  { label: "15m", minutes: 15 },
  { label: "30m", minutes: 30 },
  { label: "45m", minutes: 45 },
  { label: "1h", minutes: 60 },
  { label: "1.5h", minutes: 90 },
  { label: "2h", minutes: 120 },
];

// Helper to add minutes to a time string
export function addMinutesToTime(time: string, minutes: number): string {
  const [h, m] = time.split(':').map(Number);
  const totalMins = h * 60 + m + minutes;
  const newH = Math.floor(totalMins / 60) % 24;
  const newM = totalMins % 60;
  return `${newH.toString().padStart(2, '0')}:${newM.toString().padStart(2, '0')}`;
}

export interface DayData {
  note: string;
  dots: DotColor[];
  timeBlocks?: TimeBlock[];
  contentBlocks?: ContentBlock[];
  dayColor?: DayColorCode;
}

export type ViewMode = "year" | "month" | "week" | "day";

export type CalendarData = Record<string, Record<string, DayData>>;

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTH_NAMES_SHORT = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const WEEKDAYS_SHORT = ["S", "M", "T", "W", "T", "F", "S"];

export const DOT_COLORS: Record<DotColor, string> = {
  1: "bg-dot-1",
  2: "bg-dot-2",
  3: "bg-dot-3",
  4: "bg-dot-4",
  5: "bg-dot-5",
  6: "bg-dot-6",
  7: "bg-dot-7",
};

// Meaningful marker system - each color represents a utility
export const DOT_LABELS: Record<DotColor, { name: string; description: string }> = {
  1: { name: "Focus", description: "Deep work sessions" },
  2: { name: "Joy", description: "Moments of happiness" },
  3: { name: "Health", description: "Wellness & exercise" },
  4: { name: "Rest", description: "Recovery & sleep" },
  5: { name: "Social", description: "Time with others" },
  6: { name: "Create", description: "Making & building" },
  7: { name: "Review", description: "Reflection & planning" },
};

// Time block categories mapped to the 7-color system
export const BLOCK_CATEGORIES: Record<TimeBlockCategory, { 
  label: string; 
  color: DotColor;
  bgClass: string;
  borderClass: string;
  textClass: string;
}> = {
  focus: { label: "Focus", color: 1, bgClass: "bg-dot-1/20", borderClass: "border-dot-1", textClass: "text-dot-1" },
  joy: { label: "Joy", color: 2, bgClass: "bg-dot-2/30", borderClass: "border-dot-2", textClass: "text-dot-2" },
  health: { label: "Health", color: 3, bgClass: "bg-dot-3/20", borderClass: "border-dot-3", textClass: "text-dot-3" },
  rest: { label: "Rest", color: 4, bgClass: "bg-dot-4/20", borderClass: "border-dot-4", textClass: "text-dot-4" },
  social: { label: "Social", color: 5, bgClass: "bg-dot-5/20", borderClass: "border-dot-5", textClass: "text-dot-5" },
  create: { label: "Create", color: 6, bgClass: "bg-dot-6/20", borderClass: "border-dot-6", textClass: "text-dot-6" },
  review: { label: "Review", color: 7, bgClass: "bg-dot-7/20", borderClass: "border-dot-7", textClass: "text-dot-7" },
};

// Helper to format time for display
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const ampm = hours >= 12 ? 'pm' : 'am';
  const h = hours % 12 || 12;
  return minutes === 0 ? `${h}${ampm}` : `${h}:${minutes.toString().padStart(2, '0')}${ampm}`;
}

// Helper to format time range
export function formatTimeRange(start: string, end: string): string {
  return `${formatTime(start)}-${formatTime(end)}`;
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(month: number, year: number): number {
  return new Date(year, month, 1).getDay();
}

export function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function formatDateKey(year: number, month: number): string {
  return `${year}-${month}`;
}

export function isToday(year: number, month: number, day: number): boolean {
  const today = new Date();
  return (
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day
  );
}

export function getWeekDates(year: number, month: number, day: number): Date[] {
  const date = new Date(year, month, day);
  const dayOfWeek = date.getDay();
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - dayOfWeek);
  
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });
}
