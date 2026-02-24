import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const { dark } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";
  const purple = dark ? "#7c3aed" : "#6366f1";
  const cardBg = dark
    ? "bg-[#0b1120]/60 border-[#1e293b]"
    : "bg-white/70 border-slate-200";

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-3 text-xs font-mono tracking-[0.3em] px-3 py-1 rounded-full border"
            style={{ borderColor: accent, color: accent, background: `${accent}10` }}
          >
            // ACTIVE DEPLOYMENTS
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Orbitron, sans-serif", color: dark ? "#e2e8f0" : "#0f172a" }}
          >
            PROJECTS
          </h2>
          <div className="w-16 h-0.5 mx-auto mt-3"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-xl border p-6 flex flex-col cursor-default ${cardBg}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent;
                e.currentTarget.style.boxShadow = `0 0 30px ${accent}33`;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.transition = "all 0.3s ease";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
              }}
            >
              {/* Card top row */}
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono" style={{ color: accent }}>
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: accent }}
                />
              </div>

              {/* Title */}
              <h3
                className="font-bold text-base mb-2"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  color: dark ? "#e2e8f0" : "#0f172a",
                }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs leading-relaxed flex-1 mb-4"
                style={{ color: dark ? "#64748b" : "#475569" }}
              >
                {p.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      background: `${purple}15`,
                      color: purple,
                      border: `1px solid ${purple}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-xs py-2 rounded font-bold
                             transition-all duration-200 hover:scale-105"
                  style={{
                    border: `1px solid ${accent}`,
                    color: accent,
                    fontFamily: "Orbitron, sans-serif",
                  }}
                >
                  GITHUB
                </a>
                <a
                  href={p.demo}
                  className="flex-1 text-center text-xs py-2 rounded font-bold
                             transition-all duration-200 hover:scale-105"
                  style={{
                    background: accent,
                    color: "#0b1120",
                    fontFamily: "Orbitron, sans-serif",
                  }}
                >
                  LIVE DEMO
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
