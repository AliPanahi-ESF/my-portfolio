import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="w-screen h-screen flex flex-col justify-center items-center text-white relative section-noise">

      {/* Name Animation */}
      <motion.h1
        className="text-7xl sm:text-8xl md:text-[10rem] font-bold uppercase tracking-widest text-center font-[Cinzel]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        ALI PANAHI
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-400 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      >
        UX/UI Designer & Front-End Developer
      </motion.p>

      {/* Navigation Menu */}
      <nav className="absolute top-10 w-full px-10">
        <ul className="flex justify-between text-lg w-full">
          {[
            { en: "HOME", fa: "خانه" },
            { en: "WORK", fa: "کار" },
            { en: "ABOUT", fa: "درباره" },
            { en: "CONTACT", fa: "تماس" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer text-xl sm:text-2xl md:text-3xl font-[Cinzel]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="relative group">
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.fa}
                </span>
                <span className="group-hover:opacity-0 transition-opacity duration-300">
                  {item.en}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
