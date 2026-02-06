import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Kompa Events in Dallas",
  description:
    "Find upcoming Haitian Kompa events, dance workshops, and live entertainment in Dallas, Texas. Get tickets to Konpa Groundz, Vin Danse, and more.",
  openGraph: {
    title: "Upcoming Kompa Events in Dallas | Reek Rozay Entertainment",
    description:
      "Find upcoming Haitian Kompa events, dance workshops, and live entertainment in Dallas, Texas.",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
