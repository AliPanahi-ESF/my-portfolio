import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Hero() {
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

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <motion.section
      id="home"
      className="hero section-noise relative flex justify-center items-center min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* 🔹 Framed Background Image Box */}
      <div className="absolute top-[1%] left-[1%] right-[1%] h-[99%] rounded-3xl overflow-hidden z-0 shadow-2xl border border-white/10">
        <Image
          src="/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
          priority
            unoptimized
        />
      </div>

      {/* 🔹 Hero Animated Title */}
      <div className="relative z-10 wrap text-center px-4">
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

      {/* 🔹 Bottom Left Callout */}
      <motion.div
        className="absolute bottom-16 left-6 md:left-20 flex flex-col items-start text-left w-auto max-w-[700px] min-h-[200px] p-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <motion.h2
          className="text-3xl md:text-6xl font-bold text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I Make
        </motion.h2>

        <div className="flex items-center mt-2">
          <motion.button
            className="w-14 h-14 rounded-full bg-white text-black font-bold flex items-center justify-center mr-4 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
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
