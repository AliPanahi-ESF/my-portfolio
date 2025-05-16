import { useState } from "react";
import { motion } from "framer-motion";

const designSkills = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "Branding",
  "Logo Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "UI Design",
];

const devSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Next.js",
  "Framer Motion",
  "Git",
];

export default function MySkills() {
  const [isDesign, setIsDesign] = useState(true);

  return (
    <section
      className="relative px-6 py-24 flex flex-col items-center text-center overflow-hidden"
      style={{
        background: isDesign
          ? "linear-gradient(to bottom, #000 30%, #0d0f15 70%, #0d1e30)"
          : "linear-gradient(to bottom, #000 30%, #111 70%, #fff)",
      }}
    >
      <h2 className="md:text-8xl text-xl uppercase tracking-widest mb-12 font-heading text-white">
        What I Use
      </h2>

      {/* Toggle Card */}
      <motion.div
        onClick={() => setIsDesign(!isDesign)}
        className="cursor-pointer bg-white/5 rounded-3xl shadow-xl w-64 h-32 md:w-72 md:h-40 flex items-center justify-center text-center mb-12 border border-white/10 hover:border-blue-500 transition duration-500 relative"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className={`absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-1000 ${isDesign ? "bg-blue-500/10" : "bg-white/10"}`}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        <motion.span
          className="text-lg md:text-2xl font-semibold text-white z-10"
          key={isDesign ? "Design" : "Front-End"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {isDesign ? "Click to See Dev Tools" : "Click to See Design Tools"}
        </motion.span>
      </motion.div>

      {/* Skills Grid */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {(isDesign ? designSkills : devSkills).map((skill, index) => (
          <motion.div
            key={skill}
            className={`rounded-2xl px-6 py-4 text-sm md:text-md font-medium text-center border shadow-lg transition-all duration-500 ${
              isDesign
                ? "bg-blue-500/10 text-blue-400 border-blue-400/20"
                : "bg-white/10 text-white border-white/20"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
