"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ================= TYPES ================= */

type Category = "JINSHARNAM" | "VATSALYA" | "ADVERTISEMENT";

type Update = {
  id: string;
  title: string;
  imageUrl?: string;
  category: Category;
};

const SECTIONS = [
  { key: "JINSHARNAM", title: "Shri Digambar Jain Jinsharnam Tirth Trust" },
  // { key: "VATSALYA", title: "Vatsalya Dhara Trust" },
  { key: "ADVERTISEMENT", title: "Pulak Manch Parivar" },
] as const;

/* ================= MAIN ================= */

export default function LatestUpdatesSection() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });
  const royalBtn =
    "px-6 py-2 rounded-full bg-black text-[#E6C97A] border border-[#CFA73C] font-semibold tracking-wide transition-all duration-300 hover:bg-[#1A1A1A] hover:shadow-[0_0_20px_rgba(207,167,60,0.5)]";

  /* ================= FETCH ================= */

  useEffect(() => {
    fetch("https://jinsharnammedia.com/api/latest-update")
      .then(res => res.json())
      .then(data => setUpdates(data.data || []));
  }, []);

  /* ================= IMAGE FIX ================= */

  const getImageUrl = (url?: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `https://jinsharnammedia.com${url}`;
  };

  useEffect(() => {
    fetch("https://jinsharnammedia.com/api/latest-update")
      .then(res => res.json())
      .then(data => setUpdates(data.data || []));
  }, []);

  /* Reset carousel on open */
  useEffect(() => {
    if (activeCategory) setIndex(0);
  }, [activeCategory]);

  /* Lock background scroll */
  useEffect(() => {
    document.body.style.overflow = activeCategory ? "hidden" : "";
  }, [activeCategory]);

  const latestByCategory = (cat: Category) =>
    updates
      .filter((u) => u.category === cat)
      .sort((a, b) => (a.id < b.id ? 1 : -1))[0];

  const filtered = updates.filter((u) => u.category === activeCategory);
  const maxIndex = Math.max(filtered.length - 3, 0);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  /* Auto slide */
  useEffect(() => {
    if (!activeCategory || isHovering || filtered.length <= 3) return;
    const t = setInterval(
      () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
      4500
    );
    return () => clearInterval(t);
  }, [activeCategory, filtered.length, isHovering]);

  return (
    <>
      {/* ================= HOME ================= */}
      <section className="relative py-20 bg-gradient-to-b from-[#F8E6B5] via-[#E6C97A] to-[#CFA73C] overflow-hidden">

        {/* Subtle radial shine */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-[#3B2A00] text-3xl sm:text-4xl md:text-5xl font-serif">
              Latest Updates
            </h2>

            {/* Gold divider */}
            <div className="mt-3 flex justify-center">
              <div className="w-20 md:w-28 h-[3px] bg-[#3B2A00] rounded-full" />
            </div>

            {/* Subtitle block */}
            <div className="mt-5 text-black/80 space-y-2 max-w-3xl mx-auto">
              <p className="italic text-lg">
                Moments of Seva, Sadhana & Spiritual Growth
              </p>
              <p>
                Reflections from Shri Digambar Jain Jinsharnam Tirth Trust,
                Vatsalya Dhara Trust & Pulak Manch Parivar
              </p>
              <p className="font-semibold tracking-wide">
                Walking together on the path of Dharma
              </p>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-30 px-2">

            {SECTIONS.map((s) => {
              const latest = latestByCategory(s.key);

              return (
                <motion.div
                  key={s.key}
                  whileHover={{ y: -12 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  className="
                    relative rounded-[3rem] p-[2px]
                    bg-gradient-to-br from-black/20 via-white/40 to-black/20
                    shadow-[0_40px_100px_rgba(0,0,0,0.35)]
                  "
                >
                  <div className="
                    rounded-[2.8rem] p-8
                    bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]
                    border border-[#CFA73C]/40
                    shadow-[0_0_40px_rgba(0,0,0,0.6)]
                  ">

                    {/* IMAGE */}
                    <div className="h-64 flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm">
                      {latest?.imageUrl ? (
                        <img
                          src={getImageUrl(latest.imageUrl)}
                          alt={latest.title}
                          className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <span className="font-serif text-[#E6C97A] text-lg">
                          {s.title}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl text-[#E6C97A] mb-3">
                      {s.title}
                    </h3>

                    {s.key === "ADVERTISEMENT" ? (
                      <button
                        onClick={() => setActiveCategory("ADVERTISEMENT")}
                        className="
                          mt-2 inline-block
                          px-5 py-2 rounded-full
                          bg-[#CFA73C] text-black
                          hover:bg-[#E6C97A]
                          font-semibold
                          transition-all duration-300
                          hover:bg-[#2a2006]
                          hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]
                        "
                      >
                        View Pulak Manch Updates →
                      </button>
                    ) : latest ? (
                      <>
                        <p className="text-sm font-semibold text-[#E6C97A] mb-4">
                          {latest.title}
                        </p>

                        <button
                          onClick={() => setActiveCategory(s.key)}
                          className="
                            px-5 py-2 rounded-full
                            bg-[#CFA73C] text-black
                            hover:bg-[#E6C97A]
                            font-semibold
                            transition-all duration-300
                            hover:bg-[#2a2006]
                            hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]
                          "
                        >
                          View all updates →
                        </button>
                      </>
                    ) : (
                      <p className="text-sm text-[#E6C97A]/60">
                        No updates yet.
                      </p>
                    )}

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#3A1A00]/85 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-gradient-to-b from-[#F8E6B5] via-[#E6C97A] to-[#CFA73C] rounded-3xl w-[95vw] max-w-7xl p-10 relative overflow-hidden">
              <button
                onClick={() => setActiveCategory(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black text-[#E6C97A] border border-[#CFA73C] hover:bg-[#1A1A1A] transition-all"
              >
                ✕
              </button>

              <h3 className="text-3xl font-serif text-center text-black mb-14">
                {SECTIONS.find((s) => s.key === activeCategory)?.title}
              </h3>

              <div
                className="relative overflow-hidden px-16"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onTouchStart={(e) =>
                  (touchStartX.current = e.touches[0].clientX)
                }
                onTouchEnd={(e) => {
                  if (touchStartX.current === null) return;
                  const diff =
                    touchStartX.current - e.changedTouches[0].clientX;
                  if (diff > 60) next();
                  if (diff < -60) prev();
                  touchStartX.current = null;
                }}
              >
                {/* LEFT */}
                <Arrow direction="left" onClick={prev} disabled={index === 0} />

                {/* SLIDER */}
                <motion.div
                  className="flex gap-12"
                  animate={{ x: -index * 320 }}
                  transition={{ type: "spring", stiffness: 80, damping: 22 }}
                >
                  {filtered.map((u) => (
                    <motion.div
                      key={u.id}
                      className="
                        relative min-w-[280px]
                        rounded-[2.8rem] p-[3px]
                        bg-gradient-to-br from-[#C99A2C] via-[#FFE6A3] to-[#B8821E]
                      "
                    >
                      <div className="
                        rounded-[2.4rem] p-6
                        bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]
                        border border-[#CFA73C]/40
                        shadow-[0_0_30px_rgba(0,0,0,0.6)]
                      ">
                        <div
                          className="h-60 flex items-center justify-center cursor-zoom-in"
                          onClick={() => {
                            setZoomImage(getImageUrl(u.imageUrl) || null);
                            setZoomLevel(1);
                            setPosition({ x: 0, y: 0 });
                          }}

                        >
                          {u.imageUrl && (
                            <img
                              src={getImageUrl(u.imageUrl)}
                              alt={u.title}
                              className="max-h-full max-w-full object-contain"
                            />
                          )}
                        </div>

                        <div className="mt-4 text-center font-semibold text-[#E6C97A]">
                          {u.title}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* RIGHT */}
                <Arrow
                  direction="right"
                  onClick={next}
                  disabled={index >= maxIndex}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= ZOOM ================= */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setZoomImage(null);
              setZoomLevel(1);
              setPosition({ x: 0, y: 0 });
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomImage(null);
                setZoomLevel(1);
                setPosition({ x: 0, y: 0 });
              }}
              className="absolute top-6 left-6 text-white text-3xl font-bold z-30"
            >
              ✕
            </button>

            {/* ZOOM CONTROLS */}
            <div className="absolute top-6 right-6 flex gap-3 z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => Math.min(prev + 0.3, 5));
                }}
                className="px-4 py-2 rounded-lg bg-black text-[#E6C97A] border border-[#CFA73C] hover:bg-[#1A1A1A] transition-all shadow"
              >
                +
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => {
                    const newZoom = Math.max(prev - 0.3, 1);
                    if (newZoom === 1) setPosition({ x: 0, y: 0 });
                    return newZoom;
                  });
                }}
                className="px-4 py-2 rounded-lg bg-black text-[#E6C97A] border border-[#CFA73C] hover:bg-[#1A1A1A] transition-all shadow"
              >
                −
              </button>
            </div>

            {/* IMAGE CONTAINER */}
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // IMPORTANT
            >
              <motion.img
                src={zoomImage}
                alt="Zoomed Update"
                className="max-w-[90vw] max-h-[90vh] object-contain select-none"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                  transition: isDragging.current ? "none" : "transform 0.2s ease-out",
                  cursor: zoomLevel > 1 ? "grab" : "default",
                }}
                draggable={false}
                onWheel={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => {
                    const newZoom =
                      e.deltaY < 0
                        ? Math.min(prev + 0.2, 5)
                        : Math.max(prev - 0.2, 1);

                    if (newZoom === 1) setPosition({ x: 0, y: 0 });

                    return newZoom;
                  });
                }}
                onMouseDown={(e) => {
                  if (zoomLevel <= 1) return;
                  isDragging.current = true;
                  start.current = {
                    x: e.clientX - position.x,
                    y: e.clientY - position.y,
                  };
                }}
                onMouseMove={(e) => {
                  if (!isDragging.current) return;
                  setPosition({
                    x: e.clientX - start.current.x,
                    y: e.clientY - start.current.y,
                  });
                }}
                onMouseUp={() => (isDragging.current = false)}
                onMouseLeave={() => (isDragging.current = false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

/* ================= ARROW ================= */

function Arrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute ${direction === "left" ? "left-2" : "right-2"}
        top-1/2 -translate-y-1/2 z-20
        w-12 h-12 rounded-full
        flex items-center justify-center
        bg-black text-[#E6C97A] border border-[#CFA73C]
        hover:bg-[#1A1A1A]
        shadow-lg text-2xl font-bold
        ${disabled ? "opacity-40 cursor-not-allowed" : ""}
      `}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}
