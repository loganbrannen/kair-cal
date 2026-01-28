"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { MONTH_NAMES } from "./calendar-types";

export interface CalendarAction {
  type: "navigate" | "set_view" | "add_note" | "add_dot" | "undo" | "redo" | "toggle_theme" | "new_event";
  payload: {
    date?: Date;
    note?: string;
    dotColor?: number;
    view?: "year" | "month" | "week" | "day";
  };
}

interface OmniBarProps {
  onAction?: (action: CalendarAction) => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

interface Command {
  id: string;
  label: string;
  shortcut?: string;
  group: string;
  action: () => void;
}

export function OmniBar({ onAction, canUndo = false, canRedo = false }: OmniBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Define all commands
  const commands = useMemo<Command[]>(() => {
    const cmds: Command[] = [
      // Actions (most common first)
      {
        id: "new-event",
        label: "New event",
        shortcut: "N",
        group: "Actions",
        action: () => {
          onAction?.({ type: "new_event", payload: { date: new Date() } });
          setIsOpen(false);
        },
      },
      {
        id: "undo",
        label: canUndo ? "Undo last change" : "Undo (nothing to undo)",
        shortcut: "⌘Z",
        group: "Actions",
        action: () => {
          if (canUndo) {
            onAction?.({ type: "undo", payload: {} });
          }
          setIsOpen(false);
        },
      },
      {
        id: "redo",
        label: canRedo ? "Redo" : "Redo (nothing to redo)",
        shortcut: "⌘⇧Z",
        group: "Actions",
        action: () => {
          if (canRedo) {
            onAction?.({ type: "redo", payload: {} });
          }
          setIsOpen(false);
        },
      },
      {
        id: "toggle-theme",
        label: "Toggle dark/light mode",
        shortcut: "\\",
        group: "Actions",
        action: () => {
          onAction?.({ type: "toggle_theme", payload: {} });
          setIsOpen(false);
        },
      },
      // Navigation
      {
        id: "today",
        label: "Go to today",
        shortcut: "T",
        group: "Navigation",
        action: () => {
          onAction?.({ type: "navigate", payload: { date: new Date() } });
          setIsOpen(false);
        },
      },
      {
        id: "tomorrow",
        label: "Go to tomorrow",
        group: "Navigation",
        action: () => {
          const d = new Date();
          d.setDate(d.getDate() + 1);
          onAction?.({ type: "navigate", payload: { date: d } });
          setIsOpen(false);
        },
      },
      {
        id: "yesterday",
        label: "Go to yesterday",
        group: "Navigation",
        action: () => {
          const d = new Date();
          d.setDate(d.getDate() - 1);
          onAction?.({ type: "navigate", payload: { date: d } });
          setIsOpen(false);
        },
      },
      {
        id: "next-week",
        label: "Next week",
        group: "Navigation",
        action: () => {
          const d = new Date();
          d.setDate(d.getDate() + 7);
          onAction?.({ type: "navigate", payload: { date: d } });
          onAction?.({ type: "set_view", payload: { view: "week" } });
          setIsOpen(false);
        },
      },
      {
        id: "prev-week",
        label: "Previous week",
        group: "Navigation",
        action: () => {
          const d = new Date();
          d.setDate(d.getDate() - 7);
          onAction?.({ type: "navigate", payload: { date: d } });
          onAction?.({ type: "set_view", payload: { view: "week" } });
          setIsOpen(false);
        },
      },
      // Views
      {
        id: "year-view",
        label: "Year view",
        shortcut: "Y",
        group: "Views",
        action: () => {
          onAction?.({ type: "set_view", payload: { view: "year" } });
          setIsOpen(false);
        },
      },
      {
        id: "month-view",
        label: "Month view",
        shortcut: "M",
        group: "Views",
        action: () => {
          onAction?.({ type: "set_view", payload: { view: "month" } });
          setIsOpen(false);
        },
      },
      {
        id: "week-view",
        label: "Week view",
        shortcut: "W",
        group: "Views",
        action: () => {
          onAction?.({ type: "set_view", payload: { view: "week" } });
          setIsOpen(false);
        },
      },
      {
        id: "day-view",
        label: "Day view",
        shortcut: "D",
        group: "Views",
        action: () => {
          onAction?.({ type: "set_view", payload: { view: "day" } });
          setIsOpen(false);
        },
      },
      // Month navigation
      ...MONTH_NAMES.map((name, index) => ({
        id: `month-${index}`,
        label: `Go to ${name}`,
        group: "Months",
        action: () => {
          const d = new Date();
          d.setMonth(index);
          d.setDate(1);
          onAction?.({ type: "navigate", payload: { date: d } });
          onAction?.({ type: "set_view", payload: { view: "month" } });
          setIsOpen(false);
        },
      })),
    ];
    return cmds;
  }, [onAction, canUndo, canRedo]);

  // Filter commands based on search
  const filteredCommands = useMemo(() => {
    if (!search) return commands;
    const lower = search.toLowerCase();
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(lower) ||
        cmd.group.toLowerCase().includes(lower)
    );
  }, [commands, search]);

