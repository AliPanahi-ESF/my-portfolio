import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id= "contact" className="w-full min-h-[60vh] flex flex-col items-center justify-between bg-black text-white px-10 py-20 pt-30 section-noise relative overflow-hidden">
      {/* 🔹 Liquify Hover Effect */}
      <div className="absolute inset-0 bg-cover bg-center pointer-events-none liquify-effect" />

      {/* 🔹 Scrolling Title Animation */}
      <div className="w-full overflow-hidden whitespace-nowrap relative mb-10">
        <motion.div
          className="flex space-x-10 text-[3rem] sm:text-[4.5rem] md:text-[6rem] font-heading uppercase tracking-wide text-gray-200"
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex space-x-10">
              {Array(10)
                .fill("Contact Me ✦")
                .map((text, i) => (
                  <span key={i} className="inline-block">{text}</span>
                ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🔹 Contact Info (Fade-in Animation) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center w-full"
      >
        {/* 🔹 "Send me DM!" with Bigger Size & Font */}
        <motion.a
          href="mailto:alipanahi090@gmail.com"
          className="text-10xl md:text-9xl font-heading title text-center uppercase tracking-widest text-gray-300 relative group"
          whileHover={{ scale: 1.1 }}
        >
          Shot me an Email!
          {/* 🔹 Underline Animation on Hover */}
          <span className="absolute left-0 bottom-0 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </motion.a>
      </motion.div>

      {/* 🔹 Footer Bottom Section */}
      <div className="w-full flex justify-between items-center mt-12 px-6 relative">
        {/* Social Media Logos - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
          <motion.a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:scale-110 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/alipanahi090/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:scale-110 transition"
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* APloco.design - Aligned to Right */}
        <motion.div
          className="text-gray-400 text-xs md:text-sm tracking-widest uppercase opacity-60 ml-auto"
          whileHover={{ opacity: 1, scale: 1.05 }}
        >
          APloco.design
        </motion.div>
      </div>
    </section>
  );
}
