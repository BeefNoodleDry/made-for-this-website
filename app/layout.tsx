import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Made For This — Richie Dharma",
  description:
    "Discover HubSpot Project Management — the high-demand, high-income remote career path built for ambitious Southeast Asians. A course by Richie Dharma.",
  openGraph: {
    title: "Made For This — Richie Dharma",
    description:
      "You were always capable. Now it's time to be seen. Learn HubSpot Project Management from the Head of HubSpot at a Diamond agency in Australia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
