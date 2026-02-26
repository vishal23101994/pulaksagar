"use client";

import { motion } from "framer-motion";

export default function SacredTitle({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[var(--deep-maroon)]">
        {title}
      </h2>

      <div className="mt-4 h-[2px] w-24 mx-auto bg-[var(--sacred-gold)] rounded-full"></div>
    </motion.div>
  );
}
