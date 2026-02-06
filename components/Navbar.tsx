"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_PATH } from "@/data/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-brand-black/90 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 shrink-0">
            <Image
              src={`${BASE_PATH}/images/logo.png`}
              alt="Reek Rozay Entertainment"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-brand-gold"
                    : "text-brand-cream/70 hover:text-brand-cream"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-brand-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link href="/events" className="btn-primary !py-2.5 !px-6 !text-xs">
              Get Tickets
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 lg:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={
                  isMobileOpen
                    ? { rotate: 45, y: 7.5, backgroundColor: "#D4A017" }
                    : { rotate: 0, y: 0, backgroundColor: "#FAF9F6" }
                }
                className="block h-[1.5px] w-full origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={
                  isMobileOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                className="block h-[1.5px] w-full bg-brand-cream"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={
                  isMobileOpen
                    ? { rotate: -45, y: -7.5, backgroundColor: "#D4A017" }
                    : { rotate: 0, y: 0, backgroundColor: "#FAF9F6" }
                }
                className="block h-[1.5px] w-full origin-center"
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-brand-black/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display text-3xl md:text-4xl tracking-wide transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-brand-gold"
                        : "text-brand-cream/80 hover:text-brand-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-4"
              >
                <Link href="/events" className="btn-primary">
                  Get Tickets
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 flex gap-6"
              >
                <a
                  href="https://www.instagram.com/reek_rozay_ent/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cream/40 hover:text-brand-gold transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/ReekRozayEnt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cream/40 hover:text-brand-gold transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@reekrozay_entertainment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cream/40 hover:text-brand-gold transition-colors"
                >
                  <TikTokIcon />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.27 8.27 0 005.58 2.17V11.7a4.85 4.85 0 01-3.77-1.85V6.69h3.77z" />
    </svg>
  );
}
