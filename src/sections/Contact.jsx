import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const { dark } = useTheme();
  const [sent, setSent] = useState(false);
  const accent = dark ? "#00ffcc" : "#0ea5e9";
  const purple = dark ? "#7c3aed" : "#6366f1";
  const cardBg = dark
    ? "bg-[#0b1120]/60 border-[#1e293b]"
    : "bg-white/70 border-slate-200";
  const inputStyle = {
    background: dark ? "rgba(11,17,32,0.8)" : "rgba(255,255,255,0.9)",
    borderColor: dark ? "#1e293b" : "#e2e8f0",
    color: dark ? "#e2e8f0" : "#0f172a",
    caretColor: accent,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const quickLinks = [
    { label: "EMAIL",     href: `mailto:${personalInfo.email}`, icon: FaEnvelope },
    { label: "CALL",      href: `tel:${personalInfo.phone}`,    icon: FaPhone },
    { label: "WHATSAPP",  href: personalInfo.whatsapp,          icon: FaWhatsapp },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-3 text-xs font-mono tracking-[0.3em] px-3 py-1 rounded-full border"
            style={{ borderColor: accent, color: accent, background: `${accent}10` }}
          >
            // SECURE CHANNEL
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Orbitron, sans-serif", color: dark ? "#e2e8f0" : "#0f172a" }}
          >
            CONTACT
          </h2>
          <div className="w-16 h-0.5 mx-auto mt-3"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        </div>

        {/* Quick contact buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {quickLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "EMAIL" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-mono
                         transition-all duration-200 hover:scale-105"
              style={{ borderColor: accent, color: accent }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${accent}15`;
                e.currentTarget.style.boxShadow = `0 0 12px ${accent}44`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <Icon size={13} />
              {label}
            </a>
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`rounded-2xl border p-8 backdrop-blur-sm ${cardBg}`}
        >
          {sent ? (
            /* ── Success state ── */
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✔</div>
              <p
                className="font-bold font-mono tracking-widest"
                style={{ color: accent, fontFamily: "Orbitron, sans-serif", fontSize: "0.8rem" }}
              >
                MESSAGE TRANSMITTED
              </p>
              <p className="text-xs font-mono mt-2" style={{ color: dark ? "#64748b" : "#94a3b8" }}>
                Secure channel established. Response incoming.
              </p>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "NAME",    type: "text",  placeholder: "Your name..." },
                { label: "EMAIL",   type: "email", placeholder: "your@email.com" },
              ].map((f) => (
                <div key={f.label}>
                  <label
                    className="block text-xs font-mono mb-1.5"
                    style={{ color: accent }}
                  >
                    &gt; {f.label}
                  </label>
                  <input
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-lg border font-mono text-sm
                               outline-none transition-all duration-200"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = accent)}
                    onBlur={(e) => (e.target.style.borderColor = dark ? "#1e293b" : "#e2e8f0")}
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-mono mb-1.5" style={{ color: accent }}>
                  &gt; MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg border font-mono text-sm
                             outline-none transition-all duration-200 resize-none"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = accent)}
                  onBlur={(e) => (e.target.style.borderColor = dark ? "#1e293b" : "#e2e8f0")}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-black tracking-widest text-xs
                           transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: accent,
                  color: "#0b1120",
                  fontFamily: "Orbitron, sans-serif",
                  boxShadow: `0 0 20px ${accent}44`,
                }}
              >
                TRANSMIT MESSAGE
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
