import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * ScrollProgress
 * Thin neon bar at the very top of the page showing scroll depth.
 */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  const { dark } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100]">
      <div
        className="h-full transition-all duration-75 ease-out"
        style={{
          width: `${pct}%`,
          background: dark
            ? "linear-gradient(90deg, #00ffcc, #7c3aed)"
            : "linear-gradient(90deg, #0ea5e9, #6366f1)",
        }}
      />
    </div>
  );
}
