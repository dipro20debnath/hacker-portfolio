import { useTheme } from "../context/ThemeContext";
import SocialIcons from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

/**
 * Footer
 * Social icons + copyright line.
 */
export default function Footer() {
  const { dark } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";

  return (
    <footer
      className="py-10 px-4 text-center relative z-10"
      style={{ borderTop: `1px solid ${accent}22` }}
    >
      <div className="flex justify-center mb-5">
        <SocialIcons />
      </div>

      <p
        className="text-xs font-mono"
        style={{ color: dark ? "#475569" : "#94a3b8" }}
      >
        &lt;/&gt; Crafted by{" "}
        <span style={{ color: accent }}>{personalInfo.name}</span>
        {" "}·{" "}
        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:underline transition-all"
          style={{ color: accent }}
        >
          {personalInfo.email}
        </a>
        {" "}· {new Date().getFullYear()} · All systems operational
      </p>
    </footer>
  );
}
