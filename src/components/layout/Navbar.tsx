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
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const [mobileOrgOpen, setMobileOrgOpen] = useState(false);
  const [progress, setProgress] = useState(0);

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
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#B8860B] via-[#F5E6A5] to-[#B8860B] z-[60]"
        style={{ width: `${progress}%` }}
      />

      <nav className="fixed top-0 left-0 w-full z-50">
        {/* Background */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? "bg-black/90 backdrop-blur-xl"
              : "bg-black/70 backdrop-blur-md"
          }`}
        />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />

        <div
          className={`relative max-w-7xl mx-auto px-4 md:px-8 
          flex justify-between items-center transition-all duration-500
          ${scrolled ? "h-[70px]" : "h-[85px] md:h-[95px]"}`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
              <div className="absolute inset-[-8px] md:inset-[-12px] rounded-full bg-[#FFD97A]/25 blur-xl md:blur-2xl opacity-80" />

              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-[2px] md:border-[3px] border-[#FFD97A] shadow-[0_0_20px_rgba(255,215,120,0.6)]">
                <Image
                  src="/images/img8.jpeg"
                  alt="Pulak Sagar Ji"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="font-serif text-[15px] sm:text-[18px] md:text-[28px] font-semibold tracking-wide bg-gradient-to-r from-[#FFD97A] via-[#FFF1B8] to-[#FFD97A] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,215,120,0.6)] leading-tight max-w-[180px] sm:max-w-none">
              Pulak Sagar Ji Gurudev
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-[15px]">
            <NavItem href="/" label="Home" pathname={pathname} />
            <NavItem href="/about" label="About" pathname={pathname} />

            {/* Media */}
            <div
              className="relative"
              onMouseEnter={() => setMediaOpen(true)}
              onMouseLeave={() => setMediaOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-amber-200 hover:text-[#FFD97A] transition">
                Media
                <ChevronDown size={16} className={mediaOpen ? "rotate-180 transition" : "transition"} />
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

            {/* Organization */}
            <div
              className="relative"
              onMouseEnter={() => setOrgOpen(true)}
              onMouseLeave={() => setOrgOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-amber-200 hover:text-[#FFD97A] transition">
                Organization
                <ChevronDown size={16} className={orgOpen ? "rotate-180 transition" : "transition"} />
              </button>

              <AnimatePresence>
                {orgOpen && (
                  <DropdownMenu>
                    <DropdownItem href="/organization/jinsharnam-tirth" label="Jinsharnam Tirth" />
                    <DropdownItem href="/organization/pulak-manch" label="Pulak Manch" />
                  </DropdownMenu>
                )}
              </AnimatePresence>
            </div>

            <NavItem href="/gallery" label="Gallery" pathname={pathname} />
            <NavItem href="/achievements" label="Achievements" pathname={pathname} />
            <NavItem href="/contact" label="Contact" pathname={pathname} />
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#FFD97A]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black border-t border-[#D4AF37]/30 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 gap-5 text-[#FFD97A]">

                <MobileItem href="/" label="Home" onClick={() => setMobileOpen(false)} />
                <MobileItem href="/about" label="About" onClick={() => setMobileOpen(false)} />

                {/* Media */}
                <button
                  onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                  className="flex justify-between items-center text-[#FFD97A]"
                >
                  Media
                  <ChevronDown size={18} className={mobileMediaOpen ? "rotate-180 transition" : "transition"} />
                </button>

                {mobileMediaOpen && (
                  <div className="pl-4 flex flex-col gap-3">
                    <MobileItem href="/media/pravachan" label="Pravachan" onClick={() => setMobileOpen(false)} />
                    <MobileItem href="/media/bhajan" label="Bhajan" onClick={() => setMobileOpen(false)} />
                  </div>
                )}

                {/* Organization */}
                <button
                  onClick={() => setMobileOrgOpen(!mobileOrgOpen)}
                  className="flex justify-between items-center text-[#FFD97A]"
                >
                  Organization
                  <ChevronDown size={18} className={mobileOrgOpen ? "rotate-180 transition" : "transition"} />
                </button>

                {mobileOrgOpen && (
                  <div className="pl-4 flex flex-col gap-3">
                    <MobileItem href="/organization/jinsharnam-tirth" label="Jinsharnam Tirth" onClick={() => setMobileOpen(false)} />
                    <MobileItem href="/organization/pulak-manch" label="Pulak Manch" onClick={() => setMobileOpen(false)} />
                  </div>
                )}

                <MobileItem href="/gallery" label="Gallery" onClick={() => setMobileOpen(false)} />
                <MobileItem href="/achievements" label="Achievements" onClick={() => setMobileOpen(false)} />
                <MobileItem href="/contact" label="Contact" onClick={() => setMobileOpen(false)} />

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

/* Desktop Nav Item */
function NavItem({ href, label, pathname }: any) {
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative group font-medium text-amber-200">
      <span className={isActive ? "text-[#FFD97A]" : "group-hover:text-[#FFD97A] transition"}>
        {label}
      </span>

      <span
        className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-[#FFD97A] to-[#F5C85C] transition-all duration-300 ${
          isActive ? "w-full shadow-[0_0_10px_#FFD97A]" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* Dropdown Menu */
function DropdownMenu({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.25 }}
      className="absolute top-12 left-0 w-56 bg-black/90 backdrop-blur-xl border border-[#D4AF37]/40 rounded-3xl shadow-[0_30px_80px_rgba(212,175,55,0.35)]"
    >
      {children}
    </motion.div>
  );
}

/* Dropdown Item */
function DropdownItem({ href, label }: any) {
  return (
    <Link
      href={href}
      className="block px-6 py-3 text-amber-200 hover:bg-[#D4AF37]/10 hover:text-[#FFD97A] rounded-3xl transition font-medium"
    >
      {label}
    </Link>
  );
}

/* Mobile Item */
function MobileItem({ href, label, onClick }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-base font-medium text-[#FFD97A] hover:text-white transition"
    >
      {label}
    </Link>
  );
}