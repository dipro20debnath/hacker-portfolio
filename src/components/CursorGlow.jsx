import { useMousePosition } from "../hooks/useMousePosition";
import { useTheme } from "../context/ThemeContext";

/**
 * CursorGlow
 * – Custom cursor dot + trailing dot
 * – Ambient radial gradient that follows the mouse (dark mode only)
 */
export default function CursorGlow() {
  const { x, y } = useMousePosition();
  const { dark } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";

  return (
    <>
      {/* ── Ambient radial glow (dark mode only) ── */}
      {dark && (
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: `radial-gradient(500px circle at ${x}px ${y}px,
              rgba(0, 255, 204, 0.06) 0%,
              transparent 70%)`,
          }}
        />
      )}

      {/* ── Outer cursor ring ── */}
      <div
        className="pointer-events-none fixed z-[999] w-5 h-5 rounded-full border-2"
        style={{
          left: x - 10,
          top: y - 10,
          borderColor: accent,
          boxShadow: `0 0 8px ${accent}88`,
          transition: "border-color 0.2s",
        }}
      />

      {/* ── Inner cursor dot ── */}
      <div
        className="pointer-events-none fixed z-[998] w-2 h-2 rounded-full"
        style={{
          left: x - 4,
          top: y - 4,
          background: accent,
          opacity: 0.8,
          transition: "background 0.2s",
        }}
      />
    </>
  );
}
