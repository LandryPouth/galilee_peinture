"use client";

import { motion } from "motion/react";
import { Brush, PaintBucket, Palette, Layers } from "lucide-react";
import { useTranslations } from "next-intl";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Expertise() {
  const t = useTranslations("Expertise");

  const expertises = [
    {
      icon: Brush,
      title: t("items.promotion.title"),
      description: t("items.promotion.description"),
    },
    {
      icon: Layers,
      title: t("items.gestion.title"),
      description: t("items.gestion.description"),
    },
    {
      icon: PaintBucket,
      title: t("items.architecture.title"),
      description: t("items.architecture.description"),
    },
    {
      icon: Palette,
      title: t("items.conseil.title"),
      description: t("items.conseil.description"),
    },
  ];

  return (
    <section id="expertise" className="py-20 md:py-32 bg-white text-black">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={cn(
            "text-3xl md:text-4xl font-light tracking-wide uppercase mb-4",
            playfair.className
          )}>
            {t("title")}
          </h2>
          <div className="w-20 h-px bg-black mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
