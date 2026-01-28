"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  type TimeBlock,
  type TimeBlockCategory,
  BLOCK_CATEGORIES,
  DURATION_PRESETS,
  generateId,
  formatTimeRange,
  addMinutesToTime,
} from "./calendar-types";

interface TimeBlockEditorProps {
  blocks: TimeBlock[];
  onUpdate: (blocks: TimeBlock[]) => void;
}

const CATEGORY_KEYS = Object.keys(BLOCK_CATEGORIES) as TimeBlockCategory[];

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
            <div key={block.id} className="flex flex-col gap-2 p-2 border border-dashed border-border rounded-sm">
              <input
                type="text"
                value={block.title}
                onChange={(e) => updateBlock(block.id, { title: e.target.value })}
                className="text-xs bg-transparent border-b border-border px-1 py-1 outline-none"
                autoFocus
              />
              <div className="flex gap-1 items-center">
                <input
                  type="time"
                  value={block.startTime}
                  onChange={(e) => updateBlock(block.id, { startTime: e.target.value })}
                  className="w-[4.5rem] text-[10px] bg-transparent border border-border px-1 py-0.5 rounded-sm"
                />
                <span className="text-[10px] text-muted-foreground">to</span>
                <input
                  type="time"
                  value={block.endTime}
                  onChange={(e) => updateBlock(block.id, { endTime: e.target.value })}
                  className="w-[4.5rem] text-[10px] bg-transparent border border-border px-1 py-0.5 rounded-sm"
                />
              </div>
              <div className="flex gap-1 flex-wrap">
                {CATEGORY_KEYS.map((catKey) => {
                  const c = BLOCK_CATEGORIES[catKey];
                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() => updateBlock(block.id, { category: catKey })}
                      className={cn(
                        "text-[8px] uppercase tracking-wider px-1.5 py-0.5 border rounded-sm transition-colors",
                        block.category === catKey
                          ? cn(c.bgClass, c.borderClass)
                          : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
                      )}
                    >
                      {c.label}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-1 mt-1">
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-muted hover:bg-muted/80 rounded-sm"
                >
                  Done
                </button>
                <button
                  type="button"
                  onClick={() => deleteBlock(block.id)}
                  className="text-[9px] uppercase tracking-wider px-2 py-0.5 text-destructive hover:bg-destructive/10 rounded-sm"
                >
                  Delete
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

      {/* Add new block form */}
      {isAdding ? (
        <div className="flex flex-col gap-2.5 p-2 border border-dashed border-border rounded-sm">
          {/* Title input */}
          <input
            type="text"
            value={newBlock.title}
            onChange={(e) => setNewBlock({ ...newBlock, title: e.target.value })}
            placeholder="What are you doing?"
            className="text-xs bg-transparent border-b border-border px-1 py-1 placeholder:text-muted-foreground/50 outline-none"
            autoFocus
            onKeyDown={(e) => e.key === "Enter" && addBlock()}
          />

          {/* Quick duration presets */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Duration</span>
            <div className="flex gap-1 flex-wrap">
              {DURATION_PRESETS.map((preset) => (
                <button
                  key={preset.minutes}
                  type="button"
                  onClick={() => handleDurationChange(preset.minutes)}
                  className={cn(
                    "text-[9px] px-2 py-0.5 border rounded-sm transition-colors",
                    selectedDuration === preset.minutes
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
                  )}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Start time with auto end time */}
          <div className="flex gap-2 items-center">
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Start</span>
              <input
                type="time"
                value={newBlock.startTime}
                onChange={(e) => handleStartTimeChange(e.target.value)}
                className="w-[5rem] text-[10px] bg-transparent border border-border px-1.5 py-1 rounded-sm"
              />
            </div>
            <span className="text-muted-foreground mt-4">→</span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground">End</span>
              <span className="text-[10px] px-1.5 py-1 text-muted-foreground">
                {newBlock.endTime && formatTimeRange(newBlock.startTime!, newBlock.endTime).split('-')[1]}
              </span>
            </div>
          </div>

          {/* Category selector */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Category</span>
            <div className="flex gap-1 flex-wrap">
              {CATEGORY_KEYS.map((catKey) => {
                const c = BLOCK_CATEGORIES[catKey];
                return (
                  <button
                    key={catKey}
                    type="button"
                    onClick={() => setNewBlock({ ...newBlock, category: catKey })}
                    className={cn(
                      "text-[8px] uppercase tracking-wider px-1.5 py-0.5 border rounded-sm transition-colors",
                      newBlock.category === catKey
                        ? cn(c.bgClass, c.borderClass)
                        : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
                    )}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-1 pt-1">
            <button
              type="button"
              onClick={addBlock}
              disabled={!newBlock.title?.trim()}
              className="text-[10px] uppercase tracking-wider px-3 py-1 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
            >
              Add Block
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="text-[10px] uppercase tracking-wider px-3 py-1 text-muted-foreground hover:text-foreground rounded-sm"
            >
              Cancel
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
