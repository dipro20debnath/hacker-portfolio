import { useTheme } from "../context/ThemeContext";

/**
 * ThemeToggle
 * A single circular button that switches dark ↔ light mode.
 * Used inside Navbar.
 */
export default function ThemeToggle() {
  const { dark, toggle } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";

  return (
    <button
      onClick={toggle}
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="w-9 h-9 rounded-full border-2 flex items-center justify-center
                 text-sm font-mono font-bold
                 transition-all duration-200 hover:scale-110 select-none"
      style={{ borderColor: accent, color: accent }}
    >
      {dark ? "☀" : "●"}
    </button>
  );
}
