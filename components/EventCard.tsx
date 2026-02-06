"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/data/events";
import { BASE_PATH } from "@/data/constants";

function isRealImage(src: string) {
  return !src.includes("placeholder");
}

interface EventCardProps {
  event: Event;
  index?: number;
  featured?: boolean;
}

export default function EventCard({
  event,
  index = 0,
  featured = false,
}: EventCardProps) {
  if (featured) {
    return <FeaturedEventCard event={event} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group"
    >
      <div className="relative bg-brand-gray-warm rounded-sm overflow-hidden border border-white/5 hover:border-brand-gold/20 transition-all duration-500">
        {/* Flyer Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {isRealImage(event.flyerImage) ? (
            <Image
              src={`${BASE_PATH}${event.flyerImage}`}
              alt={event.flyerAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            /* REPLACE: Client event flyer */
            <div className="placeholder-image absolute inset-0">
              <span>{event.flyerAlt}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
          <motion.div
            className="absolute inset-0 bg-brand-gold/5"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <p className="label-accent mb-2">{event.dateShort}</p>
          <h3 className="font-display text-xl md:text-2xl text-brand-cream mb-2 group-hover:text-brand-gold transition-colors duration-300">
            {event.name}
          </h3>
          {event.tagline && (
            <p className="font-body text-sm text-brand-cream/50 italic mb-3">
              {event.tagline}
            </p>
          )}
          <p className="font-body text-sm text-brand-cream/60 mb-4">
            {event.venue}
            {event.address && ` — ${event.address}`}
          </p>
          <Link
            href={event.ticketUrl || "/events"}
            className="btn-primary !py-2.5 !px-6 !text-xs w-full text-center"
          >
            {event.status === "upcoming" ? "Get Tickets" : "View Details"}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedEventCard({ event }: { event: Event }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative bg-brand-gray-warm rounded-sm overflow-hidden border border-brand-gold/20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Flyer */}
          <div className="relative aspect-[3/4] lg:aspect-auto min-h-[400px]">
            {isRealImage(event.flyerImage) ? (
              <Image
                src={`${BASE_PATH}${event.flyerImage}`}
                alt={event.flyerAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              /* REPLACE: Client event flyer */
              <div className="placeholder-image absolute inset-0">
                <span>{event.flyerAlt}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-black/30 hidden lg:block" />
          </div>

          {/* Details */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="gold-line mb-6" />
            <p className="label-accent mb-4">Next Event</p>
            <h2 className="heading-lg text-brand-cream mb-3">{event.name}</h2>
            {event.tagline && (
              <p className="font-display text-lg text-brand-gold/80 italic mb-6">
                {event.tagline}
              </p>
            )}

            <div className="space-y-3 mb-8">
              <DetailRow icon="calendar" text={event.date} />
              {event.time && <DetailRow icon="clock" text={event.time} />}
              <DetailRow
                icon="pin"
                text={`${event.venue}${event.address ? `, ${event.address}` : ""}`}
              />
              {event.theme && (
                <DetailRow icon="palette" text={`Theme: ${event.theme}`} />
              )}
              {event.ageRequirement && (
                <DetailRow icon="shield" text={event.ageRequirement} />
              )}
            </div>

            {event.details && (
              <ul className="space-y-2 mb-8">
                {event.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-body text-sm text-brand-cream/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            <p className="font-body text-sm text-brand-cream/60 mb-6">
              {event.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={event.ticketUrl || "/events"}
                className="btn-primary text-center"
              >
                Get Your Tickets
              </Link>
              <a
                href="tel:4695093131"
                className="btn-secondary text-center !text-xs"
              >
                Sections & Tables: (469) 509-3131
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DetailRow({ icon, text }: { icon: string; text: string }) {
  const icons: Record<string, React.ReactNode> = {
    calendar: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
      </svg>
    ),
    clock: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    pin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    palette: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="8" r="1.5" fill="currentColor" />
        <circle cx="8" cy="12" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    shield: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-brand-gold shrink-0">{icons[icon]}</span>
      <span className="font-body text-sm text-brand-cream/80">{text}</span>
    </div>
  );
}
