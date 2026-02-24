import { useState, useEffect } from "react";

/**
 * useMousePosition
 * Tracks the real-time cursor position for the CursorGlow effect.
 * Returns { x, y } coordinates relative to the viewport.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
