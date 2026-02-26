import "./globals.css";
import "@fontsource/playfair-display";
import "@fontsource/lora";
import type { Metadata } from "next";

import NewsTicker from "../components/layout/NewsTicker";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SmoothScrollProvider from "../components/layout/SmoothScrollProvider";
import { AudioPlayerProvider } from "./providers/AudioPlayerProvider";
import GlobalAudioPlayer from "../components/GlobalAudioPlayer";
import SocialSidebar from "../components/layout/SocialSidebar";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default:
      "Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev | Official Website",
    template: "%s | Pulak Sagar Ji Gurudev",
  },

  description:
    "Official website of Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev. Explore Pravachan, Bhajan, Achievements, Spiritual Events, Jinsharnam Media, and the divine teachings of Jain Dharma.",

  keywords: [
    "Pulak Sagar",
    "Pulak Sagar Ji",
    "Rashtrasant Pulak Sagar",
    "Manogyacharya Pulak Sagar",
    "Jain Acharya Pulak Sagar",
    "Pulak Sagar Pravachan",
    "Jinsharnam Media",
    "Jain Dharma Pravachan",
    "Pulak Sagar Delhi",
  ],

  authors: [{ name: "Pulak Sagar Ji Gurudev" }],
  creator: "Pulak Sagar Ji Gurudev",
  publisher: "Pulak Sagar Ji Gurudev",

  openGraph: {
    title:
      "Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev",
    description:
      "Official spiritual website of Rashtrasant Pulak Sagar Ji. Discover Pravachan, Bhajan, Achievements and Divine Teachings.",
    url: "https://yourdomain.com",
    siteName: "Pulak Sagar Ji Gurudev",
    images: [
      {
        url: "/images/img8.jpeg",
        width: 800,
        height: 600,
        alt: "Pulak Sagar Ji Gurudev",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Rashtrasant Manogyacharya Shree Pulak Sagar Ji Gurudev",
    description:
      "Official spiritual website of Pulak Sagar Ji. Pravachan, Bhajan, Events & Teachings.",
    images: ["/images/img8.jpeg"],
  },

  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="relative overflow-x-hidden font-sans"
        style={{ fontFamily: "Calibri, sans-serif" }}
      >
        {/* Golden Aura Background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[var(--temple-cream)] via-[var(--saffron-light)] to-[var(--saffron-soft)]" />

        {/* Radial Glow */}
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--sacred-gold)] opacity-10 blur-[180px] rounded-full -z-10" />

        <AudioPlayerProvider>
          <Navbar />
          <NewsTicker />
          <main className="pt-[90px]">{children}</main>
          <Footer />
          <GlobalAudioPlayer />
        </AudioPlayerProvider>

        <SocialSidebar />
      </body>
    </html>
  );
}