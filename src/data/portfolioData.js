// ================================================================
//  portfolioData.js
//  ALL portfolio content lives here.
//  Edit this file to update the entire website instantly.
// ================================================================

export const personalInfo = {
  name: "Gobindo Debnath Dipro",
  titles: [
    "Certified Cybersecurity Educator Professional (CCEP)",
    "Cybersecurity Expert  ·  CEH  ·  CCNA",
    "Certified Threat Intelligence & Governance Analyst (CTIGA)",
    "CCPP  ·  CTF Player  ·  Competitive Programmer",
  ],
  institution: "Centre for Strategy and Policy Innovation",
  university: "Metropolitan University Bangladesh",
  location: "Sylhet Sadar Upazila, Sylhet, Bangladesh",
  email: "diprogobindo2002@gmail.com",
  phone: "+8801765653786",
  whatsapp: "https://wa.me/8801765653786",
  resumeUrl: "../assets/resume.pdf", // place resume.pdf in /public folder
  about: `I'm a passionate cybersecurity professional and researcher based in Sylhet, Bangladesh.
My expertise spans ethical hacking, penetration testing, threat intelligence, and competitive
programming. Affiliated with the Centre for Strategy and Policy Innovation and Metropolitan
University Bangladesh, I bring a sharp analytical mind to every security challenge.
Beyond the terminal, I'm a drone cinematographer and photographer — capturing the world
from angles most never see.`,
};

// ── Typing animation strings (Hero section) ──
export const typingStrings = [
  "Ethical Hacker",
  "Penetration Tester",
  "Cyber Intelligence Analyst",
  "Competitive Programmer",
  "CTF Top Performer",
  "Drone Cinematographer",
];

// ── Social media links ──
export const socials = [
  {
    label: "GitHub",
    url: "https://github.com/dipro20debnath",
    icon: "FaGithub",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gobindo-debnath-dipro-571a46268/",
    icon: "FaLinkedin",
  },
  {
    label: "TryHackMe",
    url: "https://tryhackme.com/p/mr1sherlock",
    icon: "FaShieldAlt",
  },
];

// ── Skills (level: 0–100, change these numbers freely) ──
export const skills = {
  Programming: [
    { name: "C",       level: 90, tag: "Advanced" },
    { name: "C++",     level: 88, tag: "Advanced" },
    { name: "Python",  level: 92, tag: "Advanced" },
    { name: "Java",    level: 65, tag: "Intermediate" },
    { name: "HTML",    level: 95, tag: "Advanced" },
    { name: "CSS",     level: 93, tag: "Advanced" },
  ],
  Cybersecurity: [
    { name: "Penetration Testing",  level: 90, tag: "Advanced" },
    { name: "Threat Intelligence",  level: 87, tag: "Advanced" },
    { name: "Governance & Risk",    level: 72, tag: "Intermediate" },
    { name: "CTF Competitions",     level: 95, tag: "National Top 5" },
    { name: "Web Exploitation",     level: 85, tag: "Advanced" },
  ],
  Networking: [
    { name: "CCNA",             level: 85, tag: "Certified" },
    { name: "Network Security", level: 88, tag: "Advanced" },
    { name: "Protocol Analysis",level: 80, tag: "Advanced" },
  ],
  Photography: [
    { name: "Event Photography",   level: 88, tag: "Professional" },
    { name: "Wedding Photography", level: 82, tag: "Professional" },
    { name: "Drone Cinematic",     level: 90, tag: "Advanced" },
  ],
};

