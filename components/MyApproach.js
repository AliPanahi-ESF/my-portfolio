import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function MyApproach() {
  const steps = [
    {
      number: "01",
      title: "Empathize",
      description:
        "Understanding user needs and pain points through research and observation.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Clearly outlining problems and goals to create meaningful design solutions.",
    },
    {
      number: "03",
      title: "Ideate",
      description:
        "Brainstorming and exploring creative solutions to address user needs.",
    },
    {
      number: "04",
      title: "Build & Test",
      description:
        "Developing prototypes and refining through testing and iteration.",
    },
  ];

  return (
    <section
      className="relative px-6 py-24 flex flex-col items-center text-center"
      style={{
        background:
          "linear-gradient(to right, #000 10%, #0b0b0b 30%, #0e1a1d 70%, #000 90%)",
      }}
    >
      <h2 className="md:text-8xl text-xl uppercase tracking-widest mb-10 font-heading text-white">
        My Approach
      </h2>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="relative bg-white/5 text-white p-8 rounded-3xl shadow-xl w-full h-[420px] flex flex-col justify-center items-center transition duration-500 hover:border hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] overflow-hidden group"
            >
              {/* 🔹 Micro shimmer animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

              <span className="text-3xl font-bold text-blue-400 mb-2">
                .{step.number}
              </span>
              <h3 className="text-white font-bold mb-3 text-lg md:text-xl text-center">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed text-center">
                {step.description}
              </p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
