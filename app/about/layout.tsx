import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Reek Rozay Entertainment — Dallas' premier Haitian Kompa event brand. Our story, our team, and our mission to unite communities through music.",
  openGraph: {
    title: "About Reek Rozay Entertainment",
    description:
      "Learn about Dallas' premier Haitian Kompa event brand. Our story, our team, and our mission.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
