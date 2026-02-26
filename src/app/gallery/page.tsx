"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ---------------- Premium Sparkle Background ---------------- */
function Sparkles() {
  const sparkles = Array.from({ length: 100 });

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
              boxShadow: "0 0 10px rgba(212,175,55,0.8)",
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-10px); opacity: 1; }
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
    const newIndex =
      (currentIndex - 1 + images.length) % images.length;
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
    <section className="relative min-h-screen py-28 bg-[#0B0F1A] overflow-hidden text-white">

      {/* Sparkles */}
      <Sparkles />

      {/* Soft Gold Radial Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-['Playfair_Display'] text-center
                     bg-gradient-to-r from-[#D4AF37] via-[#F5E6A5] to-[#D4AF37]
                     bg-clip-text text-transparent mb-6 tracking-wider
                     drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
        >
          Divine Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 mb-12 text-lg tracking-wide"
        >
          Sacred moments captured in divine light
        </motion.p>

        <div className="flex justify-center mb-16">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-14">
          {Object.entries(categories).map(([key, label]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveCategory(key)}
              className={`px-7 py-3 rounded-full border font-medium transition-all ${
                activeCategory === key
                  ? "bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "bg-[#111827] text-gray-300 border-[#D4AF37]/30 hover:bg-[#1F2937]"
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
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => openImage(i)}
              className="relative overflow-hidden rounded-2xl 
                         border border-[#D4AF37]/20
                         bg-[#111827]
                         shadow-lg cursor-pointer group
                         hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
                         transition"
            >
              <Image
                src={src}
                alt="Gallery"
                width={400}
                height={400}
                className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
              />
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
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center"
          >
            <div className="absolute inset-0" onClick={closeLightbox} />

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl mx-auto px-6 flex items-center justify-center"
            >
              <Image
                src={selectedImage}
                alt="Selected"
                width={1400}
                height={1000}
                className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl"
              />

              {/* Controls */}
              <div className="fixed top-6 right-6 flex gap-3 z-50">
                <button
                  onClick={downloadImage}
                  className="p-3 rounded-full bg-[#111827]/80 border border-[#D4AF37]/30 text-white hover:bg-[#1F2937]"
                >
                  <Download className="w-5 h-5" />
                </button>

                <button
                  onClick={closeLightbox}
                  className="p-3 rounded-full bg-[#111827]/80 border border-[#D4AF37]/30 text-white hover:bg-[#1F2937]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={prevImage}
                className="fixed left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-[#111827]/80 border border-[#D4AF37]/30 text-white hover:bg-[#1F2937] z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="fixed right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-[#111827]/80 border border-[#D4AF37]/30 text-white hover:bg-[#1F2937] z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white bg-[#111827]/80 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4AF37]/30 text-sm tracking-wide shadow-lg">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}