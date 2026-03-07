"use client";

import { motion } from "framer-motion";
import { Crown, Star, Award, BookOpen, Users } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

/* ---------------- Sparkles Background ---------------- */
function Sparkles() {
  const sparkles = Array.from({ length: 90 });

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

const achievements = [
  {
    icon: Award,
    title: "Bharat Gaurav",
    description:
      "Honored with the prestigious Bharat Gaurav recognition for exceptional spiritual leadership and inspiring millions.",
    details:
      "This honor symbolizes national pride and is conferred upon individuals whose life and service elevate the moral and cultural fabric of the nation.",
  },
  {
    icon: Award,
    title: "Rashtra Sant",
    description:
      "Sacred title awarded for unwavering dedication to moral upliftment and spiritual transformation.",
    details:
      "This distinction recognizes extraordinary efforts in guiding society toward ethical living, discipline, and spiritual awakening rooted in Jain philosophy.",
  },
  {
    icon: Award,
    title: "Vishva Sant",
    description:
      "A distinguished national honor acknowledging global spiritual influence and humanitarian vision.",
    details:
      "Bestowed upon revered saints whose teachings transcend regional boundaries, spreading universal values of peace, compassion, and non-violence across communities.",
  },
  {
    icon: Award,
    title: "Shanti Doot Sammaan",
    description:
      "An esteemed recognition celebrating the embodiment of peace, dharma, and spiritual guidance.",
    details:
      "Presented to distinguished saints whose divine discourse and humanitarian service nurture inner transformation, ethical living, and the timeless principles of Jain Dharma.",
  },
  {
    icon: Award,
    title: "Rajkiya Atithi (Multiple States)",
    description:
      "Welcomed as State Guest in multiple regions.",
    details:
      "This distinction reflects governmental respect for contributions toward social harmony, culture, and spiritual unity.",
  },
  {
    icon: Award,
    title: "Author of Spiritual Literature",
    description:
      "Authored dozens of impactful spiritual books.",
    details:
      "His writings guide seekers toward discipline, self-realization, meditation, and inner awakening.",
  },
  {
    icon: Award,
    title: "Founder Inspiration – Pulak Manch",
    description:
      "Founder inspiration behind a nationwide spiritual movement.",
    details:
      "A movement dedicated to character building, youth empowerment, and ethical transformation across India.",
  },
];

const awardImages = [
  { src: "/images/awards/Bharat Gaurav - Medal.jpeg", title: "Bharat Gaurav Medal" },
  { src: "/images/awards/Bharat Gaurav.jpeg", title: "Bharat Gaurav Award" },
  { src: "/images/awards/Rashtra Sant Alankaran.jpeg", title: "Rashtra Sant Alankaran" },
  { src: "/images/awards/Vishva Sant Alankaran.jpeg", title: "Vishva Sant Alankaran" },
  { src: "/images/awards/Shaanti Doot.jpeg", title: "Shaanti Doot Sammaan" },
];

export default function AchievementsPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [zoom, setZoom] = useState(1);
  return (
    <section className="relative min-h-screen py-28 px-6 bg-[#0B0F1A] overflow-hidden text-white">

      {/* Sparkles */}
      <Sparkles />

      {/* Soft radial glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-['Playfair_Display'] text-center
                     bg-gradient-to-r from-[#D4AF37] via-[#F5E6A5] to-[#D4AF37]
                     bg-clip-text text-transparent mb-6 tracking-wider
                     drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          Achievements & Honors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          A divine journey recognized with national reverence and spiritual respect
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-24">

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="gold-card relative rounded-3xl p-10
                           bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E]
                           border border-[#3B2A00]/20
                           text-[#2A2006]
                           shadow-[0_25px_70px_rgba(0,0,0,0.6)]
                           hover:shadow-[0_0_40px_rgba(0,0,0,0.6)]
                           transition duration-500
                           overflow-hidden group"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full 
                                  bg-[#2A2006]
                                  flex items-center justify-center
                                  shadow-lg mb-6">
                    <Icon size={30} className="text-[#F5E2A0]" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl text-black font-semibold mb-4 tracking-wide">
                    {item.title}
                  </h2>

                  {/* Short description */}
                  <p className="text-[#3B2A00] leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Brief detail */}
                  <p className="text-[#3B2A00] text-sm leading-relaxed border-l-2 border-[#2A2006]/40 pl-4">
                    {item.details}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
        {/* ================= AWARDS GALLERY ================= */}

        <div className="mt-32">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] text-center mb-16
                       bg-gradient-to-r from-[#D4AF37] via-[#F5E6A5] to-[#D4AF37]
                       bg-clip-text text-transparent"
          >
            Award Certificates
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">

            {awardImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                onClick={() => {
                  setZoom(1);
                  setSelectedImage(img);
                }}
                className="relative cursor-pointer group"
              >

                {/* GOLD FRAME */}
                <div className="p-[10px] rounded-xl
                                bg-gradient-to-b from-[#F5E6A5] via-[#D4AF37] to-[#8B6B1F]
                                shadow-[0_20px_60px_rgba(0,0,0,0.9)]
                                group-hover:shadow-[0_0_60px_rgba(212,175,55,0.6)]
                                transition duration-500">

                  {/* INNER FRAME */}
                  <div className="bg-[#05070F] p-4 rounded-lg">

                    {/* IMAGE */}
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-[420px] object-contain
                                 transition duration-700
                                 group-hover:scale-105"
                    />

                  </div>

                </div>

                {/* TITLE */}
                <p className="text-center text-[#E6D3A3] mt-6 text-lg tracking-wide">
                  {img.title}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
        {selectedImage &&
          createPortal(
            <div className="fixed inset-0 z-[2147483647] bg-black/95 backdrop-blur-lg flex items-center justify-center">

              {/* CONTROL PANEL */}
              <div className="absolute top-6 right-6 flex items-center gap-3
                              bg-black/50 backdrop-blur-md
                              border border-white/10
                              px-3 py-2 rounded-full shadow-xl">

                <button
                  onClick={() => setZoom((z) => Math.min(z + 0.2, 4))}
                  className="w-10 h-10 rounded-full
                             bg-[#D4AF37] text-black
                             flex items-center justify-center
                             font-bold hover:scale-110 transition"
                >
                  +
                </button>

                <button
                  onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}
                  className="w-10 h-10 rounded-full
                             bg-[#D4AF37] text-black
                             flex items-center justify-center
                             font-bold hover:scale-110 transition"
                >
                  −
                </button>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 rounded-full
                             bg-white/10 text-white
                             flex items-center justify-center
                             hover:bg-red-500 transition"
                >
                  ✕
                </button>

              </div>

              {/* IMAGE */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center max-w-[90vw] max-h-[90vh]"
              >

                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  style={{ transform: `scale(${zoom})` }}
                  className="max-h-[80vh] object-contain transition duration-300 select-none"
                />

                {/* TITLE */}
                <p className="text-[#E6D3A3] text-lg mt-6 tracking-wide text-center">
                  {selectedImage.title}
                </p>

              </motion.div>

            </div>,
            document.body
          )}
      </div>
    </section>
  );
}