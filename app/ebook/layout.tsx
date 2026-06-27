import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Career Guide — Made For This | Richie Dharma",
  description:
    "You coordinate, follow up, and hold the operation together — while someone else takes the credit. This free guide shows you the career path you didn't know existed. Download now.",
  openGraph: {
    title: "Free Career Guide — Made For This",
    description:
      "You were never behind. You were just never shown the door. Download the free guide by Richie Dharma.",
    siteName: "Made For This",
  },
};

export default function EbookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
