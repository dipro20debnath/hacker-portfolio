// ── App.jsx ── Main application shell ──
// Imports all layout components and section components
// Wrapped in ThemeProvider in main.jsx

import { useTheme } from "./context/ThemeContext";

// ── Layout Components ──
import Navbar          from "./components/Navbar";
import Footer          from "./components/Footer";
import CursorGlow      from "./components/CursorGlow";
import ScrollProgress  from "./components/ScrollProgress";
import WhatsAppButton  from "./components/WhatsAppButton";
import BackToTop       from "./components/BackToTop";
import GridBackground  from "./components/GridBackground";

// ── Page Sections ──
import Hero         from "./sections/Hero";
import About        from "./sections/About";
import Skills       from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Experience   from "./sections/Experience";
import Projects     from "./sections/Projects";
import Contact      from "./sections/Contact";

export default function App() {
  const { dark } = useTheme();

  return (
    <div
      style={{
        background: dark ? "#0b1120" : "#f8fafc",
        color: dark ? "#e2e8f0" : "#0f172a",
        minHeight: "100vh",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* ── Global UI Layer ── */}
      <CursorGlow />
      <ScrollProgress />
      <GridBackground />
      <Navbar />
      <WhatsAppButton />
      <BackToTop />

      {/* ── Page Content ── */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
