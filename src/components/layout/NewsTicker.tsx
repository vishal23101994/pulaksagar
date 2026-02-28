"use client";

export default function NewsTicker() {
  const messages = [
    "Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev — A guiding light of Jain Dharma ✨",
    "Experience wisdom, renunciation, and eternal truth through divine pravachans 📿",
    "Visit Jinsharnam Tirth — A sacred space of peace, devotion, and spiritual awakening 🙏",
    "May compassion, discipline, and inner purity illuminate every life 🌼",
  ];

  return (
    <div className="fixed top-[90px] left-0 w-full z-40 group relative overflow-hidden select-none bg-black border-y border-[#D4AF37]/25">

      {/* Soft Golden Glow */}
      <div className="absolute inset-0 bg-gradient-to-r 
        from-transparent via-[#FFD97A]/70 to-transparent opacity-20" />

      {/* Elegant Top & Bottom Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Edge Fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 
        bg-gradient-to-r from-black to-transparent z-10" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 
        bg-gradient-to-l from-black to-transparent z-10" />

      <div className="relative z-20 overflow-hidden py-3">
        <div className="flex w-max animate-ticker whitespace-nowrap">
          {[...messages, ...messages].map((msg, i) => (
            <div key={i} className="flex items-center gap-6 mx-10">

              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />

              <span className="text-[#F5E6A5] text-sm md:text-base font-semibold tracking-wide">
                {msg}
              </span>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}