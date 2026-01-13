"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
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
    <section id="projects" className="py-20 md:py-32 bg-gray-50 text-black">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/portfolio/${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group block rounded-lg overflow-hidden transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 animate-bounce">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-2">
                  <h3 className={cn(
                    "text-xl font-semibold uppercase tracking-wide transition-colors duration-300 group-hover:text-amber-700",
                    playfair.className
                  )}>
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
                  {project.location}
                </p>

                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Decorative line that expands on hover */}
                <div className="mt-4 h-px bg-linear-to-r from-amber-600 to-transparent w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white uppercase tracking-wider text-sm font-medium rounded-lg hover:bg-amber-700 transition-all duration-300 group"
          >
            {t("viewMore")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
