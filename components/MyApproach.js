import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function MyApproach() {
  const steps = [
    { number: "01", title: "Empathize", description: "Understanding user needs and pain points through research and observation." },
    { number: "02", title: "Define", description: "Clearly outlining problems and goals to create meaningful design solutions." },
    { number: "03", title: "Ideate", description: "Brainstorming and exploring creative solutions to address user needs." },
    { number: "04", title: "Build & Test", description: "Developing prototypes and refining through testing and iteration." },
  ];

  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isHorizontalScroll, setIsHorizontalScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current?.getBoundingClientRect().top;
      if (sectionTop <= window.innerHeight * 0.2 && sectionTop > -window.innerHeight * 0.5) {
        setIsHorizontalScroll(true);
        document.body.style.overflow = "hidden"; // Lock vertical scrolling
      } else {
        setIsHorizontalScroll(false);
        document.body.style.overflow = "auto"; // Restore vertical scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (isHorizontalScroll) {
      const handleWheel = (event) => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += event.deltaY * 2; // Convert vertical scroll to horizontal
          event.preventDefault();
        }

        // Unlock vertical scrolling once user reaches the last box
        const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        if (scrollContainerRef.current.scrollLeft >= maxScroll - 10) {
          setIsHorizontalScroll(false);
          document.body.style.overflow = "auto"; // Enable vertical scrolling
        }
      };

      window.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, [isHorizontalScroll]);

  return (
    <section ref={sectionRef} className="w-full h-screen flex flex-col text-white section-noise">
      {/* Section Title */}
      <div className="h-[15%] flex items-center justify-center">
        <h2 className="text-6xl md:text-8xl font-heading text-center uppercase tracking-widest">
          My Approach
        </h2>
      </div>

      {/* Steps Row - Horizontal Scrolling */}
      <div
        ref={scrollContainerRef}
        className="h-[85%] w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        {steps.map((step, index) => {
          return (
            <motion.div
              key={index}
              className="w-screen h-full flex flex-col justify-center items-center bg-black text-white p-10 border-l border-gray-700 flex-shrink-0 snap-center"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Step Number */}
              <span className="text-4xl md:text-5xl font-bold text-gray-400 tracking-wider">
                {step.number}
              </span>

              {/* Step Title & Description */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-3xl md:text-4xl font-heading uppercase tracking-wide mt-6">
                  {step.title}
                </h3>
                <p className="mt-4 text-md md:text-lg font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
