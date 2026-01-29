"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface SekkiContextType {
  sekkiMode: boolean;
  toggleSekkiMode: () => void;
  setSekkiMode: (enabled: boolean) => void;
}

const SekkiContext = createContext<SekkiContextType | undefined>(undefined);

const SEKKI_MODE_KEY = "kair-sekki-mode";

export function SekkiProvider({ children }: { children: React.ReactNode }) {
  const [sekkiMode, setSekkiModeState] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load preference from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(SEKKI_MODE_KEY);
    if (saved !== null) {
      setSekkiModeState(saved === "true");
    }
  }, []);

  // Save preference to localStorage
  const setSekkiMode = useCallback((enabled: boolean) => {
    setSekkiModeState(enabled);
    localStorage.setItem(SEKKI_MODE_KEY, String(enabled));
  }, []);

  const toggleSekkiMode = useCallback(() => {
    setSekkiMode(!sekkiMode);
  }, [sekkiMode, setSekkiMode]);

  // Listen for custom event to toggle sekki mode (from omni-bar)
  useEffect(() => {
    const handleToggle = () => {
      toggleSekkiMode();
    };
    window.addEventListener("toggle-sekki-mode", handleToggle);
    return () => window.removeEventListener("toggle-sekki-mode", handleToggle);
  }, [toggleSekkiMode]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <SekkiContext.Provider value={{ sekkiMode: false, toggleSekkiMode: () => {}, setSekkiMode: () => {} }}>
        {children}
      </SekkiContext.Provider>
    );
  }

  return (
    <SekkiContext.Provider value={{ sekkiMode, toggleSekkiMode, setSekkiMode }}>
      {children}
    </SekkiContext.Provider>
  );
}

export function useSekkiMode() {
  const context = useContext(SekkiContext);
  if (context === undefined) {
    throw new Error("useSekkiMode must be used within a SekkiProvider");
  }
  return context;
}
