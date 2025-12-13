"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Invest() {
  const t = useTranslations("Invest");

  return (
    <section id="invest" className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1574359411659-15573a21bc2c?q=80&w=2070&auto=format&fit=crop"
          alt="Peinture Artistique"
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light tracking-wide uppercase mb-8"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
        >
          {t("description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg tracking-widest uppercase">
            {t("button")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
