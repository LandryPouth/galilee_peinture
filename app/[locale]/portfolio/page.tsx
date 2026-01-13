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
    title: t(project.titleKey as any),
    location: t(project.locationKey as any),
    image: project.image,
    description: t(project.descriptionKey as any),
    status: tPortfolio(project.statusKey as any),
    type: tPortfolio(project.typeKey as any),
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

      <main className="min-h-screen bg-gray-50 text-black py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content - Projects List */}
            <div className="lg:col-span-3 space-y-8">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-500">
                    Aucun projet ne correspond à vos critères de recherche.
                  </p>
                </div>
              ) : (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
                      <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 md:p-10 flex flex-col justify-center border-l border-gray-200">
                        <h3 className={cn(
                          "text-2xl md:text-3xl font-light mb-3 uppercase tracking-wide text-black",
                          playfair.className
                        )}>
                          {project.title}
                        </h3>

                        <p className="text-sm md:text-base text-gray-600 mb-6 uppercase tracking-wider">
                          {project.location}
                        </p>

                        {/* Status and Type Info */}
                        <div className="space-y-3 border-t border-gray-300 pt-6">
                          <div className="flex justify-between items-center">
                            <span className="text-xs uppercase tracking-wider text-gray-500">
                              {tPortfolio("status_label")}
                            </span>
                            <span className="text-sm text-black font-light">
                              {project.status}
                            </span>
                          </div>

                          <div className="h-px bg-gray-200" />

                          <div className="flex justify-between items-center">
                            <span className="text-xs uppercase tracking-wider text-gray-500">
                              {tPortfolio("type_label")}
                            </span>
                            <span className="text-sm text-black font-light">
                              {project.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Sidebar - Filter */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white border border-gray-200 p-6 md:p-8 shadow-md"
                >
                  <h3 className={cn(
                    "text-xl md:text-2xl font-light mb-6 uppercase tracking-wide text-black",
                    playfair.className
                  )}>
                    {tPortfolio("filter_title")}
                  </h3>

                  <div className="space-y-5">
                    {/* Type Filter */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-600 mb-2">
                        {tPortfolio("filter_type")}
                      </label>
                      <select
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="w-full bg-white border border-gray-300 text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        <option value="">Tout voir</option>
                        <option value="villa">{tPortfolio("type.villa")}</option>
                        <option value="residence">{tPortfolio("type.residence")}</option>
                        <option value="building">{tPortfolio("type.building")}</option>
                      </select>
                    </div>

                    {/* Status Filter */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-600 mb-2">
                        {tPortfolio("filter_status")}
                      </label>
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="w-full bg-white border border-gray-300 text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        <option value="">Tout voir</option>
                        <option value="completed">{tPortfolio("status.completed")}</option>
                        <option value="in_construction">{tPortfolio("status.in_construction")}</option>
                        <option value="in_project">{tPortfolio("status.in_project")}</option>
                      </select>
                    </div>

                    {/* Reset Button */}
                    {(typeFilter || statusFilter) && (
                      <button
                        onClick={() => {
                          setTypeFilter("");
                          setStatusFilter("");
                        }}
                        className="w-full bg-gray-200 text-black px-6 py-3 uppercase text-sm tracking-wider hover:bg-gray-300 transition-colors duration-300 font-light"
                      >
                        Réinitialiser
                      </button>
                    )}
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