"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function NewsletterSignup() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="relative container-site section-padding text-center">
        <motion.p
          className="label-accent mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Don&apos;t Miss Out
        </motion.p>

        <h2 className="heading-lg text-gradient-gold mb-4">
          Stay in the Loop
        </h2>

        <p className="body-md max-w-lg mx-auto mb-10">
          Get first access to tickets, events, and exclusive invites.
        </p>

        {/* INTEGRATE: Connect to Mailchimp/Squarespace email */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 text-center sm:text-left"
          />
          <motion.button
            type="submit"
            className="btn-primary shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </motion.button>
        </form>

        <p className="font-body text-xs text-brand-cream/30 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </SectionWrapper>
  );
}
