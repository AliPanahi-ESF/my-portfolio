"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function SmartMobileProject() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center text-white px-6 md:px-10 py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #000 10%, #0b0b0b 30%, #0e1a1d 70%, #000 90%)",
      }}
    >
      {/* 🔹 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-heading mb-4">GeweldigHuisartz</h2>
        <p className="text-md md:text-xl text-white/70">
          GP Mobile App  • Client: Fontys UAC
        </p>
      </motion.div>

      {/* 🔹 Notion Embed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full max-w-6xl mb-10"
      >
        <iframe
          src="https://alipanahi.notion.site/ebd/f4f278d5ba7f478587de1786872bee2a"
          width="100%"
          height="900"
          frameBorder="0"
          allowFullScreen
          className="rounded-3xl shadow-xl"
        ></iframe>
      </motion.div>

      {/* 🔙 Back Button at Bottom Left */}
      <motion.a
        href="/"
        className="absolute bottom-6 left-6 bg-white/5 border border-white/10 backdrop-blur-lg rounded-full px-5 py-2 flex items-center gap-2 text-sm hover:border-blue-500 hover:text-blue-400 transition-all z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <FaArrowLeft /> Back to Portfolio
      </motion.a>
    </section>
  );
}
