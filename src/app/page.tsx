"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [latestVideos, setLatestVideos] = useState<any[]>([]);
  const [selectedVideoIndex, setSelectedVideoIndex] =
    useState<number | null>(null);

  useEffect(() => {
    const fetchLatest = async () => {
      const res = await fetch(
        "/api/youtube/latest?tab=videos&sort=latest"
      );
      const data = await res.json();
      setLatestVideos(data.data?.slice(0, 5) || []);
    };
    fetchLatest();
  }, []);

  return (
    <main className="bg-[#0F0F0F] text-[#F5F5F5]">
      <HeroSection />
      <DivineMessageSection />
      <OrganizationsSection />
      <PulakSagarHighlights />
      <LatestPravachanSection
        latestVideos={latestVideos}
        setSelectedVideoIndex={setSelectedVideoIndex}
      />
      <VideoModal
        latestVideos={latestVideos}
        selectedVideoIndex={selectedVideoIndex}
        setSelectedVideoIndex={setSelectedVideoIndex}
      />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden divine-hero-bg">
      {/* FULL SECTION SOFT RAYS */}
      {/*<div className="absolute 
                      top-1/2 left-300 
                      w-[2000px] h-[2000px] 
                      -translate-x-1/2 -translate-y-1/2 
                      rounded-full 
                      full-hero-rays 
                      pointer-events-none" />*/}
      {/* FLOATING STARS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="hero-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>
      {/* FLOATING GOLD PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="gold-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 h-full flex items-center justify-between max-w-7xl mx-auto px-6">

        {/* LEFT TEXT */}
        <div className="max-w-2xl text-[#F5F5F5]">

          {/* SMALL DIVINE TAGLINE */}
          <p className="uppercase tracking-[0.35em] text-sm text-[#FFDFA3] mb-2 font-light">
            Jain Acharya • Spiritual Visionary • Dharma Guide
          </p>

          {/* MAIN HEADING */}
          <h1 className="leading-[1.1]">

            <span className="block text-4xl md:text-5xl font-light text-[#FFE6A3] mb-2">
              Rashtrasant Manogyacharya
            </span>

            <span className="mb-2 block text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFF1B8] to-[#FFB800] bg-clip-text text-transparent drop-shadow-[0_5px_25px_rgba(255,215,0,0.35)]">
              Shree Pulak Sagar Ji
            </span>

            <span className="block text-4xl md:text-5xl font-light text-[#FFE6A3] mb-2">
              Gurudev
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-xl">
            A life of renunciation, unwavering discipline,  
            and divine dedication to the eternal path of 
            <span className="text-[#FFD700] font-medium"> Jain Dharma</span>.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex gap-6">

            <a
              href="/about"
              className="px-10 py-4 rounded-full 
                         bg-gradient-to-r from-[#FFD700] to-[#E6B85C]
                         text-[#5B0000] font-semibold tracking-wide
                         shadow-[0_10px_35px_rgba(255,215,0,0.4)]
                         hover:scale-105 hover:shadow-[0_15px_45px_rgba(255,215,0,0.6)]
                         transition duration-300"
            >
              Discover the Journey
            </a>

            <a
              href="/media/pravachan"
              className="px-10 py-4 rounded-full 
                         border border-white/40 text-white
                         backdrop-blur-md bg-white/5
                         hover:bg-white hover:text-[#8B0000]
                         transition duration-300"
            >
              Watch Pravachan
            </a>

          </div>

        </div>

        {/* RIGHT DIVINE SYSTEM */}
        <div className="relative flex justify-center items-center translate-x-[-40px] lg:translate-x-[-80px]">

          {/* ROTATING SYSTEM */}
          <div className="absolute w-[900px] h-[900px] animate-rotateClockwiseSlow flex items-center justify-center">

            {/* SUN RAYS */}
            {/*<div className="absolute w-[900px] h-[900px] sun-rays" />*/}

            {/* FIRE RING */}
            <div className="absolute w-[480px] h-[480px] animate-energyRotate">
              <div className="absolute inset-0 rounded-full energy-fire-outer" />
              <div className="absolute inset-[20px] rounded-full bg-gradient-to-br from-[#3b0000] via-[#5c0000] to-[#2b0000] opacity-80" />
              <div className="absolute inset-[35px] rounded-full energy-lava-ring" />
              <div className="absolute inset-[65px] rounded-full energy-inner-glow" />
            </div>

            {/* SWASTIK OUTER */}
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-[#FFD700] text-3xl drop-shadow-[0_0_15px_rgba(255,215,0,0.9)]"
                style={{
                  transform: `rotate(${i * 30}deg) translate(280px) rotate(-${i * 30}deg)`
                }}
              >
                卐
              </div>
            ))}
          </div>

          {/* STATIC IMAGE */}
          <img
            src="/images/heronew1.png"
            alt="Pulak Sagar Ji Maharaj"
            className="relative z-10 w-[350px] object-contain"
          />

        </div>
      </div>
    </section>
  );
}


function DivineMessageSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#C6A75E] via-[#E0C97A] to-[#C6A75E] text-[#3B2A00] overflow-hidden">

      {/* ✨ Soft Floating Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/30 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* ================= IMAGE SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Premium Double Frame */}
            <div className="relative p-3 rounded-[15px] bg-gradient-to-br from-[#FFF9DA] to-[#D4AF37] shadow-[0_25px_80px_rgba(0,0,0,0.4)]">

              <div className="p-2 rounded-[15px] bg-[#FFF6C5]">
                <img
                  src="/images/gallery/maharaj/6.jpg"
                  alt="Shree Pulak Sagar Ji Gurudev"
                  className="rounded-[15px] w-[450px] object-cover"
                />
              </div>

            </div>
          </div>
        </motion.div>

        {/* ================= TEXT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl md:text-5xl font-serif mb-6 tracking-wide">
            A Divine Message
          </h2>

          <div className="w-28 h-[3px] bg-[#3B2A00] mb-10 rounded-full" />

          {/* Premium Quote Styling */}
          <blockquote className="text-2xl md:text-2xl italic leading-relaxed font-light mb-8 relative">

            <span className="text-4xl absolute -left-6 -top-6 opacity-20 font-serif">“</span>

            Spiritual awakening begins when one conquers the self.
            True renunciation is not withdrawal from the world,
            but liberation from attachment and ego.

            <span className="text-4xl absolute -right-1 top-20 opacity-20 font-serif">”</span>

          </blockquote>

          <p className="text-lg leading-relaxed mb-8">
            May every soul rise beyond illusion and discover
            the eternal light of
            <span className="font-semibold"> Jain Dharma</span>,
            embracing compassion, discipline and inner clarity.
          </p>

          <p className="text-xl font-semibold tracking-wide">
            — Shree Pulak Sagar Ji Gurudev
          </p>

        </motion.div>

      </div>
    </section>
  );
}

