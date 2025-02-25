import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader"; // Preloader Component
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Preloader duration

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      const whiteCursor = document.getElementById("custom-cursor");
      const blueCursor = document.getElementById("custom-cursor-hover");

      if (!whiteCursor || !blueCursor) return; // 🛑 Avoid errors if elements don't exist

      const { clientX: x, clientY: y } = e;

      // Move white cursor (default)
      whiteCursor.style.transform = `translate(${x}px, ${y}px)`;

      // Move blue cursor with a slight delay for smooth effect
      requestAnimationFrame(() => {
        blueCursor.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const addHoverEffect = () => {
      const blueCursor = document.getElementById("custom-cursor-hover");
      if (blueCursor) blueCursor.classList.add("hover");
    };

    const removeHoverEffect = () => {
      const blueCursor = document.getElementById("custom-cursor-hover");
      if (blueCursor) blueCursor.classList.remove("hover");
    };

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          {/* White Cursor */}
          <div id="custom-cursor" className="custom-cursor"></div>
          {/* Blue Cursor */}
          <div id="custom-cursor-hover" className="custom-cursor-hover"></div>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
