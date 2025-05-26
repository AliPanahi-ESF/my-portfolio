import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

const images = [
  "/ali-about/IMG_4491.webp",
  "/ali.jpg",
  "/ali-about/IMG_4483.webp",
  "/ali-about/IMG_4484.webp",
  "/ali-about/IMG_4489.webp",
  "/ali-about/IMG_4482.webp",
  "/ali-about/IMG_4488.webp",
  "/ali-about/IMG_4485.webp",
  "/ali.jpg",
  "/ali-about/IMG_4480.webp",
  "/ali-about/IMG_4486.webp",
  "/ali-about/IMG_4481.webp",
  "/ali-about/IMG_4487.webp",
  "/ali-about/IMG_4490.webp",
  "/ali-about/IMG_4479.webp",
];

const testimonials = [
  {
    quote:
      "Ali came in with fresh eyes and immediately started improving the design system. He has a real instinct for spotting chaos and cleaning it up.",
    name: "UX Lead at ASML",
    linkedin: "https://www.linkedin.com/in/example1",
  },
  {
    quote:
      "If Ali doesn't know how to do something, he’ll learn it by tomorrow. Probably with a Figma file already started.",
    name: "A friend who's tired of hearing about design",
    linkedin: "https://www.linkedin.com/in/example3",
  },
];

const traits = [
  {
    emoji: "✨",
    title: "I ADAPT FAST, LIKE UNCOMFORTABLY FAST",
    description:
      "Throw me into a messy project, a new team, or a weird constraint — I’ll find my way. I’ve worked in chaotic startups, giant corporates, and everything in between.",
  },
  {
    emoji: "🧹",
    title: "I LEARN WHILE DOING (AND DO WHILE LEARNING)",
    description:
      "If I don’t know something, I figure it out mid-flight. From building systems from scratch to jumping into dev workflows — I do while learning.",
  },
  {
    emoji: "💊",
    title: "I’M NOT PRECIOUS ABOUT THE PROCESS",
    description:
      "I improvise when needed. I care more about delivering the right solution for the right moment than sticking to any perfect process.",
  },
  {
    emoji: "🤍",
    title: "I BRING EMOTION INTO UX (WITHOUT THE DRAMA)",
    description:
      "I want users to feel clarity, trust, and subtle delight. I keep it human — even when things get messy.",
  },
  {
    emoji: "🚀",
    title: "I STAY CURIOUS (AND A LITTLE OBSESSED)",
    description:
      "Whether it’s naming conventions or dashboard design — I’ll go too deep in the best way possible.",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.6, ease: "easeInOut" },
  }),
};

