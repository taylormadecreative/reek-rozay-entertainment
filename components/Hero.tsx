"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  headline: string;
  subtext: string;
  fullHeight?: boolean;
  showCtas?: boolean;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showScrollIndicator?: boolean;
}

export default function Hero({
  headline,
  subtext,
  fullHeight = false,
  showCtas = false,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  showScrollIndicator = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        fullHeight ? "min-h-screen" : "min-h-[45vh] md:min-h-[50vh]"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* REPLACE: Client hero background image/video */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-gray-warm to-brand-black" />
        {/* Decorative gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,0,0,0.06),transparent_60%)]" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-brand-black/60" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-site text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="gold-line-center mb-8" />
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            className="heading-xl text-brand-cream mb-6 max-w-4xl mx-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {headline}
          </motion.h1>
        </div>

        <motion.p
          className="body-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {subtext}
        </motion.p>

        {showCtas && (
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {primaryCtaText && primaryCtaHref && (
              <Link href={primaryCtaHref} className="btn-primary text-base px-10 py-5">
                {primaryCtaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Link href={secondaryCtaHref} className="btn-secondary text-base px-10 py-5">
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="label-accent text-[10px]">Scroll</span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-brand-gold/60"
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="1"
              />
              <motion.circle
                cx="8"
                cy="8"
                r="2"
                fill="currentColor"
                animate={{ cy: [8, 14, 8] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
    </section>
  );
}
