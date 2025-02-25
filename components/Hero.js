import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [mouseX, setMouseX] = useState(0);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      let normalizedPosition = e.pageX / (width / 2) - 1;
      let speedSlow = 100 * normalizedPosition;
      let speedFast = 200 * normalizedPosition;

      document.querySelectorAll(".spanSlow").forEach((span) => {
        span.style.transform = `translateX(${speedSlow}px)`;
      });

      document.querySelectorAll(".spanFast").forEach((span) => {
        span.style.transform = `translateX(${speedFast}px)`;
      });
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <motion.section
      id = "home" className="hero section-noise relative flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }} // Start hidden & moved down
      animate={{ opacity: 1, y: 0 }} // Fade in & move up
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth effect
    >
      {/* Wrap for Main Title */}
      <div className="wrap text-center">
        {/* Title: "Ali Panahi" */}
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow title-text">Ali Panahi</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow title-text">Ali Panahi</span>
            </div>
          </div>
        </div>

        {/* Subtitle Line 1: "UX/UI Designer" */}
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanFast subtitle-text">UX/UI Designer</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanFast subtitle-text">UX/UI Designer</span>
            </div>
          </div>
        </div>

        {/* Subtitle Line 2: "Front-End Developer" */}
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanFast subtitle-text">Front-End Developer</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanFast subtitle-text">Front-End Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Intro Section (Bottom-Left) */}
      <motion.div
        className="absolute bottom-16 left-16 md:bottom-20 md:left-20 flex flex-col items-start text-left w-auto max-w-[700px] min-h-[200px] p-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {/* 🔹 Layer 1: "I Make" */}
        <motion.h2
          className="text-3xl md:text-6xl font-bold text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I Make
        </motion.h2>

        {/* 🔹 Layer 2: Scroll Button + "Awesome" */}
        <div className="flex items-center mt-2">
          <motion.button
            className="w-14 h-14 rounded-full bg-white text-black font-bold flex items-center justify-center mr-4 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            ↓
          </motion.button>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Awesome
          </motion.h2>
        </div>

        {/* 🔹 Layer 3: Typewriting Effect (With Looping Text) */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold mt-2 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Typewriter
            words={["Design", "Development", "Branding", "Experience"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={240}
            deleteSpeed={140}
            delaySpeed={1000}
          />
        </motion.h2>
      </motion.div>
    </motion.section>
  );
}
