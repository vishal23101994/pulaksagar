"use client";

export default function NewsTicker() {
  const messages = [
    "Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev — A guiding light of Jain Dharma ✨",
    "Experience wisdom, renunciation, and eternal truth through divine pravachans 📿",
    "Visit Jinsharnam Tirth — A sacred space of peace, devotion, and spiritual awakening 🙏",
    "May compassion, discipline, and inner purity illuminate every life 🌼",
  ];

  return (
    <div className="fixed top-[90px] left-0 w-full z-40 group relative overflow-hidden 
      bg-black border-y border-[#D4AF37]/40 py-3 select-none">

      {/* Soft Golden Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r 
        from-transparent via-[#FFD97A]/10 to-transparent opacity-40" />

      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 
        bg-gradient-to-r from-black to-transparent z-10" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 
        bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee Track */}
      <div
        className="
          animate-jm-marquee
          group-hover:[animation-play-state:paused]
          flex w-max gap-16 whitespace-nowrap
          text-[#FFD97A] text-sm md:text-base font-medium tracking-wider
          drop-shadow-[0_0_8px_rgba(255,215,120,0.7)]
          will-change-transform
        "
      >
        {[...Array(2)].map((_, idx) => (
          <div key={`ticker-${idx}`} className="flex items-center gap-16">
            {messages.map((msg, i) => (
              <span key={`msg-${idx}-${i}`} className="opacity-90 hover:opacity-100 transition">
                {msg}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}