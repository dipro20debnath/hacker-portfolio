import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { personalInfo, typingStrings } from "../data/portfolioData";
import SocialIcons from "../components/SocialIcons";
import profileImg from "../assets/profile.jpg";
// ── Internal typing hook ──
function useTyping(strings, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let t;
    if (!deleting && charIdx <= current.length) {
      t = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, speed);
    } else if (!deleting) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      t = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c - 1); }, speed / 2);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % strings.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return display;
}

export default function Hero() {
  const { dark } = useTheme();
  const typed = useTyping(typingStrings);
  const accent = dark ? "#00ffcc" : "#0ea5e9";
  const purple = dark ? "#7c3aed" : "#6366f1";

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-12 relative z-10"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ────────── LEFT: Text Content ────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-xs font-mono"
            style={{ borderColor: accent, color: accent, background: `${accent}10` }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: accent }} />
            SYSTEM ONLINE — SECURE CONNECTION
          </div>

          {/* Name */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
            style={{
              fontFamily: "Orbitron, sans-serif",
              background: `linear-gradient(135deg, ${accent} 0%, ${purple} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {personalInfo.name}
          </h1>

          {/* Professional titles */}
          <div className="space-y-1 mb-5">
            {personalInfo.titles.map((t, i) => (
              <p key={i} className="text-xs font-mono leading-relaxed"
                style={{ color: dark ? "#94a3b8" : "#64748b" }}>
                {t}
              </p>
            ))}
          </div>

          {/* Typing animation */}
          <div className="h-10 flex items-center mb-3">
            <span className="text-lg sm:text-2xl font-mono font-bold" style={{ color: accent }}>
              &gt; {typed}
              <span className="animate-pulse">_</span>
            </span>
          </div>

          {/* Institution / Location */}
          <p className="text-xs font-mono mb-8" style={{ color: dark ? "#475569" : "#94a3b8" }}>
            📍 {personalInfo.institution} · {personalInfo.university}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => scrollTo("projects")}
              className="px-5 py-2.5 rounded text-xs font-black tracking-widest
                         transition-all duration-200 hover:scale-105"
              style={{
                background: accent,
                color: "#0b1120",
                fontFamily: "Orbitron, sans-serif",
                boxShadow: `0 0 20px ${accent}44`,
              }}
            >
              VIEW PROJECTS
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-5 py-2.5 rounded text-xs font-black tracking-widest border
                         transition-all duration-200 hover:scale-105"
              style={{ borderColor: accent, color: accent, fontFamily: "Orbitron, sans-serif" }}
            >
              DOWNLOAD CV
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 rounded text-xs font-black tracking-widest border
                         transition-all duration-200 hover:scale-105"
              style={{ borderColor: purple, color: purple, fontFamily: "Orbitron, sans-serif" }}
            >
              CONTACT ME
            </button>
          </div>

          <SocialIcons />
        </motion.div>

        {/* ────────── RIGHT: Profile Picture ────────── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="relative animate-float">
            {/* Spinning ring */}
            <div
              className="absolute -inset-2 rounded-full opacity-60"
              style={{
                background: `conic-gradient(${accent}, ${purple}, transparent, ${accent})`,
                filter: `blur(4px)`,
                borderRadius: "50%",
              }}
            />
            {/* Profile frame */}
            <div
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full
                         overflow-hidden border-4 z-10"
              style={{
                borderColor: accent,
                boxShadow: `0 0 40px ${accent}55, 0 0 80px ${accent}22`,
              }}
            >
              {/*
                ── PROFILE PHOTO ──
                Add your photo to src/assets/profile.jpg
                Then replace the gradient div below with:
                <img src={profileImg} alt="Gobindo" className="w-full h-full object-cover" />
                And import at top: import profileImg from "../assets/profile.jpg"
              */}
              <img
  src={profileImg}
  alt="Gobindo Debnath Dipro"
  className="w-full h-full object-cover"
/>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs font-mono" style={{ color: dark ? "#475569" : "#94a3b8" }}>SCROLL</span>
        <svg className="w-4 h-4" fill="none" stroke={accent} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
