"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Heart, BookOpen, Layers, Download, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

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

export default function PulakManchPage() {
  return (
    <section className="relative min-h-screen bg-black text-[#F5D98F] overflow-hidden">
      {/* Sparkles */}
      <Sparkles />

      {/* GLOBAL GOLDEN AURA */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400/10 blur-[160px] rounded-full" />
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden py-28 px-6 border-b border-yellow-600/20 bg-gradient-to-br from-[#0b0b0b] via-[#111] to-black">

        {/* Decorative Gold Top Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        {/* Soft Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center md:text-left space-y-8"
          >
            {/* Improved Premium Logo */}
            <div className="flex justify-center md:justify-start mb-8">
              <div className="relative">

                {/* Soft Golden Glow */}
                <div className="absolute -inset-4 bg-[#FFD700]/20 blur-xl rounded-full"></div>

                {/* Gold Ring */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 
                                rounded-full 
                                bg-gradient-to-br from-[#F5E2A0] via-[#D4AF37] to-[#B8860B]
                                p-[2px]">

                  {/* Inner Black Background */}
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">

                    <Image
                      src="/images/gallery/logo/pulakmanch.png"
                      alt="Pulak Manch Logo"
                      width={120}
                      height={120}
                      className="object-contain scale-95"
                      priority
                    />

                  </div>
                </div>

              </div>
            </div>

            <h1 className="font-serif leading-tight">
              <span className="block text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFF1B8] to-[#FFB800] bg-clip-text text-transparent drop-shadow-[0_5px_25px_rgba(255,215,0,0.35)]">
                Pulak Manch
              </span>

              <span className="block text-3xl md:text-5xl lg:text-6xl font-light text-[#FFE6A3] mt-2">
                Parivar
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-xl text-white/80">
              A nationwide spiritual and service-oriented youth movement inspired by
              the blessings of{" "}
              <strong className="text-[#FFD700]">
                Acharya Shri Pulak Sagar Ji Maharaj
              </strong>,
              dedicated to discipline, character building and national consciousness.
            </p>

            {/* Tagline */}
            <div className="text-[#FFD700] font-semibold tracking-wider text-lg">
              Breaking Not… Linking is Our Identity
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >

            {/* Large Aura */}
            <div className="absolute w-[500px] h-[500px] bg-[#FFD700]/10 rounded-full blur-[180px]" />

            {/* Decorative Frame */}
            <div className="relative p-4 rounded-[40px] bg-gradient-to-br from-[#2a2006] via-[#3b2a00] to-[#1a1403]
                            border border-[#D4AF37]/30
                            shadow-[0_0_80px_rgba(255,215,0,0.15)]">

              <div className="p-2 rounded-[30px] bg-gradient-to-br from-[#F5E2A0] to-[#D4AF37]">

                <Image
                  src="/images/gallery/maharaj/img4.jpeg"
                  alt="Acharya Shri Pulak Sagar Ji Maharaj"
                  width={420}
                  height={520}
                  className="rounded-[24px] object-cover"
                  priority
                />

              </div>

            </div>

          </motion.div>

        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto py-20 px-6 pb-24 space-y-20">

        {/* ABOUT */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gold-card bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E] 
          p-10 rounded-3xl border border-[#3B2A00]/20 
          shadow-[0_25px_70px_rgba(0,0,0,0.6)] text-[#2A2006]"
        >
          <h2 className="text-3xl font-serif font-semibold mb-4 text-black">
            About Pulak Manch Parivar
          </h2>
          <p className="text-lg leading-relaxed text-justify text-[#3B2A00]">
            Pulak Manch Parivar is not a crowd driven by emotional gatherings,
            but a disciplined collective of dedicated volunteers working under
            the guidance of Gurudev’s philosophy of compassion, simplicity, and
            service. Since 1997, this movement has transformed youthful energy
            into organized, value-based social service across India.
          </p>
        </motion.section>

        {/* ORGANIZATIONS + MEMBERSHIP */}
        <motion.section
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[{
            icon: <Layers />,
            title: "Organizations Under Pulak Manch",
            items: [
              "Akhil Bharatiya Pulak Jan Chetna Manch (Regd.)",
              "Rashtriya Jain Mahila Jagriti Manch (Regd.)",
              "Pulak Manch – Youth Wing",
              "Pulak Manch – Girls Wing",
              "Pulak Manch – Senior Group",
              "Pulak Manch – Little Champs",
            ],
          },{
            icon: <Users />,
            title: "Membership Categories",
            items: [
              "Adult Members",
              "Children & Students",
              "Little Champs (Free Membership)",
            ],
          }].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="gold-card bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E]
              p-8 rounded-3xl border border-[#3B2A00]/20
              text-[#2A2006]
              shadow-[0_20px_50px_rgba(0,0,0,0.5)]
              hover:shadow-[0_0_40px_rgba(0,0,0,0.6)]
              transition-all"
            >
              <div className="mb-3 text-black">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-black font-semibold">{card.title}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {card.items.map((item) => (
                  <div
                    key={item}
                    className="
                      bg-black
                      border border-yellow-600/20
                      rounded-xl
                      px-4 py-3
                      text-sm
                      text-yellow-100/90
                      transition-all duration-300
                      hover:border-yellow-400/50
                      hover:shadow-[0_0_20px_rgba(255,215,0,0.25)]
                      hover:-translate-y-1
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* MEMBERSHIP */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gold-card bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E]
          p-10 rounded-3xl border border-[#3B2A00]/20
          text-[#2A2006]
          shadow-[0_25px_70px_rgba(0,0,0,0.6)] text-center"
        >
          <h2 className="text-3xl font-serif font-semibold mb-4 bg-[#3B2A00] bg-clip-text text-transparent">
            Membership & Contribution
          </h2>

          <p className="text-lg leading-relaxed mb-10 text-[#3B2A00]">
            • One-time Registration / Application Fee: <strong>₹1100 per member</strong><br />
            • Little Champs: <strong>Free</strong><br />
            • Monthly & Annual contributions are decided locally by each unit.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {[
              { title: "Pulak Manch", desc: "Membership Form", link: "/forms/membership_form.pdf" },
              { title: "JMJM", desc: "Ladies Membership Form", link: "/forms/JMJM.pdf" },
              { title: "PJCM", desc: "Gents Membership Form", link: "/forms/PJCM.pdf" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group bg-black text-black p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all"
              >
                <Download className="text-[#F5E2A0] mx-auto mb-3" />
                <h3 className="text-[#F5E2A0] text-lg font-semibold">{item.title}</h3>
                <p className="text-[#F5E2A0] text-sm opacity-80">{item.desc}</p>
              </motion.a>
            ))}

            <div className="col-span-full flex justify-center mt-10">
              <a
                href="https://jinsharnammedia.com/organization/pulak-manch/register"
                className="relative group inline-flex items-center justify-center
                           px-30 py-4 rounded-full
                           font-semibold text-lg tracking-wide
                           text-[#F5E2A0]
                           bg-black
                           border border-[#D4AF37]
                           overflow-hidden
                           transition-all duration-500
                           hover:-translate-y-1
                           hover:shadow-[0_0_60px_rgba(255,215,0,0.6)]"
              >

                {/* Text */}
                <span className="relative z-10">
                  Register Online (₹1100)
                </span>
              </a>
            </div>

          </div>
        </motion.section>

        {/* VALUES */}
        <motion.section className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <Heart />, title: "Service & Compassion",
            text: "Transforming service-oriented thoughts into consistent action for society."
          },{
            icon: <BookOpen />, title: "Personal Development",
            text: "Building discipline, leadership, and spiritual awareness in youth."
          },{
            icon: <Users />, title: "Identity & Recognition",
            text: "Creating a meaningful identity through teamwork and responsibility."
          }].map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="gold-card bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E]
              p-8 rounded-2xl border border-[#3B2A00]/20
              text-[#2A2006]
              shadow-[0_20px_50px_rgba(0,0,0,0.5)]
              hover:shadow-[0_0_40px_rgba(0,0,0,0.6)]
              transition-all text-center"
            >
              <div className=" text-[#2A2006] mb-3 flex justify-center">{v.icon}</div>
              <h3 className=" text-[#2A2006] text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-[#2A2006]">{v.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* CONTACT */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E]
          p-8 rounded-2xl border border-[#3B2A00]/20
          text-[#2A2006]
          shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          hover:shadow-[0_0_40px_rgba(0,0,0,0.6)]
          transition-all text-center"
        >
          <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
            Contact & Offices
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-center">

            {/* National Office */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black p-10 rounded-2xl shadow-lg border border-amber-200"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#F5E2A0]">
                <strong>National Office</strong>
              </h3>

              <div className="space-y-2 text-[#F5E2A0] text-sm leading-relaxed">
                <p className="text-lg">Vatsalya Bhawan</p>
                <p>P-75, Street Number 5, Bihari Colony Extension,</p>
                <p>Bihari Colony, Shahdara,</p>
                <p>Delhi – 110032</p>

                <div className="pt-4 space-y-2 flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#F5E2A0]" />
                    9810900699
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#F5E2A0]" />
                    9810900042
                  </div>
                </div>
              </div>
            </motion.div>

            {/* National Support Office */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-black p-10 rounded-2xl shadow-lg border border-amber-200"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#F5E2A0]">
                <strong>National Support Office</strong>
              </h3>

              <div className="space-y-2 text-[#F5E2A0] text-sm leading-relaxed">
                <p className="text-lg">Shri Digambar Jain Jinsharnam Tirth Trust (Regd.)</p>
                <p>Mumbai-Surat Highway No 48, Uplat,</p>
                <p>Tehsil Talasari, District Palghar,</p>
                <p>Maharashtra – 401606</p>

                <div className="pt-4 space-y-2 flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#F5E2A0]" />
                    7987176553
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#F5E2A0]" />
                    8799598079
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

      </main>
    </section>
  );
}