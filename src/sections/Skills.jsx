import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { skills } from "../data/portfolioData";

// ── Intersection observer for bar animation ──
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Single skill progress bar ──
function SkillBar({ name, level, tag, dark, delay = 0 }) {
  const [ref, inView] = useInView(0.1);
  const accent = dark ? "#00ffcc" : "#0ea5e9";
  const purple = dark ? "#7c3aed" : "#6366f1";

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <span
          className="text-sm font-medium"
          style={{ color: dark ? "#cbd5e1" : "#1e293b" }}
        >
          {name}
        </span>
        <span
          className="text-xs font-mono px-2 py-0.5 rounded"
          style={{ background: `${accent}15`, color: accent }}
        >
          {tag}
        </span>
      </div>

      {/* Bar track */}
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: dark ? "#1e293b" : "#e2e8f0" }}
      >
        {/* Neon fill */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${accent}, ${purple})`,
            boxShadow: inView ? `0 0 8px ${accent}99` : "none",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
      <div
        className="text-right text-xs font-mono mt-0.5"
        style={{ color: dark ? "#475569" : "#94a3b8" }}
      >
        {level}%
      </div>
    </div>
  );
}

export default function Skills() {
  const { dark } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";
  const cardBg = dark
    ? "bg-[#0b1120]/60 border-[#1e293b]"
    : "bg-white/70 border-slate-200";

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-3 text-xs font-mono tracking-[0.3em] px-3 py-1 rounded-full border"
            style={{ borderColor: accent, color: accent, background: `${accent}10` }}
          >
            // SKILL MATRIX
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Orbitron, sans-serif", color: dark ? "#e2e8f0" : "#0f172a" }}
          >
            LEVEL SYSTEM
          </h2>
          <div className="w-16 h-0.5 mx-auto mt-3"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        </div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className={`rounded-xl border p-6 backdrop-blur-sm ${cardBg}`}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono" style={{ color: accent }}>##</span>
                <h3
                  className="font-bold tracking-widest text-sm"
                  style={{ fontFamily: "Orbitron, sans-serif", color: accent }}
                >
                  {category.toUpperCase()}
                </h3>
              </div>
              {items.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} dark={dark} delay={i * 80} />
              ))}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
