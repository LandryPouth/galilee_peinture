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
    <section className="py-20 md:py-32 bg-white text-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className={cn(
              "text-3xl md:text-4xl font-light mb-8 tracking-wide uppercase",
              playfair.className
            )}>
              {t("title")} <br />
              <span className="font-bold">{t("subtitle")}</span>
            </h2>
            <div className="w-20 h-px bg-black mb-8" />
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              {t("description1")}
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("description2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 relative h-[400px] w-full md:h-[500px]"
          >
            <div className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=2070&auto=format&fit=crop"
                alt="Peintre au travail"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
