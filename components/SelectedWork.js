import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "UX/UI Design For High-Tech Industry",
    category: "ASML - Graduation Internship",
    labels: ["UX & UI", "Design System", "Prototyping"],
    image: "/asml.JPG",
    link: "/projects/ASML",
    height: "h-[500px]",
  },
  {
    title: "UI Design for Electric Edorado8s",
    category: "Edorado - Internship",
    labels: ["UX & UI Design", "Design System"],
    image: "/edorado.jpg",
    link: "/projects/smart-mobile",
    height: "h-[600px]",
  },
  {
    title: "Branding & UI Design for Lucifer",
    category: "Semester Project",
    labels: ["Branding", "UX & UI", "Front-End"],
    image: "/udiac.jpg",
    link: "/projects/Udiac",
    height: "h-[450px]",
  },
  {
    title: "IOS App - FitPhone",
    category: "Semester Project",
    labels: ["UX & UI", "IOS Development"],
    image: "/fitPhone.png",
    link: "/projects/FitPhone",
    height: "h-[450px]",
  },
    {
    title: "GP Android App",
    category: "Smart Mobile Development",
    labels: ["UX & UI Design", "Android Development"],
    image: "/androidApp.png",
    link: "/projects/gPMobileApp",
    height: "h-[600px]",
  },
];

export default function SelectedWork() {
  return (
    <motion.section
      id="work"
      className="w-full min-h-screen flex flex-col items-center text-white py-60 gap-20 relative overflow-hidden px-4"
      style={{
        background:
          "linear-gradient(to bottom, #0d1e30 0%, #0b0b0b 50%, #000 90%)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="md:text-8xl text-2xl uppercase tracking-widest font-heading text-white text-center">
        Selected Work
      </h2>

      {/* Project Masonry Style */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full max-w-7xl space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-3xl cursor-pointer group shadow-xl bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link href={project.link} passHref>
              <motion.div
                className="relative w-full h-full overflow-hidden transition-all duration-500"
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded-3xl"
                />
              </motion.div>
            </Link>

            <div className="px-6 py-4">
              <span className="text-sm uppercase font-heading text-blue-400 opacity-80">
                {project.category}
              </span>
              <h3 className="text-2xl font-heading text-white mt-1">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.labels.map((label, i) => (
                  <span
                    key={i}
                    className="bg-blue-400/10 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-400/20"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
