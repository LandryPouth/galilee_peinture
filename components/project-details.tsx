"use client";

import { type Project } from "@/data/projects";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { ArrowLeft, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ImageModal } from "@/components/ui/image-modal";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function ProjectDetails({ project }: { project: Project }) {
  const t = useTranslations("Projects");
  const tPortfolio = useTranslations("Portfolio");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <main className="min-h-screen bg-white text-black pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="container">
          {/* Navigation */}
          <div className="mb-12">
            <Button
              asChild
              variant="ghost"
              className="pl-0 hover:bg-transparent text-stone-500 hover:text-black transition-colors"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="uppercase tracking-widest text-xs">
                  {tPortfolio("all")}
                </span>
              </Link>
            </Button>
          </div>

          {/* Header Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 lg:mb-32">
            <div className="lg:w-2/3 space-y-6">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-amber-700 block">
                {tPortfolio(project.typeKey)} &mdash; {tPortfolio(project.statusKey)}
              </span>
              <h1 className={cn(
                "text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1]",
                playfair.className
              )}>
                {t(project.titleKey)}
              </h1>
            </div>
            <div className="lg:w-1/3 flex flex-col justify-end">
              <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
                {t(project.descriptionKey)}
              </p>
              <div className="mt-8 pt-8 border-t border-stone-100 text-sm text-stone-400 uppercase tracking-widest">
                {t(project.locationKey)}
              </div>
            </div>
          </div>

          {/* Gallery Grid - Asymmetrical / Editorial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {project.gallery.map((image: string, index: number) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className={cn(
                  "relative overflow-hidden group cursor-pointer",
                  // Alternate sizes logic for visual interest - works for any number of images
                  index % 3 === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/5] md:aspect-square"
                )}
              >
                <Image
                  src={image}
                  alt={`${t(project.titleKey)} - View ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                />
                
                {/* Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white/10 backdrop-blur-md p-4 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ZoomIn className="w-8 h-8 text-white" />
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Project / Contact CTA */}
          <div className="mt-32 border-t border-stone-100 pt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-none border-stone-200 px-8 py-6 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              <Link href="/contact">
                {t("discover")}
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      <ImageModal
        images={project.gallery}
        initialIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
