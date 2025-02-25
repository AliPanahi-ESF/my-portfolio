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
    <motion.section 
      ref={sectionRef}
      className="w-full h-auto flex flex-col text-white section-noise gap-10 py-60"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <div className="h-[15%] flex items-center justify-center ">
        <h2 className="text-6xl md:text-8xl  title-text font-heading text-center uppercase tracking-widest">
          My Approach
        </h2>
      </div>

      {/* Steps Row - Single Box on Mobile, Full Grid on Desktop */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row md:gap-6 px-6 md:px-10">
        {steps.map((step, index) => {
          const startRange = index * 0.10;
          const endRange = startRange + 0.20;

          const xOffset = useTransform(scrollYProgress, [startRange, endRange], ["-100%", "0%"]);
          const opacity = useTransform(scrollYProgress, [startRange, endRange, 1], [0, 1, 1]);

          return (
            <motion.div
              key={index}
              className="w-full md:w-1/4 h-[400px] flex flex-col justify-between bg-black text-white p-6 md:p-10 rounded-2xl border border-gray-700 shadow-lg flex-shrink-0"
              style={{ x: xOffset, opacity }}
            >
              {/* Step Number */}
              <span className="text-4xl md:text-5xl font-bold text-red-500 tracking-wider self-start">
                .{step.number}
              </span>

              {/* Step Content - Centered & Balanced */}
              <div className="flex flex-col justify-center flex-grow">
                <h3 className="text-2xl md:text-3xl font-heading tracking-wide text-center">
                  {step.title}
                </h3>
                <p className="mt-4 text-md md:text-lg font-sans leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
