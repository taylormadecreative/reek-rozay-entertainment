"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/reek_rozay_ent/",
    label: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/ReekRozayEnt/",
    label: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/channel/UCDyNkoCbYFxqqAzAQAMGAWg",
    label: "YouTube",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@reekrozay_entertainment",
    label: "TikTok",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.27 8.27 0 005.58 2.17V11.7a4.85 4.85 0 01-3.77-1.85V6.69h3.77z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">
      {/* Main Footer */}
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Reek Rozay Entertainment"
              width={180}
              height={56}
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="body-md text-sm !text-brand-cream/50 max-w-xs">
              Dallas&apos; premier Haitian Kompa event and entertainment brand.
              Uniting communities through music.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-accent mb-6">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-brand-cream/50 hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-accent mb-6">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-brand-cream/50">
              <li>Dallas, Texas</li>
              <li>
                <a
                  href="tel:4695093131"
                  className="hover:text-brand-gold transition-colors"
                >
                  (469) 509-3131
                </a>
              </li>
              <li>
                <a
                  href="mailto:Reekrozay.cvc@gmail.com"
                  className="hover:text-brand-gold transition-colors"
                >
                  Reekrozay.cvc@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="label-accent mb-6">Stay Updated</h4>
            <p className="font-body text-sm text-brand-cream/50 mb-4">
              First access to tickets & exclusive invites.
            </p>
            {/* INTEGRATE: Connect to Mailchimp/Squarespace email */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-0"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 !rounded-r-none !border-r-0 text-sm !py-2.5"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-brand-gold text-brand-black font-body font-semibold text-xs uppercase tracking-wider
                  rounded-r-sm hover:bg-brand-gold-light transition-colors duration-300 shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Bar */}
      <div className="border-t border-white/5">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-brand-cream/30 hover:text-brand-gold transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-center sm:text-right">
            <p className="font-body text-xs text-brand-cream/30">
              &copy; 2026 Reek Rozay Entertainment. All Rights Reserved.
            </p>
            <p className="font-body text-[10px] text-brand-cream/20 mt-1">
              Website by Taylormade Creative
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
