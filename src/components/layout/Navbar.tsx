"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [orgOpen, setOrgOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  /* Scroll Detection */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#B8860B] via-[#F5E6A5] to-[#B8860B] z-[60]"
        style={{ width: `${progress}%` }}
      />

      <nav className="fixed top-0 left-0 w-full z-50">

        {/* Background */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? "bg-black/80 backdrop-blur-xl"
              : "bg-black/40 backdrop-blur-md"
          }`}
        />

        {/* Golden bottom border glow */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] 
          bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent 
          opacity-70"
        />

        <div
          className={`relative max-w-7xl mx-auto px-8 flex justify-between items-center transition-all duration-500 ${
            scrolled ? "h-[75px]" : "h-[95px]"
          }`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4 group">

            <div className="relative w-20 h-20 flex items-center justify-center">

              {/* Soft Golden Glow Behind */}
              <div className="absolute inset-[-12px] rounded-full 
                bg-[#FFD97A]/25 blur-2xl opacity-80"
              />

              {/* Main Image Container */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden 
                border-[3px] border-[#FFD97A]
                shadow-[0_0_25px_rgba(255,215,120,0.6)]"
              >
                <Image
                  src="/images/img8.jpeg"
                  alt="Pulak Sagar Ji"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            <div className="font-serif text-[28px] font-semibold tracking-wide
              bg-gradient-to-r from-[#FFD97A] via-[#FFF1B8] to-[#FFD97A]
              bg-clip-text text-transparent
              drop-shadow-[0_0_20px_rgba(255,215,120,0.6)]">
              Pulak Sagar Ji Gurudev
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 text-[15px]">

            <NavItem href="/" label="Home" pathname={pathname} />
            <NavItem href="/about" label="About" pathname={pathname} />

            {/* MEDIA */}
            <div
              className="relative"
              onMouseEnter={() => setMediaOpen(true)}
              onMouseLeave={() => setMediaOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-amber-200 hover:text-[#FFD97A] transition">
                Media
                <ChevronDown
                  size={16}
                  className={`transition ${mediaOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {mediaOpen && (
                  <DropdownMenu>
                    <DropdownItem href="/media/pravachan" label="Pravachan" />
                    <DropdownItem href="/media/bhajan" label="Bhajan" />
                  </DropdownMenu>
                )}
              </AnimatePresence>
            </div>

            {/* ORGANIZATION */}
            <div
              className="relative"
              onMouseEnter={() => setOrgOpen(true)}
              onMouseLeave={() => setOrgOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-amber-200 hover:text-[#FFD97A] transition">
                Organization
                <ChevronDown
                  size={16}
                  className={`transition ${orgOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {orgOpen && (
                  <DropdownMenu>
                    <DropdownItem href="/organization/jinsharnam-tirth" label="Jinsharnam Tirth" />
                    {/*<DropdownItem href="/organization/pulak-manch" label="Pulak Manch" />*/}
                  </DropdownMenu>
                )}
              </AnimatePresence>
            </div>

            <NavItem href="/gallery" label="Gallery" pathname={pathname} />
            <NavItem href="/achievements" label="Achievements" pathname={pathname} />
            <NavItem href="/contact" label="Contact" pathname={pathname} />
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-[#3A2A00]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gradient-to-b from-[#F5E6A5] to-[#D4AF37] border-t border-[#B8860B]/30"
            >
              <div className="flex flex-col px-6 py-6 gap-4 text-[#3A2A00]">
                <MobileItem href="/" label="Home" />
                <MobileItem href="/about" label="About" />
                <MobileItem href="/gallery" label="Gallery" />
                <MobileItem href="/achievements" label="Achievements" />
                <MobileItem href="/contact" label="Contact" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

/* NAV ITEM */
function NavItem({ href, label, pathname }: any) {
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative group font-medium text-amber-200">
      <span
        className={`transition-all duration-300 ${
          isActive
            ? "text-[#FFD97A]"
            : "group-hover:text-[#FFD97A]"
        }`}
      >
        {label}
      </span>

      {/* Glow underline */}
      <span
        className={`absolute left-0 -bottom-2 h-[2px] 
        bg-gradient-to-r from-[#FFD97A] to-[#F5C85C]
        transition-all duration-300 ${
          isActive ? "w-full shadow-[0_0_10px_#FFD97A]" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* DROPDOWN MENU */
function DropdownMenu({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.25 }}
      className="absolute top-12 left-0 w-56
      bg-black/90 backdrop-blur-xl
      border border-[#D4AF37]/40
      rounded-3xl
      shadow-[0_30px_80px_rgba(212,175,55,0.35)]"
    >
      {children}
    </motion.div>
  );
}

/* DROPDOWN ITEM */
function DropdownItem({ href, label }: any) {
  return (
    <Link
      href={href}
      className="block px-6 py-3 text-amber-200 
      hover:bg-[#D4AF37]/10 
      hover:text-[#FFD97A] 
      rounded-3xl
      transition font-medium"
    >
      {label}
    </Link>
  );
}

/* MOBILE ITEM */
function MobileItem({ href, label }: any) {
  return (
    <Link href={href} className="text-lg hover:text-black transition">
      {label}
    </Link>
  );
}