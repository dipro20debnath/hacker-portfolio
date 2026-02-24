import { useTheme } from "../context/ThemeContext";

/**
 * GridBackground
 * Fixed animated background: subtle grid lines + floating glow orbs.
 * Sits behind all content (z-index: 0).
 */
export default function GridBackground() {
  const { dark } = useTheme();
  const gridColor = dark ? "rgba(0,255,204,0.04)" : "rgba(14,165,233,0.07)";
  const orbs = [
    { color: dark ? "#00ffcc" : "#0ea5e9", top: "10%", left: "5%",  size: 200, delay: "0s",   dur: "4s" },
    { color: dark ? "#7c3aed" : "#6366f1", top: "30%", left: "30%", size: 280, delay: "0.8s", dur: "5s" },
    { color: dark ? "#00ffcc" : "#0ea5e9", top: "60%", left: "60%", size: 240, delay: "1.6s", dur: "6s" },
    { color: dark ? "#7c3aed" : "#6366f1", top: "80%", left: "80%", size: 180, delay: "2.4s", dur: "4s" },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            top: orb.top,
            left: orb.left,
            animationDelay: orb.delay,
            animationDuration: orb.dur,
          }}
        />
      ))}
    </div>
  );
}
