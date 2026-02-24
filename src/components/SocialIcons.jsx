import { FaGithub, FaLinkedin, FaShieldAlt } from "react-icons/fa";
import { socials } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

// Map icon string names → actual React-Icons components
const ICON_MAP = {
  FaGithub,
  FaLinkedin,
  FaShieldAlt,
};

/**
 * SocialIcons
 * Renders glowing social link icons.
 * Props:
 *   vertical (bool) – stack vertically if true
 */
export default function SocialIcons({ vertical = false }) {
  const { dark } = useTheme();
  const accent = dark ? "#00ffcc" : "#0ea5e9";

  return (
    <div className={`flex ${vertical ? "flex-col" : "flex-row"} gap-4 items-center`}>
      {socials.map((s) => {
        const Icon = ICON_MAP[s.icon];
        return (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            className="transition-all duration-200 hover:scale-125"
          >
            <div
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center
                         transition-all duration-200"
              style={{ borderColor: accent, color: accent }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 18px ${accent}99`;
                e.currentTarget.style.background = `${accent}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Icon size={18} />
            </div>
          </a>
        );
      })}
    </div>
  );
}
