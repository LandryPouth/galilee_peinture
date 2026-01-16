"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Contact() {
  const t = useTranslations("ContactPage");

  return (
    <div className="min-h-screen bg-stone-50 text-black">
      {/* Editorial Hero - Dark background for Header visibility */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Texture"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container relative z-10 text-center space-y-4 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-amber-100/80"
          >
            {t("hero_subtitle")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-light tracking-wide",
              playfair.className
            )}
          >
            {t("hero_title")}
          </motion.h1>
        </div>
      </section>

      <div className="container px-4 md:px-8 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

          {/* Left Column - Contact Info (Art Object Labels style) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/3 space-y-16"
          >
            <div>
              <h3 className={cn("text-xl mb-8 italic text-stone-800", playfair.className)}>
                {t("info_title")}
              </h3>
              <div className="space-y-8 font-light text-lg">
                <div className="group">
                  <span className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">{t("info.email")}</span>
                  <a href="mailto:contact@galileepeinture.com" className="hover:text-amber-700 transition-colors cursor-pointer">
                    contact@galileepeinture.com
                  </a>
                </div>
                <div className="group">
                  <span className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">{t("info.phone")}</span>
                  <a href="tel:+237699999999" className="hover:text-amber-700 transition-colors cursor-pointer">
                    +237 6 99 99 99 99
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">{t("info.address")}</span>
                  <p className="text-stone-600" dangerouslySetInnerHTML={{ __html: t("info.location") }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:flex-1"
          >
            <h3 className={cn("text-xl mb-12 italic text-stone-800", playfair.className)}>
              {t("form_title")}
            </h3>

            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400">
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-stone-300 py-3 focus:border-amber-700 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-stone-300 py-3 focus:border-amber-700 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400">
                  {t("form.phone")}
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:border-amber-700 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400">
                  {t("form.message")}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-stone-300 py-3 focus:border-amber-700 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-8">
                <Button
                  className="bg-black text-white px-10 py-6 text-xs uppercase tracking-[0.2em] hover:bg-amber-700 transition-colors duration-300 rounded-none w-full md:w-auto cursor-pointer"
                >
                  {t("form.submit")}
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
