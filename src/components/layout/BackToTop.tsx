"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed bottom-8 right-8 z-50
            w-12 h-12
            flex items-center justify-center
            rounded-full
            bg-[#111827]
            text-[#D4AF37]
            border border-[#D4AF37]/40
            shadow-md
            transition-all duration-300
            hover:bg-[#D4AF37]
            hover:text-black
            hover:scale-110
          "
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}