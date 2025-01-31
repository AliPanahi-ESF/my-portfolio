import { useRouter } from "next/router";
import { motion } from "framer-motion";

const projects = {
  hud: {
    title: "HUD",
    category: "AR/VR",
    image: "/images/hud.jpg",
    description: "A futuristic HUD design for augmented reality interfaces.",
    gallery: ["/images/hud-1.jpg", "/images/hud-2.jpg", "/images/hud-3.jpg"],
  },
  london: {
    title: "London",
    category: "Architecture",
    image: "/images/london.jpg",
    description: "Modern architecture visualization of London’s cityscape.",
    gallery: ["/images/london-1.jpg", "/images/london-2.jpg"],
  },
  "smart-home": {
    title: "Smart Home",
    category: "iOS App",
    image: "/images/smart-home.jpg",
    description: "A mobile app for controlling smart home devices.",
    gallery: ["/images/smart-home-1.jpg", "/images/smart-home-2.jpg"],
  },
  "edge-runner": {
    title: "Edge Runner",
    category: "Automotive",
    image: "/images/edge-runner.jpg",
    description: "Automotive UI/UX design for a futuristic driving experience.",
    gallery: ["/images/edge-runner-1.jpg", "/images/edge-runner-2.jpg"],
  },
};

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;
  const project = projects[projectId];

  if (!project) return <div className="text-center mt-20">Project Not Found</div>;

  return (
    <motion.section
      className="w-full min-h-screen bg-black text-white flex flex-col items-center py-20 px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="w-full max-w-5xl text-center">
        <span className="text-sm uppercase opacity-70">{project.category}</span>
        <h1 className="text-5xl md:text-7xl font-bold mt-2">{project.title}</h1>
      </div>

      {/* Cover Image with Parallax Effect */}
      <motion.div
        className="w-full max-w-6xl h-[400px] overflow-hidden rounded-3xl mt-10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover brightness-75" />
      </motion.div>

      {/* Description */}
      <p className="mt-10 max-w-3xl text-lg text-center opacity-80">{project.description}</p>

      {/* Horizontal Image Scroll */}
      <div className="w-full max-w-6xl overflow-x-auto flex gap-6 mt-12 py-4">
        {project.gallery.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`${project.title} ${index}`}
            className="w-[300px] h-[200px] object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Back Button */}
      <motion.button
        className="mt-12 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition"
        onClick={() => router.back()}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Back to Work
      </motion.button>
    </motion.section>
  );
}
