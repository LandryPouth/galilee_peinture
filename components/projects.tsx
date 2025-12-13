"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Projects() {
  const t = useTranslations("Projects");

  const projects = [
    {
      id: 1,
      title: t("items.villa_bonapriso.title"),
      location: t("items.villa_bonapriso.location"),
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop",
      description: t("items.villa_bonapriso.description"),
    },
    {
      id: 2,
      title: t("items.residence_bastos.title"),
      location: t("items.residence_bastos.location"),
      image: "https://images.unsplash.com/photo-1464195157367-2d76e721c215?q=80&w=2070&auto=format&fit=crop",
      description: t("items.residence_bastos.description"),
    },
    {
      id: 3,
      title: t("items.jardins_kribi.title"),
      location: t("items.jardins_kribi.location"),
      image: "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=2076&auto=format&fit=crop",
      description: t("items.jardins_kribi.description"),
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase mb-4">
            {t("title")}
          </h2>
          <div className="w-20 h-px bg-black mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="group cursor-pointer overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-amber-50 hover:to-gray-50">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 uppercase tracking-wide">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">{project.location}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <Button variant="outline" className="w-full group/btn hover:bg-black hover:text-white transition-colors border-gray-300">
                    {t("discover")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
