"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  X,
  Music,
  ListMusic,
  Maximize2,
  Minimize2,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAudioPlayer } from "../app/providers/AudioPlayerProvider";
import { useLyrics } from "../hooks/useLyrics";

/* --------------------------------------------------
   Helpers
-------------------------------------------------- */
const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

/* 🔒 Extend audio element safely */
type AudioWithSource = HTMLAudioElement & {
  __mediaSource?: MediaElementAudioSourceNode;
};

export default function GlobalAudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    toggle,
    next,
    prev,
    shuffleToggle,
    currentTime,
    duration,
    seek,
    isOpen,
    closePlayer,
    repeatMode,
    setRepeatMode,
    getAudioElement,
    getQueue,
    setQueueAndPlay,
  } = useAudioPlayer();

  /* ---------------- UI STATE ---------------- */
  const [liked, setLiked] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [dark, setDark] = useState(false);
  /* 🔤 LYRICS */
  const lyrics = useLyrics(currentTrack?.src);

  const activeLyricIndex = lyrics.findIndex(
    (line, i) =>
      currentTime >= line.time &&
      (i === lyrics.length - 1 || currentTime < lyrics[i + 1].time)
  );

  /* 🎯 AUTO SCROLL ACTIVE LYRIC */
  useEffect(() => {
    if (
      activeLyricIndex < 0 ||
      !lyricsContainerRef.current ||
      !lyricLineRefs.current[activeLyricIndex]
    ) {
      return;
    }

    lyricLineRefs.current[activeLyricIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [activeLyricIndex]);


  /* ---------------- ESC to exit fullscreen ---------------- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreen) setFullscreen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [fullscreen]);

  /* ---------------- FAVORITES ---------------- */
  useEffect(() => {
    if (!currentTrack) return;
    const favs = JSON.parse(localStorage.getItem("audio_favs") || "[]");
    setLiked(favs.includes(currentTrack.src));
  }, [currentTrack]);

  const toggleLike = () => {
    if (!currentTrack) return;
    const favs: string[] = JSON.parse(localStorage.getItem("audio_favs") || "[]");
    const updated = liked
      ? favs.filter((s) => s !== currentTrack.src)
      : [...favs, currentTrack.src];
    localStorage.setItem("audio_favs", JSON.stringify(updated));
    setLiked(!liked);
  };

  /* ---------------- MediaSession API (NO ARTWORK) ---------------- */
  useEffect(() => {
    if (!("mediaSession" in navigator) || !currentTrack) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentTrack.title,
      artist: currentTrack.artist || "Jinsharnam Media",
    });

    navigator.mediaSession.setActionHandler("play", toggle);
    navigator.mediaSession.setActionHandler("pause", toggle);
    navigator.mediaSession.setActionHandler("previoustrack", prev);
    navigator.mediaSession.setActionHandler("nexttrack", next);
  }, [currentTrack, isPlaying]);

  /* ---------------- REAL WAVEFORM (SAFE) ---------------- */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  /* 🎵 LYRICS AUTO-SCROLL */
  const lyricsContainerRef = useRef<HTMLDivElement | null>(null);
  const lyricLineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const audio = getAudioElement() as AudioWithSource | null;
    const canvas = canvasRef.current;
    if (!audio || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }

    /* 🔒 create MediaElementSource ONLY ONCE */
    if (!audio.__mediaSource) {
      audio.__mediaSource =
        audioCtxRef.current.createMediaElementSource(audio);
    }

    if (!analyserRef.current) {
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;

      audio.__mediaSource.connect(analyserRef.current);
      analyserRef.current.connect(audioCtxRef.current.destination);
    }

    const analyser = analyserRef.current;
    const buffer = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      analyser.getByteTimeDomainData(buffer);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.strokeStyle = "#D4AF37";
      ctx.lineWidth = 2;

      let x = 0;
      const step = canvas.width / buffer.length;

      for (let i = 0; i < buffer.length; i++) {
        const y = (buffer[i] / 255) * canvas.height;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        x += step;
      }

      ctx.stroke();
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [currentTrack, isPlaying, dark]);

  /* ---------------- Queue (drag reorder) ---------------- */
  const queue = getQueue();
  const dragIndex = useRef<number | null>(null);

  const onDragStart = (index: number) => {
    dragIndex.current = index;
  };

  const onDrop = (index: number) => {
    if (dragIndex.current === null) return;
    const newQueue = [...queue];
    const [moved] = newQueue.splice(dragIndex.current, 1);
    newQueue.splice(index, 0, moved);
    dragIndex.current = null;

    const currentSrc = currentTrack?.src;
    const newIndex = newQueue.findIndex(t => t.src === currentSrc);
    setQueueAndPlay(newQueue, newIndex >= 0 ? newIndex : 0);
  };

  if (!currentTrack || !isOpen) return null;

  return (
    <AnimatePresence>
      {(fullscreen || (isMobile && showQueue)) && (
        <motion.div
          key="player-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-[9998]"
          onClick={() => {
            setFullscreen(false);
            setShowQueue(false);
          }}
        />
      )}

      <motion.div
        key="global-audio-player"
        drag={!fullscreen && !isMobile}
        dragMomentum={false}
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className={`
          fixed z-[9999]
          ${fullscreen
            ? "inset-0 flex items-center justify-center"
            : isMobile
              ? "inset-x-0 bottom-0"
              : "bottom-6 right-6 w-[360px]"}
        `}
      >
        <div
          className={`
            relative p-4 shadow-2xl border border-black/10
            bg-[#111827]/95 backdrop-blur-2xl 
            text-white border border-[#D4AF37]/20
            shadow-[0_0_40px_rgba(212,175,55,0.15)]
            ${fullscreen ? "w-[420px] rounded-3xl" : "rounded-3xl"}
          `}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37] text-black shadow-md flex items-center justify-center">
                <Music size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">
                  {currentTrack.title}
                </p>
                <p className="text-xs opacity-70 truncate">
                  {currentTrack.artist || "Jinsharnam Media"}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setDark(d => !d)}>
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button onClick={() => setFullscreen(f => !f)}>
                {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button onClick={closePlayer}>
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ART */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="mx-auto my-3 w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5E6A5] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)] flex items-center justify-center text-3xl shadow-lg"
          >
            🎵
          </motion.div>

          {/* WAVEFORM */}
          <canvas ref={canvasRef} width={260} height={40} className="mx-auto" />

          {/* PROGRESS */}
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={(e) => seek(Number(e.target.value))}
            className="w-full mt-2 accent-[#D4AF37]"
          />
          
          {lyrics.length > 0 && (
            <div
              ref={lyricsContainerRef}
              className="mt-3 max-h-40 overflow-y-auto text-center px-3 space-y-2 scroll-smooth"
            >
              {lyrics.map((line, i) => (
                <p
                  key={i}
                  ref={(el) => {
                    lyricLineRefs.current[i] = el;
                  }}
                  className={`transition-all duration-300 ${
                    i === activeLyricIndex
                      ? "text-[#D4AF37] font-semibold scale-105"
                      : "text-gray-400"
                  }`}
                >
                  {line.text}
                </p>
              ))}
            </div>
          )}

          {/* CONTROLS */}
          <div className="flex items-center justify-between mt-3 px-2">
            <button onClick={shuffleToggle}><Shuffle size={18} /></button>
            <button onClick={prev}><SkipBack size={22} /></button>

            <button
              onClick={toggle}
              className="w-14 h-14 rounded-full bg-[#D4AF37] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:bg-[#E6C76B] transition flex items-center justify-center shadow-xl"
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} />}
            </button>

            <button onClick={next}><SkipForward size={22} /></button>

            <button
              onClick={() =>
                setRepeatMode(
                  repeatMode === "off"
                    ? "all"
                    : repeatMode === "all"
                    ? "one"
                    : "off"
                )
              }
            >
              <Repeat
                size={18}
                className={repeatMode !== "off" ? "text-[#D4AF37]" : "text-gray-400"}
              />
            </button>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-center gap-4 mt-2">
            <button onClick={toggleLike}>
              <Heart
                size={18}
                className={liked ? "fill-[#D4AF37] text-[#D4AF37]" : "opacity-70"}
              />
            </button>

            {queue.length > 1 && (
              <button onClick={() => setShowQueue(s => !s)}>
                <ListMusic size={18} />
              </button>
            )}
          </div>

          {/* QUEUE */}
          <AnimatePresence>
            {showQueue && (
              <motion.div
                key="queue-drawer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`
                  absolute left-3 right-3 bottom-[72px]
                  ${dark ? "bg-[#1F2937]/95 text-white" : "border border-[#D4AF37]/20"}
                  backdrop-blur-xl rounded-2xl shadow-xl
                  max-h-60 overflow-auto border border-white/20
                `}
              >
                <div className="p-3 space-y-1">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-semibold">Upcoming Queue</h4>
                    <button onClick={() => setShowQueue(false)}>✕</button>
                  </div>

                  {queue.map((t, i) => (
                    <div
                      key={`${t.src}-${i}`}
                      draggable
                      onDragStart={() => onDragStart(i)}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() => onDrop(i)}
                      className={`
                        px-2 py-2 rounded-lg text-sm cursor-move
                        ${t.src === currentTrack.src
                          ? dark
                            ? "bg-white/20 font-semibold"
                            : "bg-[#1E293B] border border-[#D4AF37]/30 font-semibold"
                          : "hover:bg-white/20"}
                      `}
                    >
                      {i + 1}. {t.title}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
