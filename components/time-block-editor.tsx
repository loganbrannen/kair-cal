"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  type TimeBlock,
  type TimeBlockCategory,
  BLOCK_CATEGORIES,
  generateId,
  formatTimeRange,
  addMinutesToTime,
} from "./calendar-types";

interface TimeBlockEditorProps {
  blocks: TimeBlock[];
  onUpdate: (blocks: TimeBlock[]) => void;
}

const CATEGORY_KEYS = Object.keys(BLOCK_CATEGORIES) as TimeBlockCategory[];

// Quick duration options matching quick add popover
const QUICK_DURATIONS = [15, 30, 45, 60, 90, 120];

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

// Get next available start time based on existing blocks
function getNextAvailableTime(blocks: TimeBlock[]): string {
  if (blocks.length === 0) return "09:00";
  const sorted = [...blocks].sort((a, b) => a.endTime.localeCompare(b.endTime));
  const lastEnd = sorted[sorted.length - 1].endTime;
  return lastEnd;
}

export function TimeBlockEditor({ blocks, onUpdate }: TimeBlockEditorProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState(60); // Default 1 hour
  const [newBlock, setNewBlock] = useState<Partial<TimeBlock>>(() => {
    const start = getNextAvailableTime(blocks);
    return {
      startTime: start,
      endTime: addMinutesToTime(start, 60),
      title: "",
      category: "focus",
    };
  });

  const openAddForm = () => {
    const start = getNextAvailableTime(blocks);
    setNewBlock({
      startTime: start,
      endTime: addMinutesToTime(start, selectedDuration),
      title: "",
      category: "focus",
    });
    setIsAdding(true);
  };

  const handleDurationChange = (minutes: number) => {
    setSelectedDuration(minutes);
    setNewBlock((prev) => ({
      ...prev,
      endTime: addMinutesToTime(prev.startTime || "09:00", minutes),
    }));
  };

  const handleStartTimeChange = (startTime: string) => {
    setNewBlock((prev) => ({
      ...prev,
      startTime,
      endTime: addMinutesToTime(startTime, selectedDuration),
    }));
  };

  const addBlock = () => {
    if (!newBlock.title?.trim()) return;
    const block: TimeBlock = {
      id: generateId(),
      startTime: newBlock.startTime || "09:00",
      endTime: newBlock.endTime || "10:00",
      title: newBlock.title,
      category: newBlock.category || "focus",
    };
    onUpdate([...blocks, block].sort((a, b) => a.startTime.localeCompare(b.startTime)));
    setIsAdding(false);
  };

  const updateBlock = (id: string, updates: Partial<TimeBlock>) => {
    onUpdate(
      blocks
        .map((b) => (b.id === id ? { ...b, ...updates } : b))
        .sort((a, b) => a.startTime.localeCompare(b.startTime))
    );
  };

  const deleteBlock = (id: string) => {
    onUpdate(blocks.filter((b) => b.id !== id));
    setEditingId(null);
  };

  return (
    <div className="space-y-1.5">
      {/* Existing blocks */}
      {blocks.map((block) => {
        const cat = BLOCK_CATEGORIES[block.category];

        if (editingId === block.id) {
          return (
            <div key={block.id} className="flex flex-col gap-3 p-3 border border-dashed border-border rounded-md">
              {/* Title input */}
              <input
                type="text"
                value={block.title}
                onChange={(e) => updateBlock(block.id, { title: e.target.value })}
                className="w-full text-sm bg-transparent border-b border-border/50 px-0 py-2 outline-none focus:border-foreground transition-colors"
                autoFocus
              />
              
              {/* Time row */}
              <div className="flex items-center gap-2 text-sm">
                <input
                  type="time"
                  value={block.startTime}
                  onChange={(e) => updateBlock(block.id, { startTime: e.target.value })}
                  className="bg-muted/50 px-2 py-1 rounded text-sm outline-none focus:ring-1 focus:ring-foreground/20 w-[90px]"
                />
                <span className="text-muted-foreground">–</span>
                <input
                  type="time"
                  value={block.endTime}
                  onChange={(e) => updateBlock(block.id, { endTime: e.target.value })}
                  className="bg-muted/50 px-2 py-1 rounded text-sm outline-none focus:ring-1 focus:ring-foreground/20 w-[90px]"
                />
              </div>
              
              {/* Category - color dots */}
              <div className="flex items-center gap-1">
                {CATEGORY_KEYS.map((catKey) => {
                  const c = BLOCK_CATEGORIES[catKey];
                  const isSelected = block.category === catKey;
                  const colorClass = c.borderClass.replace("border-", "bg-");
                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() => updateBlock(block.id, { category: catKey })}
                      className={cn(
                        "group relative w-6 h-6 rounded-full flex items-center justify-center transition-all",
                        isSelected ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "hover:scale-110"
                      )}
                      title={c.label}
                    >
                      <span className={cn("w-4 h-4 rounded-full", colorClass)} />
                    </button>
                  );
                })}
                <span className="text-xs text-muted-foreground ml-2">
                  {BLOCK_CATEGORIES[block.category].label}
                </span>
              </div>
              
              {/* Actions */}
              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => deleteBlock(block.id)}
                  className="text-sm px-3 py-1.5 text-destructive hover:bg-destructive/10 rounded transition-colors"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="text-sm px-4 py-1.5 bg-foreground text-background hover:bg-foreground/90 rounded-full transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          );
        }

        // Fallback for legacy categories
        if (!cat) {
          return (
            <div
              key={block.id}
              onClick={() => setEditingId(block.id)}
              className="cursor-pointer px-2 py-1.5 border-l-2 rounded-r-sm bg-muted/50 border-muted-foreground/50 hover:bg-muted/70 transition-colors"
            >
              <div className="text-[10px] font-medium truncate">{block.title}</div>
              <div className="text-[9px] text-muted-foreground">
                {formatTimeRange(block.startTime, block.endTime)}
              </div>
            </div>
          );
        }

        return (
          <div
            key={block.id}
            onClick={() => setEditingId(block.id)}
            className={cn(
              "cursor-pointer px-3 py-2 sm:px-2 sm:py-1.5 border-l-2 rounded-r-sm hover:opacity-80 transition-opacity active:opacity-70",
              cat.bgClass,
              cat.borderClass
            )}
          >
            <div className="text-xs sm:text-[10px] font-medium truncate">{block.title}</div>
            <div className="text-[10px] sm:text-[9px] text-muted-foreground">
              {formatTimeRange(block.startTime, block.endTime)}
            </div>
          </div>
        );
      })}

      {/* Add new block form - matching quick add popover style */}
      {isAdding ? (
        <div className="flex flex-col gap-3 p-3 border border-dashed border-border rounded-md">
          {/* Title input - clean underline style */}
          <input
            type="text"
            value={newBlock.title}
            onChange={(e) => setNewBlock({ ...newBlock, title: e.target.value })}
            placeholder="Add title"
            className="w-full text-sm bg-transparent border-b border-border/50 px-0 py-2 placeholder:text-muted-foreground/40 outline-none focus:border-foreground transition-colors"
            autoFocus
            onKeyDown={(e) => e.key === "Enter" && addBlock()}
          />

          {/* Time row */}
          <div className="flex items-center gap-2 text-sm">
            <input
              type="time"
              value={newBlock.startTime}
              onChange={(e) => handleStartTimeChange(e.target.value)}
              className="bg-muted/50 px-2 py-1 rounded text-sm outline-none focus:ring-1 focus:ring-foreground/20 w-[90px]"
            />
            <span className="text-muted-foreground">–</span>
            <span className="text-muted-foreground tabular-nums">
              {newBlock.endTime && formatTimeRange(newBlock.startTime!, newBlock.endTime).split('-')[1]}
            </span>
          </div>

          {/* Duration pills - compact row */}
          <div className="flex gap-1">
            {QUICK_DURATIONS.map((mins) => (
              <button
                key={mins}
                type="button"
                onClick={() => handleDurationChange(mins)}
                className={cn(
                  "text-xs px-2 py-1 rounded transition-all",
                  selectedDuration === mins
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {formatDuration(mins)}
              </button>
            ))}
          </div>

          {/* Category - color dots */}
          <div className="flex items-center gap-1">
            {CATEGORY_KEYS.map((catKey) => {
              const c = BLOCK_CATEGORIES[catKey];
              const isSelected = newBlock.category === catKey;
              const colorClass = c.borderClass.replace("border-", "bg-");
              return (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setNewBlock({ ...newBlock, category: catKey })}
                  className={cn(
                    "group relative w-6 h-6 rounded-full flex items-center justify-center transition-all",
                    isSelected ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "hover:scale-110"
                  )}
                  title={c.label}
                >
                  <span className={cn("w-4 h-4 rounded-full", colorClass)} />
                </button>
              );
            })}
            <span className="text-xs text-muted-foreground ml-2">
              {BLOCK_CATEGORIES[newBlock.category || "focus"].label}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="text-sm px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={addBlock}
              disabled={!newBlock.title?.trim()}
              className="text-sm px-4 py-1.5 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={openAddForm}
          className="w-full text-[11px] sm:text-[10px] uppercase tracking-wider text-muted-foreground hover:text-foreground py-3 sm:py-2 border border-dashed border-border hover:border-foreground/30 active:bg-accent/30 transition-colors rounded-sm"
        >
          + Add Time Block
        </button>
      )}
    </div>
  );
}
