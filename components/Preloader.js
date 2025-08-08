// components/Preloader.js

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// The component now accepts a function prop called onAnimationComplete
export default function Preloader({ onAnimationComplete }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const minTimeTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2000);

    const heroImage = new window.Image();
    heroImage.src = "/background.webp";
    heroImage.onload = () => {
      setImageLoaded(true);
    };

    return () => {
      clearTimeout(minTimeTimer);
    };
  }, []);

  useEffect(() => {
    if (imageLoaded && minTimeElapsed) {
      setIsComplete(true);
    }
  }, [imageLoaded, minTimeElapsed]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      // When the fade-out animation is done, call the function from the parent
      onAnimationComplete={() => {
        if (isComplete) {
          onAnimationComplete();
        }
      }}
    >
      <motion.h1
        className="loading-text"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        AP
      </motion.h1>
    </motion.div>
  );
}