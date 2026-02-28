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

  const socialLinks = [
    { icon: <FaYoutube className="text-[#FF0000]" />, url: "https://youtube.com/@jinsharnammedia?si=7H1TrEVFK6rjI5qu" },
    { icon: <FaFacebookF className="text-[#1877F2]" />, url: "https://www.facebook.com/Jinsharnammedia" },
    { icon: <FaInstagram className="text-[#E1306C]" />, url: "https://www.instagram.com/jinsharnam_media" },
    { icon: <FaTwitter className="text-[#1DA1F2]" />, url: "https://x.com/jinsharnamedia" },
    { icon: <FaLinkedinIn className="text-[#0077B5]" />, url: "https://www.linkedin.com/company/jinsharnammedia/" },
    { icon: <FaTelegramPlane className="text-[#0088cc]" />, url: "https://t.me/Jinsharnam_Media" },
    { icon: <FaPinterestP className="text-[#E60023]" />, url: "https://www.pinterest.com/jinsharnam/" },
    { icon: <FaBloggerB className="text-[#FF5722]" />, url: "https://jindharnam.blogspot.com/" },
  ];

  return (
    <footer className="relative overflow-hidden pt-16 text-black font-medium">

      {/* Metallic Gold Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#B8860B] via-[#E6C97A] to-[#B8860B]" />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      {/* Layered Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_20%)] opacity-30" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(139,111,30,0.4),transparent_70%)] opacity-40" />

      {/* Elegant Top Border */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#8B6F1E] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-12">

        {/* Logo + Message */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 border-b border-black/30 pb-10 text-center md:text-left">

          <div className="flex flex-col sm:flex-row items-center gap-6">

            <div className="relative w-16 h-16">
              <div className="absolute inset-[-12px] bg-white/50 blur-2xl rounded-full opacity-40" />
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#8B6F1E] shadow-[0_0_30px_rgba(139,111,30,0.7)]">
                <Image src="/images/navlogo.png" alt="Pulak Sagar Ji" fill className="object-cover" />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-black tracking-wide">
                Pulak Sagar Ji Gurudev
              </h2>
              <p className="text-sm md:text-base text-black mt-2
                            font-medium tracking-wide
                            break-words leading-relaxed
                            max-w-xl">
                Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev —
                Spreading eternal wisdom, discipline, compassion, and the divine light of Jain Dharma.
              </p>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 text-sm border-b border-black/30 pb-10">

          {footerLinks.map((item, idx) => (
            <div key={idx}>
              {item.subLinks ? (
                <>
                  <p className="font-bold text-black mb-3 tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    {item.name}
                  </p>
                  <ul className="space-y-2">
                    {item.subLinks.map((sub, i) => (
                      <li key={i}>
                        <Link href={sub.path} className="transition-all duration-300 
                                                         hover:text-black 
                                                         hover:font-semibold
                                                         hover:tracking-wide">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.path} className="hover:text-black transition duration-300 hover:pl-1 block">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 border-b border-[#2A2006]/40 pb-10 text-center md:text-left">

          <div className="text-m text-black font-medium space-y-4 w-full md:w-1/2">

            <p className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <FaMapMarkerAlt className="text-black mt-1" />
              <span>
                Vatsalya Bhawan, P-75, Street Number 5,  
                Bihari Colony Extension, Bihari Colony,<br />Shahdara, Delhi - 110032
              </span>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-black" />
              +91 9810900699, 9810900042
            </p>

            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-black" />
              pulaksagar@gmail.com
            </p>
          </div>

          {/* Social Icons (Brand Colors Restored) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 w-full md:w-1/2">
            {socialLinks.map((s, i) => (
              <Link
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-lg md:text-2xl
                  bg-black border border-black
                  rounded-full
                  p-2 md:p-3
                  transition-all duration-300
                  shadow-md
                  hover:scale-110
                  hover:shadow-[0_0_20px_rgba(0,0,0,0.6)]
                "
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Full Width Copyright */}
      <div className="relative z-20 w-full bg-black py-5 text-center">
        <p className="text-sm tracking-wide text-[#E6C97A]">
          © {new Date().getFullYear()} 
          <span className="font-semibold"> Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev</span>
          · Spreading Peace · Faith · Knowledge
        </p>
      </div>
    </footer>
  );
}