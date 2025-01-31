import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MyApproach() {
  const steps = [
    { number: "01", title: "Empathize", description: "Understanding user needs and pain points through research and observation." },
    { number: "02", title: "Define", description: "Clearly outlining problems and goals to create meaningful design solutions." },
    { number: "03", title: "Ideate", description: "Brainstorming and exploring creative solutions to address user needs." },
    { number: "04", title: "Build & Test", description: "Developing prototypes and refining through testing and iteration." },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
<section className="w-full h-screen flex flex-col text-white section-noise">

      {/* Section Title */}
      <div className="h-[15%] flex items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-heading text-center">My Approach</h2>
      </div>

      {/* Steps Row */}
      <div className="h-[85%] w-full flex overflow-hidden">
        {steps.map((step, index) => {
          // Adjust the scrollYProgress range so all 4 boxes appear correctly
          const startRange = index * 0.10; // Adjusted for all four boxes
          const endRange = startRange + 0.25; // Ensures full transition

          const xOffset = useTransform(scrollYProgress, [startRange, endRange], ["-100%", "0%"]);
          const opacity = useTransform(scrollYProgress, [startRange, endRange], [0, 1]);

          return (
            <motion.div
              key={index}
              className="w-1/4 flex flex-col justify-center items-center bg-black text-white p-10 border-l border-gray-700 h-full"
              style={{ x: xOffset, opacity }}
            >
              {/* Step Number */}
              <span className="text-xl md:text-2xl font-bold text-gray-400 tracking-widest">{step.number}</span>

              {/* Placeholder Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-500 rounded-full mt-6"></div>

              {/* Step Title */}
              <h3 className="text-2xl md:text-3xl font-heading mt-6">{step.title}</h3>

              {/* Step Description */}
              <p className="mt-4 text-md md:text-lg font-sans text-center px-6 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
