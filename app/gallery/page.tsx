"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import GalleryGrid from "@/components/GalleryGrid";
import SectionWrapper, { TextReveal } from "@/components/SectionWrapper";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <Hero
        headline="The Gallery"
        subtext="Every event tells a story. Here's what you missed."
      />

      {/* ──────── PHOTO GALLERY ──────── */}
      <SectionWrapper className="section-padding bg-brand-black">
        <div className="container-site">
          <GalleryGrid images={galleryImages} showFilters />
        </div>
      </SectionWrapper>

      {/* ──────── VIDEO SECTION ──────── */}
      <SectionWrapper className="section-padding-sm bg-brand-gray-warm">
        <div className="container-site">
          <div className="text-center mb-12">
            <TextReveal>
              <p className="label-accent mb-4">Experience It</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="heading-md text-brand-cream">Watch the Vibes</h2>
            </TextReveal>
          </div>

          {/* REPLACE: Embed client YouTube videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Konpa Groundz Recap",
              "Vin Danse Highlights",
              "Perle des Antilles Recap",
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="relative aspect-video rounded-sm overflow-hidden group cursor-pointer">
                  <div className="placeholder-image absolute inset-0">
                    <span>{title}</span>
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-black/30 group-hover:bg-brand-black/10 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/90 group-hover:bg-brand-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="var(--color-black)"
                      >
                        <polygon points="8,5 20,12 8,19" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-body text-sm text-brand-cream/60 mt-3">
                  {title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ──────── CTA ──────── */}
      <SectionWrapper className="section-padding bg-brand-black">
        <div className="container-site text-center">
          <div className="max-w-xl mx-auto">
            <TextReveal>
              <h2 className="heading-md text-brand-cream mb-6">
                Want to be part of the next one?
              </h2>
            </TextReveal>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/events" className="btn-primary">
                See Upcoming Events
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
