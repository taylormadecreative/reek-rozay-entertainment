"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import TeamMember from "@/components/TeamMember";
import SectionWrapper, { TextReveal, StaggerChild } from "@/components/SectionWrapper";
import { team } from "@/data/team";

export default function AboutPage() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <Hero
        headline="Our Story"
        subtext="Born from a promise. Built with passion. Fueled by community."
      />

      {/* ──────── OUR STORY ──────── */}
      <SectionWrapper className="section-padding bg-brand-black">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                {/* REPLACE: Client brand/team photo */}
                <div className="placeholder-image absolute inset-0">
                  <span>Brand Photo</span>
                </div>
                {/* Gold accent border */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-brand-gold/20 rounded-sm pointer-events-none" />
              </div>
            </motion.div>

            {/* Text Side */}
            <div>
              <div className="gold-line mb-8" />
              <TextReveal>
                <p className="label-accent mb-4">Who We Are</p>
              </TextReveal>
              <TextReveal delay={0.1}>
                <h2 className="heading-lg text-brand-cream mb-8">
                  Bringing Dallas{" "}
                  <span className="text-gradient-gold">Together</span>
                </h2>
              </TextReveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <p className="body-lg">
                  Reek Rozay Entertainment is a premier event promotion company
                  based in Dallas, Texas, dedicated to bringing top-tier live
                  entertainment to the Dallas/Fort Worth metroplex and beyond.
                </p>
                <p className="body-md">
                  Our mission is to showcase the vibrant sounds of Konpa and
                  highlight Haitian artists and entertainers, creating
                  unforgettable experiences for the community. We&apos;re all about
                  bringing people together&mdash;whether you&apos;re part of the
                  Haitian community or just love good music and great vibes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ──────── CEO'S STORY ──────── */}
      <SectionWrapper className="section-padding bg-brand-gray-warm">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="gold-line-center mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <TextReveal>
              <p className="label-accent mb-4">The Beginning</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="heading-md text-brand-cream mb-10">
                A Promise Kept
              </h2>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              {/* Decorative quote marks */}
              <div className="absolute -top-6 left-0 md:-left-8 text-brand-gold/20 font-display text-8xl leading-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10 space-y-6 text-left md:text-center">
                <p className="font-body text-lg md:text-xl leading-relaxed text-brand-cream/80 italic">
                  My journey in the entertainment world started with my cousin
                  Viergina. She was the one who told me that there were lots of
                  Haitians in Dallas and that I should create events in the city
                  to showcase and share the Haitian culture with the community.
                </p>
                <p className="font-body text-lg md:text-xl leading-relaxed text-brand-cream/80 italic">
                  A week after having that conversation with her I was driving
                  back to Dallas from Florida and found out about her untimely
                  passing. After that, all I could think about was what my cousin
                  told me about showcasing Haitian culture in Dallas.
                </p>
                <p className="font-body text-lg md:text-xl leading-relaxed text-brand-cream/80 italic">
                  From that day on I dedicated my life to creating memorable
                  experiences and sharing my passion of entertainment with my
                  community.
                </p>
                <footer className="mt-8 not-italic">
                  <div className="gold-line-center mb-4" />
                  <cite className="font-display text-xl text-brand-gold block">
                    Rico P.
                  </cite>
                  <span className="label-accent text-[11px]">
                    Founder & CEO
                  </span>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ──────── THE TEAM ──────── */}
      <SectionWrapper className="section-padding bg-brand-black">
        <div className="container-site">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="label-accent mb-4">The People</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="heading-lg text-brand-cream">Meet the Team</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <TeamMember key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ──────── PRESS / PUBLICATIONS ──────── */}
      <SectionWrapper className="section-padding-sm bg-brand-gray-warm">
        <div className="container-site text-center">
          <TextReveal>
            <p className="label-accent mb-4">In the Press</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="heading-md text-brand-cream mb-8">
              As Seen In
            </h2>
          </TextReveal>

          <StaggerChild index={0}>
            <div className="inline-block bg-brand-black rounded-sm border border-white/5 hover:border-brand-gold/20 transition-all duration-500 p-8 md:p-10">
              {/* REPLACE: VoyageDallas article link/image */}
              <div className="placeholder-image w-64 h-20 rounded-sm mx-auto mb-4">
                <span className="!text-xs">VoyageDallas Logo</span>
              </div>
              <p className="font-display text-lg text-brand-cream">
                VoyageDallas
              </p>
              <p className="font-body text-sm text-brand-cream/50 mt-1">
                Featured Artist & Entrepreneur
              </p>
            </div>
          </StaggerChild>
        </div>
      </SectionWrapper>

      {/* ──────── CTA ──────── */}
      <SectionWrapper className="section-padding bg-brand-black">
        <div className="container-site text-center">
          <TextReveal>
            <h2 className="heading-md text-brand-cream mb-4">
              Ready to Experience It?
            </h2>
          </TextReveal>
          <motion.p
            className="body-md max-w-lg mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join us at our next event and be part of the movement.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/events" className="btn-primary">
              See Upcoming Events
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
