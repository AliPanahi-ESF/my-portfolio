import { motion } from "framer-motion";

const projects = [
  { title: "HUD", category: "AR/VR", image: "/images/hud.jpg" },
  { title: "London", category: "Architecture", image: "/images/london.jpg" },
  { title: "Smart Home", category: "iOS App", image: "/images/smart-home.jpg" },
  { title: "Edge Runner", category: "Automotive", image: "/images/edge-runner.jpg" },
];

export default function SelectedWork() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start text-white px-10 py-10 section-noise">
      {/* Section Title (Reduced space above) */}
      <h2 className="text-4xl md:text-6xl font-heading text-center mb-10">Selected Work</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-12 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-3xl cursor-pointer w-full h-[400px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-3xl brightness-75"
              whileHover={{ brightness: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project Info */}
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-sm uppercase opacity-80">{project.category}</span>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
