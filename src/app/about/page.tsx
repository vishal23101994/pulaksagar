"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Landmark,
  MapPin,
  Medal,
  Quote,
  Rss,
  Shield,
  Swords,
  User,
  Users,
} from "lucide-react";

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

export default function AboutPage() {
  return (
    <main className="relative bg-gradient-to-b from-[#0F0F0F] via-[#141414] to-[#0F0F0F] text-[#E8E6E3] overflow-hidden">
      {/* Sparkles */}
      <Sparkles />

      {/* Om Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] text-[320px] font-serif text-[#C6A75E] select-none">
        ॐ
      </div>

      {/* ================= HERO ================= */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28 z-10">

        {/* Golden Aura Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-full bg-gradient-to-b from-[#C6A75E]/20 via-transparent to-[#C6A75E]/10 blur-3xl pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tight bg-gradient-to-r from-[#C6A75E] via-[#F5E6B2] to-[#C6A75E] bg-clip-text text-transparent drop-shadow-[0_5px_20px_rgba(198,167,94,0.3)]">
              Rashtrasant Manogyacharya <br />
              Shree Pulak Sagar Ji Gurudev
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[#CFCFCF] leading-relaxed">
              Pulak Sagar Ji is a revered <strong className="text-[#C6A75E]">Digambara Jain Sant</strong>. 
              Gurudev’s inspiring <em>pravachans</em> illuminate countless lives through 
              the eternal wisdom of Jain Dharma.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link
                href="/pravachan"
                className="rounded-full bg-gradient-to-r from-[#C6A75E] to-[#E0C97A] px-8 py-3 font-semibold text-black shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(198,167,94,0.6)] transition"
              >
                Watch Pravachans →
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#C6A75E]/40 px-8 py-3 font-semibold text-[#E8E6E3] hover:bg-[#C6A75E] hover:text-black transition"
              >
                Invite for Discourse
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#C6A75E]/20 blur-3xl rounded-full"></div>

            <div className="relative p-4 rounded-[40px] bg-gradient-to-br from-[#FFF6C5] to-[#D4AF37] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/gallery/maharaj/19.jpg"
                alt="Acharyashri Pulak Sagar Ji"
                width={560}
                height={420}
                className="rounded-[30px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= BIOGRAPHY ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gold-card relative rounded-3xl bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E] border border-[#3B2A00]/20 text-[#2A2006] shadow-[0_25px_80px_rgba(0,0,0,0.6)] p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#2A2006] text-center mb-10">
            Biography
          </h2>

          <div className="space-y-8 text-[#3B2A00] leading-relaxed text-lg text-justify">

            <div className="md:flex md:gap-12 md:flex-row-reverse">

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <p className="mb-3">
                  A divine soul was born in the small yet blessed village of{" "}
                  <strong>Dhamtari</strong> (Chhattisgarh) on{" "}
                  <strong>11 May 1970</strong> — none other than{" "}
                  <strong>Bharat Gaurav Acharyashri 108 Pulak Sagar Ji Gurudev</strong>.
                  His arrival brought joy, honor, and peace to the family of{" "}
                  <strong>Shravak Shresthi Late. Shri Bhikamchand Jain</strong> and{" "}
                  <strong>Mahila Ratna Late. Smt. Gopi Devi ‘Kusum’ Jain</strong>.
                  Before initiation, his name was <strong>Singhai Paras Jain</strong> (Guddu/Dai) — a name
                  that reflected the purity and brilliance of his spirit.
                </p>
                <p>
                  Raised in a deeply religious Jain family, Paras Ji developed a natural inclination
                  toward spiritual texts. He listened with devotion to Jain scriptures from his mother
                  and grandmother — the early seeds of renunciation were sown in his heart. The family
                  astrologer foretold that he would become a great saint, illuminating countless lives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ y: -8 }}
                className="relative mt-6 md:mt-0 md:w-[340px] group"
              >

                {/* Soft Base Glow */}
                <div className="absolute -inset-3 rounded-3xl bg-[#C6A75E]/25 blur-2xl 
                                opacity-70 group-hover:opacity-100 
                                transition duration-500"></div>

                {/* Golden Frame */}
                <div className="relative rounded-[28px] 
                                bg-gradient-to-br from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E] 
                                p-[3px]
                                shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                                group-hover:shadow-[0_0_60px_rgba(198,167,94,0.6)]
                                transition duration-500">

                  {/* Inner Dark Layer */}
                  <div className="relative rounded-[24px] bg-[#111] overflow-hidden">

                    <Image
                      src="/images/gallery/maharaj/20.jpg"
                      alt="Acharyashri Pulak Sagar Ji"
                      width={340}
                      height={500}
                      className="rounded-[24px] object-cover 
                                 transition duration-500 
                                 group-hover:scale-105"
                    />  

                  </div>
                </div>

                {/* Caption */}
                <p className="text-center text-sm mt-4 text-[#000000] italic font-medium">
                  “Spreading the light of Jain wisdom with compassion and truth.”
                </p>

              </motion.div>
            </div>

            {/* 🌼 Remaining Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <p>
                At <strong>23</strong>, after meeting{" "}
                <strong>Acharya Shri Vidyasagar Ji Gurudev</strong>, his quest for truth intensified.
                Realizing the impermanence of material life, he took{" "}
                <strong>Brahmacharya Vrat</strong> on <strong>27 January 1993</strong> at{" "}
                <em>Madhiya Ji Tirth, Jabalpur (M.P.)</em>. Impressed by his determination and purity,{" "}
                <strong>Acharya Shri Pushpadant Sagar Ji</strong> honored him with{" "}
                <strong>Alok Diksha</strong> on <strong>27 January 1994</strong> at{" "}
                <em>Gopachal Parvat, Gwalior</em>, granting him the sacred{" "}
                <em>pichhi</em> and <em>kamandal</em>. He received{" "}
                <strong>Muni Diksha</strong> on <strong>11 December 1995</strong> at{" "}
                <em>Anandpuri, Kanpur (U.P.)</em>.
              </p>

              <p>
                By the divine grace of his Gurus, Muni Shri 108 Pulak Sagar Ji discovered the ultimate
                truth. Moving beyond pride and attachment, he began tireless{" "}
                <em>vihar</em> — traveling across metros and remote villages alike (Delhi, Meerut, Agra,
                Gwalior, Jaipur, Indore, Mumbai, Surat, Nagpur, Ajmer, Saharanpur, Sikar, and more) to
                spread the light of Jain dharma with a heart full of compassion.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= DIKSHA JOURNEY ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-serif text-[#C6A75E] mb-12 text-center">
          Diksha Journey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { title: "Brahmacharya Vrat", date: "27 Jan 1993", icon: <Shield /> },
            { title: "Alok Diksha", date: "27 Jan 1994", icon: <Swords /> },
            { title: "Muni Diksha", date: "11 Dec 1995", icon: <User /> },
            { title: "Acharya Pad", date: "29 Nov 2019", icon: <Medal /> },
          ].map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E] border border-[#3B2A00]/20 text-[#2A2006] hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-2xl p-6 text-center hover:shadow-[0_0_40px_rgba(198,167,94,0.4)] transition"
            >
              <div className="flex justify-center text-[#2A2006] mb-4">
                {i.icon}
              </div>
              <h3 className="text-lg text-black font-semibold">{i.title}</h3>
              <p className="text-[#3B2A00] mt-2">{i.date}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-[#BFBFBF] text-center">
          With a single purpose — <em>seva</em> and <em>dharma-prabhavana</em> — Gurudev reached even the most remote
          villages lacking basic infrastructure, ensuring the message of truth and non-violence touches every heart.
        </p>

      </section>
      {/* PROFILE OVERVIEW GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-serif text-[#C6A75E] mb-12 text-center">
          Profile Overview
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <User />, label: 'Former Name', value: 'Singhai Paras Jain (Guddu, Dai)' },
            { icon: <Calendar />, label: 'Date of Birth', value: '11 May 1970' },
            { icon: <MapPin />, label: 'Place of Birth', value: 'Dhamtari (Chhattisgarh)' },
            { icon: <MapPin />, label: 'Native Town', value: 'Pindrai (M.P.)' },
            { icon: <Users />, label: 'Father', value: 'Shravak Shresthi Late. Bhikamchand Jain' },
            { icon: <Users />, label: 'Mother', value: "Mahila Ratna Late. Gopi Devi 'Kusum' Jain" },
            { icon: <GraduationCap />, label: 'Secular Education', value: 'B.A.' },
            { icon: <Calendar />, label: 'Home Renunciation', value: '27 January 1993' },
            { icon: <BookOpen />, label: 'Celibacy Vrat', value: 'Acharya Shri Vidyasagar Ji, Madhiya Ji Tirth, Jabalpur (M.P.)' },
            { icon: <BookOpen />, label: 'Ailak / Alok Diksha', value: '27 Jan 1994, Gopachal Parvat, Gwalior (M.P.)' },
            { icon: <BookOpen />, label: 'Muni Diksha', value: '11 Dec 1995, Anandpuri, Kanpur (U.P.)' },
            { icon: <Medal />, label: 'Acharya Post', value: '29 Nov 2019, Pushpagiri Tirth (M.P.)' },
            { icon: <Users />, label: 'Initiation Guru', value: 'Acharya Shri Pushpadant Sagar Ji, Pushpagiri Praneta' },
            { icon: <Quote />, label: 'Identity', value: 'Heart-touching preaching; explains complex spirituality with simplicity & humor' },
            { icon: <Rss />, label: 'Mouthpiece / Magazine', value: "‘Pulak Vani’ (Monthly)" },
            { icon: <Medal />, label: 'Honors', value: 'Bharat Gaurav, Rashtra Sant Vishwasant, Shantidoot, Rajkiya Atithi (many states)' },
            { icon: <BookOpen />, label: 'Literature', value: 'Dozens of books; powerful, practical writing' },
            { icon: <Users />, label: 'Organization', value: 'Akhil Bhartiya Pulak Manch Family' },
            { icon: <Landmark />, label: 'Central Office', value: "‘Vatsalya Bhawan’, P-75, Street No. 5, Bihari Colony, Shahdara, Delhi - 110032" },
            { icon: <Landmark />, label: 'Pilgrimage Inspiration', value: 'Shri Digambar Jain Teerthdham Jinsharnam (Upalat, M.H.)' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E] border border-[#3B2A00]/20 text-[#2A2006] rounded-2xl p-6 text-center hover:shadow-[0_0_40px_rgba(198,167,94,0.4)] transition"
            >
              <div className="flex justify-center text-black font-semibold mb-4">
                {item.icon}
              </div>
              <div>
                <p className="text-lg text-[#3B2A00] font-semibold">{item.label}</p>
                <p className="text-[#3B2A00] mt-2">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chaturmas note */}
        <p className="mt-6 text-[#BFBFBF] text-center">
          <strong>Chaturmas (Since 1993)</strong>: Baroda, Etawah, Kanpur, Delhi, Saharanpur, Meerut, Agra, Gwalior,
          Jaipur, Indore, Nagpur, Mumbai, Surat, Udaipur, Banswara, Sikar, Ajmer, Baramati, Pune, Aurangabad, and
          multiple stays at Jinsharnam Teerthdham (M.H.), among others.
        </p>
      </section>

      {/* ================= INSPIRATION OF JINSHARNAM ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E] text-[#2A2006] border border-[#3B2A00]/20 p-12 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        >

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#C6A75E]/5 blur-3xl"></div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-serif text-black mb-6">
                Inspiration of Jinsharnam Tirth
              </h2>

              <p className="gold-card text-[#3B2A00] leading-relaxed text-lg">
                Through the inspiration of <strong>Bharat Gaurav Acharyashri Pulak Sagar Ji</strong>, 
                another sacred pilgrimage has adorned our nation — 
                <strong> Jinsharnam Tirth Jain Digambar Temple</strong>.
              </p>

              <div className="mt-8 flex gap-6">
                <Link
                  href="/organization/jinsharnam-tirth"
                  className="px-8 py-3 rounded-full bg-[#0F0F0F] text-[#F5E2A0] font-semibold hover:scale-105 transition"
                >
                  Explore Tirth →
                </Link>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-[#C6A75E]/30 blur-2xl rounded-3xl"></div>

              <Image
                src="/images/img13.jpg"
                alt="Jinsharnam Tirth"
                width={560}
                height={400}
                className="relative rounded-3xl border border-[#C6A75E]/30 object-cover"
              />
            </motion.div>

          </div>
        </motion.div>

      </section>

      {/* ================= PROFILE HANDLER ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E] text-[#2A2006] border border-[#3B2A00]/20 p-10 text-center shadow-xl"
        >

          <h2 className="text-3xl font-serif text-black mb-6">
            Profile Handler
          </h2>

          <p className="text-l gold-card text-[#3B2A00] mb-8">
            All social media channels of <strong>Bharat Gaurav Acharyashri Pulak Sagar Ji</strong> 
            are operated by <strong>Jinsharnam Media</strong>.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/media/pravachan"
              className="px-8 py-3 rounded-full bg-[#0F0F0F] text-[#F5E2A0] font-semibold hover:scale-105 transition"
            >
              Watch Pravachans →
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-[#0F0F0F] text-[#F5E2A0] font-semibold hover:scale-105 transition"
            >
              Contact Office
            </Link>
          </div>

        </motion.div>

      </section>

    </main>
  );
}