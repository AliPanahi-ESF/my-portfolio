import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-10 py-20 section-noise">
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-heading text-center mb-10">Contact Me</h2>

      {/* Email Link */}
      <motion.a
        href="mailto:your.email@example.com"
        className="text-lg md:text-2xl text-gray-300 hover:text-white transition"
        whileHover={{ scale: 1.1 }}
      >
        your.email@example.com
      </motion.a>

      {/* Social Media Links */}
      <div className="flex gap-6 mt-6">
        <motion.a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:scale-110 transition"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:scale-110 transition"
        >
          <FaLinkedin />
        </motion.a>
      </div>
    </section>
  );
}
