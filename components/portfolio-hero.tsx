"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function PortfolioHero() {
  const t = useTranslations("Portfolio");

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/portfolio-hero.png"
        alt="Portfolio Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className={cn(
          "text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] uppercase text-white",
          playfair.className
        )}>
          {t("title")}
        </h1>
      </div>
    </section>
  );
}
