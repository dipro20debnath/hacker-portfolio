import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * BackToTop
 * Appears after scrolling 400px. Smooth-scrolls to top on click.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { dark } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Back to top"
      className="fixed bottom-6 right-5 z-50 w-10 h-10 rounded-full border-2
                 flex items-center justify-center text-base font-bold
                 transition-all duration-200 hover:scale-125"
      style={{
        borderColor: accent,
        color: accent,
        background: dark ? "#0b1120" : "#f8fafc",
        boxShadow: `0 0 16px ${accent}55`,
      }}
    >
      ↑
    </button>
  );
}
