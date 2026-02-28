"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

/* -------------------------------------------
  Animation variants
--------------------------------------------*/
const easeOutCubic = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: easeOutCubic,
    },
  }),
};

export default function AdvertisementCards() {
  return (
    <section
      className="
        relative py-24 overflow-hidden
        bg-gradient-to-b from-[#000000] via-[#0B0B0B] to-[#111111]
      "
    >
      {/* ✨ Floating spiritual dust */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#CFA73C]/50 blur-lg"
          style={{
            width: Math.random() * 10 + 4,
            height: Math.random() * 10 + 4,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 7 + 6,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🔱 Heading */}
      <div className="relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#C6A75E] tracking-wide">
            Seva & Sahyog
          </h2>

          {/* Gold divider */}
          <div className="mt-4 w-24 md:w-36 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent rounded-full" />

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl text-lg italic text-[#E6C97A]/70">
            A humble offering towards Dharma, Sanskar & Sadhana
          </p>
        </motion.div>
      </div>

      {/* 🪷 Cards (ONLY TWO) */}
      <div
        className="
          relative z-10 max-w-2xl mx-auto px-8
          flex justify-center
          items-stretch justify-center
        "
      >
        {/* ---------------- CARD 1 ---------------- */}
        <TempleCard index={0}>
          <h3 className="text-2xl md:text-3xl tracking-wide leading-snug font-serif text-[#3A2400] mb-4">
            Shri Digambar Jain <br/>Jinsharnam Tirth Trust (Regd.)
          </h3>

          <p className="text-[#3A2400]/90 text-lg leading-relaxed mb-12 max-w-md mx-auto flex-1">
            Contribute towards the preservation and growth of the sacred Jain
            Tirth — a place of tapasya and peace.
          </p>

          <QR src="/images/donation/jinsharnam_qr1.jpg" />

          <FooterText />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2 text-emerald-700 text-lg font-semibold"
          >
            <CheckCircle size={30} strokeWidth={2.5} className="text-emerald-600" />
            Eligible for 80G Tax Exemption
          </motion.div>
        </TempleCard>

        {/* ---------------- CARD 2 ---------------- */}
        {/*<TempleCard index={1}>
          <h3 className="text-3xl md:text-4xl tracking-wide leading-snug font-serif text-[#3A2400] mb-4">
            Vatsalya Dhara Trust (Regd.)
          </h3>

          <p className="text-[#3A2400]/90 text-lg leading-relaxed mb-12 max-w-md mx-auto flex-1">
            Your compassion transforms into food, care and dignity for the needy.
          </p>

          <QR src="/images/donation/vatsalya_qr.jpeg" />

          <FooterText />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2 text-emerald-700 text-lg font-semibold"
          >
            <CheckCircle size={30} strokeWidth={2.5} className="text-emerald-600" />
            Eligible for 80G Tax Exemption
          </motion.div>
        </TempleCard>*/}
      </div>
    </section>
  );
}

/* ======================================================
   Reusable Temple Card Wrapper
====================================================== */
function TempleCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -14, scale: 1.01 }}
      className="
        relative h-full rounded-[2.8rem] p-[3px]
        bg-gradient-to-br from-[#B8860B] via-[#FFD700] to-[#A9711C]
        shadow-[0_50px_120px_rgba(255,215,0,0.35)]
      "
    >
      {/* Inner parchment */}
      <div
        className="
          relative rounded-[2.8rem] px-16 py-20
          min-h-[650px]
          bg-gradient-to-b from-[#FFF3C4] via-[#F5D77A] to-[#E2B85C]
          border border-[#CFA73C]
          flex flex-col text-center overflow-hidden
        "
      >
        {/* Inner dotted manuscript frame */}
        <div
          className="
            absolute inset-6 rounded-[2rem]
            border border-dashed border-[#E2B85C]/60
            pointer-events-none
          "
        />

        {/* Soft breathing aura */}
        <motion.div
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="
            absolute inset-0
            bg-gradient-to-br from-[#FFD97A]/35 to-transparent
            blur-xl
          "
        />

        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

/* ======================================================
   Small helpers
====================================================== */
function QR({ src }: { src: string }) {
  return (
    <div className="
      relative mx-auto w-64 h-70 rounded-4xl
      bg-black p-20
      border-2 border-[#CFA73C]
      shadow-[0_0_40px_rgba(255,215,0,0.6)]
    ">
      <Image
        src={src}
        alt="Donation QR"
        fill
        className="object-contain rounded-lg"
      />
    </div>
  );
}

function FooterText() {
  return (
    <p className="mt-6 text-sm italic text-[#3A2400]/70">
      Scan & offer your contribution
    </p>
  );
}
