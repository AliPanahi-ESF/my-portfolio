import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = {
  design: [
    { label: "UI/UX Design", detail: "Creating user-centered interfaces from wireframes to high-fidelity prototypes using tools like Figma." },
    { label: "Branding & Identity", detail: "Developing consistent visual languages, logo design, and brand assets." },
    { label: "Design Systems", detail: "Building and maintaining scalable design systems (e.g., ASML project)." },
    { label: "Prototyping", detail: "Using interactive tools to test and validate ideas before development." }
  ],
  dev: [
    { label: "Front-end Development", detail: "Building responsive interfaces using HTML, CSS, and JavaScript." },
    { label: "React / Next.js", detail: "Creating dynamic SPAs and fast-loading websites with modern frameworks." },
    { label: "Component Libraries", detail: "Implementing reusable UI components and working with TailwindCSS and design systems." },
    { label: "Performance Optimization", detail: "Improving site speed and accessibility." }
  ]
};

export default function SkillSwitch() {
  const [mode, setMode] = useState("design");

  return (
    // 1. ADDED FADE-IN ANIMATION TO THE ENTIRE SECTION
    <motion.section
      className="relative w-full py-28 px-6 flex flex-col items-center text-center overflow-hidden bg-[#111111]" // 3. CHANGED BACKGROUND for better section separation
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-8xl font-heading tracking-wider text-white uppercase mb-16">
        What I Use
      </h2>

      {/* Toggle Switch */}
      <motion.div
        className="mb-14 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-44 h-11 bg-white/10 rounded-full overflow-hidden border border-white/20 shadow-inner">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`absolute top-0 w-1/2 h-full rounded-full ${
              mode === "dev" ? "left-1/2" : "left-0"
            }`}
            style={{
              background: mode === "dev" ? "#ffffff22" : "#3b82f666",
              boxShadow: "0 0 15px rgba(59,130,246,0.3)",
            }}
          />
          <div className="flex relative z-10 h-full text-white text-sm md:text-base font-medium ">
            {[
              { id: "design", label: "🎨 Design" },
              { id: "dev", label: "💻 Dev" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setMode(id)}
                className="flex-1 flex items-center justify-center z-10 relative hover:opacity-80 transition "
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
        <AnimatePresence mode="wait">
          {skills[mode].map((skill, index) => (
            // 2. UPDATED HOVER EFFECT on the card
            <motion.div
              key={skill.label}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl text-left backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }} // Kept the subtle lift
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {skill.label}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {skill.detail}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('/background-noise.png')] opacity-5 mix-blend-soft-light"></div>
      </div>
    </motion.section>
  );
}