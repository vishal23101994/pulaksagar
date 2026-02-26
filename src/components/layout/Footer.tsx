"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTelegramPlane,
  FaPinterestP,
  FaBloggerB,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
    {
      name: "Organization",
      subLinks: [
        { name: "Jinsharnam Tirth", path: "/organization/jinsharnam-tirth" },
        { name: "Pulak Manch", path: "/organization/pulak-manch" },
      ],
    },
    {
      name: "Media",
      subLinks: [
        { name: "Pravachan", path: "/media/pravachan" },
        { name: "Bhajan", path: "/media/bhajan" },
      ],
    },
  ];

  const socialLinks: {
    icon: React.ReactNode;
    url: string;
  }[] = [
    { icon: <FaYoutube className="text-[#FF0000]" />, url: "https://youtube.com/@jinsharnammedia?si=7H1TrEVFK6rjI5qu" },
    { icon: <FaFacebookF className="text-[#1877F2]" />, url: "https://www.facebook.com/Jinsharnammedia" },
    { icon: <FaInstagram className="text-[#E1306C]" />, url: "https://www.instagram.com/jinsharnam_media" },
    { icon: <FaTwitter className="text-white" />, url: "https://x.com/jinsharnamedia" },
    { icon: <FaLinkedinIn className="text-[#0077B5]" />, url: "https://www.linkedin.com/company/jinsharnammedia/" },
    { icon: <FaTelegramPlane className="text-[#0088cc]" />, url: "https://t.me/Jinsharnam_Media" },
    { icon: <FaPinterestP className="text-[#E60023]" />, url: "https://www.pinterest.com/jinsharnam/" },
    { icon: <FaBloggerB className="text-[#FF5722]" />, url: "https://jindharnam.blogspot.com/" },
  ];

  return (
    <footer className="bg-black border-t border-[#D4AF37]/30 text-amber-100 pt-12 md:pt-14">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10">

        {/* 🌼 1. Logo + Message */}
        <div className="flex flex-col md:flex-row items-center md:items-start 
                        justify-between gap-8 border-b border-[#D4AF37]/20 pb-8
                        text-center md:text-left">

          <div className="flex flex-col sm:flex-row items-center gap-5">

            <div className="relative w-16 h-16">
              <div className="absolute inset-[-10px] bg-[#FFD97A]/25 blur-2xl rounded-full" />
              <div className="relative w-16 h-16 rounded-full overflow-hidden 
                              border-2 border-[#FFD97A]
                              shadow-[0_0_25px_rgba(255,215,120,0.6)]">
                <Image
                  src="/images/img8.jpeg"
                  alt="Pulak Sagar Ji"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold 
                             bg-gradient-to-r from-[#FFD97A] via-[#FFF1B8] to-[#FFD97A]
                             bg-clip-text text-transparent">
                Pulak Sagar Ji Gurudev
              </h2>
              <p className="text-sm text-amber-300/90 leading-relaxed max-w-md mx-auto md:mx-0">
                Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev —
                Spreading eternal wisdom, discipline, compassion,
                and the divine light of Jain Dharma.
              </p>
            </div>
          </div>
        </div>

        {/* 🌿 2. Explore Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
                        gap-y-8 gap-x-6 text-sm border-b border-[#D4AF37]/20 pb-8">

          {footerLinks.map((item, idx) => (
            <div key={idx}>
              {item.subLinks ? (
                <>
                  <p className="font-semibold text-[#FFD97A] mb-3">
                    {item.name}
                  </p>
                  <ul className="space-y-2">
                    {item.subLinks.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.path}
                          className="hover:text-[#FFD97A] transition"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-[#FFD97A] transition block"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* 🌐 3. Contact + Social */}
        <div className="flex flex-col md:flex-row items-center md:items-start 
                        justify-between gap-10 border-b border-[#D4AF37]/20 pb-8
                        text-center md:text-left">

          {/* Contact */}
          <div className="text-sm text-amber-300/90 space-y-4 w-full md:w-1/2">

            <p className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <FaMapMarkerAlt className="text-[#FFD97A] mt-1" />
              <span>
                Vatsalya Bhawan, P-75, Street Number 5,  
                Bihari Colony Extension, Shahdara, Delhi - 110032
              </span>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-[#FFD97A]" />
              +91 9910987666, 9810900699
            </p>

            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-[#FFD97A]" />
              pulaksagar@gmail.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 w-full md:w-1/2">
            {socialLinks.map((s, i) => (
              <Link
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl transition-transform duration-300 
                           hover:scale-125
                           hover:drop-shadow-[0_0_10px_rgba(255,215,120,0.8)]"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* 🌸 4. Copyright */}
        <div className="text-xs sm:text-sm text-amber-400/80 text-center pt-4 pb-6">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#FFD97A] font-semibold">
            Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev
          </span>{" "}
          · Spreading Peace · Faith · Knowledge ✨
        </div>

      </div>
    </footer>
  );
}