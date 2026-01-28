"use client";

import React from "react"

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { type DotColor, MONTH_NAMES } from "./calendar-types";

interface OmniBarProps {
  onAction?: (action: CalendarAction) => void;
}

export interface CalendarAction {
  type: "add_note" | "add_dot" | "navigate" | "set_view";
  payload: {
    date?: Date;
    note?: string;
    dotColor?: DotColor;
    view?: "year" | "month" | "week" | "day";
  };
}

interface Suggestion {
  id: string;
  icon: string;
  label: string;
  description: string;
  action: () => void;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function OmniBar({ onAction }: OmniBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Keyboard shortcut to open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsExpanded(true);
      }
      if (e.key === "Escape" && isExpanded) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  const suggestions: Suggestion[] = [
    {
      id: "today",
      icon: "~",
      label: "Go to today",
      description: "Jump to current date",
      action: () => {
        onAction?.({
          type: "navigate",
          payload: { date: new Date() },
        });
        addAssistantMessage("Navigated to today.");
      },
    },
    {
      id: "week",
      icon: "W",
      label: "Week view",
      description: "Switch to week view",
      action: () => {
        onAction?.({
          type: "set_view",
          payload: { view: "week" },
        });
        addAssistantMessage("Switched to week view.");
      },
    },
    {
      id: "month",
      icon: "M",
      label: "Month view",
      description: "Switch to month view",
      action: () => {
        onAction?.({
          type: "set_view",
          payload: { view: "month" },
        });
        addAssistantMessage("Switched to month view.");
      },
    },
    {
      id: "year",
      icon: "Y",
      label: "Year view",
      description: "See annual overview",
      action: () => {
        onAction?.({
          type: "set_view",
          payload: { view: "year" },
        });
        addAssistantMessage("Switched to year view.");
      },
    },
  ];