// ── Achievement timeline (add new items here) ──
export const achievements = [
  { year: "2024", title: "CEH Certified",               desc: "Certified Ethical Hacker – EC-Council" },
  { year: "2024", title: "CCNA Certified",              desc: "Cisco Certified Network Associate" },
  { year: "2024", title: "CCEP Certified",              desc: "Certified Cybersecurity Educator Professional" },
  { year: "2024", title: "CTIGA Certified",             desc: "Certified Threat Intelligence & Governance Analyst" },
  { year: "2024", title: "CCPP Certified",              desc: "Certified Cyber Protection Professional" },
  { year: "2024", title: "CTF National Top 5",          desc: "National Division CTF Competition – Top 5 Placement" },
  { year: "2024", title: "Creative IT Best Performer",  desc: "Cybersecurity Intern of the Year – Creative IT Institute" },
  { year: "2024", title: "DRU Coordinator",             desc: "Disaster Response Unit – Metropolitan University" },
  { year: "2025", title: "Director – MU MUN 2025",      desc: "Director of Promotion, Metropolitan University MUN" },
];

// ── Work experience cards ──
export const experience = [
  {
    role: "Cyber Security Intern",
    org: "Creative IT Institute",
    period: "2024",
    desc: "Conducted penetration testing, vulnerability assessments and security audits across client environments. Named Best Performer of the entire cohort.",
    tags: ["Pentesting", "CEH", "Network Security", "Audit"],
  },
  {
    role: "Disaster Response Unit",
    org: "Metropolitan University",
    period: "2023 – Present",
    desc: "Coordinating emergency response teams, logistics and communications during disaster drills and real-world events across campus.",
    tags: ["Leadership", "Crisis Mgmt", "Coordination"],
  },
  {
    role: "Director – Promotion",
    org: "MU MUN 2025",
    period: "2025",
    desc: "Leading all promotional strategy, content direction, social media and outreach for the Metropolitan University Model UN 2025 conference.",
    tags: ["Leadership", "Marketing", "Public Speaking"],
  },
  {
    role: "Freelance Photographer",
    org: "Self-Employed",
    period: "2022 – Present",
    desc: "Delivering cinematic event, wedding, and aerial drone photography & videography for clients across Bangladesh.",
    tags: ["Drone", "Wedding", "Events", "Cinematic"],
  },
];

// ── Projects (6 cards) ──
export const projects = [
  {
    title: "NetScan Pro",
    desc: "Advanced network scanner with OS detection, service enumeration, and CVE cross-reference powered by Nmap + Python automation.",
    stack: ["Python", "Nmap", "SQLite"],
    github: "https://github.com/dipro20debnath",
    demo: "#",
  },
  {
    title: "WebShell Detector",
    desc: "ML-based webshell detection system trained on PHP/ASP payloads achieving 97% accuracy on the test dataset.",
    stack: ["Python", "Scikit-learn", "Flask"],
    github: "https://github.com/dipro20debnath",
    demo: "#",
  },
  {
    title: "CTF Toolkit",
    desc: "All-in-one CLI toolkit for CTF competitions: steganography tools, crypto helpers, and reverse shell generators.",
    stack: ["Python", "Bash", "CLI"],
    github: "https://github.com/dipro20debnath",
    demo: "#",
  },
  {
    title: "Drone FPV Controller",
    desc: "Custom RC drone flight controller firmware with real-time telemetry logging and auto-return-to-home safety system.",
    stack: ["C++", "Arduino", "RF Module"],
    github: "https://github.com/dipro20debnath",
    demo: "#",
  },
  {
    title: "Port Knocker Daemon",
    desc: "Stealth port-knock daemon for secure server access combined with TOTP-based challenge-response authentication.",
    stack: ["C", "Linux", "Systemd"],
    github: "https://github.com/dipro20debnath",
    demo: "#",
  },
  {
    title: "Threat Intel Dashboard",
    desc: "Real-time threat intelligence aggregator pulling from OSINT feeds with automated MITRE ATT&CK technique mapping.",
    stack: ["React", "Python", "FastAPI"],
    github: "https://github.com/dipro20debnath",
    demo: "#",
  },
];

// ── Animated stat counters (About section) ──
export const counters = [
  { label: "CTF Challenges Solved",  value: 120 },
  { label: "Certifications",         value: 5 },
  { label: "Projects Completed",     value: 18 },
  { label: "Social ID Recovered",    value: 37 },
  { label: "Events Covered",         value: 50 },
  { label: "Photos Captured",        value: 3000 },
];

