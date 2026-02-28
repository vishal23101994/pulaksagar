"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ---------------- Premium Sparkle Background ---------------- */
function Sparkles() {
  const sparkles = Array.from({ length: 120 });

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {sparkles.map((_, i) => {
        const size = Math.random() * 3 + 1;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.7,
              boxShadow: "0 0 14px rgba(212,175,55,0.9)",
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-12px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("maharaj");
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = {
    maharaj: "Pulak Sagar Maharaj",
    thoughts: "Motivational Thoughts",
    tirth: "Jinsharnam Tirth",
    logo: "Logos & Identity"
  };

  useEffect(() => {
    async function loadImages() {
      try {
        const res = await fetch(`/api/gallery/${activeCategory}`);
        const data = await res.json();
        if (Array.isArray(data)) setImages(data);
        else setImages([]);
      } catch {
        setImages([]);
      }
    }
    loadImages();
  }, [activeCategory]);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = selectedImage!;
    link.download = selectedImage!.split("/").pop()!;
    link.click();
  };

  return (
    <section className="relative min-h-screen py-28 bg-[#0A0E18] overflow-hidden text-white">

      {/* Sparkles */}
      <Sparkles />

      {/* Deep Gold Background Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_65%)]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.06),transparent_70%)]"></div>

      <div className="relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-['Playfair_Display'] text-center
                     bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#D4AF37]
                     bg-clip-text text-transparent mb-6 tracking-wider
                     drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]"
        >
          Divine Gallery
        </motion.h1>

        <p className="text-center text-gray-400 mb-14 text-lg tracking-wide">
          Sacred moments glowing in eternal light
        </p>

        {/* Category Buttons - Fully Royal */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {Object.entries(categories).map(([key, label]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 border ${
                activeCategory === key
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#F5E6A5] text-black shadow-[0_0_25px_rgba(212,175,55,0.6)] border-transparent"
                  : "bg-[#121826] border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#1B2335] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              }`}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => openImage(i)}
              className="relative group cursor-pointer"
            >
              {/* Golden Glow Aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#D4AF37] opacity-25 group-hover:opacity-100 blur-xl transition duration-500"></div>

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border-3 border-[#D4AF37]/80 bg-[#111827]/80 backdrop-blur-xl shadow-2xl">
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <Image
                  src={src}
                  alt="Gallery"
                  width={400}
                  height={400}
                  className="w-full h-[240px] object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center"
          >
            <div className="absolute inset-0" onClick={closeLightbox} />

            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative w-full max-w-6xl mx-auto px-6 flex items-center justify-center"
            >
              <Image
                src={selectedImage}
                alt="Selected"
                width={1400}
                height={1000}
                className="max-h-[85vh] w-auto object-contain rounded-3xl shadow-[0_0_60px_rgba(212,175,55,0.5)]"
              />

              {/* Controls */}
              <div className="fixed top-6 right-6 flex gap-4 z-50">
                <button
                  onClick={downloadImage}
                  className="p-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5E6A5] text-black shadow-lg hover:scale-110 transition"
                >
                  <Download className="w-5 h-5" />
                </button>

                <button
                  onClick={closeLightbox}
                  className="p-3 rounded-full bg-[#111827] border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#1B2335]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={prevImage}
                className="fixed left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-[#111827]/80 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#1B2335]"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="fixed right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-[#111827]/80 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#1B2335]"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#111827]/90 border border-[#D4AF37]/40 px-6 py-2 rounded-full text-[#D4AF37] text-sm shadow-lg">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}