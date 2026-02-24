import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

/**
 * WhatsAppButton
 * Fixed floating button at bottom-right.
 * Opens WhatsApp chat in a new tab.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={personalInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-20 right-5 z-50 w-13 h-13 rounded-full
                 flex items-center justify-center
                 transition-all duration-300 hover:scale-125"
      style={{
        width: "52px",
        height: "52px",
        background: "#25d366",
        boxShadow: "0 0 20px #25d36688, 0 4px 15px rgba(0,0,0,0.3)",
      }}
    >
      <FaWhatsapp size={26} color="white" />
    </a>
  );
}
