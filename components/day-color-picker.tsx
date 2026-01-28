"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { DAY_COLORS, type DayColorCode } from "./calendar-types";

interface DayColorPickerProps {
  currentColor: DayColorCode;
  onColorChange: (color: DayColorCode) => void;
  onClose: () => void;
  position: { x: number; y: number };
  dateLabel?: string;
}

export function DayColorPicker({
  currentColor,
  onColorChange,
  onClose,
  position,
  dateLabel,
}: DayColorPickerProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Adjust position to stay in viewport
  const adjustedPosition = { ...position };
  if (typeof window !== "undefined") {
    const menuWidth = 200;
    const menuHeight = 320;
    if (position.x + menuWidth > window.innerWidth) {
      adjustedPosition.x = window.innerWidth - menuWidth - 8;
    }
    if (position.y + menuHeight > window.innerHeight) {
      adjustedPosition.y = window.innerHeight - menuHeight - 8;
    }
  }

  return (
    <div
      ref={ref}
      className="fixed z-[100] bg-popover border border-border shadow-lg rounded-sm py-1 min-w-[180px]"
      style={{ left: adjustedPosition.x, top: adjustedPosition.y }}
    >
      {dateLabel && (
        <div className="px-3 py-1.5 border-b border-border mb-1">
          <div className="text-[9px] uppercase tracking-wider text-muted-foreground">
            Set Day Theme
          </div>
          <div className="text-[11px] font-medium text-foreground">
            {dateLabel}
          </div>
        </div>
      )}
      
      <div className="px-1">
        {(Object.entries(DAY_COLORS) as [string, typeof DAY_COLORS[1]][]).map(
          ([code, info]) => {
            const colorCode = Number(code) as Exclude<DayColorCode, null>;
            return (
              <button
                key={code}
                type="button"
                onClick={() => onColorChange(colorCode)}
                className={cn(
                  "w-full flex items-center gap-2.5 px-2 py-1.5 text-left transition-colors rounded-sm",
                  "hover:bg-accent",
                  currentColor === colorCode && "bg-accent"
                )}
              >
                <div className={cn("w-3 h-3 rounded-full flex-shrink-0", info.bgClassSolid)} />
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-medium">{info.label}</div>
                  <div className="text-[9px] text-muted-foreground leading-tight">{info.description}</div>
                </div>
                {currentColor === colorCode && (
                  <span className="text-[9px] text-muted-foreground">*</span>
                )}
              </button>
            );
          }
        )}
      </div>
      
      {currentColor && (
        <>
          <div className="border-t border-border my-1" />
          <div className="px-1">
            <button
              type="button"
              onClick={() => onColorChange(null)}
              className="w-full flex items-center gap-2.5 px-2 py-1.5 text-left hover:bg-accent transition-colors rounded-sm"
            >
              <div className="w-3 h-3 rounded-full flex-shrink-0 border border-muted-foreground/40 bg-background" />
              <span className="text-[11px] text-muted-foreground">Clear theme</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
