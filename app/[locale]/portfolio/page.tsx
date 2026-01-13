"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { PortfolioHero } from "@/components/portfolio-hero";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Portfolio() {
  const t = useTranslations("Projects");
  const tPortfolio = useTranslations("Portfolio");

  const projects = projectsData.map((project) => ({
    id: project.id,
    title: t(project.titleKey as any),
    location: t(project.locationKey as any),
    image: project.image,
    description: t(project.descriptionKey as any),
    status: tPortfolio(project.statusKey as any),
    type: tPortfolio(project.typeKey as any),
  }));

  return (
    <>
      <PortfolioHero />

      <main className="min-h-screen bg-black text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content - Projects List */}
            <div className="lg:col-span-3 space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    {/* Project Image - Left */}
                    <div className="relative h-64 md:h-96 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Project Info - Right */}
                    <div className="bg-[#7a4d42] p-8 md:p-10 flex flex-col justify-center">
                      <h3 className={cn(
                        "text-2xl md:text-3xl font-light mb-3 uppercase tracking-wide text-white",
                        playfair.className
                      )}>
                        {project.title}
                      </h3>

                      <p className="text-sm md:text-base text-white/80 mb-6 uppercase tracking-wider">
                        {project.location}
                      </p>

                      {/* Status and Type Info */}
                      <div className="space-y-3 border-t border-white/20 pt-6">
                        <div className="flex justify-between items-center">
                          <span className="text-xs uppercase tracking-wider text-white/60">
                            {tPortfolio("status_label")}
                          </span>
                          <span className="text-sm text-white font-light">
                            {project.status}
                          </span>
                        </div>

                        <div className="h-px bg-white/10" />

                        <div className="flex justify-between items-center">
                          <span className="text-xs uppercase tracking-wider text-white/60">
                            {tPortfolio("type_label")}
                          </span>
                          <span className="text-sm text-white font-light">
                            {project.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar - Filter */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-[#7a4d42] p-6 md:p-8"
                >
                  <h3 className={cn(
                    "text-xl md:text-2xl font-light mb-6 uppercase tracking-wide text-white",
                    playfair.className
                  )}>
                    {tPortfolio("filter_title")}
                  </h3>

                  <div className="space-y-5">
                    {/* Type Filter */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                        {tPortfolio("filter_type")}
                      </label>
                      <select className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all">
                        <option value="">Tout voir</option>
                        <option value="villa">{tPortfolio("type.villa")}</option>
                        <option value="residence">{tPortfolio("type.residence")}</option>
                        <option value="building">{tPortfolio("type.building")}</option>
                      </select>
                    </div>

                    {/* Status Filter */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                        {tPortfolio("filter_status")}
                      </label>
                      <select className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all">
                        <option value="">Tout voir</option>
                        <option value="completed">{tPortfolio("status.completed")}</option>
                        <option value="in_construction">{tPortfolio("status.in_construction")}</option>
                        <option value="in_project">{tPortfolio("status.in_project")}</option>
                      </select>
                    </div>

                    {/* Search Button */}
                    <button className="w-full bg-black text-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300 font-light mt-6">
                      {tPortfolio("filter_search")}
                    </button>
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}