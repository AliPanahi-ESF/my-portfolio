import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MoreAboutAli() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.3 1", "0.8 1"],
  });

  // Zoom-out effect inside the box
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  // Fade-in effect for text and button (Starts later)
  const opacity = useTransform(scrollYProgress, [0.4, 0.9], [0, 1]);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex flex-col items-center justify-center text-white section-noise relative px-6 pb-20"
    >
      {/* 🔹 Styled Title (With More Space Below) */}
      <motion.h2
        className="title text-center uppercase text-6xl md:text-8xl font-heading tracking-wider mb-16 md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        More About Ali
      </motion.h2>

      {/* 🔹 Rounded Image Box with Hover Effect */}
      <motion.div
  className="w-[50vw] md:w-[35vw] lg:w-[30vw] h-auto overflow-hidden rounded-3xl relative group transition-all duration-500"
  whileHover={{ scale: 1.02 }}
>
  {/* ✅ Image with Black & White + Noise Hover Effect */}
  <motion.img
    src="/ali.jpg"
    alt="Ali Panahi"
    className="w-full h-auto aspect-[3/4] object-cover rounded-3xl brightness-90 transition-all duration-500 group-hover:brightness-50 group-hover:grayscale"
    style={{ scale: imageScale }}
  />
  {/* ✅ Noise Overlay for Vintage Effect */}
  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-all duration-500 bg-[url('/background-noise.png')] bg-cover"></div>
</motion.div>


      {/* 🔹 Text & CV Button (Below the Image) */}
      <motion.div
        className="flex flex-col items-center text-center mt-12 md:mt-16 max-w-3xl"
        style={{ opacity }}
      >
        <p className="text-lg md:text-xl opacity-80 leading-relaxed ">
          I’m Ali, a UX/UI designer and front-end developer based in the Netherlands.  
          I love making digital content that connects with people by mixing emotions with design. 
          My work is all about creating something that’s not just visually appealing but also meaningful on a personal level.
        </p>

        {/* ✅ CV Download Button */}
        <motion.a
          href="https://drive.google.com/file/d/1CUr5kEl1WmBMyWGdzSuCq0f8_PWTzumR/view?usp=sharing"
          download
          className="mt-8 px-6 py-3 bg-white text-black rounded-full hover:scale-105 hover:shadow-lg transition"
          whileHover={{ scale: 1.1 }}
        >
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
}
