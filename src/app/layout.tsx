import "./globals.css";
import "@fontsource/playfair-display";
import "@fontsource/lora";
import NewsTicker from "../components/layout/NewsTicker";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SmoothScrollProvider from "../components/layout/SmoothScrollProvider";
import { AudioPlayerProvider } from "./providers/AudioPlayerProvider";
import GlobalAudioPlayer from "../components/GlobalAudioPlayer";
import SocialSidebar from "../components/layout/SocialSidebar";

export const metadata = {
  title: "Pulak Sagar Ji Gurudev - Welcome to the Spiritual Journey",
  description: "Spreading the message of peace, truth, and compassion.",
  icons: {
    icon: [{ url: "/icon.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
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
          <main className="pt-[90px]">
            {children}
          </main>
          <Footer />
          <GlobalAudioPlayer />
        </AudioPlayerProvider>
        <SocialSidebar />
      </body>
    </html>
  );
}