  // Group filtered commands
  const groupedCommands = useMemo(() => {
    const groups: Record<string, Command[]> = {};
    for (const cmd of filteredCommands) {
      if (!groups[cmd.group]) groups[cmd.group] = [];
      groups[cmd.group].push(cmd);
    }
    return groups;
  }, [filteredCommands]);

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInInput = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA";
      
      // Cmd+K to open command palette (works everywhere)
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        return;
      }

      // Cmd+Z for undo (works everywhere except inputs)
      if ((e.metaKey || e.ctrlKey) && e.key === "z" && !e.shiftKey && !isInInput) {
        e.preventDefault();
        if (canUndo) {
          onAction?.({ type: "undo", payload: {} });
        }
        return;
      }

      // Cmd+Shift+Z for redo (works everywhere except inputs)
      if ((e.metaKey || e.ctrlKey) && e.key === "z" && e.shiftKey && !isInInput) {
        e.preventDefault();
        if (canRedo) {
          onAction?.({ type: "redo", payload: {} });
        }
        return;
      }

      // Global shortcuts when not in an input and palette is closed
      if (!isInInput && !isOpen) {
        // T for today
        if (e.key === "t" && !e.metaKey && !e.ctrlKey) {
          onAction?.({ type: "navigate", payload: { date: new Date() } });
          return;
        }
        // N for new event
        if (e.key === "n" && !e.metaKey && !e.ctrlKey) {
          onAction?.({ type: "new_event", payload: { date: new Date() } });
          return;
        }
        // \ (backslash) for toggle theme
        if ((e.key === "\\" || e.code === "Backslash") && !e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          onAction?.({ type: "toggle_theme", payload: {} });
          return;
        }
        // Y/M/W/D for views
        if (e.key === "y" && !e.metaKey && !e.ctrlKey) {
          onAction?.({ type: "set_view", payload: { view: "year" } });
          return;
        }
        if (e.key === "m" && !e.metaKey && !e.ctrlKey) {
          onAction?.({ type: "set_view", payload: { view: "month" } });
          return;
        }
        if (e.key === "w" && !e.metaKey && !e.ctrlKey) {
          onAction?.({ type: "set_view", payload: { view: "week" } });
          return;
        }
        if (e.key === "d" && !e.metaKey && !e.ctrlKey) {
          onAction?.({ type: "set_view", payload: { view: "day" } });
          return;
        }
      }

      // When palette is open
      if (isOpen) {
        if (e.key === "Escape") {
          setIsOpen(false);
          return;
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((i) => Math.min(i + 1, filteredCommands.length - 1));
          return;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((i) => Math.max(i - 1, 0));
          return;
        }
        if (e.key === "Enter") {
          e.preventDefault();
          filteredCommands[selectedIndex]?.action();
          return;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onAction, canUndo, canRedo]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selectedEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      selectedEl?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Command Palette */}
      {isOpen && (
        <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-md z-50">
          <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
            {/* Search input */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
              <span className="text-muted-foreground text-sm">⌘</span>
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
              />
              <kbd className="text-[10px] text-muted-foreground/60 px-1.5 py-0.5 bg-muted rounded">
                ESC
              </kbd>
            </div>

            {/* Commands list */}
            <div ref={listRef} className="max-h-80 overflow-y-auto py-1">
              {Object.entries(groupedCommands).map(([group, cmds]) => (
                <div key={group}>
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground/60">
                    {group}
                  </div>
                  {cmds.map((cmd) => {
                    const globalIndex = filteredCommands.indexOf(cmd);
                    return (
                      <button
                        key={cmd.id}
                        type="button"
                        data-index={globalIndex}
                        onClick={() => cmd.action()}
                        onMouseEnter={() => setSelectedIndex(globalIndex)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2 text-sm text-left transition-colors",
                          globalIndex === selectedIndex
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground hover:bg-accent/50"
                        )}
                      >
                        <span>{cmd.label}</span>
                        {cmd.shortcut && (
                          <kbd className="text-[10px] text-muted-foreground px-1.5 py-0.5 bg-muted rounded">
                            {cmd.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
              {filteredCommands.length === 0 && (
                <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                  No commands found
                </div>
              )}
            </div>

            {/* Footer with keyboard hints */}
            <div className="flex items-center justify-between px-3 py-2 border-t border-border bg-muted/30 text-[10px] text-muted-foreground">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="px-1 py-0.5 bg-muted rounded mr-1">↑↓</kbd>
                  navigate
                </span>
                <span>
                  <kbd className="px-1 py-0.5 bg-muted rounded mr-1">↵</kbd>
                  select
                </span>
              </div>
              <div>
                <kbd className="px-1 py-0.5 bg-muted rounded mr-1">⌘K</kbd>
                open
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-md shadow-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors"
        >
          <kbd className="text-[10px] px-1.5 py-0.5 bg-muted rounded">⌘K</kbd>
          <span className="text-xs">Commands</span>
        </button>
      </div>
    </>
  );
}
