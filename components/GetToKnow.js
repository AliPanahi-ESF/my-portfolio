import { motion } from "framer-motion";

export default function GetToKnow() {
  return (
<section className="w-full min-h-screen flex flex-col items-center justify-center text-white section-noise">


      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-heading text-center mb-10">Get to Know Ali</h2>

      {/* Image with Zoom-Out Effect */}
      <motion.div
        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src="/ali.jpg" alt="Ali Panahi" className="w-full h-full object-cover" />
      </motion.div>

      <div className="flex flex-col items-center text-center mt-10">
  <p className="max-w-3xl text-lg opacity-80 leading-relaxed">
    Hi, I’m Ali Panahi, a UX/UI designer and front-end developer based in the Netherlands.  
    I specialize in crafting seamless digital experiences, merging creativity with usability.  
    Passionate about design systems, motion graphics, and innovative web interactions.
  </p>

  <motion.a
    href="/Ali-Panahi-CV.pdf"
    download
    className="mt-8 px-6 py-3 bg-white text-black rounded-full hover:scale-105 hover:shadow-lg transition"
    whileHover={{ scale: 1.1 }}
  >
    Download CV
  </motion.a>
</div>

    </section>
  );
}
