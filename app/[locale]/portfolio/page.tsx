"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { PortfolioHero } from "@/components/portfolio-hero";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Portfolio() {
  const t = useTranslations("Projects");
  const tPortfolio = useTranslations("Portfolio");

  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const allProjects = projectsData.map((project) => ({
    id: project.id,
    title: t(project.titleKey),
    location: t(project.locationKey),
    image: project.image,
    description: t(project.descriptionKey),
    status: tPortfolio(project.statusKey),
    type: tPortfolio(project.typeKey),
    statusKey: project.statusKey.split('.')[1], // Extract 'completed', 'in_construction', etc.
    typeKey: project.typeKey.split('.')[1], // Extract 'villa', 'residence', etc.
  }));

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesType = !typeFilter || project.typeKey === typeFilter;
      const matchesStatus = !statusFilter || project.statusKey === statusFilter;
      return matchesType && matchesStatus;
    });
  }, [allProjects, typeFilter, statusFilter]);

  return (
    <>
      <PortfolioHero />

      <main className="min-h-screen bg-white text-black py-20 md:py-32">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Sidebar - Filter - Minimalist & Typographic */}
            <aside className="lg:w-1/4">
              <div className="lg:sticky lg:top-32 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className={cn(
                    "text-xs uppercase tracking-[0.3em] text-stone-400 mb-8 font-medium",
                    playfair.className
                  )}>
                    {tPortfolio("filter_title")}
                  </h2>

                  <div className="space-y-10">
                    {/* Type Filter */}
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block">
                        {tPortfolio("filter_type")}
                      </span>
                      <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {["", "villa", "residence", "building"].map((type) => (
                          <button
                            key={type}
                            onClick={() => setTypeFilter(type)}
                            className={cn(
                              "text-sm uppercase tracking-widest transition-all duration-300 hover:text-amber-700",
                              typeFilter === type ? "text-amber-700 font-medium" : "text-stone-400"
                            )}
                          >
                            {type === "" ? tPortfolio("all") : tPortfolio(`type.${type}`)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Status Filter */}
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block">
                        {tPortfolio("filter_status")}
                      </span>
                      <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {["", "completed", "in_construction", "in_project"].map((status) => (
                          <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={cn(
                              "text-sm uppercase tracking-widest transition-all duration-300 hover:text-amber-700",
                              statusFilter === status ? "text-amber-700 font-medium" : "text-stone-400"
                            )}
                          >
                            {status === "" ? tPortfolio("all") : tPortfolio(`status.${status}`)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Reset - Subtle */}
                    {(typeFilter || statusFilter) && (
                      <button
                        onClick={() => {
                          setTypeFilter("");
                          setStatusFilter("");
                        }}
                        className="text-[10px] uppercase tracking-[0.2em] text-stone-400 hover:text-black transition-colors border-b border-stone-200 pb-1"
                      >
                        {tPortfolio("reset")}
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            </aside>

            {/* Main Content - Projects List - Immersive Editorial */}
            <div className="lg:flex-1">
              {filteredProjects.length === 0 ? (
                <div className="py-20 border-t border-stone-100">
                  <p className={cn("text-2xl font-light text-stone-400", playfair.className)}>
                    {tPortfolio("no_projects")}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-24 md:gap-32">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <a href={`/portfolio/${project.id}`} className="block space-y-8">
                        {/* Image - Natural Ratio, Minimal spacing */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        </div>

                        {/* Project Info - Typographic hierarchy */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-100 pb-12">
                          <div className="space-y-4">
                            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                              0{index + 1} &mdash; {project.type}
                            </span>
                            <h3 className={cn(
                              "text-3xl md:text-5xl font-light tracking-tight group-hover:text-amber-700 transition-colors duration-300",
                              playfair.className
                            )}>
                              {project.title}
                            </h3>
                          </div>

                          <div className="text-right">
                            <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-2">
                              {project.location}
                            </p>
                            <span className="inline-block px-3 py-1 border border-stone-200 text-[9px] uppercase tracking-widest text-stone-400">
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </>
  );
}