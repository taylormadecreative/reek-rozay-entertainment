import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Gallery",
  description:
    "Browse photos and videos from Reek Rozay Entertainment events. Konpa Groundz, Vin Danse, Perle des Antilles and more.",
  openGraph: {
    title: "Event Gallery | Reek Rozay Entertainment",
    description:
      "Browse photos and videos from Reek Rozay Entertainment events in Dallas, Texas.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
