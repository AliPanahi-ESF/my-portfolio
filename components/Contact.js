import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white pt-28 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900/10 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/background-noise.png')] opacity-5 z-0 mix-blend-soft-light" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading uppercase tracking-widest text-white/80 text-center md:text-left">
            Get in touch
          </h3>
          <a
            href="mailto:alipanahi090@gmail.com"
            className="ml-1 md:ml-6 px-6 py-3 border border-white/20 text-sm md:text-base rounded-full text-white bg-white/5 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition duration-300 backdrop-blur-lg"
          >
            Send Email ↗
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end gap-6 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/AliPanahi-ESF" target="_blank" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alipanahi090/" target="_blank" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>

        </motion.div>
      </div>

      {/* 🔹 Thank You Message */}
      <motion.div
        className="mt-32 w-full max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4 text-white transition duration-300"
          whileHover={{ textShadow: "0px 0px 20px rgba(59,130,246,0.6)" }}
        >
          THANK YOU
        </motion.h3>
        <motion.p
          className="text-sm md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto transition duration-300"
          whileHover={{ textShadow: "0px 0px 12px rgba(255,255,255,0.25)" }}
        >
          You could have been anywhere on the internet, yet you are here.
          <br />
          Thanks for visiting!
        </motion.p>
      </motion.div>
    </footer>
  );
}
