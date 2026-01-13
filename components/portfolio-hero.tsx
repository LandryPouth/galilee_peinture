"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

import { motion } from "motion/react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function PortfolioHero() {
  const t = useTranslations("Portfolio");

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-black">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <Image
          src="/images/portfolio-hero.png"
          alt="Portfolio Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
      </motion.div>

      {/* Subtle Editorial Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="container relative z-10 h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-amber-200 text-xs md:text-sm uppercase tracking-[0.4em]"
          >
            Exposition
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-light tracking-widest uppercase text-white",
              playfair.className
            )}
          >
            {t("title")}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
