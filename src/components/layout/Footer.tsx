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
    {
      name: "Media",
      subLinks: [
        { name: "Pravachan", path: "/media/pravachan" },
        { name: "Bhajan", path: "/media/bhajan" },
      ],
    },
    {
      name: "Organization",
      subLinks: [
        { name: "Jinsharnam Tirth", path: "/organization/jinsharnam-tirth" },
        { name: "Pulak Manch", path: "/organization/pulak-manch" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Achievements", path: "/achievements" },
    { name: "Sahitya", path: "/sahitya" },
    { name: "Directory", path: "/directory" },
    { name: "Contact", path: "/contact" },
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
    <footer className="relative overflow-hidden pt-10 text-black font-medium">

      {/* Metallic Gold Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#B8860B] via-[#E6C97A] to-[#B8860B]" />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      {/* Layered Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_20%)] opacity-30" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(139,111,30,0.4),transparent_70%)] opacity-40" />

      {/* Elegant Top Border */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#8B6F1E] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-8">

        {/* Logo + Message */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 border-b border-black/30 pb-6 text-center md:text-left">

          <div className="flex flex-col sm:flex-row items-center gap-6">

            <div className="relative w-18 h-18 md:w-24 md:h-24">
              {/* Soft Glow */}
              <div className="absolute inset-[-14px] bg-white/50 blur-2xl rounded-full opacity-40" />

              {/* Gold Ring */}
              <div className="relative w-full h-full rounded-full overflow-hidden 
                              border-2 border-[#8B6F1E] 
                              shadow-[0_0_40px_rgba(139,111,30,0.7)]">

                <Image
                  src="/images/logonew.png"
                  alt="Pulak Sagar Ji"
                  fill
                  className="object-cover"
                  priority
                />
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

        {/* Elegant Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_1fr] gap-8 py-4">

          {/* QUICK LINKS */}
          <div
            className="
            bg-white/10
            backdrop-blur-md
            rounded-3xl
            p-8
            border border-[#8B6F1E]/40
            shadow-[0_12px_40px_rgba(0,0,0,.18)]
          "
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-black">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">

              {footerLinks.map((item, idx) => (
                <div key={idx}>

                  {item.subLinks ? (
                    <>
                      <h4 className="font-semibold mb-3">
                        {item.name}
                      </h4>

                      <ul className="space-y-2">

                        {item.subLinks.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.path}
                              className="
                                inline-block
                                transition
                                hover:translate-x-2
                                hover:text-[#6D5200]
                              "
                            >
                              ✦ {sub.name}
                            </Link>
                          </li>
                        ))}

                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className="
                        inline-block
                        transition
                        hover:translate-x-2
                        hover:text-[#6D5200]
                      "
                    >
                      ✦ {item.name}
                    </Link>
                  )}

                </div>
              ))}

            </div>
          </div>


          {/* SOCIAL */}
          <div
            className="
              bg-gradient-to-b
              from-[#F7E1A5]/40
              to-[#D5AC46]/20
              rounded-3xl
              p-8
              text-center
              border border-[#8B6F1E]/30
              shadow-xl
            "
          >

            <h3 className="text-2xl font-serif font-bold mb-5">
              Connect With Us
            </h3>

            <p className="leading-8 text-sm mb-8">
              Spreading eternal wisdom,
              discipline and the divine
              light of Jain Dharma.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              {socialLinks.map((s, i) => (
                <Link
                  key={i}
                  href={s.url}
                  target="_blank"
                  className="
                    w-14 h-14
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    text-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:rotate-6
                    hover:shadow-[0_0_30px_rgba(255,215,0,.6)]
                  "
                >
                  {s.icon}
                </Link>
              ))}

            </div>

          </div>


          {/* CENTRAL OFFICE */}
          <div
            className="
              bg-white/10
              backdrop-blur-md
              rounded-3xl
              p-8
              border border-[#8B6F1E]/40
              shadow-[0_12px_40px_rgba(0,0,0,.18)]
            "
          >

            <h3 className="text-2xl font-serif font-bold mb-6">
              Central Office
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="w-14 h-8 rounded-full bg-black text-[#E6C97A]
                flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div className="leading-8">

                  <div className="font-bold text-[#7A5600]">
                    Jinsharnam Media
                  </div>

                  Vatsalya Bhawan<br />
                  P-75, Street No. 5, 
                  Bihari Colony Extension, 
                  Shahdara, Delhi – 110032<br />
                  India

                </div>

              </div>

              <div className="flex gap-4 items-center">
                <FaPhoneAlt />
                +91 9810900699
              </div>

              <div className="flex gap-4 items-center">
                <FaEnvelope />
                <span className="break-all">
                  jinsharnam@gmail.com
                </span>
              </div>

            </div>

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