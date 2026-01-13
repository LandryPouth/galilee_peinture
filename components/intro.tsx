"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Intro() {
  const t = useTranslations("Intro");

  return (
    <section className="py-24 md:py-40 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32">

          {/* Text Content - Sticky vibe on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 md:sticky md:top-32"
          >
            <h2 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-12 tracking-wide",
              playfair.className
            )}>
              {t("title")} <br />
              <span className="italic block mt-2 text-stone-400">{t("subtitle")}</span>
            </h2>

            <div className="space-y-8 max-w-xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl font-light leading-relaxed text-stone-800"
              >
                {t("description1")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-stone-500 font-light leading-relaxed"
              >
                {t("description2")}
              </motion.p>
            </div>
          </motion.div>

          {/* Image - Editorial Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-3/4 md:aspect-4/5 w-full max-w-md ml-auto overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=2070&auto=format&fit=crop"
                alt="Peintre au travail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              {/* Subtle grain/overlay if needed, kept clean for now */}
            </div>
            <div className="mt-4 text-right">
              <span className={cn(
                "text-xs uppercase tracking-[0.2em] text-stone-400 block",
                playfair.className
              )}>
                Savoir-faire
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
