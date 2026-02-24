import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { personalInfo, counters } from "../data/portfolioData";

// ── Animated counter hook ──
function useCounter(target, duration = 1500, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame;
    const step = target / (duration / 16);
    let current = 0;
    const tick = () => {
      current = Math.min(current + step, target);
      setVal(Math.floor(current));
      if (current < target) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return val;
}

function CounterItem({ label, value, dark, start }) {
  const count = useCounter(value, 1800, start);
  const accent = dark ? "#00ffcc" : "#0ea5e9";
  return (
    <div className="text-center p-4">
      <div
        className="text-3xl sm:text-4xl font-black font-mono"
        style={{ color: accent, textShadow: `0 0 15px ${accent}66` }}
      >
        {count.toLocaleString()}+
      </div>
      <div
        className="text-xs font-mono mt-1 tracking-widest"
        style={{ color: dark ? "#64748b" : "#94a3b8" }}
      >
        {label.toUpperCase()}
      </div>
    </div>
  );
}

export default function About() {
  const { dark } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";
  const cardBg = dark
    ? "bg-[#0b1120]/60 border-[#1e293b]"
    : "bg-white/70 border-slate-200";

  // Start counters when section enters viewport
  const statsRef = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-3 text-xs font-mono tracking-[0.3em] px-3 py-1 rounded-full border"
            style={{ borderColor: accent, color: accent, background: `${accent}10` }}
          >
            // IDENTITY
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Orbitron, sans-serif", color: dark ? "#e2e8f0" : "#0f172a" }}
          >
            ABOUT ME
          </h2>
          <div className="w-16 h-0.5 mx-auto mt-3"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        </div>

        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl border p-8 backdrop-blur-sm mb-8 ${cardBg}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono" style={{ color: accent }}>&gt;</span>
            <span className="text-xs font-mono font-bold" style={{ color: accent }}>cat about.txt</span>
          </div>
          <p className="text-sm leading-7" style={{ color: dark ? "#94a3b8" : "#475569" }}>
            I'm{" "}
            <span className="font-bold" style={{ color: accent }}>{personalInfo.name}</span>
            {" "}— a passionate cybersecurity professional and researcher based in{" "}
            <span style={{ color: accent }}>{personalInfo.location}</span>.
            My expertise spans ethical hacking, penetration testing, threat intelligence,
            and competitive programming.
          </p>
          <p className="text-sm leading-7 mt-4" style={{ color: dark ? "#94a3b8" : "#475569" }}>
            Affiliated with the{" "}
            <span style={{ color: accent }}>{personalInfo.institution}</span> and
            currently studying at{" "}
            <span style={{ color: accent }}>{personalInfo.university}</span>.
            I bring a sharp analytical mind to every security challenge.
          </p>
          <p className="text-sm leading-7 mt-4" style={{ color: dark ? "#94a3b8" : "#475569" }}>
            Beyond the terminal, I'm an avid drone cinematographer and photographer —
            capturing the world from angles most never see.
          </p>
          <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${accent}22` }}>
  <div className="flex items-center gap-2 mb-4">
    <span className="text-xs font-mono" style={{ color: accent }}>&gt;</span>
    <span className="text-xs font-mono font-bold" style={{ color: accent }}>cat academics.txt</span>
  </div>
  <div className="grid grid-cols-3 gap-4">

    {/* SSC */}
    <div
      className="rounded-lg p-4 text-center"
      style={{ background: `${accent}10`, border: `1px solid ${accent}30` }}
    >
      <div className="text-2xl font-black font-mono" style={{ color: accent }}>5.00</div>
      <div className="text-xs font-mono mt-1" style={{ color: dark ? "#9ca3af" : "#6b7280" }}>SSC GPA</div>
      <div className="text-xs font-mono mt-0.5" style={{ color: dark ? "#6b7280" : "#9ca3af" }}>Golden A+</div>
    </div>

    {/* HSC */}
    <div
      className="rounded-lg p-4 text-center"
      style={{ background: `${accent}10`, border: `1px solid ${accent}30` }}
    >
      <div className="text-2xl font-black font-mono" style={{ color: accent }}>5.00</div>
      <div className="text-xs font-mono mt-1" style={{ color: dark ? "#9ca3af" : "#6b7280" }}>HSC GPA</div>
      <div className="text-xs font-mono mt-0.5" style={{ color: dark ? "#6b7280" : "#9ca3af" }}>Golden A+</div>
    </div>

    {/* CGPA */}
    <div
      className="rounded-lg p-4 text-center"
      style={{ background: `${accent}10`, border: `1px solid ${accent}30` }}
    >
      <div className="text-2xl font-black font-mono" style={{ color: accent }}>3.67</div>
      <div className="text-xs font-mono mt-1" style={{ color: dark ? "#9ca3af" : "#6b7280" }}>University</div>
      <div className="text-xs font-mono mt-0.5" style={{ color: dark ? "#6b7280" : "#9ca3af" }}>CGPA / 4.00</div>
    </div>

  </div>
</div>
        </motion.div>

        {/* Stats counters */}
        <div
          ref={statsRef}
          className={`rounded-2xl border p-6 backdrop-blur-sm ${cardBg}
            grid grid-cols-2 md:grid-cols-3 gap-4`}
        >
          {counters.map((c) => (
            <CounterItem key={c.label} {...c} dark={dark} start={started} />
          ))}
        </div>

      </div>
    </section>
  );
}
