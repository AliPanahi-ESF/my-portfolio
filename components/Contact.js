import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // ✅ Restore icons

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-10 py-20 overflow-hidden">
      {/* Scrolling Title Animation (Smooth Loop) */}
      <div className="w-full overflow-hidden whitespace-nowrap relative">
        <motion.div
          className="flex space-x-10 text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold uppercase tracking-wide text-gray-200"
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {/* Two copies of text for seamless looping */}
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

      {/* Email Link */}
      <motion.a
        href="alipanahi090@gmail.com"
        className="text-lg md:text-2xl text-gray-300 hover:text-white transition mt-10"
        whileHover={{ scale: 1.1 }}
      >
        alipanahi090@gmail.com
      </motion.a>

      {/* Social Media Links (With Icons Restored) */}
      <div className="flex gap-6 mt-6">
        <motion.a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:scale-110 transition"
        >
          <FaGithub /> {/* ✅ Restored GitHub Icon */}
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/alipanahi090/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:scale-110 transition"
        >
          <FaLinkedin /> {/* ✅ Restored LinkedIn Icon */}
        </motion.a>
      </div>
    </section>
  );
}
