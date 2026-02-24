import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { experience } from "../data/portfolioData";

export default function Experience() {
  const { dark } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";
  const purple = dark ? "#7c3aed" : "#6366f1";
  const cardBg = dark
    ? "bg-[#0b1120]/60 border-[#1e293b]"
    : "bg-white/70 border-slate-200";

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-3 text-xs font-mono tracking-[0.3em] px-3 py-1 rounded-full border"
            style={{ borderColor: accent, color: accent, background: `${accent}10` }}
          >
            // OPERATIONS LOG
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Orbitron, sans-serif", color: dark ? "#e2e8f0" : "#0f172a" }}
          >
            EXPERIENCE
          </h2>
          <div className="w-16 h-0.5 mx-auto mt-3"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        </div>

        {/* Experience cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl border p-6 backdrop-blur-sm cursor-default ${cardBg}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent;
                e.currentTarget.style.boxShadow = `0 0 24px ${accent}22`;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.transition = "all 0.3s ease";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
              }}
            >
              {/* Index badge */}
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold font-mono mb-4"
                style={{ background: `${accent}20`, color: accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Role */}
              <h3
                className="font-bold mb-1"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  color: dark ? "#e2e8f0" : "#0f172a",
                  fontSize: "0.82rem",
                  letterSpacing: "0.05em",
                }}
              >
                {exp.role}
              </h3>

              {/* Org + Period */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs" style={{ color: purple }}>{exp.org}</span>
                <span className="text-xs font-mono" style={{ color: dark ? "#475569" : "#94a3b8" }}>
                  · {exp.period}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: dark ? "#64748b" : "#475569" }}
              >
                {exp.desc}
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      background: `${accent}10`,
                      color: accent,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
