// components/Layout.js

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Preloader from "./Preloader";

export default function Layout({ children }) {
  // New state to ensure the component has "mounted" in the browser
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  // This effect runs only once on the client, after the initial render
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // This useEffect handles the custom cursor logic.
  // It will only run after the component has mounted.
  useEffect(() => {
    // Don't run this logic on the server or before mounting
    if (!hasMounted) return;

    const moveCursor = (e) => {
      const whiteCursor = document.getElementById("custom-cursor");
      const blueCursor = document.getElementById("custom-cursor-hover");

      if (!whiteCursor || !blueCursor) return;

      const { clientX: x, clientY: y } = e;
      whiteCursor.style.transform = `translate(${x}px, ${y}px)`;
      blueCursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    const addHoverEffect = () => {
      document.getElementById("custom-cursor-hover")?.classList.add("hover");
    };

    const removeHoverEffect = () => {
      document.getElementById("custom-cursor-hover")?.classList.remove("hover");
    };

    document.addEventListener("mousemove", moveCursor);
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, [hasMounted]); // The effect depends on hasMounted

  // This is the key: on the server, or on the very first browser render,
  // this will return null, avoiding any errors.
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {loading ? (
        <Preloader onAnimationComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <div id="custom-cursor" className="custom-cursor"></div>
          <div id="custom-cursor-hover" className="custom-cursor-hover"></div>
          <main>{children}</main>
        </>
      )}
    </>
  );
}