import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home",         id: "hero" },
  { label: "About",        id: "about" },
  { label: "Skills",       id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Experience",   id: "experience" },
  { label: "Projects",     id: "projects" },
  { label: "Contact",      id: "contact" },
];

/**
 * Navbar
 * – Sticky with backdrop blur
 * – Highlights on scroll
 * – Mobile hamburger menu
 * – Dark/Light toggle
 */
export default function Navbar() {
  const { dark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const accent = dark ? "#00ffcc" : "#0ea5e9";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-[2px] left-0 right-0 z-50 border-b backdrop-blur-xl
                  transition-all duration-300
                  ${dark
                    ? "bg-[#0b1120]/85 border-[#00ffcc]/10 text-[#e2e8f0]"
                    : "bg-[#f8fafc]/85 border-slate-200/80 text-[#0f172a]"}
                  ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* ── Logo ── */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-black tracking-widest text-base hover:scale-105 transition-transform duration-200"
          style={{ color: accent, fontFamily: "Orbitron, sans-serif" }}
        >
          &lt;DIPRO/&gt;
        </button>

        {/* ── Desktop nav links ── */}
        <div className="hidden lg:flex gap-5 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs font-semibold tracking-widest transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "Orbitron, sans-serif" }}
              onMouseEnter={(e) => (e.target.style.color = accent)}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* ── Right side: toggle + hamburger ── */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="lg:hidden p-1 transition-transform duration-200 hover:scale-110"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: accent }}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div
          className={`lg:hidden px-6 pb-5 pt-2 flex flex-col gap-3
                      ${dark ? "bg-[#0b1120]" : "bg-[#f8fafc]"}`}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-xs font-semibold tracking-widest py-1.5
                         border-b transition-all duration-200"
              style={{
                color: accent,
                fontFamily: "Orbitron, sans-serif",
                borderColor: `${accent}22`,
              }}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
