import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Qube — India's Physical AI Data Collection Company",
    template: "%s — Qube",
  },
  description:
    "Task-specific, consent-clean egocentric data from real manufacturing environments in India. Built for robotics and embodied AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-ink antialiased`}>
        <ScrollProgress />
        <CursorGlow />
        <Nav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