export default function AboutPage() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex(([prev]) => {
      const newIndex = (prev + dir + traits.length) % traits.length;
      return [newIndex, dir];
    });
  };

  const getBlurCard = (offset) => {
    const i = (index + offset + traits.length) % traits.length;
    return (
      <div
        className={`absolute w-full h-full z-0 transition-all duration-500 ${
          offset === -1 ? "-translate-x-60" : "translate-x-60"
        } blur-md opacity-20 pointer-events-none`}
      >
        <Tilt
          tiltEnable={false}
          glareEnable={false}
          className="bg-white/5 p-10 rounded-3xl shadow-inner w-full h-full flex flex-col justify-center items-center"
        >
          <div className="text-4xl mb-2">{traits[i].emoji}</div>
          <h3 className="text-blue-400 font-bold text-sm text-center px-6">
            {traits[i].title}
          </h3>
        </Tilt>
      </div>
    );
  };
  return (
    
<main className="min-h-screen bg-black text-white font-body">
  {/* 👋 Intro Header Above Banner */}
  <section className="pt-28 pb-8 px-6 text-center">
    <h1 className="text-blue-500 font-heading text-5xl md:text-6xl font-bold">
      Hello, I'm Ali.
    </h1>
  </section>

  {/* 🔁 Animated Scrollable Image Banner */}
{/* 🔁 Infinite Scroll Banner with Hover Interaction */}
<section className="relative overflow-hidden w-full border-b border-white/10">
  {/* 🔹 Left & Right gradient edges */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

  {/* 🔁 Scrolling Image Row */}
  <div className="flex gap-6 py-10 px-4 w-max animate-scroll-x hover:[animation-play-state:paused] transition-all duration-300">
    {[...images, ...images].map((src, i) => (
      <div
        key={i}
        className="min-w-[220px] md:min-w-[280px] h-[300px] md:h-[360px] rounded-3xl overflow-hidden relative group transition-all duration-300"
      >
        <Image
          src={src}
          alt={`Ali Photo ${i}`}
          layout="fill"
          objectFit="cover"
          {...(i === 0 ? { priority: true } : { loading: "lazy" })}
          className="group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>
    ))}
  </div>
</section>



      {/* 👋 Intro Section */}
{/* 🔹 INTRO SECTION WITH FIXED GRADIENT LAYERING */}
<section className="relative px-6 py-36 isolate overflow-hidden">
  {/* Background blur circle */}
  <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl z-0" />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black z-0 pointer-events-none" />

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto space-y-10">
    <motion.h1
      className="text-center text-blue-500 font-heading text-5xl md:text-6xl font-bold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
    </motion.h1>

    {[
      "From Iran, based in the Netherlands. A design graduate with a background in front-end development and a never-ending curiosity for how things work (or don’t). Self-taught, self-doubted, and self-corrected — still here. Still building.",
      "I believe good design isn’t about clean pixels — it’s about clarity. The goal is always: make the user breathe easier. Whether that’s a product flow or a visual system, I want people to feel like it makes sense without knowing why.",
      "When not designing, you’ll find me behind a bar pouring drinks, playing with lights at the club, in the gym trying to stay sane, or walking around aimlessly overthinking everything (but with style). Sometimes I write, sometimes I disappear.",
    ].map((text, i) => (
      <motion.p
        key={i}
        className="text-base md:text-lg leading-8 text-white/85 tracking-normal max-w-2xl mx-auto text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.3 + 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {text}
      </motion.p>
    ))}
  </div>
</section>


      {/* 💬 Testimonials */}

<section className="px-6 py-24 bg-neutral-900">
      <h2 className="text-center text-white text-2xl uppercase tracking-widest mb-12 font-heading">
        That’s what they said
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white/5 text-white p-8 rounded-xl shadow-lg flex flex-col justify-between scale-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="italic mb-6 text-base leading-relaxed">“{t.quote}”</p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
              <p className="text-sm font-semibold">{t.name}</p>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <section className="px-6 py-24 flex flex-col items-center text-center relative">
      <h2 className="text-xl uppercase tracking-widest mb-10 font-heading">
        What sets me apart (besides the vibes)
      </h2>

      <div className="relative w-full max-w-2xl h-[420px] flex items-center justify-center">
        {/* ⛓️ Blurred Cards Behind */}
        {getBlurCard(-1)}
        {getBlurCard(1)}

        {/* 👉 Main Animated Card */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute z-10 w-full h-full flex justify-center items-center"
          >
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="bg-white/5 p-10 rounded-3xl shadow-xl w-full h-full flex flex-col justify-center items-center transition duration-500 hover:border hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >
              <div className="text-5xl mb-4">{traits[index].emoji}</div>
              <h3 className="text-blue-400 font-bold mb-3 text-lg md:text-xl">
                {traits[index].title}
              </h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-md">
                {traits[index].description}
              </p>
            </Tilt>
          </motion.div>
        </AnimatePresence>

        {/* ⬅️ Left Button */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-[-40px] md:left-[-60px] z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full shadow-xl transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-blue-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* ➡️ Right Button */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-[-40px] md:right-[-60px] z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full shadow-xl transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-blue-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
    </main>
  );
}