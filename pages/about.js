import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { useState, useEffect, useRef } from "react";

// --- Your existing data arrays (images, testimonials, traits) ---
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
    quote: `Ali impressed us with his professionalism, initiative, and ability to adapt quickly to a highly technical and unfamiliar domain`,
    name: "Senior Developer at ASML",
    linkedin: "https://www.linkedin.com/in/keriplumstead/",
  },
  {
    quote: `Ali’s leadership and proactive mindset stood out. He independently planned and executed his project, engaged effectively with a wide range of stakeholders, and even took the initiative to enroll in personal development courses offered at ASML`,
    name: "Senior Developer at ASML",
    linkedin: "https://www.linkedin.com/in/keriplumstead/",
  },
];
const traits = [
  {
    emoji: "✨",
    title: "I ADAPT FAST, LIKE UNCOMFORTABLY FAST",
    description: "Throw me into a messy project, a new team, or a weird constraint, I’ll find my way. I’ve worked in chaotic startups, giant corporates, and everything in between.",
  },
  {
    emoji: "🧹",
    title: "I LEARN WHILE DOING (AND DO WHILE LEARNING)",
    description: "If I don’t know something, I figure it out mid-flight. From building systems from scratch to jumping into dev workflows, I do while learning.",
  },
  {
    emoji: "💊",
    title: "I’M NOT PRECIOUS ABOUT THE PROCESS",
    description: "I improvise when needed. I care more about delivering the right solution for the right moment than sticking to any perfect process.",
  },
  {
    emoji: "🤍",
    title: "I BRING EMOTION INTO UX (WITHOUT THE DRAMA)",
    description: "I want users to feel clarity, trust, and subtle delight. I keep it human , even when things get messy.",
  },
  {
    emoji: "🚀",
    title: "I STAY CURIOUS (AND A LITTLE OBSESSED)",
    description: "Whether it’s naming conventions or dashboard design , I’ll go too deep in the best way possible.",
  },
];
const variants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.9, transition: { duration: 0.6, ease: "easeInOut" } }),
};

// --- NEW: Hand Icon for the Drag Hint ---
const HandIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M10.4,12.3c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0l5.7,5.7c0.3,0.3,0.3,0.8,0,1.1c-0.3,0.3-0.8,0.3-1.1,0L10.4,12.3z" />
    <path d="M18.9,13.8c0.2,0,0.4-0.1,0.5-0.2c0.3-0.3,0.3-0.8,0-1.1l-6-6c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l6,6C18.5,13.7,18.7,13.8,18.9,13.8z" />
    <path d="M21.2,10.3c-0.3-0.3-0.8-0.3-1.1,0l-2.6,2.6c-0.3,0.3-0.3,0.8,0,1.1c0.2,0.2,0.4,0.2,0.5,0.2s0.4-0.1,0.5-0.2l2.6-2.6C21.5,11.1,21.5,10.6,21.2,10.3z" />
    <path d="M11.5,10.2c0.3,0.3,0.8,0.3,1.1,0l1.9-1.9c0.3-0.3,0.3-0.8,0-1.1s-0.8-0.3-1.1,0l-1.9,1.9C11.2,9.4,11.2,9.9,11.5,10.2z" />
    <path d="M12.3,15.8c-0.3-0.3-0.8-0.3-1.1,0l-1.9,1.9c-0.3,0.3-0.3,0.8,0,1.1c0.2,0.2,0.4,0.2,0.5,0.2s0.4-0.1,0.5-0.2l1.9-1.9C12.6,16.6,12.6,16.1,12.3,15.8z" />
    <path d="M8.2,2.5C5.6,2.5,3.5,4.6,3.5,7.2v5.6c0,2.6,2.1,4.7,4.7,4.7h2.8c1.3,0,2.6-0.5,3.5-1.5l2.6-2.6c0.8-0.8,1.2-1.8,1.2-2.8V7.2c0-2.6-2.1-4.7-4.7-4.7H8.2z M17.1,10.3c-0.3,0.3-0.8,0.3-1.1,0s-0.3-0.8,0-1.1l0,0c0.3-0.3,0.8-0.3,1.1,0C17.4,9.5,17.4,10,17.1,10.3z M13.6,6.8c-0.3,0.3-0.8,0.3-1.1,0s-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0C13.9,6,13.9,6.5,13.6,6.8z M10.1,6.8c-0.3,0.3-0.8,0.3-1.1,0s-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0C10.4,6,10.4,6.5,10.1,6.8z M6.6,10.3c-0.3,0.3-0.8,0.3-1.1,0s-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0C6.9,9.5,6.9,10,6.6,10.3z" />
  </svg>
);


