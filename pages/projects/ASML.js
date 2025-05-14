import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ASMLProject() {
  return (
    <div className="w-full text-white bg-black section-noise">
      {/* 1. Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Graduation Internship at ASML
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Reduced UI inconsistencies and improved user workflow efficiency across high-tech tooling software.
        </motion.p>

        {/* New: Large Showcase Image */}
        <motion.div
          className="mt-10 max-w-5xl w-full rounded-3xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/asml.JPG" alt="ASML Overview" width={1600} height={900} className="w-full object-cover rounded-3xl" />
        </motion.div>

        <motion.div
          className="mt-6 border border-blue-500/50 rounded-2xl px-6 py-4 flex flex-col md:flex-row gap-4 text-sm md:text-base backdrop-blur-md bg-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span>🕒 6 Months</span>
          <span>🎯 My Role: UX/UI Design, Design System, Research</span>
          <span>🧠 Team: Designers, Engineers, PO</span>
        </motion.div>
      </section>

      {/* 2. Background & Problem */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Background & Problem</h2>
          <p className="opacity-80">
            Imagine trying to operate ten different machines, each with their own random button layout. That’s what software engineers at ASML were dealing with.
            Through early observations and informal usability testing, it became clear that tool interfaces were inconsistent, confusing, and frankly unfriendly. This slowed down workflows and caused frustration, especially when moving between different tools built by different teams.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <Image src="/mismatched-ui.png" alt="Inconsistent UI" width={600} height={400} className="object-cover w-full h-auto" />
        </motion.div>
      </section>

      {/* New: Previous UI Section */}
      <section className="py-24 px-10 bg-neutral-900">
        <h2 className="text-3xl font-bold mb-10 text-center">Before the Redesign</h2>
        <motion.div
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/before-redesign.png" alt="Previous UI" width={1200} height={700} className="w-full object-cover rounded-3xl" />
        </motion.div>
      </section>

      {/* 3. About ASML */}
      <section className="bg-neutral-900 py-24 px-10 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          What is ASML?
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ASML is the leading supplier of photolithography systems for the semiconductor industry. The tools are critical, complex, and used in controlled environments by operators and engineers.
        </motion.p>
      </section>

      {/* 4. The Users */}
      <section className="py-24 px-10">
        <h2 className="text-3xl font-bold mb-10 text-center">Who We Designed For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Operators", "Software Engineers", "Designers"].map((role, i) => (
            <motion.div
              key={i}
              className="bg-white/5 p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2">{role}</h3>
              <p className="text-sm opacity-70">
                {role === "Operators" && "Want familiarity between tools and easy readability."}
                {role === "Software Engineers" && "Need reusable UI patterns and consistency."}
                {role === "Designers" && "Seek a system to align with development without confusion."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Focus Areas */}
      <section className="py-24 px-10">
        <h2 className="text-3xl font-bold mb-10 text-center">Design Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["UI Audit", "Design Principles", "Modular Components", "Usability Testing"].map((area, i) => (
            <motion.div
              key={i}
              className="bg-white/5 p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2">{area}</h3>
              <p className="text-sm opacity-70">
                {area === "UI Audit" && "Mapped inconsistencies and best practices across tools."}
                {area === "Design Principles" && "Defined shared visual direction to align efforts."}
                {area === "Modular Components" && "Built flexible, atomic Figma components."}
                {area === "Usability Testing" && "Early testing with engineers to validate ideas."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Final Deliverables */}
      <section className="py-24 px-10">
        <h2 className="text-3xl font-bold mb-10 text-center">Final Deliverables</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Design System", "UI Guidelines", "Developer Handoff"].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/5 p-6 rounded-xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-sm opacity-70">
                {item === "Design System" && "Modular Figma library for future projects."}
                {item === "UI Guidelines" && "Defined do’s and don’ts for consistency."}
                {item === "Developer Handoff" && "Clear specs, tokens, and interactive flows."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New: Final Product Demo */}
      <section className="py-24 px-10 bg-neutral-900">
        <h2 className="text-3xl font-bold mb-10 text-center">Final Product Preview</h2>
        <motion.div
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/final-demo.png" alt="Final Demo UI" width={1600} height={900} className="w-full object-cover rounded-3xl" />
        </motion.div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href="https://yourprototype.link"
            target="_blank"
            className="bg-blue-500 px-6 py-3 text-white rounded-full hover:scale-105 transition"
          >
            Explore Prototype ↗
          </Link>
          <Link
            href="https://yourfigmafile.link"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition"
          >
            View Figma File ↗
          </Link>
        </div>
      </section>

      {/* 7. Takeaways */}
      <section className="py-24 px-10 bg-neutral-800">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Takeaways</h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>✅ Interviews gave 80% of the insights. Don’t skip talking to users. </p>
          <p>📚 You’re not designing beauty — you’re solving operational pain points.</p>
          <p>💬 A design system is a shared language, not a polished file.</p>
        </motion.div>
      </section>
    </div>
  );
}
