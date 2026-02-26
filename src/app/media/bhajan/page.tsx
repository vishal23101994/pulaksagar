"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAudioPlayer } from "../../providers/AudioPlayerProvider";
import {
  Play,
  Pause,
  Download,
  SkipBack,
  SkipForward,
  Search,
  Repeat,
} from "lucide-react";
import { audios } from "../../../data/audio";

type Track = {
  title: string;
  artist?: string;
  src: string;
};

export default function AudioPage() {
  const [query, setQuery] = useState("");
  const [loop, setLoop] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const { setQueueAndPlay } = useAudioPlayer();

  const {
    playByIndex,
    toggle,
    currentTrack,
    isPlaying,
    next,
    prev,
  } = useAudioPlayer();

  const longPressTimer = useRef<NodeJS.Timeout | null>(null);

  /* --------------------------------------------------
     FILTERED LIST
  -------------------------------------------------- */
  const filtered: Track[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return audios;
    return audios.filter((t) =>
      [t.title, t.artist ?? ""].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  /* --------------------------------------------------
     HELPERS
  -------------------------------------------------- */
  const playAtIndex = (idx: number) => {
    playByIndex(audios.findIndex(a => a.src === filtered[idx].src));
  };

  const toggleSelect = (src: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(src) ? next.delete(src) : next.add(src);
      return next;
    });
  };

  const selectAllFiltered = () => {
    setSelected(new Set(filtered.map(t => t.src)));
  };

  const clearSelection = () => setSelected(new Set());

  const onDownload = (track: Track) => {
    const a = document.createElement("a");
    a.href = track.src;
    a.download = track.src.split("/").pop() || "audio.mp3";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const bulkDownload = async () => {
    for (const src of selected) {
      const a = document.createElement("a");
      a.href = src;
      a.download = src.split("/").pop() || "audio.mp3";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // browser-safe delay
      await new Promise(r => setTimeout(r, 300));
    }
  };

  /* ---------------- Premium Sparkle Background ---------------- */
  function Sparkles() {
    const sparkles = Array.from({ length: 1000 });

    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
                boxShadow: "0 0 8px rgba(212,175,55,0.8)",
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

  /* --------------------------------------------------
     UI
  -------------------------------------------------- */
  return (
    <section className="relative min-h-screen px-4 pt-20 pb-40 bg-[#0B0F1A] overflow-hidden">
      
      {/* Sparkles */}
      <Sparkles />

      {/* Radial Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none"></div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-['Playfair_Display'] text-center 
                   bg-gradient-to-r from-[#D4AF37] via-[#F5E6A5] to-[#D4AF37]
                   bg-clip-text text-transparent mb-6 tracking-wider
                   drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
      >
       Bhajans
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-center text-gray-400 mb-12 text-lg tracking-wide"
      >
        Devotional melodies that elevate the soul
      </motion.p>
      <div className="flex justify-center mb-16">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </div>

      {/* Search */}
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center gap-3 rounded-full bg-[#111827] border border-[#D4AF37]/30 backdrop-blur-xl px-4 py-2">
          <Search className="w-5 h-5" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bhajan, pravachan, aarti…"
            className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Bulk Action Bar */}
      {selected.size > 0 && (
        <div className="max-w-5xl mx-auto mt-6 flex flex-wrap items-center justify-between gap-3 bg-[#111827] border border-[#D4AF37]/20 shadow-lg px-4 py-3 rounded-xl shadow">
          <span className="font-semibold">{selected.size} selected</span>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={selectAllFiltered}
              className="px-3 py-1 bg-[#1F2937] text-gray-300 hover:bg-[#2A3548] rounded-full text-sm"
            >
              Select All
            </button>

            <button
              onClick={clearSelection}
              className="px-3 py-1 bg-[#1F2937] text-gray-300 hover:bg-[#2A3548] rounded-full text-sm"
            >
              Clear
            </button>
            <button
              onClick={() => {
                const tracks = filtered.filter(t => selected.has(t.src));
                setQueueAndPlay(tracks, 0);
                clearSelection();
              }}
              className="px-3 py-1 bg-[#1F2937] text-gray-300 hover:bg-[#2A3548] rounded-full text-sm"
            >
              Play Selected
            </button>

            <button
              onClick={bulkDownload}
              className="px-3 py-1 bg-[#D4AF37] text-black hover:bg-[#E6C76B] shadow-md text-white rounded-full text-sm"
            >
              Download Selected
            </button>
          </div>
        </div>
      )}

      {/* List */}
      <div className="max-w-5xl mx-auto mt-6 rounded-3xl overflow-hidden border border-[#D4AF37]/20 bg-[#111827]">
        <ul className="divide-y divide-[#D4AF37]/10">
          {filtered.map((t, i) => {
            const active = currentTrack?.src === t.src;
            const isSelected = selected.has(t.src);

            return (
              <li
                key={t.src}
                className={`flex items-center justify-between px-6 py-4 ${
                  isSelected
                    ? "bg-[#1E293B]"
                    : active
                    ? "bg-[#1F2937]"
                    : "hover:bg-[#1A2233]"
                }`}
                onTouchStart={() => {
                  longPressTimer.current = setTimeout(
                    () => toggleSelect(t.src),
                    500
                  );
                }}
                onTouchEnd={() => {
                  if (longPressTimer.current)
                    clearTimeout(longPressTimer.current);
                }}
              >
                <div className="flex items-center min-w-0 gap-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelect(t.src)}
                    className="accent-[#D4AF37]"
                  />

                  <div>
                    <div className="font-semibold truncate text-[#D4AF37] tracking-wide">{t.title}</div>
                    {t.artist && (
                      <div className="text-xs opacity-70 truncate">
                        {t.artist}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => active ? toggle() : playAtIndex(i)}
                    className="w-9 h-9 rounded-full bg-[#D4AF37] text-black hover:bg-[#E6C76B] shadow-md flex items-center justify-center"
                  >
                    {active && isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  <button
                    onClick={() => onDownload(t)}
                    className="w-9 h-9 rounded-full bg-[#1F2937] border border-[#D4AF37]/30 text-white hover:border-[#D4AF37] flex items-center justify-center"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
