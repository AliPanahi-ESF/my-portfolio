import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // Delay before hiding
          return 100;
        }
        return oldProgress + 1;
      });
    }, 20); // Adjust speed if needed

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Loading Text (Bigger & Centered) */}
      <motion.h1
        className="text-6xl md:text-8xl font-bold text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading {progress}%
      </motion.h1>

      {/* Left-to-right transition effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