  const addAssistantMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content,
        timestamp: new Date(),
      },
    ]);
  };

  const parseNaturalLanguage = useCallback((text: string): string => {
    const lower = text.toLowerCase().trim();
    
    // View switching
    if (lower.includes("year view") || lower === "year" || lower === "y") {
      onAction?.({ type: "set_view", payload: { view: "year" } });
      return "Switched to year view.";
    }
    if (lower.includes("month view") || lower === "month" || lower === "m") {
      onAction?.({ type: "set_view", payload: { view: "month" } });
      return "Switched to month view.";
    }
    if (lower.includes("week view") || lower === "week" || lower === "w") {
      onAction?.({ type: "set_view", payload: { view: "week" } });
      return "Switched to week view.";
    }
    if (lower.includes("day view") || lower === "day" || lower === "d") {
      onAction?.({ type: "set_view", payload: { view: "day" } });
      return "Switched to day view.";
    }
    
    // Navigation
    if (lower === "today" || lower === "now" || lower === "go to today") {
      onAction?.({ type: "navigate", payload: { date: new Date() } });
      return "Navigated to today.";
    }
    if (lower === "tomorrow") {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      onAction?.({ type: "navigate", payload: { date: tomorrow } });
      return `Navigated to tomorrow (${MONTH_NAMES[tomorrow.getMonth()]} ${tomorrow.getDate()}).`;
    }
    if (lower === "yesterday") {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      onAction?.({ type: "navigate", payload: { date: yesterday } });
      return `Navigated to yesterday (${MONTH_NAMES[yesterday.getMonth()]} ${yesterday.getDate()}).`;
    }
    
    // Next/previous week
    if (lower === "next week") {
      const nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);
      onAction?.({ type: "navigate", payload: { date: nextWeek } });
      onAction?.({ type: "set_view", payload: { view: "week" } });
      return "Navigated to next week.";
    }
    if (lower === "last week" || lower === "previous week") {
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      onAction?.({ type: "navigate", payload: { date: lastWeek } });
      onAction?.({ type: "set_view", payload: { view: "week" } });
      return "Navigated to last week.";
    }
    
    // Month navigation
    const monthMatch = lower.match(/^(january|february|march|april|may|june|july|august|september|october|november|december)$/);
    if (monthMatch) {
      const monthIndex = MONTH_NAMES.findIndex(
        (m) => m.toLowerCase() === monthMatch[1]
      );
      if (monthIndex !== -1) {
        const date = new Date();
        date.setMonth(monthIndex);
        date.setDate(1);
        onAction?.({ type: "navigate", payload: { date } });
        onAction?.({ type: "set_view", payload: { view: "month" } });
        return `Navigated to ${MONTH_NAMES[monthIndex]}.`;
      }
    }
    
    // Add note pattern: "add note: ..." or "note: ..."
    const noteMatch = lower.match(/^(?:add\s+)?note[:\s]+(.+)$/);
    if (noteMatch) {
      onAction?.({
        type: "add_note",
        payload: { date: new Date(), note: noteMatch[1] },
      });
      return `Added note to today: "${noteMatch[1]}"`;
    }
    
    // Add dot pattern - maps to new 7-color palette
    const dotMatch = lower.match(/^(?:add\s+)?(?:dot|marker|mark)\s*(periwinkle|lavender|cream|yellow|sage|green|brown|maroon|magenta|pink|terracotta|orange|gray|grey)?$/);
    if (dotMatch) {
      const colorMap: Record<string, DotColor> = {
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
        grey: 7,
      };
      const color = dotMatch[1] ? colorMap[dotMatch[1]] : 1;
      onAction?.({
        type: "add_dot",
        payload: { date: new Date(), dotColor: color },
      });
      return `Added ${dotMatch[1] || "periwinkle"} marker to today.`;
    }
    
    // Help
    if (lower === "help" || lower === "?") {
      return "Try: 'today', 'tomorrow', 'next week', 'January', 'year view', 'note: meeting at 3pm', 'add dot red'";
    }
    
    return "I didn't understand that. Type 'help' for examples.";
  }, [onAction]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate thinking
    setIsThinking(true);
    setTimeout(() => {
      const response = parseNaturalLanguage(input);
      addAssistantMessage(response);
      setIsThinking(false);
    }, 300);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    suggestion.action();
  };

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-foreground/5 backdrop-blur-[2px] z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Omni Bar */}
      <div
        className={cn(
          "fixed z-50 transition-all duration-300 ease-out",
          isExpanded
            ? "bottom-0 sm:bottom-8 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:max-w-lg"
            : "bottom-4 left-1/2 -translate-x-1/2"
        )}
      >
        {/* Collapsed state - floating pill */}
        {!isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className={cn(
              "flex items-center gap-2 px-4 py-2",
              "bg-card border border-border",
              "hover:bg-accent/50 transition-colors",
              "text-muted-foreground hover:text-foreground",
              "shadow-sm"
            )}
          >
            <span className="text-[10px] tracking-wider">CMD+K</span>
            <span className="text-[10px] text-muted-foreground/60">|</span>
            <span className="text-[10px]">Ask anything...</span>
          </button>
        )}

        {/* Expanded state */}
        {isExpanded && (
          <div className="bg-card border border-border shadow-lg flex flex-col overflow-hidden">
            {/* Messages area */}
            {messages.length > 0 && (
              <div className="max-h-64 overflow-y-auto border-b border-border">
                <div className="p-3 space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={cn(
                        "text-[11px] leading-relaxed",
                        msg.role === "user"
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 mr-2">
                        {msg.role === "user" ? "you" : "field"}
                      </span>
                      {msg.content}
                    </div>
                  ))}
                  {isThinking && (
                    <div className="text-[11px] text-muted-foreground">
                      <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 mr-2">
                        field
                      </span>
                      <span className="animate-pulse">...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 sm:p-3">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground/60 text-[10px]">&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a command or ask something..."
                  className={cn(
                    "flex-1 bg-transparent text-sm sm:text-[11px] text-foreground",
                    "placeholder:text-muted-foreground/50",
                    "outline-none py-1"
                  )}
                />
                <span className="text-[9px] text-muted-foreground/40 hidden sm:block">ESC</span>
              </div>
            </form>

            {/* Suggestions */}
            {messages.length === 0 && (
              <div className="p-3 pt-0 border-t border-border">
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground/50 mb-2">
                  Quick actions
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      type="button"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={cn(
                        "flex items-center gap-2 p-2 text-left",
                        "hover:bg-accent/30 transition-colors",
                        "border border-transparent hover:border-border"
                      )}
                    >
                      <span className="w-5 h-5 flex items-center justify-center bg-muted text-[10px] text-muted-foreground">
                        {suggestion.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-foreground truncate">
                          {suggestion.label}
                        </div>
                        <div className="text-[9px] text-muted-foreground/60 truncate">
                          {suggestion.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer hint */}
            <div className="px-3 py-2 border-t border-border bg-muted/30">
              <div className="text-[9px] text-muted-foreground/50 text-center">
                Try: "today" "next week" "January" "note: dentist at 2pm" "help"
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
