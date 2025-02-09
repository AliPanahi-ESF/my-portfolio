import { useEffect, useState } from "react";

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
    <section className="hero">
      <div className="wrap">
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
    </section>
  );
}
