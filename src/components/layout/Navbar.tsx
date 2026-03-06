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
  const [hideNavbar, setHideNavbar] = useState(false);

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

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHideNavbar(true);
        } else {
          setHideNavbar(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-[#B8860B] via-[#FFF1B8] to-[#B8860B] z-[60]"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={false}
        animate={{
          y: hideNavbar ? -120 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >

        {/* GOLD BACKGROUND */}
        <div
          className={`absolute inset-0 transition-all duration-500 z-0 ${
            scrolled
              ? "bg-gradient-to-r from-[#B8860B] via-[#E6C97A] to-[#B8860B] shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              : "bg-gradient-to-r from-[#8B6F1E] via-[#CFA73C] to-[#8B6F1E]"
          }`}
        >
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
          {/* Metallic Shine */}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)] opacity-20 animate-pulse" />
        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#8B6F1E] to-transparent" />

        <div
          className={`relative z-20 max-w-7xl mx-auto px-6 
          flex justify-between items-center transition-all duration-500
          ${scrolled ? "h-[70px]" : "h-[90px]"}`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">

              {/* Outer Glow Ring */}
              <div className="absolute inset-[-12px] rounded-full bg-gradient-to-r from-[#B8860B] via-[#FFF1B8] to-[#B8860B] blur-lg opacity-40 group-hover:opacity-100 transition duration-500" />

              {/* Image Frame */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#8B6F1E] shadow-[0_0_30px_rgba(212,175,55,0.8)]">
                <Image
                  src="/images/logonew.png"
                  alt="Pulak Sagar Ji"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="font-serif text-lg md:text-2xl tracking-wide font-bold tracking-wide text-[#2A2006] drop-shadow-[0_2px_6px_rgba(255,255,255,0.4)]">
              Pulak Sagar Ji Gurudev
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[15px]">
            <NavItem href="/" label="Home" pathname={pathname} />
            <NavItem href="/about" label="About" pathname={pathname} />

            {/* Media */}
            <DropdownWrapper
              label="Media"
              open={mediaOpen}
              setOpen={setMediaOpen}
            >
              <DropdownItem href="/media/pravachan" label="Pravachan" />
              <DropdownItem href="/media/bhajan" label="Bhajan" />
            </DropdownWrapper>

            {/* Organization */}
            <DropdownWrapper
              label="Organization"
              open={orgOpen}
              setOpen={setOrgOpen}
            >
              <DropdownItem href="/organization/jinsharnam-tirth" label="Jinsharnam Tirth" />
              <DropdownItem href="/organization/pulak-manch" label="Pulak Manch" />
            </DropdownWrapper>

            <NavItem href="/gallery" label="Gallery" pathname={pathname} />
            <NavItem href="/achievements" label="Achievements" pathname={pathname} />
            <NavItem href="/sahitya" label="Sahitya" pathname={pathname} />
            <NavItem href="/directory" label="Directory" pathname={pathname} />
            <NavItem href="/contact" label="Contact" pathname={pathname} />
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#3A2F0B]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden relative z-30 bg-gradient-to-b from-[#FFF1B8] to-[#D4AF37] border-t border-[#8B6F1E]"
            >
              <div className="flex flex-col px-6 py-6 gap-5 text-[#3A2F0B] font-semibold">

                <MobileItem href="/" label="Home" onClick={() => setMobileOpen(false)} />
                <MobileItem href="/about" label="About" onClick={() => setMobileOpen(false)} />
                <MobileItem href="/gallery" label="Gallery" onClick={() => setMobileOpen(false)} />
                <MobileItem href="/achievements" label="Achievements" onClick={() => setMobileOpen(false)} />
                <MobileItem href="/sahitya" label="Sahitya" onClick={() => setMobileOpen(false)} />
                <MobileItem href="/directory" label="Directory" onClick={() => setMobileOpen(false)} />
                <MobileItem href="/contact" label="Contact" onClick={() => setMobileOpen(false)} />

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

/* Desktop Nav Item */
function NavItem({ href, label, pathname }: any) {
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative group font-semibold text-[#3A2F0B]">
      <span className="group-hover:text-[#1A1A1A] transition">
        {label}
      </span>

      <span
        className={`absolute left-0 -bottom-2 h-[3px] bg-[#8B6F1E] transition-all duration-300 ${
          isActive ? "w-full shadow-[0_0_10px_#8B6F1E]" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* Dropdown Wrapper */
function DropdownWrapper({ label, open, setOpen, children }: any) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 font-semibold text-[#3A2F0B] hover:text-black transition">
        {label}
        <ChevronDown size={16} className={open ? "rotate-180 transition" : "transition"} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute top-12 left-0 w-56 bg-gradient-to-b from-[#FFF4C2] to-[#E6C97A] border border-[#8B6F1E] rounded-2xl shadow-[0_30px_80px_rgba(212,175,55,0.5)]"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Dropdown Item */
function DropdownItem({ href, label }: any) {
  return (
    <Link
      href={href}
      className="block px-6 py-3 text-[#3A2F0B] hover:bg-black/10 hover:text-black rounded-2xl transition font-semibold"
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
      className="text-base font-semibold text-[#3A2F0B] hover:text-black transition"
    >
      {label}
    </Link>
  );
}