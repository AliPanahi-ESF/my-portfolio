import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = {
  design: [
    { label: "Figma", detail: "Prototyped full design systems, incl. ASML project" },
    { label: "Photoshop", detail: "Used in branding and visuals for early freelance projects" },
    { label: "Illustrator", detail: "Logo design for marine tech startup" },
  ],
  dev: [
    { label: "React", detail: "Built interactive dashboards with dynamic components" },
    { label: "Next.js", detail: "Used in portfolio and fast-loading client pages" },
    { label: "TailwindCSS", detail: "Rapid styling with custom theming" },
  ],
};

export default function SkillSwitch() {
  const [mode, setMode] = useState("design");

  return (
    <section
      className="relative w-full py-24 px-6 flex flex-col items-center text-center overflow-hidden"
      style={{
        background: "linear-gradient(to right, #000 10%, #0b0b0b 30%, #0e1a1d 70%, #000 90%)",
      }}
    >
      <h2 className="text-4xl md:text-7xl font-heading tracking-wider text-white uppercase mb-16">
        What I Use
      </h2>

      {/* Toggle Button */}
      <div className="mb-12 relative z-10">
        <div className="inline-flex border border-white/20 rounded-full overflow-hidden shadow-lg">
          {["design", "dev"].map((type) => (
            <button
              key={type}
              onClick={() => setMode(type)}
              className={`px-6 py-2 text-sm md:text-base transition-all duration-300 ${
                mode === type
                  ? "bg-blue-500 text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {type === "design" ? "🎨 Design" : "💻 Dev"}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
        <AnimatePresence mode="wait">
          {skills[mode].map((skill, index) => (
            <motion.div
              key={skill.label}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl text-left backdrop-blur-md hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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

      {/* Optional: Noise texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('/background-noise.png')] opacity-5 mix-blend-soft-light"></div>
      </div>
    </section>
  );
}
