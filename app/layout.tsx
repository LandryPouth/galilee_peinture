import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galilée Peinture Developer",
  description: "Peinture haut de gamme au Cameroun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased [&_.container]:max-w-7xl [&_.container]:mx-auto [&_.container]:px-4 [&_.container]:md:px-8`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
