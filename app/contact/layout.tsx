import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Reek Rozay Entertainment | Dallas Haitian Events",
  description:
    "Contact Reek Rozay Entertainment for bookings, partnerships, private events, and inquiries. Based in Dallas, Texas.",
  openGraph: {
    title: "Contact Reek Rozay Entertainment | Dallas Haitian Events",
    description:
      "Contact Reek Rozay Entertainment for bookings, partnerships, private events, and inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
