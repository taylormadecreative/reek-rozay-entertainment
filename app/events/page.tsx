"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import SectionWrapper, { StaggerChild, TextReveal } from "@/components/SectionWrapper";
import {
  featuredEvent,
  upcomingEvents,
  getEventsByYear,
  pastYears,
} from "@/data/events";

export default function EventsPage() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <Hero
        headline="Our Events"
        subtext="From intimate dance workshops to unforgettable nights — find your next experience."
      />

      {/* ──────── FEATURED EVENT ──────── */}
      {featuredEvent && (
        <SectionWrapper className="section-padding bg-brand-black">
          <div className="container-site">
            <EventCard event={featuredEvent} featured />

            {/* Extra CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <a
                href="tel:4695093131"
                className="font-body text-sm text-brand-cream/60 hover:text-brand-gold transition-colors"
              >
                Reserve a Section: <span className="text-brand-gold">(469) 509-3131</span>
              </a>
              <span className="hidden sm:block w-[1px] h-4 bg-white/10" />
              <a
                href="/contact"
                className="font-body text-sm text-brand-cream/60 hover:text-brand-gold transition-colors"
              >
                Birthday / Private Event Inquiry
              </a>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ──────── UPCOMING EVENTS ──────── */}
      <SectionWrapper className="section-padding bg-brand-gray-warm">
        <div className="container-site">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="label-accent mb-4">Mark Your Calendar</p>
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
        </div>
      </SectionWrapper>

      {/* ──────── PAST EVENTS TIMELINE ──────── */}
      <SectionWrapper className="section-padding bg-brand-black">
        <div className="container-site">
          <div className="text-center mb-20">
            <TextReveal>
              <p className="label-accent mb-4">Our Track Record</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="heading-lg text-brand-cream">Past Events</h2>
            </TextReveal>
          </div>

          {pastYears.map((year) => {
            const yearEvents = getEventsByYear(year);
            if (yearEvents.length === 0) return null;

            return (
              <div key={year} className="mb-20 last:mb-0">
                {/* Year Header */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-6 mb-10"
                >
                  <h3 className="font-display text-5xl md:text-6xl text-gradient-gold">
                    {year}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-brand-gold/30 to-transparent" />
                </motion.div>

                {/* Event Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {yearEvents.map((event, i) => (
                    <StaggerChild key={event.id} index={i}>
                      <div className="group">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-3">
                          {/* REPLACE: Client event flyer */}
                          <div className="placeholder-image absolute inset-0">
                            <span className="!text-[10px]">{event.name}</span>
                          </div>
                          <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/10 transition-all duration-300" />
                        </div>
                        <p className="font-display text-sm text-brand-cream group-hover:text-brand-gold transition-colors line-clamp-2">
                          {event.name}
                        </p>
                        <p className="font-body text-xs text-brand-cream/40 mt-1">
                          {event.dateShort}
                        </p>
                      </div>
                    </StaggerChild>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
