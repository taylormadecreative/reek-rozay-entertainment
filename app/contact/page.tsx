"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import SectionWrapper, { StaggerChild, TextReveal } from "@/components/SectionWrapper";

const contactCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Location",
    detail: "Dallas, Texas",
    sub: "DFW Metroplex",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: "Phone",
    detail: "(469) 509-3131",
    sub: "Call or Text",
    href: "tel:4695093131",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Email",
    detail: "Reekrozay.cvc@gmail.com",
    sub: "We reply within 24hrs",
    href: "mailto:Reekrozay.cvc@gmail.com",
  },
];

const socialLinks = [
  { href: "https://www.instagram.com/reek_rozay_ent/", label: "Instagram" },
  { href: "https://www.facebook.com/ReekRozayEnt/", label: "Facebook" },
  { href: "https://www.youtube.com/channel/UCDyNkoCbYFxqqAzAQAMGAWg", label: "YouTube" },
  { href: "https://www.tiktok.com/@reekrozay_entertainment", label: "TikTok" },
];

export default function ContactPage() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <Hero
        headline="Get In Touch"
        subtext="Bookings, partnerships, questions — we want to hear from you."
      />

      {/* ──────── CONTACT FORM ──────── */}
      <SectionWrapper className="section-padding bg-brand-black">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <TextReveal>
                <p className="label-accent mb-4">Reach Out</p>
              </TextReveal>
              <TextReveal delay={0.1}>
                <h2 className="heading-md text-brand-cream">
                  Let&apos;s Make It Happen
                </h2>
              </TextReveal>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-brand-gray-warm rounded-sm border border-white/5 p-6 md:p-10 lg:p-12"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ──────── CONTACT INFO CARDS ──────── */}
      <SectionWrapper className="section-padding-sm bg-brand-gray-warm">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => (
              <StaggerChild key={card.title} index={i}>
                <div className="bg-brand-black rounded-sm border border-white/5 p-8 text-center hover:border-brand-gold/20 transition-all duration-500 group">
                  <div className="text-brand-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-display text-lg text-brand-cream mb-2">
                    {card.title}
                  </h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="font-body text-brand-cream/80 hover:text-brand-gold transition-colors block"
                    >
                      {card.detail}
                    </a>
                  ) : (
                    <p className="font-body text-brand-cream/80">
                      {card.detail}
                    </p>
                  )}
                  <p className="font-body text-xs text-brand-cream/40 mt-1">
                    {card.sub}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ──────── SOCIAL LINKS ──────── */}
      <SectionWrapper className="section-padding-sm bg-brand-black">
        <div className="container-site text-center">
          <TextReveal>
            <h2 className="heading-md text-brand-cream mb-8">Follow Us</h2>
          </TextReveal>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !px-6 !py-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
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
