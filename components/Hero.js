import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Hero() {
  // 1. Initialize state to a default (e.g., false for desktop).
  //    This ensures server and client match on first render.
  const [isMobile, setIsMobile] = useState(false);

  // 2. This effect runs ONLY on the client after the component mounts.
  //    It safely checks the window size and updates the state.
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice(); // Check on initial load
    window.addEventListener("resize", checkDevice);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkDevice);
  }, []); // Empty array means this runs only once on mount

  // 3. This effect handles the animations. 
  //    It re-runs whenever `isMobile` changes.
  useEffect(() => {
    // If desktop, set up mouse listener
    if (!isMobile) {
      const handleMouseMove = (e) => {
        let normalizedPosition = e.pageX / (window.innerWidth / 2) - 1;
        let speedSlow = 100 * normalizedPosition;
        let speedFast = 200 * normalizedPosition;

        document.querySelectorAll(".spanSlow").forEach((span) => {
          span.style.transform = `translateX(${speedSlow}px)`;
        });
        document.querySelectorAll(".spanFast").forEach((span) => {
          span.style.transform = `translateX(${speedFast}px)`;
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Cleanup function for this effect
      return () => window.removeEventListener("mousemove", handleMouseMove);
    } 
    // If mobile, set up device tilt listener
    else {
      const handleOrientation = (e) => {
        const gamma = e.gamma;
        if (gamma !== null) {
          const speedSlow = gamma * 1.5;
          const speedFast = gamma * 3;
          document.querySelectorAll(".spanSlow").forEach((span) => {
            span.style.transform = `translateX(${speedSlow}px)`;
          });
          document.querySelectorAll(".spanFast").forEach((span) => {
            span.style.transform = `translateX(${speedFast}px)`;
          });
        }
      };

      window.addEventListener("deviceorientation", handleOrientation);

      // Cleanup function for this effect
      return () => window.removeEventListener("deviceorientation", handleOrientation);
    }
  }, [isMobile]); // This effect depends on the 'isMobile' state

  // --- Your full JSX goes here ---
  return (
    <motion.section
      id="home"
      className="hero section-noise relative flex justify-center items-center min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="absolute top-[1%] left-[1%] right-[1%] h-[99%] rounded-3xl overflow-hidden z-0 shadow-2xl border border-white/10">
        <Image
          src="/background.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="relative z-10 wrap text-center px-4">
        <div className="line">
          <div className="left">
            <div className="content">
              <motion.span
                className="spanSlow title-text"
                initial={isMobile ? { x: -30, opacity: 0 } : false}
                animate={isMobile ? { x: 0, opacity: 1 } : false}
                transition={isMobile ? { duration: 1.2, delay: 0.3 } : false}
              >
                Ali Panahi
              </motion.span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <motion.span
                className="spanSlow title-text"
                initial={isMobile ? { x: 30, opacity: 0 } : false}
                animate={isMobile ? { x: 0, opacity: 1 } : false}
                transition={isMobile ? { duration: 1.2, delay: 0.3 } : false}
              >
                Ali Panahi
              </motion.span>
            </div>
          </div>
        </div>

        <div className="line">
          <div className="left">
            <div className="content">
              <motion.span
                className="spanFast subtitle-text"
                initial={isMobile ? { x: -30, opacity: 0 } : false}
                animate={isMobile ? { x: 0, opacity: 1 } : false}
                transition={isMobile ? { duration: 1.2, delay: 0.4 } : false}
              >
                UX/UI Designer
              </motion.span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <motion.span
                className="spanFast subtitle-text"
                initial={isMobile ? { x: 30, opacity: 0 } : false}
                animate={isMobile ? { x: 0, opacity: 1 } : false}
                transition={isMobile ? { duration: 1.2, delay: 0.4 } : false}
              >
                UX/UI Designer
              </motion.span>
            </div>
          </div>
        </div>

        <div className="line">
          <div className="left">
            <div className="content">
              <motion.span
                className="spanFast subtitle-text"
                initial={isMobile ? { x: -30, opacity: 0 } : false}
                animate={isMobile ? { x: 0, opacity: 1 } : false}
                transition={isMobile ? { duration: 1.2, delay: 0.5 } : false}
              >
                Front-End Developer
              </motion.span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <motion.span
                className="spanFast subtitle-text"
                initial={isMobile ? { x: 30, opacity: 0 } : false}
                animate={isMobile ? { x: 0, opacity: 1 } : false}
                transition={isMobile ? { duration: 1.2, delay: 0.5 } : false}
              >
                Front-End Developer
              </motion.span>
            </div>
          </div>
        </div>
      </div>

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