export default function AboutPage() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  // --- NEW: State to control the visibility of the drag hint ---
  const [showDragHint, setShowDragHint] = useState(true);

  const constraintsRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const paginate = (dir) => {
    setIndex(([prev]) => {
      const newIndex = (prev + dir + traits.length) % traits.length;
      return [newIndex, dir];
    });
  };

  const getBlurCard = (offset) => {
    const i = (index + offset + traits.length) % traits.length;
    return (
      <div className={`absolute w-full h-full z-0 transition-all duration-500 ${offset === -1 ? "-translate-x-60" : "translate-x-60"} blur-md opacity-20 pointer-events-none`}>
        <Tilt tiltEnable={false} glareEnable={false} className="bg-white/5 p-10 rounded-3xl shadow-inner w-full h-full flex flex-col justify-center items-center">
          <div className="text-4xl mb-2">{traits[i].emoji}</div>
          <h3 className="text-blue-400 font-bold text-sm text-center px-6">{traits[i].title}</h3>
        </Tilt>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-black text-white font-body">
      {/* ... Intro Header ... */}
      <section className="pt-28 pb-8 px-6 text-center">
        <h1 className="text-blue-500 font-heading text-5xl md:text-6xl font-bold">Hello, I'm Ali.</h1>
      </section>

      {/* --- UPDATED IMAGE BANNER SECTION --- */}
      <section ref={constraintsRef} className="relative overflow-hidden w-full border-b border-white/10 cursor-grab active:cursor-grabbing">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

        {/* --- NEW: Draggable Hint Overlay --- */}
        <AnimatePresence>
          {isMobile && showDragHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
              <div className="flex items-center gap-2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                <motion.div
                  animate={{ x: [-8, 8, -8] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <HandIcon className="w-5 h-5" />
                </motion.div>
                <span className="text-sm font-medium">Swipe to explore</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          ref={bannerRef}
          drag={isMobile ? "x" : false}
          dragConstraints={constraintsRef}
          // --- NEW: Hide hint on drag start ---
          onDragStart={() => setShowDragHint(false)}
          className={`flex gap-6 py-10 px-4 w-max ${!isMobile ? 'animate-scroll-x hover:[animation-play-state:paused]' : ''}`}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="min-w-[220px] md:min-w-[280px] h-[300px] md:h-[360px] rounded-3xl overflow-hidden relative group transition-all duration-300">
              <Image src={src} alt={`Ali Photo ${i}`} layout="fill" objectFit="cover" {...(i === 0 ? { priority: true } : { loading: "lazy" })} className="group-hover:scale-110 transition-transform duration-700 ease-out pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ... Rest of your page content (Intro, Testimonials, Traits) ... */}
      <section className="relative px-6 py-36 isolate overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black z-0 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <motion.h1 className="text-center text-blue-500 font-heading text-5xl md:text-6xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}></motion.h1>
          {[
            "From Iran, based in the Netherlands. A design graduate with a background in front-end development and a never-ending curiosity for how things work (or don’t). Self-taught, self-doubted, and self-corrected , still here. Still building.",
            "I believe good design isn’t about clean pixels, it’s about clarity. The goal is always: make the user breathe easier. Whether that’s a product flow or a visual system, I want people to feel like it makes sense without knowing why.",
            "When not designing, you’ll find me behind a bar pouring drinks, playing with lights at the club, in the gym trying to stay sane, or walking around aimlessly overthinking everything (but with style). Sometimes I write, sometimes I disappear.",
          ].map((text, i) => (
            <motion.p key={i} className="text-base md:text-lg leading-8 text-white/85 tracking-normal max-w-2xl mx-auto text-left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.3 + 0.5, duration: 0.6 }} viewport={{ once: true }}>
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 bg-neutral-900">
        <h2 className="text-center text-white text-2xl uppercase tracking-widest mb-12 font-heading">That’s what they said</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} className="h-full">
              <motion.div className="bg-white/5 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between h-full border border-transparent transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.6 }} viewport={{ once: true }}>
                <p className="italic mb-6 text-base leading-relaxed">“{t.quote}”</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 flex flex-col items-center text-center relative">
        <h2 className="text-xl uppercase tracking-widest mb-10 font-heading">What sets me apart (besides the vibes)</h2>
        <div className="relative w-full max-w-2xl h-[420px] flex items-center justify-center">
          {getBlurCard(-1)}
          {getBlurCard(1)}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div key={index} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="absolute z-10 w-full h-full flex justify-center items-center">
              <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} glareEnable={true} glareMaxOpacity={0.2} className="bg-white/5 p-10 rounded-3xl shadow-xl w-full h-full flex flex-col justify-center items-center transition duration-500 hover:border hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                <div className="text-5xl mb-4">{traits[index].emoji}</div>
                <h3 className="text-blue-400 font-bold mb-3 text-lg md:text-xl">{traits[index].title}</h3>
                <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-md">{traits[index].description}</p>
              </Tilt>
            </motion.div>
          </AnimatePresence>
          <button onClick={() => paginate(-1)} className="absolute left-[-40px] md:left-[-60px] z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full shadow-xl transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-400"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={() => paginate(1)} className="absolute right-[-40px] md:right-[-60px] z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full shadow-xl transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>
    </main>
  );
}