function OrganizationsSection() {
  const orgs = [
    {
      title: "Shri Digambar Jain Jinsharnam Tirth Trust",
      desc:
        "A sacred Jain Tirth dedicated to spirituality, devotion, and service, established under the divine guidance of Acharya Shri Pulak Sagar Ji Maharaj.",
      image: "/images/gallery/logo/jinsharnamtirth.png",
      href: "/organization/jinsharnam-tirth",
    },
    {
      title: "Vatsalya Dhara Trust",
      desc:
        "A registered humanitarian trust engaged in annadaan, healthcare, education, animal welfare, and compassionate service to society.",
      image: "/images/gallery/logo/vatsalya.png",
      href: "/organization/vatsalya-dhara",
    },
    {
      title: "Pulak Manch Parivar",
      desc:
        "A nationwide Jain youth and service movement fostering discipline, leadership, character building, and social responsibility.",
      image: "/images/gallery/logo/pulakmanch.png",
      href: "/organization/pulak-manch",
    },
  ];

  return (
    <section className="relative py-36 bg-gradient-to-b from-[#0B0B0B] via-[#111111] to-[#0B0B0B] overflow-hidden">

      {/* 🌟 Divine Vertical Light Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-full bg-gradient-to-b from-[#C6A75E]/20 via-transparent to-[#C6A75E]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-serif text-[#C6A75E] tracking-wide">
            Our Organizations
          </h2>

          <div className="mt-6 flex justify-center">
            <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent rounded-full" />
          </div>
        </motion.div>

        {/* ===== CARDS ===== */}
        <div className="grid md:grid-cols-3 gap-16">

          {orgs.map((org, i) => (
            <motion.div
              key={org.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ y: -14 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-[#C6A75E]/0 group-hover:bg-[#C6A75E]/10 blur-2xl rounded-3xl transition duration-500"></div>

              {/* 👇 IMPORTANT CHANGE HERE */}
              <div className="relative h-full flex flex-col bg-gradient-to-b from-[#1A1A1A] to-[#111111] border border-[#C6A75E]/20 rounded-[40px] p-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_0_60px_rgba(198,167,94,0.35)] transition-all duration-500">

                {/* Logo */}
                <div className="relative flex justify-center mb-8">
                  <div className="absolute w-[160px] h-[160px] bg-[#C6A75E]/15 blur-2xl rounded-full"></div>
                  <img
                    src={org.image}
                    alt={org.title}
                    className="h-[180px] object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-[#C6A75E] mb-6">
                  {org.title}
                </h3>

                {/* Description */}
                <p className="text-[#BFBFBF] text-m leading-relaxed mb-8">
                  {org.desc}
                </p>

                {/* 👇 Push button to bottom */}
                <div className="mt-auto">
                  <Link
                    href={org.href}
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#C6A75E] to-[#E0C97A] text-black font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Explore →
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

function PulakSagarHighlights() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#F5E2A0] text-[#3B2A00] overflow-hidden">

      {/* Soft Aura Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-serif mb-6">
            Glimpse of Acharya Shree Ji’s Life
          </h2>

          <div className="flex justify-center">
            <div className="w-28 h-[3px] bg-[#3B2A00] rounded-full" />
          </div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE SIDE WITH MODERN GOLD FRAME */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 blur-3xl bg-white/30 rounded-[40px]" />

              {/* Frame */}
              <div className="relative p-4 rounded-[40px] bg-gradient-to-br from-[#FFF4C4] to-[#D4AF37] shadow-[0_25px_60px_rgba(0,0,0,0.4)]">

                <img
                  src="/images/gallery/maharaj/7.jpg"
                  alt="Acharya Shree Ji"
                  className="rounded-[30px] w-[500px] object-cover"
                />

              </div>

            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="text-lg leading-relaxed mb-6">
              A divine soul was born on <strong>11 May 1970</strong> in 
              Dhamtari, Chhattisgarh, named 
              <strong> Singhai Paras Jain (Guddu)</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Guided by deep spiritual curiosity from childhood,
              he embraced renunciation and dedicated his life
              to spreading the eternal values of 
              <span className="font-semibold"> Jain Dharma</span> —
              compassion, discipline, meditation and truth.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Through powerful Pravachans, humanitarian service,
              and youth guidance, he continues to inspire
              millions toward inner transformation and self-realization.
            </p>

            <Link
              href="/about"
              className="inline-block px-8 py-3 rounded-full bg-[#3B2A00] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Read Full Biography →
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

function LatestPravachanSection({
  latestVideos,
  setSelectedVideoIndex,
}: any) {
  return (
    <section className="py-28 bg-gradient-to-b from-[#1A1A1A] to-[#141414]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="relative mb-16">
          <h2 className="text-center text-5xl font-serif text-[#C6A75E]">
            Latest Pravachan
          </h2>

          <Link
            href="/media/pravachan"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[#C6A75E]"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {latestVideos.map((video: any, index: number) => (
            <div
              key={video.id?.videoId || video.id}
              onClick={() => setSelectedVideoIndex(index)}
              className="group bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#C6A75E]/20 shadow-xl hover:shadow-[0_0_40px_rgba(198,167,94,0.3)] transition-all cursor-pointer"
            >
              <div className="relative">
                <img
                  src={video.snippet?.thumbnails?.medium?.url}
                  className="h-40 w-full object-cover"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
                  <div className="w-14 h-14 bg-[#C6A75E] rounded-full flex items-center justify-center text-black text-lg font-bold">
                    ▶
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-[#F5F5F5] line-clamp-2">
                  {video.snippet?.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function VideoModal({
  latestVideos,
  selectedVideoIndex,
  setSelectedVideoIndex,
}: any) {

  if (
    selectedVideoIndex === null ||
    !latestVideos[selectedVideoIndex]
  ) return null;

  const video = latestVideos[selectedVideoIndex];

  const videoId =
    video?.id?.videoId || video?.id;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
      onClick={() => setSelectedVideoIndex(null)}
    >
      <div
        className="relative bg-[#1A1A1A] border border-[#C6A75E]/30 rounded-3xl w-[90%] md:w-[70%] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          className="absolute top-4 right-6 text-[#C6A75E] text-2xl"
          onClick={() => setSelectedVideoIndex(null)}
        >
          ✕
        </button>

        {/* Video */}
        <iframe
          width="100%"
          height="420"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          allowFullScreen
          className="rounded-xl"
        />

        <h3 className="text-center text-lg mt-4 text-[#F5F5F5]">
          {video?.snippet?.title}
        </h3>

        {/* Controls */}
        <div className="flex justify-between mt-6">
          <button
            disabled={selectedVideoIndex === 0}
            onClick={() =>
              setSelectedVideoIndex((prev: number) => prev - 1)
            }
            className="px-6 py-2 bg-[#C6A75E] text-black rounded-full disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            disabled={selectedVideoIndex === latestVideos.length - 1}
            onClick={() =>
              setSelectedVideoIndex((prev: number) => prev + 1)
            }
            className="px-6 py-2 bg-[#C6A75E] text-black rounded-full disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}