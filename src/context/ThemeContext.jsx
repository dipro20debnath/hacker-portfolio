import { createContext, useContext, useState, useEffect } from "react";

// ── Create the context ──
const ThemeContext = createContext();

// ── Provider: wraps the whole app ──
export function ThemeProvider({ children }) {
  // Load saved preference from localStorage; default = dark
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? saved === "dark" : true;
  });

  // Apply/remove "dark" class on <html> and persist preference
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      document.body.style.background = "#1a3780";
      document.body.style.color = "#e2e8f0";
    } else {
      root.classList.remove("dark");
      document.body.style.background = "#71b8ff";
      document.body.style.color = "#06122f";
    }
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ── Custom hook for easy access in any component ──
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
