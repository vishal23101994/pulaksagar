"use client";

import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Plane,
  Train,
  Bus,
  Users,
  Download,
} from "lucide-react";
import * as XLSX from "xlsx";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function JinsharnamTirthPage() {
  const bookRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [trustees, setTrustees] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const images = [
    "/images/tirth/part-1.2.jpg",
    "/images/tirth/part-2.1.jpg",
    "/images/tirth/part-2.2.jpg",
    "/images/tirth/part-3.1.jpg",
    "/images/tirth/part-3.2.jpg",
    "/images/tirth/part-4.1.jpg",
    "/images/tirth/part-4.2.jpg",
    "/images/tirth/part-5.1.jpg",
    "/images/tirth/part-5.2.jpg",
    "/images/tirth/part-6.1.jpg",
    "/images/tirth/part-6.2.jpg",
    "/images/tirth/part-7.1.jpg",
    "/images/tirth/part-7.2.jpg",
    "/images/tirth/part-8.1.jpg",
    "/images/tirth/part-8.2.jpg",
    "/images/tirth/part-9.1.jpg",
    "/images/tirth/part-9.2.jpg",
    "/images/tirth/part-10.1.jpg",
    "/images/tirth/part-10.2.jpg",
    "/images/tirth/part-11.1.jpg",
    "/images/tirth/part-11.2.jpg",
    "/images/tirth/part-12.1.jpg",
    "/images/tirth/part-12.2.jpg",
    "/images/tirth/part-1.1.jpg",
  ];

  const hostelGallery = [
    "/images/tirth/1.1.jpeg",
    "/images/tirth/1.2.jpeg",
    "/images/tirth/1.3.jpeg",
    "/images/tirth/1.4.jpeg",
    "/images/tirth/1.5.jpeg",
    "/images/tirth/1.6.jpeg",
  ];

  // responsive setup
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // gentle preview flip
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (bookRef.current?.pageFlip) {
        bookRef.current.pageFlip().flipNext();

        setTimeout(() => {
          if (bookRef.current?.pageFlip) {
            bookRef.current.pageFlip().flipPrev();
          }
        }, 1200);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // dynamic trustees
  useEffect(() => {
    fetch("/api/trustees")
      .then((res) => res.json())
      .then((data) => setTrustees(data))
      .catch((err) => console.error("Error loading trustees:", err));
  }, []);

  const totalPages = Math.ceil(trustees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = trustees.slice(startIndex, startIndex + itemsPerPage);

  const nextBookPage = () => bookRef.current?.pageFlip()?.flipNext();
  const prevBookPage = () => bookRef.current?.pageFlip()?.flipPrev();

  // 🔽 ADD THIS ABOVE `return (`
  const handleExportToExcel = () => {
    if (!trustees || trustees.length === 0) {
      alert("No data available to export");
      return;
    }

    const exportData = trustees.map((t, index) => ({
      "S.No": index + 1,
      Name: t.NAME || "",
      Designation: t.DESIGNATION || "",
      Address: t.ADDRESS || "",
      Mobile: t.MOBILE || "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Trustee Committee");
    XLSX.writeFile(workbook, "Trustee_Committee.xlsx");
  };

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const RoyalSection = ({ children }: { children: React.ReactNode }) => (
    <div className="relative py-24 px-6 
      bg-gradient-to-b 
      from-[#000000] 
      via-[#050505] 
      to-[#0A0A0A] 
      border-y border-[#D4AF37]/40
      overflow-hidden">

      {/* Golden Aura Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 
        w-[900px] h-[400px] 
        bg-[#FFD97A]/15 blur-[160px] rounded-full" />
      </div>

      {/* ✨ Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-1 h-1 bg-yellow-300 rounded-full top-20 left-1/4 animate-pulse opacity-60"></div>
        <div className="absolute w-1 h-1 bg-yellow-400 rounded-full top-40 right-1/3 animate-ping opacity-40"></div>
        <div className="absolute w-1 h-1 bg-yellow-200 rounded-full bottom-20 left-1/3 animate-pulse opacity-50"></div>
        <div className="absolute w-1 h-1 bg-yellow-300 rounded-full bottom-32 right-1/4 animate-ping opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );

  return (
    <section className="relative text-amber-100 min-h-screen overflow-x-hidden 
    bg-gradient-to-b from-[#000000] via-[#050505] to-[#0A0A0A]">
      {/* Soft Golden Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]
        bg-[#FFD97A]/20 blur-[150px] rounded-full" />
      </div>
      {/* 🌅 HERO SECTION — PREMIUM CLEAR IMAGE */}
      <div className="relative w-full h-[650px] overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/img13.jpg"
          alt="Jinsharnam Tirth"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Dark Gradient Overlay (lighter so image visible) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Golden Glow Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-[#FFD97A]/10 blur-[140px] rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold 
            bg-gradient-to-r from-[#FFD97A] via-[#FFF1B8] to-[#FFD97A] 
            bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,215,120,0.8)]"
          >
            Jinsharnam Tirth Dham
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-lg md:text-xl text-amber-100/90 max-w-2xl"
          >
            A serene sanctuary of peace and devotion guided by  
            Acharya Shri Pulak Sagar Ji Maharaj
          </motion.p>

          {/* 🔥 PREMIUM DONATE BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById("donate-section");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="mt-100 px-8 py-2 text-lg font-semibold rounded-full
            bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400
            text-black shadow-[0_20px_60px_rgba(251,191,36,0.6)]
            hover:shadow-[0_25px_80px_rgba(251,191,36,0.9)]
            transition-all duration-500 relative overflow-hidden"
          >
            <span className="relative z-10">🙏 Donate Now</span>

            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-40 transition duration-700"></span>
          </motion.button>

        </div>
      </div>

      {/* 📖 Flipbook Section — Wider View, Full Image, No Cropping */}
      <RoyalSection>
        <div className="flex justify-center items-center">
          <div
            className="relative flex justify-center items-center overflow-visible"
            style={{
              width: isMobile ? "95%" : "92%",
              maxWidth: "1400px",
            }}
          >
            <HTMLFlipBook
              ref={bookRef}
              width={isMobile ? 400 : 700}
              height={isMobile ? 460 : 520}
              // 🔹 Required props from IProps typing:
              startPage={0}
              size="stretch"
              minWidth={300}
              maxWidth={1400}
              minHeight={400}
              maxHeight={800}
              maxShadowOpacity={0.3}
              showCover
              mobileScrollSupport
              flippingTime={900}
              drawShadow={false}
              usePortrait={isMobile}
              showPageCorners
              disableFlipByClick={false}
              autoSize
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              startZIndex={0}
              className="bg-transparent border-none shadow-none"
              style={{
                background: "transparent",
                boxShadow: "none",
                border: "none",
                margin: "0 auto",
              }}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-gradient-to-br from-[#1B1B2F] to-[#16213E] border border-[#FFD97A]/40 shadow-[0_20px_60px_rgba(212,175,55,0.35)] overflow-hidden">
                  <img
                    src={src}
                    alt={`Page ${i + 1}`}
                    className="w-full h-full object-contain select-none pointer-events-none"
                    draggable="false"
                  />
                </div>
              ))}
            </HTMLFlipBook>

            {/* Navigation Buttons */}
            {!isMobile && (
              <>
                <button
                  onClick={prevBookPage}
                  className="absolute left-[-30px] top-100px -translate-y-1/2 bg-[#4B1E00]/90 text-yellow-100 hover:bg-yellow-400 hover:text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-yellow-600 hover:scale-110 transition-all"
                >
                  <ChevronLeft size={26} />
                </button>
                <button
                  onClick={nextBookPage}
                  className="absolute right-[-30px] top-100px -translate-y-1/2 bg-[#4B1E00]/90 text-yellow-100 hover:bg-yellow-400 hover:text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-yellow-600 hover:scale-110 transition-all"
                >
                  <ChevronRight size={26} />
                </button>
              </>
            )}
          </div>
        </div>
      </RoyalSection>

      {/* 🖼️ Jinsharnam Chhatrawas Gallery */}
      <RoyalSection>
        <div className="flex justify-center items-center">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-3xl text-center font-serif text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] font-semibold mb-8">
              Jinsharnam Chatravas
            </h2>

            {/* 🖼️ Jinsharnam Chhatrawas Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {hostelGallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  onClick={() => {
                    setActiveImage(img);
                    setActiveIndex(i);
                  }}
                  className="
                    cursor-pointer
                    h-[300px]
                    w-auto
                    mx-auto
                    object-contain
                    rounded-2xl
                    border border-[#FFD97A]/60
                    shadow-[0_15px_50px_rgba(212,175,55,0.45)]
                    hover:shadow-[0_0_70px_rgba(255,215,120,0.9)]
                    hover:scale-105
                    transition duration-500
                  "
                />
              ))}
            </div>
          </div>
        </div>
      </RoyalSection>

      {/* 🔍 Image Zoom Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:scale-110 transition z-50"
          >
            ✕
          </button>

          {/* PREVIOUS */}
          <button
            onClick={() =>
              setActiveIndex((prev) => {
                const newIndex = prev === 0 ? hostelGallery.length - 1 : prev - 1;
                setActiveImage(hostelGallery[newIndex]);
                return newIndex;
              })
            }
            className="absolute left-6 text-white text-5xl hover:scale-110 transition z-50"
          >
            ‹
          </button>

          {/* IMAGE ONLY – NO BOX */}
          <img
            src={activeImage}
            alt="Preview"
            className="
              max-h-[90vh]
              max-w-[90vw]
              object-contain
            "
          />

          {/* NEXT */}
          <button
            onClick={() =>
              setActiveIndex((prev) => {
                const newIndex = prev === hostelGallery.length - 1 ? 0 : prev + 1;
                setActiveImage(hostelGallery[newIndex]);
                return newIndex;
              })
            }
            className="absolute right-6 text-white text-5xl hover:scale-110 transition z-50"
          >
            ›
          </button>

          {/* DOWNLOAD */}
          <motion.a
            href={activeImage}
            download
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              absolute bottom-10
              px-4 py-1
              rounded-full
              font-semibold text-black text-lg
              bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400
              shadow-[0_20px_60px_rgba(251,191,36,0.7)]
              hover:shadow-[0_30px_80px_rgba(251,191,36,0.95)]
              transition-all duration-500
              backdrop-blur-md
            "
          >
            📥
          </motion.a>

        </div>
      )}
      {/* 📍 LOCATION SECTION — PREMIUM UPGRADE */}
      <RoyalSection>
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= HEADER BLOCK ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif 
              bg-gradient-to-r from-[#FFD97A] via-[#FFF1B8] to-[#FFD97A]
              bg-clip-text text-transparent
              drop-shadow-[0_0_40px_rgba(255,215,120,0.6)]">
              Shri Digambar Jain Jinsharnam Tirth Trust (Regd.)
            </h2>

            <p className="mt-6 text-lg text-amber-200 max-w-3xl mx-auto leading-relaxed">
              Located on Mumbai–Surat Highway No. 48, Mukaam Post, Uplat,
              Tehsil Talasari, District Palghar, Maharashtra – 401606.
            </p>

            <div className="mt-6 flex justify-center gap-10 text-amber-300 text-lg">
              <span className="flex items-center gap-2">
                📞 +91-7987176553
              </span>
              <span className="flex items-center gap-2">
                📞 +91-8799598079
              </span>
            </div>
          </motion.div>

          {/* ================= CONNECTIVITY TITLE ================= */}
          <h3 className="text-4xl font-serif text-center text-[#FFD97A] mb-14">
            Nearby Tourist Places & Connectivity
          </h3>

          {/* ================= CARDS GRID ================= */}
          <div className="text-center grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                icon: "🛕",
                title: "Religious & Spiritual",
                items: [
                  "Taranga Jain Temple — 120 km",
                  "Palitana Jain Temples — 230 km",
                  "Shri Mahavir Jain Temple, Vapi — 25 km",
                ],
              },
              {
                icon: "🌿",
                title: "Nature & Scenic",
                items: [
                  "Dahanu Beach — 45 km",
                  "Vansda National Park — 110 km",
                  "Tithal Beach — 70 km",
                ],
              },
              {
                icon: "🏙️",
                title: "Nearby Cities",
                items: [
                  "Vapi — 20 km",
                  "Silvassa — 30 km",
                  "Daman — 55 km",
                  "Surat — 140 km",
                ],
              },
              {
                icon: "✈️",
                title: "Nearest Airports",
                items: [
                  "Mumbai Intl. Airport — 140 km",
                  "Surat Airport — 140 km",
                  "Nashik Airport — 165 km",
                  "Pune Airport — 250 km",
                ],
              },
              {
                icon: "🚆",
                title: "Railway Stations",
                items: [
                  "Mumbai Central — 140 km",
                  "Surat — 140 km",
                  "Nashik — 150 km",
                  "Vapi — 20 km",
                ],
              },
              {
                icon: "🚌",
                title: "Bus Terminals",
                items: [
                  "Vapi Bus Depot — 38 km",
                  "Dahanu Bus Stand — 45 km",
                  "Palghar ISBT — 55 km",
                  "Virar Bus Station — 70 km",
                  "Surat Central ISBT — 110 km",
                ],
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -12 }}
                className="relative bg-[#0A0A0A]
                rounded-3xl p-10
                border border-[#D4AF37]/40
                shadow-[0_30px_80px_rgba(212,175,55,0.25)]
                hover:shadow-[0_50px_150px_rgba(212,175,55,0.5)]
                transition-all duration-500 overflow-hidden"
              >

                {/* Golden glow inside card */}
                <div className="absolute -top-10 -right-10 w-40 h-40 
                  bg-[#FFD97A]/10 blur-3xl rounded-full" />

                <div className="relative z-10">
                  <div className="text-3xl mb-4">{card.icon}</div>

                  <h4 className="text-xl font-semibold text-[#FFD97A] mb-4">
                    {card.title}
                  </h4>

                  <ul className="text-amber-200 space-y-2 text-sm leading-relaxed">
                    {card.items.map((item, i) => (
                      <li key={i} className="hover:text-[#FFD97A] transition">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= MAP SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-20 rounded-3xl overflow-hidden
            border border-[#D4AF37]/50
            shadow-[0_40px_120px_rgba(212,175,55,0.35)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.963588501987!2d72.8999775!3d20.1975307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be73281a839e931%3A0x5ff5c55113a0cf30!2sJinsharanam%20Tirth%20Jain%20Digambar%20Temple!5e0!3m2!1sen!2sin!4v1730320320000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </RoyalSection>

      {/* 🙏 Trustee Committee Section */}
      <RoyalSection>
        <div className="flex justify-center items-center">
          <div className="max-w-6xl mx-auto px-6">

            {/* Heading + Export */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-3xl font-serif text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] font-semibold flex items-center gap-2">
                <Users className="text-amber-700" size={30} />
                Trustee Committee
              </h2>

              <button
                onClick={handleExportToExcel}
                className="flex items-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition"
              >
                <Download size={18} />
                Export to Excel
              </button>
            </div>

            {/* Trustee Table */}
            <div className="overflow-x-auto shadow-lg rounded-xl border border-amber-200 bg-gradient-to-br from-[#1B1B2F] to-[#16213E] text-amber-100 shadow-[0_20px_60px_rgba(212,175,55,0.25)]">
              <table className="min-w-full text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] text-left text-sm">
                <thead className="bg-gradient-to-r from-[#D4AF37] to-[#F7E7CE] text-black font-semibold">
                  <tr>
                    <th className="py-2 px-3 border-b border-amber-300">S.No</th>
                    <th className="py-2 px-3 border-b border-amber-300">Name</th>
                    <th className="py-2 px-3 border-b border-amber-300">
                      Designation
                    </th>
                    <th className="py-2 px-3 border-b border-amber-300">Address</th>
                    <th className="py-2 px-3 border-b border-amber-300">Mobile</th>
                  </tr>
                </thead>

                <tbody>
                  {currentItems.map((t, i) => (
                    <tr
                      key={i}
                      className={`hover:bg-[#D4AF37]/10 transition ${
                        i % 2 === 0 ? "bg-[#1B1B2F]" : "bg-[#16213E]"
                      }`}
                    >
                      <td className="py-2 px-3 border-b border-amber-200">
                        {startIndex + i + 1}
                      </td>

                      <td className="py-2 px-3 border-b border-amber-200 font-medium">
                        {t.NAME || "-"}
                      </td>

                      <td className="py-2 px-3 border-b border-amber-200">
                        {t.DESIGNATION || "-"}
                      </td>

                      <td className="py-2 px-3 border-b border-amber-200">
                        {t.ADDRESS || "-"}
                      </td>

                      <td className="py-2 px-3 border-b border-amber-200">
                        {t.MOBILE || "-"}
                      </td>
                    </tr>
                  ))}

                  {currentItems.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="py-6 text-center text-gray-500"
                      >
                        No trustee data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-4 sticky bottom-4 bg-[#000000]/80 border border-[#D4AF37]/30 py-2 backdrop-blur-sm rounded-lg">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-4 py-2 bg-[#4B1E00] text-yellow-100 rounded-md hover:bg-yellow-400 hover:text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] disabled:opacity-50"
                >
                  Previous
                </button>

                <span className="text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-4 py-2 bg-[#4B1E00] text-yellow-100 rounded-md hover:bg-yellow-400 hover:text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </RoyalSection>

      {/* 🙏 Donation Section */}
      <div id="donate-section">
        <RoyalSection>
          <div className="flex justify-center items-center">
            <div className="max-w-7xl mx-auto px-6">
              {/* Heading */}
              <h2 className="text-4xl font-serif text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] font-semibold mb-4 text-center flex justify-center items-center gap-3">
                Support Jinsharnam Tirth Trust
              </h2>

              <p className="text-lg text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]/90 text-center leading-relaxed max-w-3xl mx-auto mb-14">
                Your generous donation supports the maintenance and development of
                the sacred
                <strong> Jinsharnam Tirth</strong>. Every contribution is deeply
                appreciated.
              </p>

              {/* SIDE-BY-SIDE Sections */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* LEFT — PREMIUM BANK CARD */}
                <div className="bg-[#0B0B0B]
                  p-12 rounded-3xl
                  border border-[#D4AF37]/40
                  shadow-[0_40px_120px_rgba(212,175,55,0.35)]
                  hover:shadow-[0_50px_150px_rgba(212,175,55,0.55)]
                  transition-all duration-500">

                  <h3 className="text-3xl font-serif text-[#FFD97A] mb-8">
                    Bank Transfer
                  </h3>

                  <p className="text-amber-200 mb-8 font-semibold">
                    SHRI DIGAMBAR JAIN JINSHARNAM TIRTH TRUST
                  </p>

                  {[
                    { label: "Account Number", value: "2565201000951" },
                    { label: "IFSC Code", value: "CNRB0002565" },
                    { label: "PAN", value: "AALTS9991H" },
                  ].map((item, index) => (
                    <div key={index} className="mb-6">
                      <p className="text-sm text-amber-400">{item.label}</p>

                      <div className="flex items-center justify-between mt-2 bg-black/40 p-4 rounded-xl border border-[#D4AF37]/30">
                        <span className="font-mono text-lg text-amber-100">
                          {item.value}
                        </span>

                        <button
                          onClick={() => navigator.clipboard.writeText(item.value)}
                          className="px-4 py-2 bg-yellow-500 text-black rounded-lg
                          hover:bg-yellow-400 transition"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  ))}

                  <p className="text-amber-300 mt-6">
                    Bank: Canara Bank  
                    <br />
                    Branch: Silvassa (DN)
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-10 flex justify-center items-center"
                  >
                    <div className="flex items-center gap-3 text-emerald-400 text-lg font-semibold">
                      <CheckCircle size={26} className="text-emerald-400" />
                      Eligible for 80G Tax Exemption
                    </div>
                  </motion.div>
                </div>

                {/* RIGHT — QR Code */}
                <div className="bg-gradient-to-br from-[#0B0B0B] to-[#141414] text-amber-100
                                p-10 rounded-3xl
                                shadow-[0_30px_80px_rgba(212,175,55,0.35)]
                                border border-[#FFD97A]/50 flex flex-col items-center">
                  <h3 className="text-2xl font-serif text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] font-semibold mb-6">
                    UPI / QR Donation
                  </h3>

                  <div className="bg-[#111111] rounded-xl border border-amber-300 shadow-lg p-4">
                    <img
                      src="/images/donation/jinsharnam_qr.jpg"
                      alt="UPI QR Code"
                      className="w-74 h-104 object-contain rounded-lg"
                    />
                  </div>

                  <p className="text-[#FFD97A] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]/80 text-center mt-4 text-sm">
                    Scan using GPay / PhonePe / Paytm / BHIM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RoyalSection>
      </div>
    </section>
  );
}
