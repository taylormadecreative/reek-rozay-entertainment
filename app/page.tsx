"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import GalleryGrid from "@/components/GalleryGrid";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionWrapper, { StaggerChild, TextReveal } from "@/components/SectionWrapper";
import { featuredEvent, upcomingEvents } from "@/data/events";
import { galleryImages } from "@/data/gallery";

export default function HomePage() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <Hero
        headline="Dallas' Premier Haitian Kompa Experience"
        subtext="Live music. Dance workshops. Unforgettable vibes."
        fullHeight
        showCtas
        primaryCtaText="Get Tickets"
        primaryCtaHref="/events"
        secondaryCtaText="Upcoming Events"
        secondaryCtaHref="#events"
        showScrollIndicator
      />

      {/* ──────── NEXT EVENT SPOTLIGHT ──────── */}
      {featuredEvent && (
        <SectionWrapper
          id="next-event"
          className="section-padding bg-brand-black"
        >
          <div className="container-site">
            <TextReveal>
              <p className="label-accent text-center mb-4">Don&apos;t Miss This</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="heading-lg text-center text-brand-cream mb-12">
                Next Event
              </h2>
            </TextReveal>
            <EventCard event={featuredEvent} featured />
          </div>
        </SectionWrapper>
      )}

      {/* ──────── ABOUT PREVIEW ──────── */}
      <SectionWrapper className="section-padding bg-brand-cream">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="gold-line-center mb-8"
            />
            <TextReveal>
              <p className="label-accent !text-brand-gold-muted mb-4">Our Story</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="heading-md text-brand-black mb-8">
                More Than Events.{" "}
                <span className="text-brand-red">A Movement.</span>
              </h2>
            </TextReveal>
            <motion.p
              className="text-lg md:text-xl font-body leading-relaxed text-brand-gray mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Reek Rozay Entertainment is a premier concert and event curation
              team based in Dallas, Texas. Our mission is to unite the Haitian
              community and diverse cultural groups through the power of music,
              entertainment, and shared experiences. We create safe, inclusive,
              and vibrant spaces where people can connect, celebrate, and escape
              the stresses of everyday life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-body font-semibold text-sm uppercase tracking-[0.15em] text-brand-gold-muted hover:text-brand-red transition-colors duration-300 group"
              >
                Learn Our Story
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ──────── UPCOMING EVENTS GRID ──────── */}
      <SectionWrapper
        id="events"
        className="section-padding bg-brand-black"
      >
        <div className="container-site">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="label-accent mb-4">What&apos;s Coming</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="heading-lg text-brand-cream">Upcoming Events</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {upcomingEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/events" className="btn-secondary">
              See All Events
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ──────── GALLERY PREVIEW ──────── */}
      <SectionWrapper className="section-padding bg-brand-gray-warm">
        <div className="container-site">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="label-accent mb-4">The Experience</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="heading-lg text-brand-cream">
                Moments That Move Us
              </h2>
            </TextReveal>
          </div>

          <GalleryGrid images={galleryImages} maxImages={8} />

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/gallery" className="btn-secondary">
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ──────── NEWSLETTER ──────── */}
      <NewsletterSignup />

      {/* ──────── SOCIAL / CONNECT ──────── */}
      <SectionWrapper className="section-padding bg-brand-black">
        <div className="container-site">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="label-accent mb-4">Connect</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="heading-lg text-brand-cream">
                Follow the Movement
              </h2>
            </TextReveal>
          </div>

          {/* Instagram Feed Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <StaggerChild key={i} index={i}>
                <a
                  href="https://www.instagram.com/reek_rozay_ent/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden rounded-sm">
                    {/* REPLACE: Instagram feed images */}
                    <div className="placeholder-image absolute inset-0">
                      <span className="!text-[10px]">IG Post {i + 1}</span>
                    </div>
                    <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/20 transition-all duration-300 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                    </div>
                  </div>
                </a>
              </StaggerChild>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {[
              { href: "https://www.instagram.com/reek_rozay_ent/", label: "Instagram" },
              { href: "https://www.facebook.com/ReekRozayEnt/", label: "Facebook" },
              { href: "https://www.youtube.com/channel/UCDyNkoCbYFxqqAzAQAMGAWg", label: "YouTube" },
              { href: "https://www.tiktok.com/@reekrozay_entertainment", label: "TikTok" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-brand-cream/50 hover:text-brand-gold transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
