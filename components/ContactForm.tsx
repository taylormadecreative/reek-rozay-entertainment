"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    /* INTEGRATE: Connect to Squarespace form handler or Formspree */
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="label-accent block mb-2 text-[11px]">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Your full name"
            className="w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label className="label-accent block mb-2 text-[11px]">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="w-full"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="label-accent block mb-2 text-[11px]">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="(555) 123-4567"
            className="w-full"
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="label-accent block mb-2 text-[11px]">
            Inquiry Type
          </label>
          <select className="w-full" defaultValue="">
            <option value="" disabled>
              Select inquiry type
            </option>
            <option value="general">General Question</option>
            <option value="rsvp">Event RSVP</option>
            <option value="birthday">Birthday Celebration</option>
            <option value="private">Private Event Booking</option>
            <option value="vendor">Vendor / Partnership</option>
            <option value="media">Media / Press</option>
          </select>
        </div>

        {/* Event Interest */}
        <div>
          <label className="label-accent block mb-2 text-[11px]">
            Event Interest
          </label>
          <select className="w-full" defaultValue="">
            <option value="" disabled>
              Select event
            </option>
            <option value="konpa-groundz">Konpa Groundz</option>
            <option value="vin-danse">Vin Danse</option>
            <option value="perle-des-antilles">Perle des Antilles</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="label-accent block mb-2 text-[11px]">
            Preferred Date
          </label>
          <input type="date" className="w-full" />
        </div>

        {/* Guest Count */}
        <div>
          <label className="label-accent block mb-2 text-[11px]">
            Estimated Guest Count
          </label>
          <input
            type="number"
            min="1"
            placeholder="Number of guests"
            className="w-full"
          />
        </div>

        {/* How Did You Hear */}
        <div>
          <label className="label-accent block mb-2 text-[11px]">
            How Did You Hear About Us?
          </label>
          <select className="w-full" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="tiktok">TikTok</option>
            <option value="friend">Friend / Word of Mouth</option>
            <option value="google">Google Search</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="label-accent block mb-2 text-[11px]">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Tell us about your event, question, or inquiry..."
          className="w-full resize-none"
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        className="btn-primary w-full md:w-auto"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </form>
  );
}
