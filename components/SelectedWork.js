import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "UX/UI Design For High-Tech Industry",
    category: "ASML - Graduation Internship",
    image: "/asml.JPG",
    link: "/projects/ASML",
    height: "h-[500px]",
  },
  {
    title: "UI Design for Electric Edorado8s",
    category: "Edorado - Internship",
    image: "/edorado.jpg",
    link: "/projects/smart-mobile",
    height: "h-[600px]",
  },
 {
   title: "Branding & UI Design for Lucifer",
   category: "Semester Project",
   image: "/udiac.jpg",
   link: "/projects/Udiac",
    height: "h-[450px]",
 },
  // {
  //   title: "AI-Powered Dashboard UI",
  //   category: "Freelance",
  //   image: "/dashboard.jpg",
  //   link: "/projects/dashboard",
  //   height: "h-[550px]",
  // },
];

export default function SelectedWork() {
  return (
    
    <motion.section id="work" className="w-full min-h-screen flex flex-col items-center text-white  py-60 section-noise gap-10">
      {/* 🔹 Title with Same Size as "My Approach" */}
      <motion.h2
        className="md:text-8xl  text-xl uppercase tracking-widest mb-10 font-heading text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Selected Work
      </motion.h2>

      {/* 🔹 Apple-Style Dynamic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-3xl cursor-pointer w-full ${project.height} group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* ✅ Project Image with Visible Black & White Effect */}
            <Link href={project.link} passHref>
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden transition-all duration-500"
                whileHover={{ filter: "grayscale(60%) brightness(70%)", scale: 1.02 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-3xl brightness-90 transition-all duration-500 group-hover:brightness-70"
                />
                {/* ✅ Noise Overlay (Visible Even Before Hover) */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-all duration-500 bg-[url('/background-noise.png')] bg-cover"></div>
              </motion.div>
            </Link>

            {/* ✅ Title & Category (Matching Portfolio Font & Colors) */}
            <div className="absolute bottom-6 left-6 transition-all duration-500">
              <span className="text-lg uppercase opacity-80 font-heading group-hover:text-[#3b82f6] group-hover:drop-shadow-lg transition-all duration-500">
                {project.category}
              </span>
              <h3 className="text-4xl font-heading group-hover:text-[#3b82f6] group-hover:drop-shadow-lg transition-all duration-500">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
