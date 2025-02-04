import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MoreAboutAli() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0.3 1", "0.8 1"] });

  // Zoom-out effect inside the box
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  // Fade-in effect for text and button (Starts later)
  const opacity = useTransform(scrollYProgress, [0.4, 0.9], [0, 1]);

  return (
    <section ref={ref} className="w-full min-h-screen flex flex-col items-center justify-center text-white section-noise relative">
      {/* Styled Title with Animated Text Effect */}
      <h2 className="title text-center uppercase text-[6rem] sm:text-[8rem] md:text-[10rem] font-heading tracking-wider">
  More About Ali
</h2>


      {/* Rounded Box with Zoom-Out Image */}
      <div className="w-[80vw] h-[80vh] md:w-[60vw] md:h-[60vh] overflow-hidden rounded-3xl">
        <motion.img 
          src="ali.jpg" 
          alt="Ali Panahi" 
          className="w-full h-full object-cover"
          style={{ scale: imageScale }}
        />
      </div>

      {/* Text & CV Button (Below the Image) */}
      <motion.div
        className="flex flex-col items-center text-center mt-10 max-w-3xl"
        style={{ opacity }}
      >
        <p className="text-lg md:text-xl opacity-80 leading-relaxed">
          I’m Ali Panahi, a UX/UI designer and front-end developer based in the Netherlands.  
          I specialize in crafting seamless digital experiences, merging creativity with usability.  
          Passionate about design systems, motion graphics, and innovative web interactions.
        </p>

        {/* CV Download Button */}
        <motion.a
          href="/Ali-Panahi-CV.pdf"
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
