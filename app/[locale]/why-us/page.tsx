"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function WhyUs() {
  const t = useTranslations("WhyUs");

  return (
    <>
      {/* Hero Section - Editorial Cover */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop"
              alt="Artistic Wall Detail"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </div>

        <div className="container relative z-10 text-center space-y-6 md:space-y-8 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-amber-100/80"
          >
            {t("hero_subtitle")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-light tracking-wide",
              playfair.className
            )}
          >
            {t("hero_title")}
          </motion.h1>
        </div>
      </section>

      {/* Manifesto Section - Text Heavy & Editorial */}
      <section className="py-24 md:py-40 bg-white text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-12 md:space-y-16"
          >
            <h2 className={cn(
              "text-3xl md:text-4xl italic font-light text-stone-800",
              playfair.className
            )}>
              "{t("manifesto_title")}"
            </h2>
            <div className="space-y-8 text-lg md:text-2xl font-light leading-relaxed text-stone-600">
              <p>{t("manifesto_text1")}</p>
              <p>{t("manifesto_text2")}</p>
            </div>
          </motion.div>
        </div>

        {/* Ambience Grid - Added to fill visual space */}
        <div className="container mt-24 md:mt-32 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-4/5 md:aspect-3/4 overflow-hidden bg-stone-100" // Taller aspect
            >
              <Image
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                alt="Detail Texture"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
              />
            </motion.div>
            <div className="space-y-8 md:space-y-12 pt-0 md:pt-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden bg-stone-100"
              >
                <Image
                  src="https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=2070&auto=format&fit=crop"
                  alt="Interior Harmony"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-base font-light italic text-stone-400 max-w-xs ml-auto"
              >
                "La couleur est la touche finale qui révèle l'architecture."
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Minimalist Grid */}
      <section className="py-24 md:py-32 bg-stone-50 text-black">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {["precision", "innovation", "commitment"].map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-center md:text-left border-t border-stone-200 pt-8"
              >
                <h3 className={cn(
                  "text-2xl md:text-3xl font-light",
                  playfair.className
                )}>
                  {t(`values.${key}.title`)}
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  {t(`values.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break / Team or Process - Parallax Effect */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
          alt="Team at work"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
        />
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-32 md:py-48 bg-stone-900 text-white text-center">
        <div className="container space-y-12 px-4">
          <h2 className={cn(
            "text-4xl md:text-6xl font-light tracking-tight",
            playfair.className
          )}>
            {t("cta_title")}
          </h2>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black px-12 py-8 text-sm md:text-base tracking-[0.2em] uppercase rounded-none transition-all duration-500 cursor-pointer"
          >
            <a href="/contact">{t("cta_button")}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
