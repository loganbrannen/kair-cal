(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/day-cell.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/day-cell.tsx'\n\nExpected ',', got '{'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/components/calendar-types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BLOCK_CATEGORIES",
    ()=>BLOCK_CATEGORIES,
    "DAY_COLORS",
    ()=>DAY_COLORS,
    "DOT_COLORS",
    ()=>DOT_COLORS,
    "DOT_LABELS",
    ()=>DOT_LABELS,
    "DURATION_PRESETS",
    ()=>DURATION_PRESETS,
    "MONTH_NAMES",
    ()=>MONTH_NAMES,
    "MONTH_NAMES_SHORT",
    ()=>MONTH_NAMES_SHORT,
    "WEEKDAYS",
    ()=>WEEKDAYS,
    "WEEKDAYS_SHORT",
    ()=>WEEKDAYS_SHORT,
    "addMinutesToTime",
    ()=>addMinutesToTime,
    "formatDateKey",
    ()=>formatDateKey,
    "formatTime",
    ()=>formatTime,
    "formatTimeRange",
    ()=>formatTimeRange,
    "generateId",
    ()=>generateId,
    "getDaysInMonth",
    ()=>getDaysInMonth,
    "getFirstDayOfMonth",
    ()=>getFirstDayOfMonth,
    "getWeekDates",
    ()=>getWeekDates,
    "getWeekStart",
    ()=>getWeekStart,
    "isToday",
    ()=>isToday
]);
const DAY_COLORS = {
    1: {
        label: "Focus",
        description: "Deep work, important projects",
        bgClass: "bg-dot-1/15",
        bgClassSolid: "bg-dot-1",
        borderClass: "border-dot-1/50"
    },
    2: {
        label: "Joy",
        description: "Celebrations, fun, special moments",
        bgClass: "bg-dot-2/20",
        bgClassSolid: "bg-dot-2",
        borderClass: "border-dot-2/50"
    },
    3: {
        label: "Health",
        description: "Workouts, recovery, wellness",
        bgClass: "bg-dot-3/15",
        bgClassSolid: "bg-dot-3",
        borderClass: "border-dot-3/50"
    },
    4: {
        label: "Rest",
        description: "Vacation, downtime, recharge",
        bgClass: "bg-dot-4/20",
        bgClassSolid: "bg-dot-4",
        borderClass: "border-dot-4/50"
    },
    5: {
        label: "Social",
        description: "Family, friends, relationships",
        bgClass: "bg-dot-5/15",
        bgClassSolid: "bg-dot-5",
        borderClass: "border-dot-5/50"
    },
    6: {
        label: "Create",
        description: "Making, building, creative work",
        bgClass: "bg-dot-6/15",
        bgClassSolid: "bg-dot-6",
        borderClass: "border-dot-6/50"
    },
    7: {
        label: "Review",
        description: "Planning, reflection, admin",
        bgClass: "bg-dot-7/20",
        bgClassSolid: "bg-dot-7",
        borderClass: "border-dot-7/50"
    }
};
const DURATION_PRESETS = [
    {
        label: "15m",
        minutes: 15
    },
    {
        label: "30m",
        minutes: 30
    },
    {
        label: "45m",
        minutes: 45
    },
    {
        label: "1h",
        minutes: 60
    },
    {
        label: "1.5h",
        minutes: 90
    },
    {
        label: "2h",
        minutes: 120
    }
];
function addMinutesToTime(time, minutes) {
    const [h, m] = time.split(':').map(Number);
    const totalMins = h * 60 + m + minutes;
    const newH = Math.floor(totalMins / 60) % 24;
    const newM = totalMins % 60;
    return `${newH.toString().padStart(2, '0')}:${newM.toString().padStart(2, '0')}`;
}
const MONTH_NAMES = [
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
    "December"
];
const MONTH_NAMES_SHORT = [
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
    "DEC"
];
const WEEKDAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const WEEKDAYS_SHORT = [
    "S",
    "M",
    "T",
    "W",
    "T",
    "F",
    "S"
];
const DOT_COLORS = {
    1: "bg-dot-1",
    2: "bg-dot-2",
    3: "bg-dot-3",
    4: "bg-dot-4",
    5: "bg-dot-5",
    6: "bg-dot-6",
    7: "bg-dot-7"
};
const DOT_LABELS = {
    1: {
        name: "Focus",
        description: "Deep work sessions"
    },
    2: {
        name: "Joy",
        description: "Moments of happiness"
    },
    3: {
        name: "Health",
        description: "Wellness & exercise"
    },
    4: {
        name: "Rest",
        description: "Recovery & sleep"
    },
    5: {
        name: "Social",
        description: "Time with others"
    },
    6: {
        name: "Create",
        description: "Making & building"
    },
    7: {
        name: "Review",
        description: "Reflection & planning"
    }
};
const BLOCK_CATEGORIES = {
    focus: {
        label: "Focus",
        color: 1,
        bgClass: "bg-dot-1/20",
        borderClass: "border-dot-1",
        textClass: "text-dot-1"
    },
    joy: {
        label: "Joy",
        color: 2,
        bgClass: "bg-dot-2/30",
        borderClass: "border-dot-2",
        textClass: "text-dot-2"
    },
    health: {
        label: "Health",
        color: 3,
        bgClass: "bg-dot-3/20",
        borderClass: "border-dot-3",
        textClass: "text-dot-3"
    },
    rest: {
        label: "Rest",
        color: 4,
        bgClass: "bg-dot-4/20",
        borderClass: "border-dot-4",
        textClass: "text-dot-4"
    },
    social: {
        label: "Social",
        color: 5,
        bgClass: "bg-dot-5/20",
        borderClass: "border-dot-5",
        textClass: "text-dot-5"
    },
    create: {
        label: "Create",
        color: 6,
        bgClass: "bg-dot-6/20",
        borderClass: "border-dot-6",
        textClass: "text-dot-6"
    },
    review: {
        label: "Review",
        color: 7,
        bgClass: "bg-dot-7/20",
        borderClass: "border-dot-7",
        textClass: "text-dot-7"
    }
};
function formatTime(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const ampm = hours >= 12 ? 'pm' : 'am';
    const h = hours % 12 || 12;
    return minutes === 0 ? `${h}${ampm}` : `${h}:${minutes.toString().padStart(2, '0')}${ampm}`;
}
function formatTimeRange(start, end) {
    return `${formatTime(start)}-${formatTime(end)}`;
}
function generateId() {
    return Math.random().toString(36).substring(2, 9);
}
function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
}
function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
}
function formatDateKey(year, month) {
    return `${year}-${month}`;
}
function isToday(year, month, day) {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
}
function getWeekDates(year, month, day) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - dayOfWeek);
    return Array.from({
        length: 7
    }, (_, i)=>{
        const d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        return d;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/month-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthGrid",
    ()=>MonthGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$day$2d$cell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/day-cell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-types.ts [app-client] (ecmascript)");
"use client";
;
;
;
const MONTH_NAMES = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES_SHORT"];
function MonthGrid({ month, year, data, onDayUpdate, selectedDotColor, onDayClick }) {
    const daysInMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaysInMonth"])(month, year);
    const firstDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirstDayOfMonth"])(month, year);
    const today = new Date();
    const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
    const currentDay = today.getDate();
    const emptyDays = Array(firstDay).fill(null);
    const days = Array.from({
        length: daysInMonth
    }, (_, i)=>i + 1);
    // Always use 6 rows for consistent height across all months
    const totalWeeks = 6;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col border-r border-b border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 flex items-center px-1 border-b border-border flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[9px] font-medium tracking-wider text-muted-foreground",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES_SHORT"][month]
                }, void 0, false, {
                    fileName: "[project]/components/month-grid.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/month-grid.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-7",
                style: {
                    gridTemplateRows: `repeat(${totalWeeks}, 1fr)`
                },
                children: [
                    emptyDays.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-r border-b border-border/50"
                        }, `empty-${i}`, false, {
                            fileName: "[project]/components/month-grid.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)),
                    days.map((day)=>{
                        const dayKey = `${day}`;
                        const dayData = data[dayKey] || {
                            note: "",
                            dots: []
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$day$2d$cell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayCell"], {
                            day: day,
                            month: month,
                            year: year,
                            data: dayData,
                            isToday: isCurrentMonth && day === currentDay,
                            onUpdate: (newData)=>onDayUpdate(day, newData),
                            selectedDotColor: selectedDotColor,
                            onDayClick: ()=>onDayClick?.(day)
                        }, day, false, {
                            fileName: "[project]/components/month-grid.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this);
                    }),
                    Array.from({
                        length: 42 - firstDay - daysInMonth
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-r border-b border-border/50"
                        }, `fill-${i}`, false, {
                            fileName: "[project]/components/month-grid.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/month-grid.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/month-grid.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = MonthGrid;
var _c;
__turbopack_context__.k.register(_c, "MonthGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/day-color-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DayColorPicker",
    ()=>DayColorPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DayColorPicker({ currentColor, onColorChange, onClose, position, dateLabel }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DayColorPicker.useEffect": ()=>{
            const handleClickOutside = {
                "DayColorPicker.useEffect.handleClickOutside": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) {
                        onClose();
                    }
                }
            }["DayColorPicker.useEffect.handleClickOutside"];
            const handleEscape = {
                "DayColorPicker.useEffect.handleEscape": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["DayColorPicker.useEffect.handleEscape"];
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
            return ({
                "DayColorPicker.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("keydown", handleEscape);
                }
            })["DayColorPicker.useEffect"];
        }
    }["DayColorPicker.useEffect"], [
        onClose
    ]);
    // Adjust position to stay in viewport
    const adjustedPosition = {
        ...position
    };
    if ("TURBOPACK compile-time truthy", 1) {
        const menuWidth = 200;
        const menuHeight = 320;
        if (position.x + menuWidth > window.innerWidth) {
            adjustedPosition.x = window.innerWidth - menuWidth - 8;
        }
        if (position.y + menuHeight > window.innerHeight) {
            adjustedPosition.y = window.innerHeight - menuHeight - 8;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "fixed z-[100] bg-popover border border-border shadow-lg rounded-sm py-1 min-w-[180px]",
        style: {
            left: adjustedPosition.x,
            top: adjustedPosition.y
        },
        children: [
            dateLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-1.5 border-b border-border mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[9px] uppercase tracking-wider text-muted-foreground",
                        children: "Set Day Theme"
                    }, void 0, false, {
                        fileName: "[project]/components/day-color-picker.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] font-medium text-foreground",
                        children: dateLabel
                    }, void 0, false, {
                        fileName: "[project]/components/day-color-picker.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/day-color-picker.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-1",
                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAY_COLORS"]).map(([code, info])=>{
                    const colorCode = Number(code);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onColorChange(colorCode),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-2.5 px-2 py-1.5 text-left transition-colors rounded-sm", "hover:bg-accent", currentColor === colorCode && "bg-accent"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3 rounded-full flex-shrink-0", info.bgClassSolid)
                            }, void 0, false, {
                                fileName: "[project]/components/day-color-picker.tsx",
                                lineNumber: 88,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium",
                                        children: info.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/day-color-picker.tsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] text-muted-foreground leading-tight",
                                        children: info.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/day-color-picker.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/day-color-picker.tsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, this),
                            currentColor === colorCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-muted-foreground",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/components/day-color-picker.tsx",
                                lineNumber: 94,
                                columnNumber: 19
                            }, this)
                        ]
                    }, code, true, {
                        fileName: "[project]/components/day-color-picker.tsx",
                        lineNumber: 78,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/day-color-picker.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            currentColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-border my-1"
                    }, void 0, false, {
                        fileName: "[project]/components/day-color-picker.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onColorChange(null),
                            className: "w-full flex items-center gap-2.5 px-2 py-1.5 text-left hover:bg-accent transition-colors rounded-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 rounded-full flex-shrink-0 border border-muted-foreground/40 bg-background"
                                }, void 0, false, {
                                    fileName: "[project]/components/day-color-picker.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] text-muted-foreground",
                                    children: "Clear theme"
                                }, void 0, false, {
                                    fileName: "[project]/components/day-color-picker.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/day-color-picker.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/day-color-picker.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/day-color-picker.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(DayColorPicker, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = DayColorPicker;
var _c;
__turbopack_context__.k.register(_c, "DayColorPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/month-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthView",
    ()=>MonthView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$day$2d$color$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/day-color-picker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DayCellLarge({ day, month, year, data, isCurrentDay, onUpdate, selectedDotColor, onDayClick }) {
    _s();
    const [colorPickerPos, setColorPickerPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const timeBlocks = data.timeBlocks || [];
    const visibleBlocks = timeBlocks.slice(0, 3);
    const moreCount = timeBlocks.length - 3;
    // Get day color info
    const dayColorInfo = data.dayColor ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAY_COLORS"][data.dayColor] : null;
    const handleContextMenu = (e)=>{
        e.preventDefault();
        setColorPickerPos({
            x: e.clientX,
            y: e.clientY
        });
    };
    const handleColorChange = (color)=>{
        onUpdate({
            ...data,
            dayColor: color
        });
        setColorPickerPos(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onDayClick,
                onContextMenu: handleContextMenu,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative border-r border-b border-border p-1 cursor-pointer min-h-0 flex flex-col gap-0.5 overflow-hidden", "transition-colors duration-100", !dayColorInfo && "hover:bg-accent/30", !dayColorInfo && isCurrentDay && "bg-accent/50", dayColorInfo && dayColorInfo.bgClass, dayColorInfo && "hover:opacity-80"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] leading-none flex-shrink-0", isCurrentDay ? "text-foreground font-medium" : "text-muted-foreground"),
                        children: day
                    }, void 0, false, {
                        fileName: "[project]/components/month-view.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col gap-0.5 min-h-0 overflow-hidden",
                        children: [
                            visibleBlocks.map((block)=>{
                                const cat = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_CATEGORIES"][block.category];
                                // Fallback for legacy categories
                                if (!cat) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-1 py-0.5 rounded-sm border-l-2 border-muted-foreground/50 bg-muted/50 text-[8px] leading-tight truncate",
                                        title: `${block.title} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeRange"])(block.startTime, block.endTime)})`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: block.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/month-view.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    }, block.id, false, {
                                        fileName: "[project]/components/month-view.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-1 py-0.5 rounded-sm border-l-2 text-[8px] leading-tight truncate", cat.bgClass, cat.borderClass),
                                    title: `${block.title} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeRange"])(block.startTime, block.endTime)})`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: block.title || cat.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/month-view.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                }, block.id, false, {
                                    fileName: "[project]/components/month-view.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this);
                            }),
                            moreCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px] text-muted-foreground",
                                children: [
                                    "+",
                                    moreCount,
                                    " more"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/month-view.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/month-view.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/month-view.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            colorPickerPos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$day$2d$color$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayColorPicker"], {
                currentColor: data.dayColor ?? null,
                onColorChange: handleColorChange,
                onClose: ()=>setColorPickerPos(null),
                position: colorPickerPos,
                dateLabel: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES_SHORT"][month]} ${day}`
            }, void 0, false, {
                fileName: "[project]/components/month-view.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(DayCellLarge, "iv441pfGPWp4KVaQ9fGw//zvvEE=");
_c = DayCellLarge;
function MonthView({ year, month, data, onDayUpdate, selectedDotColor, onDayClick }) {
    const daysInMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaysInMonth"])(month, year);
    const firstDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirstDayOfMonth"])(month, year);
    const emptyDays = Array(firstDay).fill(null);
    const days = Array.from({
        length: daysInMonth
    }, (_, i)=>i + 1);
    const totalCells = firstDay + daysInMonth;
    const remainingCells = (7 - totalCells % 7) % 7;
    const totalWeeks = Math.ceil(totalCells / 7);
    const monthKey = `${year}-${month}`;
    const monthData = data[monthKey] || {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col border-l border-t border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 border-b border-border",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEEKDAYS"].map((day, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 flex items-center justify-center text-[10px] font-medium text-muted-foreground border-r border-border last:border-r-0",
                        children: day
                    }, i, false, {
                        fileName: "[project]/components/month-view.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/month-view.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-7",
                style: {
                    gridTemplateRows: `repeat(${totalWeeks}, 1fr)`
                },
                children: [
                    emptyDays.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-r border-b border-border/50"
                        }, `empty-${i}`, false, {
                            fileName: "[project]/components/month-view.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)),
                    days.map((day)=>{
                        const dayKey = `${day}`;
                        const dayData = monthData[dayKey] || {
                            note: "",
                            dots: []
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DayCellLarge, {
                            day: day,
                            month: month,
                            year: year,
                            data: dayData,
                            isCurrentDay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(year, month, day),
                            onUpdate: (newData)=>onDayUpdate(month, day, newData),
                            selectedDotColor: selectedDotColor,
                            onDayClick: ()=>onDayClick(day)
                        }, day, false, {
                            fileName: "[project]/components/month-view.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this);
                    }),
                    Array.from({
                        length: remainingCells
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-r border-b border-border/50"
                        }, `fill-${i}`, false, {
                            fileName: "[project]/components/month-view.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/month-view.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/month-view.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_c1 = MonthView;
var _c, _c1;
__turbopack_context__.k.register(_c, "DayCellLarge");
__turbopack_context__.k.register(_c1, "MonthView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/week-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeekView",
    ()=>WeekView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function WeekView({ weekStart, getData, onUpdate, selectedDotColor, onDayClick }) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Array.from({
        length: 7
    }, (_, i)=>{
        const d = new Date(weekStart);
        d.setDate(d.getDate() + i);
        return d;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex border-l border-t border-border",
        children: days.map((date, i)=>{
            const isToday = date.getTime() === today.getTime();
            const dayData = getData(date.getFullYear(), date.getMonth(), date.getDate());
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeekDayColumn, {
                date: date,
                data: dayData,
                isToday: isToday,
                onUpdate: (data)=>onUpdate(date.getFullYear(), date.getMonth(), date.getDate(), data),
                selectedDotColor: selectedDotColor,
                onDayClick: onDayClick
            }, i, false, {
                fileName: "[project]/components/week-view.tsx",
                lineNumber: 50,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/week-view.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = WeekView;
function WeekDayColumn({ date, data, isToday, onDayClick, onUpdate }) {
    _s();
    const [colorPickerPos, setColorPickerPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const timeBlocks = data.timeBlocks || [];
    // Sort by start time
    const sortedBlocks = [
        ...timeBlocks
    ].sort((a, b)=>a.startTime.localeCompare(b.startTime));
    // Get day color info
    const dayColorInfo = data.dayColor ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAY_COLORS"][data.dayColor] : null;
    const handleContextMenu = (e)=>{
        e.preventDefault();
        setColorPickerPos({
            x: e.clientX,
            y: e.clientY
        });
    };
    const handleColorChange = (color)=>{
        onUpdate({
            ...data,
            dayColor: color
        });
        setColorPickerPos(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onContextMenu: handleContextMenu,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex flex-col border-r border-border min-w-0", dayColorInfo && dayColorInfo.bgClass),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>onDayClick?.(date),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center py-2 border-b border-border cursor-pointer flex-shrink-0", "hover:bg-accent/30 transition-colors", !dayColorInfo && isToday && "bg-accent/50"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEEKDAYS"][date.getDay()]
                        }, void 0, false, {
                            fileName: "[project]/components/week-view.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-light", isToday ? "text-foreground" : "text-foreground/80"),
                            children: date.getDate()
                        }, void 0, false, {
                            fileName: "[project]/components/week-view.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px] text-muted-foreground",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES_SHORT"][date.getMonth()]
                        }, void 0, false, {
                            fileName: "[project]/components/week-view.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/week-view.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-1.5 overflow-y-auto flex flex-col gap-1",
                    children: sortedBlocks.length > 0 ? sortedBlocks.map((block)=>{
                        const cat = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_CATEGORIES"][block.category];
                        // Fallback for legacy categories
                        if (!cat) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onDayClick?.(date),
                                className: "px-2 py-1.5 rounded border-l-2 cursor-pointer hover:opacity-80 transition-opacity border-muted-foreground/50 bg-muted/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-medium truncate",
                                        children: block.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/week-view.tsx",
                                        lineNumber: 145,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] text-muted-foreground",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeRange"])(block.startTime, block.endTime)
                                    }, void 0, false, {
                                        fileName: "[project]/components/week-view.tsx",
                                        lineNumber: 148,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, block.id, true, {
                                fileName: "[project]/components/week-view.tsx",
                                lineNumber: 140,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>onDayClick?.(date),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 rounded border-l-2 cursor-pointer", "hover:opacity-80 transition-opacity", cat.bgClass, cat.borderClass),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] font-medium truncate",
                                    children: block.title || cat.label
                                }, void 0, false, {
                                    fileName: "[project]/components/week-view.tsx",
                                    lineNumber: 165,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[9px] text-muted-foreground",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeRange"])(block.startTime, block.endTime)
                                }, void 0, false, {
                                    fileName: "[project]/components/week-view.tsx",
                                    lineNumber: 168,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, block.id, true, {
                            fileName: "[project]/components/week-view.tsx",
                            lineNumber: 155,
                            columnNumber: 17
                        }, this);
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>onDayClick?.(date),
                        className: "flex-1 flex items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors rounded",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-muted-foreground/50",
                            children: "No blocks"
                        }, void 0, false, {
                            fileName: "[project]/components/week-view.tsx",
                            lineNumber: 179,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/week-view.tsx",
                        lineNumber: 175,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/week-view.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/week-view.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(WeekDayColumn, "iv441pfGPWp4KVaQ9fGw//zvvEE=");
_c1 = WeekDayColumn;
var _c, _c1;
__turbopack_context__.k.register(_c, "WeekView");
__turbopack_context__.k.register(_c1, "WeekDayColumn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/time-block-editor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimeBlockEditor",
    ()=>TimeBlockEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CATEGORY_KEYS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_CATEGORIES"]);
_c = CATEGORY_KEYS;
// Get next available start time based on existing blocks
function getNextAvailableTime(blocks) {
    if (blocks.length === 0) return "09:00";
    const sorted = [
        ...blocks
    ].sort((a, b)=>a.endTime.localeCompare(b.endTime));
    const lastEnd = sorted[sorted.length - 1].endTime;
    return lastEnd;
}
function TimeBlockEditor({ blocks, onUpdate }) {
    _s();
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDuration, setSelectedDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60); // Default 1 hour
    const [newBlock, setNewBlock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TimeBlockEditor.useState": ()=>{
            const start = getNextAvailableTime(blocks);
            return {
                startTime: start,
                endTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutesToTime"])(start, 60),
                title: "",
                category: "focus"
            };
        }
    }["TimeBlockEditor.useState"]);
    const openAddForm = ()=>{
        const start = getNextAvailableTime(blocks);
        setNewBlock({
            startTime: start,
            endTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutesToTime"])(start, selectedDuration),
            title: "",
            category: "focus"
        });
        setIsAdding(true);
    };
    const handleDurationChange = (minutes)=>{
        setSelectedDuration(minutes);
        setNewBlock((prev)=>({
                ...prev,
                endTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutesToTime"])(prev.startTime || "09:00", minutes)
            }));
    };
    const handleStartTimeChange = (startTime)=>{
        setNewBlock((prev)=>({
                ...prev,
                startTime,
                endTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutesToTime"])(startTime, selectedDuration)
            }));
    };
    const addBlock = ()=>{
        if (!newBlock.title?.trim()) return;
        const block = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
            startTime: newBlock.startTime || "09:00",
            endTime: newBlock.endTime || "10:00",
            title: newBlock.title,
            category: newBlock.category || "focus"
        };
        onUpdate([
            ...blocks,
            block
        ].sort((a, b)=>a.startTime.localeCompare(b.startTime)));
        setIsAdding(false);
    };
    const updateBlock = (id, updates)=>{
        onUpdate(blocks.map((b)=>b.id === id ? {
                ...b,
                ...updates
            } : b).sort((a, b)=>a.startTime.localeCompare(b.startTime)));
    };
    const deleteBlock = (id)=>{
        onUpdate(blocks.filter((b)=>b.id !== id));
        setEditingId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: [
            blocks.map((block)=>{
                const cat = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_CATEGORIES"][block.category];
                if (editingId === block.id) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 p-2 border border-dashed border-border rounded-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: block.title,
                                onChange: (e)=>updateBlock(block.id, {
                                        title: e.target.value
                                    }),
                                className: "text-xs bg-transparent border-b border-border px-1 py-1 outline-none",
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: block.startTime,
                                        onChange: (e)=>updateBlock(block.id, {
                                                startTime: e.target.value
                                            }),
                                        className: "w-[4.5rem] text-[10px] bg-transparent border border-border px-1 py-0.5 rounded-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: "to"
                                    }, void 0, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: block.endTime,
                                        onChange: (e)=>updateBlock(block.id, {
                                                endTime: e.target.value
                                            }),
                                        className: "w-[4.5rem] text-[10px] bg-transparent border border-border px-1 py-0.5 rounded-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 flex-wrap",
                                children: CATEGORY_KEYS.map((catKey)=>{
                                    const c = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_CATEGORIES"][catKey];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>updateBlock(block.id, {
                                                category: catKey
                                            }),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[8px] uppercase tracking-wider px-1.5 py-0.5 border rounded-sm transition-colors", block.category === catKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(c.bgClass, c.borderClass) : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"),
                                        children: c.label
                                    }, catKey, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 132,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setEditingId(null),
                                        className: "text-[9px] uppercase tracking-wider px-2 py-0.5 bg-muted hover:bg-muted/80 rounded-sm",
                                        children: "Done"
                                    }, void 0, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>deleteBlock(block.id),
                                        className: "text-[9px] uppercase tracking-wider px-2 py-0.5 text-destructive hover:bg-destructive/10 rounded-sm",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this)
                        ]
                    }, block.id, true, {
                        fileName: "[project]/components/time-block-editor.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this);
                }
                // Fallback for legacy categories
                if (!cat) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setEditingId(block.id),
                        className: "cursor-pointer px-2 py-1.5 border-l-2 rounded-r-sm bg-muted/50 border-muted-foreground/50 hover:bg-muted/70 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-medium truncate",
                                children: block.title
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] text-muted-foreground",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeRange"])(block.startTime, block.endTime)
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this)
                        ]
                    }, block.id, true, {
                        fileName: "[project]/components/time-block-editor.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>setEditingId(block.id),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer px-3 py-2 sm:px-2 sm:py-1.5 border-l-2 rounded-r-sm hover:opacity-80 transition-opacity active:opacity-70", cat.bgClass, cat.borderClass),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs sm:text-[10px] font-medium truncate",
                            children: block.title
                        }, void 0, false, {
                            fileName: "[project]/components/time-block-editor.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] sm:text-[9px] text-muted-foreground",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeRange"])(block.startTime, block.endTime)
                        }, void 0, false, {
                            fileName: "[project]/components/time-block-editor.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    ]
                }, block.id, true, {
                    fileName: "[project]/components/time-block-editor.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this);
            }),
            isAdding ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2.5 p-2 border border-dashed border-border rounded-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: newBlock.title,
                        onChange: (e)=>setNewBlock({
                                ...newBlock,
                                title: e.target.value
                            }),
                        placeholder: "What are you doing?",
                        className: "text-xs bg-transparent border-b border-border px-1 py-1 placeholder:text-muted-foreground/50 outline-none",
                        autoFocus: true,
                        onKeyDown: (e)=>e.key === "Enter" && addBlock()
                    }, void 0, false, {
                        fileName: "[project]/components/time-block-editor.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] uppercase tracking-wider text-muted-foreground",
                                children: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 flex-wrap",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURATION_PRESETS"].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleDurationChange(preset.minutes),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[9px] px-2 py-0.5 border rounded-sm transition-colors", selectedDuration === preset.minutes ? "bg-foreground text-background border-foreground" : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"),
                                        children: preset.label
                                    }, preset.minutes, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/time-block-editor.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] uppercase tracking-wider text-muted-foreground",
                                        children: "Start"
                                    }, void 0, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: newBlock.startTime,
                                        onChange: (e)=>handleStartTimeChange(e.target.value),
                                        className: "w-[5rem] text-[10px] bg-transparent border border-border px-1.5 py-1 rounded-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground mt-4",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] uppercase tracking-wider text-muted-foreground",
                                        children: "End"
                                    }, void 0, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] px-1.5 py-1 text-muted-foreground",
                                        children: newBlock.endTime && (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeRange"])(newBlock.startTime, newBlock.endTime).split('-')[1]
                                    }, void 0, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/time-block-editor.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] uppercase tracking-wider text-muted-foreground",
                                children: "Category"
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 flex-wrap",
                                children: CATEGORY_KEYS.map((catKey)=>{
                                    const c = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_CATEGORIES"][catKey];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setNewBlock({
                                                ...newBlock,
                                                category: catKey
                                            }),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[8px] uppercase tracking-wider px-1.5 py-0.5 border rounded-sm transition-colors", newBlock.category === catKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(c.bgClass, c.borderClass) : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"),
                                        children: c.label
                                    }, catKey, false, {
                                        fileName: "[project]/components/time-block-editor.tsx",
                                        lineNumber: 265,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/time-block-editor.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addBlock,
                                disabled: !newBlock.title?.trim(),
                                className: "text-[10px] uppercase tracking-wider px-3 py-1 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm",
                                children: "Add Block"
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsAdding(false),
                                className: "text-[10px] uppercase tracking-wider px-3 py-1 text-muted-foreground hover:text-foreground rounded-sm",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/time-block-editor.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/time-block-editor.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/time-block-editor.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: openAddForm,
                className: "w-full text-[11px] sm:text-[10px] uppercase tracking-wider text-muted-foreground hover:text-foreground py-3 sm:py-2 border border-dashed border-border hover:border-foreground/30 active:bg-accent/30 transition-colors rounded-sm",
                children: "+ Add Time Block"
            }, void 0, false, {
                fileName: "[project]/components/time-block-editor.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/time-block-editor.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(TimeBlockEditor, "7JmWdfSPcKeYl0+IXkIYRCJEII4=");
_c1 = TimeBlockEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "CATEGORY_KEYS");
__turbopack_context__.k.register(_c1, "TimeBlockEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/content-editor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentEditor",
    ()=>ContentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
const BLOCK_TYPES = [
    {
        type: "text",
        label: "Text",
        icon: "T"
    },
    {
        type: "checklist",
        label: "Checklist",
        icon: "☑"
    },
    {
        type: "bullets",
        label: "Bullets",
        icon: "•"
    },
    {
        type: "heading",
        label: "Heading",
        icon: "H"
    },
    {
        type: "code",
        label: "Code",
        icon: "</>"
    },
    {
        type: "link",
        label: "Link",
        icon: "🔗"
    },
    {
        type: "divider",
        label: "Divider",
        icon: "—"
    }
];
function ContentEditor({ blocks, onUpdate }) {
    const addBlock = (type)=>{
        let content;
        switch(type){
            case "text":
            case "heading":
                content = "";
                break;
            case "checklist":
                content = [
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
                        text: "",
                        checked: false
                    }
                ];
                break;
            case "bullets":
                content = [
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
                        text: ""
                    }
                ];
                break;
            case "code":
                content = {
                    language: "javascript",
                    code: ""
                };
                break;
            case "link":
                content = {
                    url: "",
                    title: "",
                    description: ""
                };
                break;
            case "divider":
                content = "";
                break;
            default:
                content = "";
        }
        const newBlock = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
            type,
            content
        };
        onUpdate([
            ...blocks,
            newBlock
        ]);
    };
    const updateBlock = (id, content)=>{
        onUpdate(blocks.map((b)=>b.id === id ? {
                ...b,
                content
            } : b));
    };
    const deleteBlock = (id)=>{
        onUpdate(blocks.filter((b)=>b.id !== id));
    };
    const moveBlock = (id, direction)=>{
        const index = blocks.findIndex((b)=>b.id === id);
        if (direction === "up" && index > 0) {
            const newBlocks = [
                ...blocks
            ];
            [newBlocks[index - 1], newBlocks[index]] = [
                newBlocks[index],
                newBlocks[index - 1]
            ];
            onUpdate(newBlocks);
        } else if (direction === "down" && index < blocks.length - 1) {
            const newBlocks = [
                ...blocks
            ];
            [newBlocks[index], newBlocks[index + 1]] = [
                newBlocks[index + 1],
                newBlocks[index]
            ];
            onUpdate(newBlocks);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            blocks.map((block, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentBlockItem, {
                    block: block,
                    onUpdate: (content)=>updateBlock(block.id, content),
                    onDelete: ()=>deleteBlock(block.id),
                    onMoveUp: index > 0 ? ()=>moveBlock(block.id, "up") : undefined,
                    onMoveDown: index < blocks.length - 1 ? ()=>moveBlock(block.id, "down") : undefined
                }, block.id, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1.5 flex-wrap pt-2",
                children: BLOCK_TYPES.map(({ type, label, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>addBlock(type),
                        className: "flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground px-2 py-1.5 border border-dashed border-border hover:border-foreground/30 transition-colors rounded-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px]",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/components/content-editor.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            label
                        ]
                    }, type, true, {
                        fileName: "[project]/components/content-editor.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/content-editor.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c = ContentEditor;
function ContentBlockItem({ block, onUpdate, onDelete, onMoveUp, onMoveDown }) {
    const BlockControls = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -left-6 top-0 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity",
            children: [
                onMoveUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onMoveUp,
                    className: "text-[9px] text-muted-foreground hover:text-foreground w-4 h-4 flex items-center justify-center",
                    children: "↑"
                }, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                onMoveDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onMoveDown,
                    className: "text-[9px] text-muted-foreground hover:text-foreground w-4 h-4 flex items-center justify-center",
                    children: "↓"
                }, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/content-editor.tsx",
            lineNumber: 123,
            columnNumber: 5
        }, this);
    if (block.type === "text") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative pl-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockControls, {}, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextBlockEditor, {
                    content: block.content,
                    onUpdate: onUpdate,
                    onDelete: onDelete
                }, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/content-editor.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this);
    }
    if (block.type === "heading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative pl-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockControls, {}, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeadingBlockEditor, {
                    content: block.content,
                    onUpdate: onUpdate,
                    onDelete: onDelete
                }, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/content-editor.tsx",
            lineNumber: 160,
            columnNumber: 7
        }, this);
    }
    if (block.type === "checklist") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative pl-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockControls, {}, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChecklistEditor, {
                    items: block.content,
                    onUpdate: onUpdate,
                    onDelete: onDelete
                }, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/content-editor.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, this);
    }
    if (block.type === "bullets") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative pl-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockControls, {}, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletListEditor, {
                    items: block.content,
                    onUpdate: onUpdate,
                    onDelete: onDelete
                }, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/content-editor.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this);
    }
    if (block.type === "code") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative pl-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockControls, {}, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlockEditor, {
                    data: block.content,
                    onUpdate: onUpdate,
                    onDelete: onDelete
                }, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/content-editor.tsx",
            lineNumber: 199,
            columnNumber: 7
        }, this);
    }
    if (block.type === "link") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative pl-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockControls, {}, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkBlockEditor, {
                    data: block.content,
                    onUpdate: onUpdate,
                    onDelete: onDelete
                }, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/content-editor.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this);
    }
    if (block.type === "divider") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative pl-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockControls, {}, void 0, false, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "border-border"
                        }, void 0, false, {
                            fileName: "[project]/components/content-editor.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onDelete,
                            className: "absolute top-1/2 right-0 -translate-y-1/2 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity",
                            children: "Remove"
                        }, void 0, false, {
                            fileName: "[project]/components/content-editor.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/content-editor.tsx",
            lineNumber: 225,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c1 = ContentBlockItem;
// Text Block
function TextBlockEditor({ content, onUpdate, onDelete }) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(content);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextBlockEditor.useEffect": ()=>{
            setValue(content);
        }
    }["TextBlockEditor.useEffect"], [
        content
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextBlockEditor.useEffect": ()=>{
            const textarea = textareaRef.current;
            if (textarea) {
                textarea.style.height = "auto";
                textarea.style.height = `${textarea.scrollHeight}px`;
            }
        }
    }["TextBlockEditor.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: textareaRef,
                value: value,
                onChange: (e)=>setValue(e.target.value),
                onBlur: ()=>onUpdate(value),
                placeholder: "Write something...",
                className: "w-full text-sm leading-relaxed bg-transparent text-foreground placeholder:text-muted-foreground/50 outline-none resize-none min-h-[2rem]",
                rows: 1
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onDelete,
                className: "absolute top-0 right-0 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity",
                children: "Remove"
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/content-editor.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
_s(TextBlockEditor, "FYyNaWfikhLwg0ePz2ym4YhgTAs=");
_c2 = TextBlockEditor;
// Heading Block
function HeadingBlockEditor({ content, onUpdate, onDelete }) {
    _s1();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(content);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeadingBlockEditor.useEffect": ()=>{
            setValue(content);
        }
    }["HeadingBlockEditor.useEffect"], [
        content
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: (e)=>setValue(e.target.value),
                onBlur: ()=>onUpdate(value),
                placeholder: "Heading...",
                className: "w-full text-base font-medium bg-transparent text-foreground placeholder:text-muted-foreground/50 outline-none"
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onDelete,
                className: "absolute top-0 right-0 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity",
                children: "Remove"
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/content-editor.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
_s1(HeadingBlockEditor, "1yChUg6QWSRNzr+nM8dqJ8kZPF4=");
_c3 = HeadingBlockEditor;
// Checklist Editor
function ChecklistEditor({ items, onUpdate, onDelete }) {
    _s2();
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const updateItem = (id, updates)=>{
        onUpdate(items.map((item)=>item.id === id ? {
                ...item,
                ...updates
            } : item));
    };
    const addItem = (afterId)=>{
        const newItem = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
            text: "",
            checked: false
        };
        if (afterId) {
            const index = items.findIndex((item)=>item.id === afterId);
            const newItems = [
                ...items
            ];
            newItems.splice(index + 1, 0, newItem);
            onUpdate(newItems);
        } else {
            onUpdate([
                ...items,
                newItem
            ]);
        }
        setTimeout(()=>{
            inputRefs.current.get(newItem.id)?.focus();
        }, 0);
    };
    const deleteItem = (id)=>{
        if (items.length === 1) {
            onDelete();
            return;
        }
        const index = items.findIndex((item)=>item.id === id);
        const prevItem = items[index - 1];
        onUpdate(items.filter((item)=>item.id !== id));
        if (prevItem) {
            setTimeout(()=>{
                inputRefs.current.get(prevItem.id)?.focus();
            }, 0);
        }
    };
    const handleKeyDown = (e, item)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            addItem(item.id);
        } else if (e.key === "Backspace" && item.text === "") {
            e.preventDefault();
            deleteItem(item.id);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative space-y-1",
        children: [
            items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>updateItem(item.id, {
                                    checked: !item.checked
                                }),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3.5 h-3.5 mt-0.5 border flex-shrink-0 flex items-center justify-center transition-colors rounded-sm", item.checked ? "bg-foreground border-foreground" : "border-border hover:border-foreground/50"),
                            children: item.checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "8",
                                height: "8",
                                viewBox: "0 0 8 8",
                                fill: "none",
                                className: "text-background",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 4L3 6L7 2",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/content-editor.tsx",
                                    lineNumber: 400,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/content-editor.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/content-editor.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: (el)=>{
                                if (el) inputRefs.current.set(item.id, el);
                            },
                            type: "text",
                            value: item.text,
                            onChange: (e)=>updateItem(item.id, {
                                    text: e.target.value
                                }),
                            onKeyDown: (e)=>handleKeyDown(e, item),
                            placeholder: "To do...",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground/50", item.checked && "line-through text-muted-foreground")
                        }, void 0, false, {
                            fileName: "[project]/components/content-editor.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onDelete,
                className: "absolute top-0 right-0 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity",
                children: "Remove"
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 420,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/content-editor.tsx",
        lineNumber: 385,
        columnNumber: 5
    }, this);
}
_s2(ChecklistEditor, "tWpMuGxnGLebQJHOOQnv6KtvNn4=");
_c4 = ChecklistEditor;
// Bullet List Editor
function BulletListEditor({ items, onUpdate, onDelete }) {
    _s3();
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const updateItem = (id, text)=>{
        onUpdate(items.map((item)=>item.id === id ? {
                ...item,
                text
            } : item));
    };
    const addItem = (afterId)=>{
        const newItem = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
            text: ""
        };
        if (afterId) {
            const index = items.findIndex((item)=>item.id === afterId);
            const newItems = [
                ...items
            ];
            newItems.splice(index + 1, 0, newItem);
            onUpdate(newItems);
        } else {
            onUpdate([
                ...items,
                newItem
            ]);
        }
        setTimeout(()=>{
            inputRefs.current.get(newItem.id)?.focus();
        }, 0);
    };
    const deleteItem = (id)=>{
        if (items.length === 1) {
            onDelete();
            return;
        }
        const index = items.findIndex((item)=>item.id === id);
        const prevItem = items[index - 1];
        onUpdate(items.filter((item)=>item.id !== id));
        if (prevItem) {
            setTimeout(()=>{
                inputRefs.current.get(prevItem.id)?.focus();
            }, 0);
        }
    };
    const handleKeyDown = (e, item)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            addItem(item.id);
        } else if (e.key === "Backspace" && item.text === "") {
            e.preventDefault();
            deleteItem(item.id);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative space-y-1",
        children: [
            items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 mt-1.5 rounded-full bg-foreground/60 flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/content-editor.tsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: (el)=>{
                                if (el) inputRefs.current.set(item.id, el);
                            },
                            type: "text",
                            value: item.text,
                            onChange: (e)=>updateItem(item.id, e.target.value),
                            onKeyDown: (e)=>handleKeyDown(e, item),
                            placeholder: "List item...",
                            className: "flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground/50"
                        }, void 0, false, {
                            fileName: "[project]/components/content-editor.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 490,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onDelete,
                className: "absolute top-0 right-0 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity",
                children: "Remove"
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/content-editor.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
_s3(BulletListEditor, "tWpMuGxnGLebQJHOOQnv6KtvNn4=");
_c5 = BulletListEditor;
// Code Block Editor
const CODE_LANGUAGES = [
    {
        value: "javascript",
        label: "JavaScript"
    },
    {
        value: "typescript",
        label: "TypeScript"
    },
    {
        value: "python",
        label: "Python"
    },
    {
        value: "html",
        label: "HTML"
    },
    {
        value: "css",
        label: "CSS"
    },
    {
        value: "sql",
        label: "SQL"
    },
    {
        value: "bash",
        label: "Bash"
    },
    {
        value: "json",
        label: "JSON"
    },
    {
        value: "markdown",
        label: "Markdown"
    },
    {
        value: "plaintext",
        label: "Plain Text"
    }
];
function CodeBlockEditor({ data, onUpdate, onDelete }) {
    _s4();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.code);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.language);
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeBlockEditor.useEffect": ()=>{
            setCode(data.code);
            setLanguage(data.language);
        }
    }["CodeBlockEditor.useEffect"], [
        data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeBlockEditor.useEffect": ()=>{
            const textarea = textareaRef.current;
            if (textarea && isExpanded) {
                textarea.style.height = "auto";
                textarea.style.height = `${Math.max(textarea.scrollHeight, 120)}px`;
            }
        }
    }["CodeBlockEditor.useEffect"], [
        code,
        isExpanded
    ]);
    const handleBlur = ()=>{
        onUpdate({
            language,
            code
        });
    };
    // Get first line preview
    const firstLine = code.split('\n')[0] || '';
    const lineCount = code.split('\n').length;
    const hasContent = code.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative border border-border rounded-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-2 py-1.5 bg-muted/50 border-b border-border cursor-pointer",
                onClick: ()=>setIsExpanded(!isExpanded),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-[10px] text-muted-foreground hover:text-foreground transition-transform",
                                style: {
                                    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'
                                },
                                children: "▶"
                            }, void 0, false, {
                                fileName: "[project]/components/content-editor.tsx",
                                lineNumber: 574,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: language,
                                onClick: (e)=>e.stopPropagation(),
                                onChange: (e)=>{
                                    setLanguage(e.target.value);
                                    onUpdate({
                                        language: e.target.value,
                                        code
                                    });
                                },
                                className: "text-[9px] uppercase tracking-wider bg-transparent text-muted-foreground outline-none cursor-pointer",
                                children: CODE_LANGUAGES.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: lang.value,
                                        children: lang.label
                                    }, lang.value, false, {
                                        fileName: "[project]/components/content-editor.tsx",
                                        lineNumber: 591,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/content-editor.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this),
                            !isExpanded && hasContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-muted-foreground/70 truncate flex-1",
                                children: [
                                    firstLine.slice(0, 40),
                                    firstLine.length > 40 ? '...' : '',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 opacity-60",
                                        children: [
                                            "(",
                                            lineCount,
                                            " line",
                                            lineCount !== 1 ? 's' : '',
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/content-editor.tsx",
                                        lineNumber: 599,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/content-editor.tsx",
                                lineNumber: 597,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/content-editor.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (e)=>{
                            e.stopPropagation();
                            onDelete();
                        },
                        className: "text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity ml-2",
                        children: "Remove"
                    }, void 0, false, {
                        fileName: "[project]/components/content-editor.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: textareaRef,
                value: code,
                onChange: (e)=>setCode(e.target.value),
                onBlur: handleBlur,
                placeholder: "// Write your code here...",
                className: "w-full px-3 py-2 text-xs font-mono leading-relaxed bg-muted/30 text-foreground placeholder:text-muted-foreground/50 outline-none resize-none min-h-[120px]",
                spellCheck: false,
                autoFocus: true
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 617,
                columnNumber: 9
            }, this),
            !isExpanded && hasContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 bg-muted/30 max-h-[60px] overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "text-[10px] font-mono text-muted-foreground leading-tight whitespace-pre-wrap",
                    children: [
                        code.split('\n').slice(0, 3).join('\n'),
                        lineCount > 3 && '\n...'
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/content-editor.tsx",
                    lineNumber: 632,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 631,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/content-editor.tsx",
        lineNumber: 567,
        columnNumber: 5
    }, this);
}
_s4(CodeBlockEditor, "sw3nsnyJ3aua3cqa+vHAi2PkHOY=");
_c6 = CodeBlockEditor;
// Link Block Editor
function LinkBlockEditor({ data, onUpdate, onDelete }) {
    _s5();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.url);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.title || "");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.description || "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LinkBlockEditor.useEffect": ()=>{
            setUrl(data.url);
            setTitle(data.title || "");
            setDescription(data.description || "");
        }
    }["LinkBlockEditor.useEffect"], [
        data
    ]);
    const handleBlur = ()=>{
        onUpdate({
            url,
            title,
            description
        });
    };
    const isValidUrl = url.startsWith("http://") || url.startsWith("https://");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative border border-border rounded-sm overflow-hidden hover:border-foreground/30 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "url",
                        value: url,
                        onChange: (e)=>setUrl(e.target.value),
                        onBlur: handleBlur,
                        placeholder: "https://example.com",
                        className: "w-full text-xs text-muted-foreground bg-transparent outline-none placeholder:text-muted-foreground/50"
                    }, void 0, false, {
                        fileName: "[project]/components/content-editor.tsx",
                        lineNumber: 671,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        onBlur: handleBlur,
                        placeholder: "Link title (optional)",
                        className: "w-full text-sm font-medium bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50"
                    }, void 0, false, {
                        fileName: "[project]/components/content-editor.tsx",
                        lineNumber: 679,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        onBlur: handleBlur,
                        placeholder: "Description (optional)",
                        className: "w-full text-xs bg-transparent text-muted-foreground outline-none placeholder:text-muted-foreground/50"
                    }, void 0, false, {
                        fileName: "[project]/components/content-editor.tsx",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 670,
                columnNumber: 7
            }, this),
            isValidUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "block px-2 py-1.5 text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground bg-muted/30 border-t border-border",
                children: "Open Link →"
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 697,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onDelete,
                className: "absolute top-2 right-2 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity",
                children: "Remove"
            }, void 0, false, {
                fileName: "[project]/components/content-editor.tsx",
                lineNumber: 706,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/content-editor.tsx",
        lineNumber: 669,
        columnNumber: 5
    }, this);
}
_s5(LinkBlockEditor, "kFTeN9dU+8nVrQma62/YvPYaFPg=");
_c7 = LinkBlockEditor;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "ContentEditor");
__turbopack_context__.k.register(_c1, "ContentBlockItem");
__turbopack_context__.k.register(_c2, "TextBlockEditor");
__turbopack_context__.k.register(_c3, "HeadingBlockEditor");
__turbopack_context__.k.register(_c4, "ChecklistEditor");
__turbopack_context__.k.register(_c5, "BulletListEditor");
__turbopack_context__.k.register(_c6, "CodeBlockEditor");
__turbopack_context__.k.register(_c7, "LinkBlockEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/day-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DayView",
    ()=>DayView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$time$2d$block$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/time-block-editor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/content-editor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const PANEL_WIDTH_KEY = "kair-schedule-panel-width";
const DEFAULT_PANEL_WIDTH = 340;
const MIN_PANEL_WIDTH = 200;
const MAX_PANEL_WIDTH = 600;
// Calculate duration in minutes
function getDuration(start, end) {
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);
    return endH * 60 + endM - (startH * 60 + startM);
}
// Format hours nicely
function formatHours(minutes) {
    if (minutes < 60) return `${minutes}m`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
}
function DayView({ date, data, onUpdate }) {
    _s();
    const [mobileTab, setMobileTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("schedule");
    const [panelWidth, setPanelWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_PANEL_WIDTH);
    const [isResizing, setIsResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDayColorPicker, setShowDayColorPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dayColorPickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Check if desktop and load saved panel width on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DayView.useEffect": ()=>{
            const checkDesktop = {
                "DayView.useEffect.checkDesktop": ()=>setIsDesktop(window.innerWidth >= 768)
            }["DayView.useEffect.checkDesktop"];
            checkDesktop();
            window.addEventListener("resize", checkDesktop);
            const saved = localStorage.getItem(PANEL_WIDTH_KEY);
            if (saved) {
                const width = parseInt(saved, 10);
                if (width >= MIN_PANEL_WIDTH && width <= MAX_PANEL_WIDTH) {
                    setPanelWidth(width);
                }
            }
            return ({
                "DayView.useEffect": ()=>window.removeEventListener("resize", checkDesktop)
            })["DayView.useEffect"];
        }
    }["DayView.useEffect"], []);
    // Save panel width when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DayView.useEffect": ()=>{
            if (!isResizing) {
                localStorage.setItem(PANEL_WIDTH_KEY, panelWidth.toString());
            }
        }
    }["DayView.useEffect"], [
        panelWidth,
        isResizing
    ]);
    // Close day color picker when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DayView.useEffect": ()=>{
            const handleClickOutside = {
                "DayView.useEffect.handleClickOutside": (e)=>{
                    if (dayColorPickerRef.current && !dayColorPickerRef.current.contains(e.target)) {
                        setShowDayColorPicker(false);
                    }
                }
            }["DayView.useEffect.handleClickOutside"];
            if (showDayColorPicker) {
                document.addEventListener("mousedown", handleClickOutside);
                return ({
                    "DayView.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
                })["DayView.useEffect"];
            }
        }
    }["DayView.useEffect"], [
        showDayColorPicker
    ]);
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayView.useCallback[handleMouseDown]": (e)=>{
            e.preventDefault();
            setIsResizing(true);
        }
    }["DayView.useCallback[handleMouseDown]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DayView.useEffect": ()=>{
            if (!isResizing) return;
            // Lock cursor during resize
            document.body.style.cursor = "col-resize";
            document.body.style.userSelect = "none";
            const handleMouseMove = {
                "DayView.useEffect.handleMouseMove": (e)=>{
                    if (!containerRef.current) return;
                    const containerRect = containerRef.current.getBoundingClientRect();
                    const newWidth = e.clientX - containerRect.left;
                    const clampedWidth = Math.min(Math.max(newWidth, MIN_PANEL_WIDTH), MAX_PANEL_WIDTH);
                    setPanelWidth(clampedWidth);
                }
            }["DayView.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "DayView.useEffect.handleMouseUp": ()=>{
                    setIsResizing(false);
                    document.body.style.cursor = "";
                    document.body.style.userSelect = "";
                }
            }["DayView.useEffect.handleMouseUp"];
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            return ({
                "DayView.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                    document.body.style.cursor = "";
                    document.body.style.userSelect = "";
                }
            })["DayView.useEffect"];
        }
    }["DayView.useEffect"], [
        isResizing
    ]);
    const today = new Date();
    const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    const handleTimeBlocksUpdate = (timeBlocks)=>{
        onUpdate({
            ...data,
            timeBlocks
        });
    };
    const handleContentBlocksUpdate = (contentBlocks)=>{
        onUpdate({
            ...data,
            contentBlocks
        });
    };
    const handleDayColorChange = (color)=>{
        onUpdate({
            ...data,
            dayColor: color
        });
        setShowDayColorPicker(false);
    };
    // Get current day color info
    const currentDayColor = data.dayColor ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAY_COLORS"][data.dayColor] : null;
    // Calculate time stats by category
    const timeBlocks = data.timeBlocks || [];
    const categoryMinutes = {};
    let totalMinutes = 0;
    timeBlocks.forEach((block)=>{
        const dur = getDuration(block.startTime, block.endTime);
        totalMinutes += dur;
        categoryMinutes[block.category] = (categoryMinutes[block.category] || 0) + dur;
    });
    // Get categories that have time
    const activeCategories = Object.entries(categoryMinutes).filter(([, mins])=>mins && mins > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-border px-4 md:px-6 py-3 md:py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-2 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-4xl sm:text-5xl font-light tracking-tight tabular-nums", isToday ? "text-foreground" : "text-foreground/80"),
                                            children: date.getDate()
                                        }, void 0, false, {
                                            fileName: "[project]/components/day-view.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm sm:text-base tracking-wide text-foreground",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEEKDAYS"][date.getDay()]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] sm:text-xs text-muted-foreground",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES"][date.getMonth()],
                                                        " ",
                                                        date.getFullYear()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/day-view.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/day-view.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                isToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] sm:text-[9px] uppercase tracking-widest text-muted-foreground/70 border border-border px-1.5 sm:px-2 py-0.5",
                                    children: "Today"
                                }, void 0, false, {
                                    fileName: "[project]/components/day-view.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    ref: dayColorPickerRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowDayColorPicker(!showDayColorPicker),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-2 py-1 rounded-sm border text-[9px] sm:text-[10px] transition-colors", currentDayColor ? `${currentDayColor.bgClass} ${currentDayColor.borderClass}` : "border-border hover:border-muted-foreground/50"),
                                            title: "Set day color",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2.5 h-2.5 rounded-full", currentDayColor ? currentDayColor.bgClassSolid : "bg-muted-foreground/30")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline text-muted-foreground",
                                                    children: currentDayColor ? currentDayColor.label : "Color"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/day-view.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        showDayColorPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 mt-1 z-50 bg-popover border border-border rounded-md shadow-lg p-2 min-w-[180px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[9px] uppercase tracking-wider text-muted-foreground mb-2 px-1",
                                                    children: "Day Color"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAY_COLORS"]).map(([code, info])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleDayColorChange(code),
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-2 px-2 py-1.5 rounded-sm text-left transition-colors", "hover:bg-accent", data.dayColor === code && "bg-accent"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3 rounded-full flex-shrink-0", info.bgClassSolid)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/day-view.tsx",
                                                                        lineNumber: 239,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[10px] font-medium",
                                                                                children: info.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/day-view.tsx",
                                                                                lineNumber: 241,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[8px] text-muted-foreground truncate",
                                                                                children: info.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/day-view.tsx",
                                                                                lineNumber: 242,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/day-view.tsx",
                                                                        lineNumber: 240,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, code, true, {
                                                                fileName: "[project]/components/day-view.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 25
                                                            }, this)),
                                                        data.dayColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border-t border-border my-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/day-view.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleDayColorChange(null),
                                                                    className: "w-full flex items-center gap-2 px-2 py-1.5 rounded-sm text-left hover:bg-accent transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full flex-shrink-0 border border-muted-foreground/30"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/day-view.tsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-muted-foreground",
                                                                            children: "Clear color"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/day-view.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/day-view.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/day-view.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/day-view.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/day-view.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        totalMinutes > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 sm:gap-4 overflow-x-auto pb-1 -mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg sm:text-2xl font-light text-foreground tabular-nums",
                                            children: formatHours(totalMinutes)
                                        }, void 0, false, {
                                            fileName: "[project]/components/day-view.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground ml-1 sm:ml-2",
                                            children: "planned"
                                        }, void 0, false, {
                                            fileName: "[project]/components/day-view.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/day-view.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 sm:gap-2 flex-shrink-0",
                                    children: activeCategories.map(([cat, mins])=>{
                                        const catInfo = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_CATEGORIES"][cat];
                                        if (!catInfo) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm border bg-muted/50 border-muted-foreground/50",
                                                title: `${formatHours(mins)} ${cat}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] sm:text-[10px] font-medium capitalize",
                                                        children: cat
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/day-view.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] sm:text-[10px] text-muted-foreground",
                                                        children: formatHours(mins)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/day-view.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, cat, true, {
                                                fileName: "[project]/components/day-view.tsx",
                                                lineNumber: 282,
                                                columnNumber: 23
                                            }, this);
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm border", catInfo.bgClass, catInfo.borderClass),
                                            title: `${formatHours(mins)} ${catInfo.label}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] sm:text-[10px] font-medium",
                                                    children: catInfo.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] sm:text-[10px] text-muted-foreground",
                                                    children: formatHours(mins)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, cat, true, {
                                            fileName: "[project]/components/day-view.tsx",
                                            lineNumber: 295,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/day-view.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/day-view.tsx",
                            lineNumber: 268,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/day-view.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/day-view.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-b border-border flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMobileTab("schedule"),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-2 text-[10px] uppercase tracking-widest transition-colors", mobileTab === "schedule" ? "text-foreground bg-accent/50" : "text-muted-foreground"),
                        children: [
                            "Schedule (",
                            timeBlocks.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/day-view.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMobileTab("notes"),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-2 text-[10px] uppercase tracking-widest transition-colors border-l border-border", mobileTab === "notes" ? "text-foreground bg-accent/50" : "text-muted-foreground"),
                        children: [
                            "Notes (",
                            (data.contentBlocks || []).length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/day-view.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/day-view.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "flex-1 flex overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-col", "md:flex md:flex-shrink-0", mobileTab === "schedule" ? "flex flex-1 md:flex-none" : "hidden"),
                        style: isDesktop ? {
                            width: panelWidth
                        } : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex px-5 py-3 border-b border-border items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-widest text-muted-foreground",
                                        children: "Schedule"
                                    }, void 0, false, {
                                        fileName: "[project]/components/day-view.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this),
                                    timeBlocks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: [
                                            timeBlocks.length,
                                            " block",
                                            timeBlocks.length !== 1 ? "s" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/day-view.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/day-view.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 md:p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$time$2d$block$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeBlockEditor"], {
                                        blocks: data.timeBlocks || [],
                                        onUpdate: handleTimeBlocksUpdate
                                    }, void 0, false, {
                                        fileName: "[project]/components/day-view.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/day-view.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/day-view.tsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-border px-3 md:px-5 py-2 md:py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5 md:gap-2",
                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_CATEGORIES"]).map(([cat, info])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 md:gap-1.5 text-[8px] md:text-[9px] text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-1.5 h-1.5 md:w-2 md:h-2 rounded-sm border", info.bgClass, info.borderClass)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: info.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/day-view.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, cat, true, {
                                            fileName: "[project]/components/day-view.tsx",
                                            lineNumber: 381,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/day-view.tsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/day-view.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/day-view.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseDown: handleMouseDown,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hidden md:flex w-[3px] flex-shrink-0 cursor-col-resize items-center justify-center", "border-l border-border hover:border-muted-foreground/50 transition-colors group", isResizing && "border-muted-foreground/50 bg-accent/50"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-px h-12 bg-transparent group-hover:bg-muted-foreground/40 transition-colors", isResizing && "bg-muted-foreground/40")
                        }, void 0, false, {
                            fileName: "[project]/components/day-view.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/day-view.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-col overflow-hidden", "md:flex md:flex-1", mobileTab === "notes" ? "flex flex-1" : "hidden"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex px-6 py-3 border-b border-border items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-widest text-muted-foreground",
                                        children: "Notes & Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/day-view.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this),
                                    (data.contentBlocks || []).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: [
                                            data.contentBlocks?.length,
                                            " block",
                                            (data.contentBlocks?.length || 0) !== 1 ? "s" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/day-view.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/day-view.tsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 md:p-6 min-h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$content$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentEditor"], {
                                        blocks: data.contentBlocks || [],
                                        onUpdate: handleContentBlocksUpdate
                                    }, void 0, false, {
                                        fileName: "[project]/components/day-view.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/day-view.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/day-view.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/day-view.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/day-view.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/day-view.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(DayView, "B4r4b8aF0N5JFYDnmAZEmG8bpYg=");
_c = DayView;
var _c;
__turbopack_context__.k.register(_c, "DayView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/view-switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewSwitcher",
    ()=>ViewSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
const VIEWS = [
    {
        mode: "year",
        label: "Y"
    },
    {
        mode: "month",
        label: "M"
    },
    {
        mode: "week",
        label: "W"
    },
    {
        mode: "day",
        label: "D"
    }
];
function ViewSwitcher({ view, onViewChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center border border-border",
        children: VIEWS.map(({ mode, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onViewChange(mode),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-5 text-[9px] font-medium tracking-wider transition-colors", "border-r border-border last:border-r-0", view === mode ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"),
                children: label
            }, mode, false, {
                fileName: "[project]/components/view-switcher.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/view-switcher.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = ViewSwitcher;
var _c;
__turbopack_context__.k.register(_c, "ViewSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
            // Check localStorage first, then system preference
            const stored = localStorage.getItem("kair-theme");
            if (stored) {
                setTheme(stored);
                document.documentElement.classList.toggle("dark", stored === "dark");
            } else {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setTheme(prefersDark ? "dark" : "light");
                document.documentElement.classList.toggle("dark", prefersDark);
            }
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("kair-theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-4 rounded-full bg-muted border border-border"
        }, void 0, false, {
            fileName: "[project]/components/theme-toggle.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggleTheme,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-8 h-4 rounded-full transition-colors duration-200", "border border-border", theme === "dark" ? "bg-foreground/20" : "bg-muted"),
        title: `Switch to ${theme === "light" ? "dark" : "light"} mode`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0.5 w-2.5 h-2.5 rounded-full transition-all duration-200", "flex items-center justify-center text-[6px]", theme === "dark" ? "left-[calc(100%-12px)] bg-foreground" : "left-0.5 bg-foreground/70")
        }, void 0, false, {
            fileName: "[project]/components/theme-toggle.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/theme-toggle.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "yJRom449FMCLHbV8U85fR4UAvks=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/omni-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OmniBar",
    ()=>OmniBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function OmniBar({ onAction }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Focus input when expanded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmniBar.useEffect": ()=>{
            if (isExpanded && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["OmniBar.useEffect"], [
        isExpanded
    ]);
    // Scroll to bottom when messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmniBar.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["OmniBar.useEffect"], [
        messages
    ]);
    // Keyboard shortcut to open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OmniBar.useEffect": ()=>{
            const handleKeyDown = {
                "OmniBar.useEffect.handleKeyDown": (e)=>{
                    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                        e.preventDefault();
                        setIsExpanded(true);
                    }
                    if (e.key === "Escape" && isExpanded) {
                        setIsExpanded(false);
                    }
                }
            }["OmniBar.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "OmniBar.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["OmniBar.useEffect"];
        }
    }["OmniBar.useEffect"], [
        isExpanded
    ]);
    const suggestions = [
        {
            id: "today",
            icon: "~",
            label: "Go to today",
            description: "Jump to current date",
            action: ()=>{
                onAction?.({
                    type: "navigate",
                    payload: {
                        date: new Date()
                    }
                });
                addAssistantMessage("Navigated to today.");
            }
        },
        {
            id: "week",
            icon: "W",
            label: "Week view",
            description: "Switch to week view",
            action: ()=>{
                onAction?.({
                    type: "set_view",
                    payload: {
                        view: "week"
                    }
                });
                addAssistantMessage("Switched to week view.");
            }
        },
        {
            id: "month",
            icon: "M",
            label: "Month view",
            description: "Switch to month view",
            action: ()=>{
                onAction?.({
                    type: "set_view",
                    payload: {
                        view: "month"
                    }
                });
                addAssistantMessage("Switched to month view.");
            }
        },
        {
            id: "year",
            icon: "Y",
            label: "Year view",
            description: "See annual overview",
            action: ()=>{
                onAction?.({
                    type: "set_view",
                    payload: {
                        view: "year"
                    }
                });
                addAssistantMessage("Switched to year view.");
            }
        }
    ];
    const addAssistantMessage = (content)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    id: `msg-${Date.now()}`,
                    role: "assistant",
                    content,
                    timestamp: new Date()
                }
            ]);
    };
    const parseNaturalLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OmniBar.useCallback[parseNaturalLanguage]": (text)=>{
            const lower = text.toLowerCase().trim();
            // View switching
            if (lower.includes("year view") || lower === "year" || lower === "y") {
                onAction?.({
                    type: "set_view",
                    payload: {
                        view: "year"
                    }
                });
                return "Switched to year view.";
            }
            if (lower.includes("month view") || lower === "month" || lower === "m") {
                onAction?.({
                    type: "set_view",
                    payload: {
                        view: "month"
                    }
                });
                return "Switched to month view.";
            }
            if (lower.includes("week view") || lower === "week" || lower === "w") {
                onAction?.({
                    type: "set_view",
                    payload: {
                        view: "week"
                    }
                });
                return "Switched to week view.";
            }
            if (lower.includes("day view") || lower === "day" || lower === "d") {
                onAction?.({
                    type: "set_view",
                    payload: {
                        view: "day"
                    }
                });
                return "Switched to day view.";
            }
            // Navigation
            if (lower === "today" || lower === "now" || lower === "go to today") {
                onAction?.({
                    type: "navigate",
                    payload: {
                        date: new Date()
                    }
                });
                return "Navigated to today.";
            }
            if (lower === "tomorrow") {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                onAction?.({
                    type: "navigate",
                    payload: {
                        date: tomorrow
                    }
                });
                return `Navigated to tomorrow (${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES"][tomorrow.getMonth()]} ${tomorrow.getDate()}).`;
            }
            if (lower === "yesterday") {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                onAction?.({
                    type: "navigate",
                    payload: {
                        date: yesterday
                    }
                });
                return `Navigated to yesterday (${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES"][yesterday.getMonth()]} ${yesterday.getDate()}).`;
            }
            // Next/previous week
            if (lower === "next week") {
                const nextWeek = new Date();
                nextWeek.setDate(nextWeek.getDate() + 7);
                onAction?.({
                    type: "navigate",
                    payload: {
                        date: nextWeek
                    }
                });
                onAction?.({
                    type: "set_view",
                    payload: {
                        view: "week"
                    }
                });
                return "Navigated to next week.";
            }
            if (lower === "last week" || lower === "previous week") {
                const lastWeek = new Date();
                lastWeek.setDate(lastWeek.getDate() - 7);
                onAction?.({
                    type: "navigate",
                    payload: {
                        date: lastWeek
                    }
                });
                onAction?.({
                    type: "set_view",
                    payload: {
                        view: "week"
                    }
                });
                return "Navigated to last week.";
            }
            // Month navigation
            const monthMatch = lower.match(/^(january|february|march|april|may|june|july|august|september|october|november|december)$/);
            if (monthMatch) {
                const monthIndex = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES"].findIndex({
                    "OmniBar.useCallback[parseNaturalLanguage].monthIndex": (m)=>m.toLowerCase() === monthMatch[1]
                }["OmniBar.useCallback[parseNaturalLanguage].monthIndex"]);
                if (monthIndex !== -1) {
                    const date = new Date();
                    date.setMonth(monthIndex);
                    date.setDate(1);
                    onAction?.({
                        type: "navigate",
                        payload: {
                            date
                        }
                    });
                    onAction?.({
                        type: "set_view",
                        payload: {
                            view: "month"
                        }
                    });
                    return `Navigated to ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES"][monthIndex]}.`;
                }
            }
            // Add note pattern: "add note: ..." or "note: ..."
            const noteMatch = lower.match(/^(?:add\s+)?note[:\s]+(.+)$/);
            if (noteMatch) {
                onAction?.({
                    type: "add_note",
                    payload: {
                        date: new Date(),
                        note: noteMatch[1]
                    }
                });
                return `Added note to today: "${noteMatch[1]}"`;
            }
            // Add dot pattern - maps to new 7-color palette
            const dotMatch = lower.match(/^(?:add\s+)?(?:dot|marker|mark)\s*(periwinkle|lavender|cream|yellow|sage|green|brown|maroon|magenta|pink|terracotta|orange|gray|grey)?$/);
            if (dotMatch) {
                const colorMap = {
                    periwinkle: 1,
                    lavender: 1,
                    cream: 2,
                    yellow: 2,
                    sage: 3,
                    green: 3,
                    brown: 4,
                    maroon: 4,
                    magenta: 5,
                    pink: 5,
                    terracotta: 6,
                    orange: 6,
                    gray: 7,
                    grey: 7
                };
                const color = dotMatch[1] ? colorMap[dotMatch[1]] : 1;
                onAction?.({
                    type: "add_dot",
                    payload: {
                        date: new Date(),
                        dotColor: color
                    }
                });
                return `Added ${dotMatch[1] || "periwinkle"} marker to today.`;
            }
            // Help
            if (lower === "help" || lower === "?") {
                return "Try: 'today', 'tomorrow', 'next week', 'January', 'year view', 'note: meeting at 3pm', 'add dot red'";
            }
            return "I didn't understand that. Type 'help' for examples.";
        }
    }["OmniBar.useCallback[parseNaturalLanguage]"], [
        onAction
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!input.trim()) return;
        // Add user message
        const userMessage = {
            id: `msg-${Date.now()}`,
            role: "user",
            content: input,
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        // Simulate thinking
        setIsThinking(true);
        setTimeout(()=>{
            const response = parseNaturalLanguage(input);
            addAssistantMessage(response);
            setIsThinking(false);
        }, 300);
    };
    const handleSuggestionClick = (suggestion)=>{
        suggestion.action();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-foreground/5 backdrop-blur-[2px] z-40",
                onClick: ()=>setIsExpanded(false)
            }, void 0, false, {
                fileName: "[project]/components/omni-bar.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 transition-all duration-300 ease-out", isExpanded ? "bottom-0 sm:bottom-8 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:max-w-lg" : "bottom-4 left-1/2 -translate-x-1/2"),
                children: [
                    !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsExpanded(true),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-4 py-2", "bg-card border border-border", "hover:bg-accent/50 transition-colors", "text-muted-foreground hover:text-foreground", "shadow-sm"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] tracking-wider",
                                children: "CMD+K"
                            }, void 0, false, {
                                fileName: "[project]/components/omni-bar.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-muted-foreground/60",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/components/omni-bar.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px]",
                                children: "Ask anything..."
                            }, void 0, false, {
                                fileName: "[project]/components/omni-bar.tsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/omni-bar.tsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this),
                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border shadow-lg flex flex-col overflow-hidden",
                        children: [
                            messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-64 overflow-y-auto border-b border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 space-y-3",
                                    children: [
                                        messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[11px] leading-relaxed", msg.role === "user" ? "text-foreground" : "text-muted-foreground"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] uppercase tracking-wider text-muted-foreground/60 mr-2",
                                                        children: msg.role === "user" ? "you" : "field"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/omni-bar.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 23
                                                    }, this),
                                                    msg.content
                                                ]
                                            }, msg.id, true, {
                                                fileName: "[project]/components/omni-bar.tsx",
                                                lineNumber: 329,
                                                columnNumber: 21
                                            }, this)),
                                        isThinking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] uppercase tracking-wider text-muted-foreground/60 mr-2",
                                                    children: "field"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/omni-bar.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "animate-pulse",
                                                    children: "..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/omni-bar.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/omni-bar.tsx",
                                            lineNumber: 345,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: messagesEndRef
                                        }, void 0, false, {
                                            fileName: "[project]/components/omni-bar.tsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/omni-bar.tsx",
                                    lineNumber: 327,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/omni-bar.tsx",
                                lineNumber: 326,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "p-3 sm:p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground/60 text-[10px]",
                                            children: ">"
                                        }, void 0, false, {
                                            fileName: "[project]/components/omni-bar.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: inputRef,
                                            type: "text",
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            placeholder: "Type a command or ask something...",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 bg-transparent text-sm sm:text-[11px] text-foreground", "placeholder:text-muted-foreground/50", "outline-none py-1")
                                        }, void 0, false, {
                                            fileName: "[project]/components/omni-bar.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] text-muted-foreground/40 hidden sm:block",
                                            children: "ESC"
                                        }, void 0, false, {
                                            fileName: "[project]/components/omni-bar.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/omni-bar.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/omni-bar.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this),
                            messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 pt-0 border-t border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] uppercase tracking-wider text-muted-foreground/50 mb-2",
                                        children: "Quick actions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/omni-bar.tsx",
                                        lineNumber: 380,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-1",
                                        children: suggestions.map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleSuggestionClick(suggestion),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 p-2 text-left", "hover:bg-accent/30 transition-colors", "border border-transparent hover:border-border"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-5 flex items-center justify-center bg-muted text-[10px] text-muted-foreground",
                                                        children: suggestion.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/omni-bar.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-foreground truncate",
                                                                children: suggestion.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/omni-bar.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[9px] text-muted-foreground/60 truncate",
                                                                children: suggestion.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/omni-bar.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/omni-bar.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, suggestion.id, true, {
                                                fileName: "[project]/components/omni-bar.tsx",
                                                lineNumber: 385,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/omni-bar.tsx",
                                        lineNumber: 383,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/omni-bar.tsx",
                                lineNumber: 379,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 border-t border-border bg-muted/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[9px] text-muted-foreground/50 text-center",
                                    children: 'Try: "today" "next week" "January" "note: dentist at 2pm" "help"'
                                }, void 0, false, {
                                    fileName: "[project]/components/omni-bar.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/omni-bar.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/omni-bar.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/omni-bar.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(OmniBar, "NlGZ5EB06Pb0esOxL/LMit+4bCM=");
_c = OmniBar;
var _c;
__turbopack_context__.k.register(_c, "OmniBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/year-calendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YearCalendar",
    ()=>YearCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$month$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/month-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$month$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/month-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$week$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/week-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$day$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/day-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$view$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/view-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omni$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/omni-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const STORAGE_KEY = "field-memo-data";
// Default dot color for legacy compatibility (dots are being phased out in favor of time blocks)
const DEFAULT_DOT_COLOR = 1;
function loadData() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch  {
        return {};
    }
}
function saveData(data) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch  {
    // Storage full or unavailable
    }
}
function YearCalendar() {
    _s();
    const today = new Date();
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("year");
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "YearCalendar.useState": ()=>today.getFullYear()
    }["YearCalendar.useState"]);
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "YearCalendar.useState": ()=>today.getMonth()
    }["YearCalendar.useState"]);
    const [day, setDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "YearCalendar.useState": ()=>today.getDate()
    }["YearCalendar.useState"]);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "YearCalendar.useState": ()=>loadData()
    }["YearCalendar.useState"]);
    const handleDayUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "YearCalendar.useCallback[handleDayUpdate]": (month, day, dayData)=>{
            setData({
                "YearCalendar.useCallback[handleDayUpdate]": (prev)=>{
                    const monthKey = `${year}-${month}`;
                    const newData = {
                        ...prev,
                        [monthKey]: {
                            ...prev[monthKey],
                            [`${day}`]: dayData
                        }
                    };
                    saveData(newData);
                    return newData;
                }
            }["YearCalendar.useCallback[handleDayUpdate]"]);
        }
    }["YearCalendar.useCallback[handleDayUpdate]"], [
        year
    ]);
    const months = Array.from({
        length: 12
    }, (_, i)=>i);
    // Navigation helpers
    const navigatePrev = ()=>{
        if (viewMode === "year") {
            setYear((y)=>y - 1);
        } else if (viewMode === "month") {
            if (month === 0) {
                setMonth(11);
                setYear((y)=>y - 1);
            } else {
                setMonth((m)=>m - 1);
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
    const navigateNext = ()=>{
        if (viewMode === "year") {
            setYear((y)=>y + 1);
        } else if (viewMode === "month") {
            if (month === 11) {
                setMonth(0);
                setYear((y)=>y + 1);
            } else {
                setMonth((m)=>m + 1);
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
    const goToToday = ()=>{
        const now = new Date();
        setYear(now.getFullYear());
        setMonth(now.getMonth());
        setDay(now.getDate());
    };
    const getDateLabel = ()=>{
        if (viewMode === "year") return `${year}`;
        if (viewMode === "month") return `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES"][month]} ${year}`;
        if (viewMode === "week") {
            const weekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekStart"])(new Date(year, month, day));
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekEnd.getDate() + 6);
            const startMonth = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES_SHORT"][weekStart.getMonth()];
            const endMonth = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES_SHORT"][weekEnd.getMonth()];
            if (startMonth === endMonth) {
                return `${startMonth} ${weekStart.getDate()}–${weekEnd.getDate()}, ${year}`;
            }
            return `${startMonth} ${weekStart.getDate()} – ${endMonth} ${weekEnd.getDate()}`;
        }
        return `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTH_NAMES"][month]} ${day}, ${year}`;
    };
    const getData = (y, m, d)=>{
        const monthKey = `${y}-${m}`;
        return data[monthKey]?.[`${d}`] || {
            note: "",
            dots: []
        };
    };
    const handleUpdate = (y, m, d, dayData)=>{
        setData((prev)=>{
            const monthKey = `${y}-${m}`;
            const newData = {
                ...prev,
                [monthKey]: {
                    ...prev[monthKey],
                    [`${d}`]: dayData
                }
            };
            saveData(newData);
            return newData;
        });
    };
    const handleDayClick = (date)=>{
        setYear(date.getFullYear());
        setMonth(date.getMonth());
        setDay(date.getDate());
        setViewMode("day");
    };
    const handleOmniAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "YearCalendar.useCallback[handleOmniAction]": (action)=>{
            switch(action.type){
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
                            note: action.payload.note
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
                        const dots = [
                            ...existing.dots
                        ];
                        if (!dots.includes(action.payload.dotColor)) {
                            dots.push(action.payload.dotColor);
                        }
                        setData({
                            "YearCalendar.useCallback[handleOmniAction]": (prev)=>{
                                const monthKey = `${y}-${m}`;
                                const newData = {
                                    ...prev,
                                    [monthKey]: {
                                        ...prev[monthKey],
                                        [`${dayNum}`]: {
                                            ...existing,
                                            dots
                                        }
                                    }
                                };
                                saveData(newData);
                                return newData;
                            }
                        }["YearCalendar.useCallback[handleOmniAction]"]);
                    }
                    break;
            }
        }
    }["YearCalendar.useCallback[handleOmniAction]"], [
        year,
        month,
        day,
        setData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen flex flex-col overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex-shrink-0 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-2 sm:px-3 py-2 flex items-center justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 sm:gap-4 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[8px] sm:text-[10px] font-medium tracking-widest uppercase text-muted-foreground flex-shrink-0",
                                    children: [
                                        "KAIR° ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "(CAL)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/year-calendar.tsx",
                                            lineNumber: 244,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/year-calendar.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$view$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewSwitcher"], {
                                    view: viewMode,
                                    onViewChange: setViewMode
                                }, void 0, false, {
                                    fileName: "[project]/components/year-calendar.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-0.5 sm:gap-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: navigatePrev,
                                            className: "w-6 h-6 sm:w-5 sm:h-5 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "←"
                                            }, void 0, false, {
                                                fileName: "[project]/components/year-calendar.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/year-calendar.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: goToToday,
                                            className: "text-[9px] sm:text-[10px] font-medium tracking-wider text-foreground min-w-0 sm:min-w-[8rem] text-center hover:text-muted-foreground transition-colors truncate px-1",
                                            children: getDateLabel()
                                        }, void 0, false, {
                                            fileName: "[project]/components/year-calendar.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: navigateNext,
                                            className: "w-6 h-6 sm:w-5 sm:h-5 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/components/year-calendar.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/year-calendar.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/year-calendar.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/year-calendar.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[8px] text-muted-foreground hidden lg:block",
                                    children: "Click to open day"
                                }, void 0, false, {
                                    fileName: "[project]/components/year-calendar.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                    fileName: "[project]/components/year-calendar.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/year-calendar.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/year-calendar.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/year-calendar.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 min-h-0 overflow-hidden",
                children: [
                    viewMode === "year" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-l border-t border-border overflow-y-auto",
                        children: months.map((m)=>{
                            const monthKey = `${year}-${m}`;
                            const monthData = data[monthKey] || {};
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$month$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonthGrid"], {
                                month: m,
                                year: year,
                                data: monthData,
                                onDayUpdate: (d, dayData)=>handleDayUpdate(m, d, dayData),
                                selectedDotColor: DEFAULT_DOT_COLOR,
                                onDayClick: (d)=>handleDayClick(new Date(year, m, d))
                            }, m, false, {
                                fileName: "[project]/components/year-calendar.tsx",
                                lineNumber: 292,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/year-calendar.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this),
                    viewMode === "month" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$month$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonthView"], {
                        year: year,
                        month: month,
                        data: data,
                        onDayUpdate: handleDayUpdate,
                        selectedDotColor: DEFAULT_DOT_COLOR,
                        onDayClick: (d)=>handleDayClick(new Date(year, month, d))
                    }, void 0, false, {
                        fileName: "[project]/components/year-calendar.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    viewMode === "week" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$week$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeekView"], {
                        weekStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekStart"])(new Date(year, month, day)),
                        getData: getData,
                        onUpdate: handleUpdate,
                        selectedDotColor: DEFAULT_DOT_COLOR,
                        onDayClick: handleDayClick
                    }, void 0, false, {
                        fileName: "[project]/components/year-calendar.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this),
                    viewMode === "day" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$day$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayView"], {
                        date: new Date(year, month, day),
                        data: getData(year, month, day),
                        onUpdate: (dayData)=>handleUpdate(year, month, day, dayData)
                    }, void 0, false, {
                        fileName: "[project]/components/year-calendar.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/year-calendar.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$omni$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OmniBar"], {
                onAction: handleOmniAction
            }, void 0, false, {
                fileName: "[project]/components/year-calendar.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/year-calendar.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
_s(YearCalendar, "zZdEUKipY4p2WVtJp2Pyfz3Px6Y=");
_c = YearCalendar;
var _c;
__turbopack_context__.k.register(_c, "YearCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2731d63b._.js.map