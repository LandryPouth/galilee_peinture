"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Invest() {
  const t = useTranslations("Invest");


  return (
    <section id="invest" className="relative py-32 md:py-48 bg-black text-white overflow-hidden">
      {/* Background Image Overlay with stronger contrast */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2070&auto=format&fit=crop"
          alt="Peinture Artistique"
          fill
          className="object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/60 mb-6 block">
              Opportunité
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight",
              playfair.className
            )}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-2xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black px-12 py-8 text-sm md:text-base tracking-[0.2em] uppercase rounded-none transition-all duration-500"
            >
              {t("button")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
