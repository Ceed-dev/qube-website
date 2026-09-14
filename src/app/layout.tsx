import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Qube — India's Physical AI Data Collection Company",
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
      <body className={`${inter.variable} font-sans bg-bg text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
