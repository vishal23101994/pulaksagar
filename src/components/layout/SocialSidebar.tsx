"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTelegramPlane,
  FaPinterestP,
  FaBloggerB,
} from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FloatingSocialBar() {
  const [isOpen, setIsOpen] = useState(true);

  const socialLinks = [
    { icon: <FaYoutube className="text-[#FF0000]" />, url: "https://youtube.com/@jinsharnammedia?si=7H1TrEVFK6rjI5qu" },
    { icon: <FaFacebookF className="text-[#1877F2]" />, url: "https://www.facebook.com/Jinsharnammedia" },
    { icon: <FaInstagram className="text-[#E1306C]" />, url: "https://www.instagram.com/jinsharnam_media" },
    { icon: <FaTwitter className="text-[#1877F2]" />, url: "https://x.com/jinsharnamedia" },
    { icon: <FaLinkedinIn className="text-[#0077B5]" />, url: "https://www.linkedin.com/company/jinsharnammedia/" },
    { icon: <FaTelegramPlane className="text-[#0088cc]" />, url: "https://t.me/Jinsharnam_Media" },
    { icon: <FaPinterestP className="text-[#E60023]" />, url: "https://www.pinterest.com/jinsharnam/" },
    { icon: <FaBloggerB className="text-[#FF5722]" />, url: "https://jindharnam.blogspot.com/" },
  ];

  return (
    <div
      className={`fixed top-1/4 z-50 flex items-center transition-all duration-500 ${
        isOpen ? "left-0" : "-left-16"
      }`}
    >
      {/* 🌟 Royal Social Panel */}
      <div
        className={`relative backdrop-blur-xl
        bg-black/80 border border-[#D4AF37]/40
        rounded-r-2xl shadow-[0_20px_60px_rgba(212,175,55,0.35)]
        px-2 py-4 flex flex-col items-center gap-5
        transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10 pointer-events-none"
        }`}
      >
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-2xl text-white
              hover:scale-125
              hover:text-[#FFD97A]
              transition-all duration-300
              drop-shadow-[0_0_6px_rgba(255,215,120,0.6)]
            "
          >
            {link.icon}
          </Link>
        ))}
      </div>

      {/* 🌼 Royal Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          absolute top-1/2 -translate-y-1/2
          bg-gradient-to-r from-[#FFD97A] via-[#F5C85C] to-[#FFD97A]
          text-black
          shadow-[0_10px_30px_rgba(255,215,120,0.6)]
          rounded-r-full w-6 h-12
          flex items-center justify-center
          transition-all duration-300
          ${isOpen ? "left-full" : "left-16"}
        `}
      >
        {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>
    </div>
  );
}