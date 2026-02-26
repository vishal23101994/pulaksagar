"use client";

import { motion } from "framer-motion";
import { Crown, Star, Award, BookOpen, Users } from "lucide-react";

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
    icon: Crown,
    title: "Bharat Gaurav",
    description:
      "Honored with the prestigious Bharat Gaurav recognition for exceptional spiritual leadership and inspiring millions.",
    details:
      "This honor symbolizes national pride and is conferred upon individuals whose life and service elevate the moral and cultural fabric of the nation.",
  },
  {
    icon: Star,
    title: "Rashtra Sant Vishwasant",
    description:
      "Sacred title awarded for unwavering dedication to moral upliftment.",
    details:
      "Recognized for fostering spiritual awakening, ethical awareness, and strengthening values within society.",
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
    icon: BookOpen,
    title: "Author of Spiritual Literature",
    description:
      "Authored dozens of impactful spiritual books.",
    details:
      "His writings guide seekers toward discipline, self-realization, meditation, and inner awakening.",
  },
  {
    icon: Users,
    title: "Founder Inspiration – Pulak Manch",
    description:
      "Founder inspiration behind a nationwide spiritual movement.",
    details:
      "A movement dedicated to character building, youth empowerment, and ethical transformation across India.",
  },
];

export default function AchievementsPage() {
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
        <div className="grid md:grid-cols-2 gap-12">

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
                className="relative rounded-3xl p-10 
                           bg-[#111827] 
                           border border-[#D4AF37]/20
                           shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                           hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
                           transition duration-500
                           overflow-hidden group"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full 
                                  bg-gradient-to-br from-[#D4AF37] to-[#F5E6A5]
                                  flex items-center justify-center
                                  shadow-lg mb-6">
                    <Icon size={30} className="text-black" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-[#D4AF37] mb-4 tracking-wide">
                    {item.title}
                  </h2>

                  {/* Short description */}
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Brief detail */}
                  <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-[#D4AF37]/40 pl-4">
                    {item.details}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}