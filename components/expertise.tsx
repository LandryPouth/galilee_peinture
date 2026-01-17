"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Expertise() {
  const t = useTranslations("Expertise");

  const expertises = [
    {
      id: "01",
      title: t("items.painting.title"),
      description: t("items.painting.description"),
    },
    {
      id: "02",
      title: t("items.humidity.title"),
      description: t("items.humidity.description"),
    },
    {
      id: "03",
      title: t("items.furniture.title"),
      description: t("items.furniture.description"),
    },
    {
      id: "04",
      title: t("items.smoothing.title"),
      description: t("items.smoothing.description"),
    },
  ];

  return (
    <section id="expertise" className="py-20 md:py-32 bg-stone-50 text-black">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          {/* Main Title -Sticky-like */}
          <div className="md:w-1/3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={cn(
                "text-4xl md:text-5xl font-light tracking-wide leading-tight sticky top-32",
                playfair.className
              )}
            >
              {t("title")}
              <span className="block mt-4 text-xs font-sans tracking-[0.2em] text-stone-400 uppercase">
                Services Exclusifs
              </span>
            </motion.h2>
          </div>

          {/* List of Expertises */}
          <div className="md:w-2/3 grid grid-cols-1 gap-12 md:gap-20">
            {expertises.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group border-t border-stone-200 pt-8 md:pt-12"
              >
                <span className="text-xs font-mono text-stone-400 mb-4 block">
                  {item.id}
                </span>
                <h3 className={cn(
                  "text-2xl md:text-3xl font-light mb-4 group-hover:text-amber-700 transition-colors duration-300",
                  playfair.className
                )}>
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed font-light text-lg md:w-3/4">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
