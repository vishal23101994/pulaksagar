"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Heart, BookOpen, Layers, Download } from "lucide-react";

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
      <header className="relative overflow-hidden py-24 px-6 border-b border-yellow-600/20 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-black">

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
              Pulak Manch <br />
              Parivar
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-xl text-yellow-100/80">
              A nationwide spiritual and service-oriented youth movement inspired
              by the blessings of{" "}
              <strong className="text-yellow-400">Acharya Shri Pulak Sagar Ji Maharaj</strong>,
              dedicated to discipline, character building and national consciousness.
            </p>

            <div className="text-yellow-400 font-semibold tracking-wide">
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
            <div className="absolute w-96 h-96 bg-yellow-500/20 rounded-full blur-[150px] animate-pulse" />

            <div className="relative p-3 rounded-3xl bg-[#111]/80 backdrop-blur-md border border-yellow-600/30 shadow-[0_0_60px_rgba(255,215,0,0.15)]">
              <Image
                src="/images/gallery/maharaj/img4.jpeg"
                alt="Acharya Shri Pulak Sagar Ji Maharaj"
                width={420}
                height={520}
                className="rounded-2xl object-cover"
                priority
              />
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
          className="bg-[#111]/80 backdrop-blur-md p-10 rounded-3xl border border-yellow-600/30 shadow-[0_0_40px_rgba(255,215,0,0.08)]"
        >
          <h2 className="text-3xl font-serif font-semibold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            About Pulak Manch Parivar
          </h2>
          <p className="text-lg leading-relaxed text-justify text-yellow-100/80">
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
              className="bg-[#121212] p-8 rounded-3xl border border-yellow-600/20 hover:border-yellow-400/50 shadow-lg hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] transition-all"
            >
              <div className="mb-3 text-yellow-400">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">{card.title}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {card.items.map((item) => (
                  <div
                    key={item}
                    className="
                      bg-black/60
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
          className="bg-[#111]/80 p-10 rounded-3xl border border-yellow-600/30 shadow-[0_0_40px_rgba(255,215,0,0.08)] text-center"
        >
          <h2 className="text-2xl font-serif font-semibold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Membership & Contribution
          </h2>

          <p className="text-lg leading-relaxed mb-10 text-yellow-100/80">
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
                className="group bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-400 text-black p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all"
              >
                <Download className="mx-auto mb-3" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.a>
            ))}

            <div className="col-span-full flex justify-center mt-6">
              <a
                href="https://jinsharnammedia.com/organization/pulak-manch/register"
                className="
                  bg-gradient-to-r
                  from-yellow-500 via-amber-500 to-yellow-400
                  text-black font-semibold
                  px-10 py-3
                  rounded-full
                  shadow-lg
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(255,215,0,0.7)]
                  transition-all duration-300
                "
              >
                Register Online (₹1100)
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
              className="bg-[#121212] p-8 rounded-2xl border border-yellow-600/20 text-center hover:border-yellow-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all"
            >
              <div className="mb-3 flex justify-center text-yellow-400">{v.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">{v.title}</h3>
              <p className="text-yellow-100/80">{v.text}</p>
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
          className="bg-[#111]/80 p-10 rounded-3xl border border-yellow-600/30 shadow-[0_0_40px_rgba(255,215,0,0.08)]"
        >
          <h2 className="text-2xl font-serif font-semibold mb-6 text-center bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Contact & Offices
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-sm text-center text-yellow-100/80">
            <div>
              <strong>National Office</strong><br />
              Vatsalya Bhawan, P-75, Gali No. 5,<br />
              Bihari Colony Extension, Bihari Colony, <br />Shahdara, Delhi – 110032<br />
              📞 9810900699
            </div>
            <div>
              <strong>National Support Office</strong><br />
              Shri Digambar Jain Tirthdham,<br />
              Mumbai–Surat Highway, Umargam Post,<br />
              Talasari, Palghar (MH) – 401606<br />
              📞 7987176553
            </div>
          </div>
        </motion.section>

      </main>
    </section>
  );
}