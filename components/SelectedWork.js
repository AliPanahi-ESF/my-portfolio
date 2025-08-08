import { motion } from "framer-motion";
import Link from "next/link";

// Inline SVG for the arrow icon
const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const projects = [
  {
    title: "UX/UI Design For High-Tech Industry",
    category: "ASML - Graduation Internship",
    labels: ["UX & UI", "Design System", "Prototyping"],
    image: "/asml.JPG",
    link: "/projects/ASML",
  },
  {
    title: "UI Design for Electric Edorado8s",
    category: "Edorado - Internship",
    labels: ["UX & UI Design", "Design System"],
    image: "/edorado.jpg",
    link: "/projects/smart-mobile",
  },
  {
    title: "Branding & UI Design for Lucifer",
    category: "Semester Project",
    labels: ["Branding", "UX & UI", "Front-End"],
    image: "/udiac.jpg",
    link: "/projects/Udiac",
  },
  {
    title: "IOS App - FitPhone",
    category: "Semester Project",
    labels: ["UX & UI", "IOS Development"],
    image: "/fitPhone.png",
    link: "/projects/FitPhone",
  },
  {
    title: "GP Android App",
    category: "Smart Mobile Development",
    labels: ["UX & UI Design", "Android Development"],
    image: "/androidApp.png",
    link: "/projects/gPMobileApp",
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
      <h2 className="md:text-8xl text-4xl uppercase tracking-widest font-heading text-white text-center">
        Selected Work
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 w-full max-w-7xl space-y-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.link} passHref legacyBehavior>
            <motion.a
              // The group class allows us to style child elements on hover
              className="break-inside-avoid block overflow-hidden rounded-3xl cursor-pointer group shadow-xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }} // Keep the subtle lift effect
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Image container */}
              <div className="relative w-full h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  // The image still gets a nice zoom effect from the parent's group-hover
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text content container */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm uppercase font-heading text-blue-400 opacity-80">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-heading text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                  {/* The arrow icon still appears on hover */}
                  <ArrowIcon className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300" size={28} />
                </div>
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
            </motion.a>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}  