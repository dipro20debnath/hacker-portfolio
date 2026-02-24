import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  const { dark } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";
  const purple = dark ? "#7c3aed" : "#6366f1";
  const cardBg = dark
    ? "bg-[#0b1120]/60 border-[#1e293b]"
    : "bg-white/70 border-slate-200";

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-3 text-xs font-mono tracking-[0.3em] px-3 py-1 rounded-full border"
            style={{ borderColor: accent, color: accent, background: `${accent}10` }}
          >
            // TIMELINE
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Orbitron, sans-serif", color: dark ? "#e2e8f0" : "#0f172a" }}
          >
            ACHIEVEMENT LOG
          </h2>
          <div className="w-16 h-0.5 mx-auto mt-3"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Gradient line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(180deg, ${accent}, ${purple}, transparent)`,
            }}
          />

          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative flex gap-5 mb-8 group"
            >
              {/* Year dot */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center
                           justify-center text-xs font-mono font-bold z-10
                           transition-all duration-300 group-hover:scale-125 cursor-default"
                style={{
                  borderColor: accent,
                  color: accent,
                  background: dark ? "#0b1120" : "#f8fafc",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${accent}99`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.year.slice(2)}
              </div>

              {/* Achievement card */}
              <div
                className={`flex-1 rounded-xl border p-4 backdrop-blur-sm
                            transition-all duration-300 cursor-default ${cardBg}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent;
                  e.currentTarget.style.boxShadow = `0 0 20px ${accent}22`;
                  e.currentTarget.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono" style={{ color: purple }}>{item.year}</span>
                  <span className="text-xs font-mono" style={{ color: dark ? "#334155" : "#cbd5e1" }}>──</span>
                </div>
                <h4
                  className="font-bold tracking-wide"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    color: dark ? "#e2e8f0" : "#0f172a",
                    fontSize: "0.8rem",
                  }}
                >
                  {item.title}
                </h4>
                <p className="text-xs mt-1.5" style={{ color: dark ? "#64748b" : "#94a3b8" }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
