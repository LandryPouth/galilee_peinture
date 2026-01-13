"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Projects() {
  const t = useTranslations("Projects");
  const tPortfolio = useTranslations("Portfolio");

  const projects = projectsData.slice(0, 3).map((project) => ({
    id: project.id,
    title: t(project.titleKey as any),
    location: t(project.locationKey as any),
    image: project.image,
    description: t(project.descriptionKey as any),
    status: tPortfolio(project.statusKey as any),
    type: tPortfolio(project.typeKey as any),
  }));

  return (
    <section id="projects" className="py-24 md:py-40 bg-white text-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Minimal title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className={cn(
            "text-4xl md:text-6xl font-light tracking-tight",
            playfair.className
          )}>
            {t("title")}
          </h2>
        </motion.div>

        {/* Minimal grid - large images with reveal effect */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/portfolio/${project.id}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block border-t border-stone-200 py-6 md:py-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Number */}
                <span className="text-stone-300 text-sm font-mono">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className={cn(
                  "flex-1 text-xl md:text-2xl font-light group-hover:text-amber-700 transition-colors duration-300",
                  playfair.className
                )}>
                  {project.title}
                </h3>

                {/* Location - hidden on mobile */}
                <span className="hidden md:block text-sm text-stone-400 w-40">
                  {project.location}
                </span>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-stone-400 group-hover:text-black transition-colors">
                  <span className="text-xs uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Voir
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Image reveal on hover */}
              <div className="h-0 group-hover:h-64 md:group-hover:h-80 overflow-hidden transition-all duration-500 ease-out">
                <div className="relative h-64 md:h-80 mt-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.a>
          ))}

          {/* Bottom border */}
          <div className="border-t border-stone-200" />
        </div>

        {/* Minimal View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-3"
          >
            <span className={cn(
              "text-lg md:text-xl font-light group-hover:text-amber-700 transition-colors",
              playfair.className
            )}>
              {t("viewMore")}
            </span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
