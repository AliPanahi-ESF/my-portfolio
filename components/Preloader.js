import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  // State to track the two conditions for completion
  const [imageLoaded, setImageLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // This effect will run only once when the component mounts
  useEffect(() => {
    // 1. Set a minimum display time for the preloader (e.g., 2000ms)
    const minTimeTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2000);

    // 2. Preload the hero background image
    // IMPORTANT: Make sure this path matches the image used in your Hero component
    const heroImage = new window.Image();
    heroImage.src = "/background.webp";
    heroImage.onload = () => {
      setImageLoaded(true);
    };

    // Cleanup function to clear the timer if the component unmounts
    return () => {
      clearTimeout(minTimeTimer);
    };
  }, []); // The empty dependency array ensures this runs only once

  // This effect checks if both conditions are met to trigger the exit animation
  useEffect(() => {
    if (imageLoaded && minTimeElapsed) {
      setIsComplete(true);
    }
  }, [imageLoaded, minTimeElapsed]); // This runs whenever imageLoaded or minTimeElapsed changes

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      // When isComplete becomes true, animate opacity to 0
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      // Add a onAnimationComplete prop to hide the preloader after it fades out
      onAnimationComplete={() => {
        if (isComplete) {
          // You could set display: 'none' here if needed, but opacity 0 is often enough
        }
      }}
    >
      {/* Replaced percentage with a more elegant, continuous pulsing animation */}
      <motion.h1
        className="loading-text"
        // Animate the opacity to create a gentle "breathing" effect
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2.5,
          repeat: Infinity, // Loop the animation forever
          ease: "easeInOut",
        }}
      >
        AP
      </motion.h1>
    </motion.div>
  );
}