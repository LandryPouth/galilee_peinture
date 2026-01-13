"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { motion, AnimatePresence } from "motion/react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel"
import { Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({ subsets: ["latin"] })

const SLIDES = [
  {
    id: 1,
    image: "/images/hero-img_1.jpg",
    category: "Architecture",
    title: "L'Art de la Perfection",
    description: "Une approche minutieuse pour des finitions d'exception.",
  },
  {
    id: 2,
    image: "/images/hero-img_2.jpg",
    category: "Design",
    title: "Espaces Intemporels",
    description: "Créer des atmosphères qui traversent le temps avec élégance.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2070&auto=format&fit=crop",
    category: "Innovation",
    title: "Matières & Textures",
    description: "L'innovation au service de vos surfaces murales.",
  },
]

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  // Autoplay delay synchronized with CSS animation
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const onScrollClick = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-dvh overflow-hidden bg-black">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          loop: true,
          duration: 25, // Standard transition speed for better sync
        }}
      >
        <CarouselContent className="h-full ml-0">
          {SLIDES.map((slide, index) => (
            <CarouselItem key={slide.id} className="pl-0 h-full relative">
              {/* Ken Burns effect on image */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ scale: 1.1 }}
                  animate={{
                    scale: index === current ? 1 : 1.1,
                    transition: { duration: 6, ease: "linear" }
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-80"
                    priority={index === 0}
                  />
                  {/* Subtle grain overlay for texture */}
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Editorial Overlay Content */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="container h-full flex flex-col justify-between py-12 md:py-20">

          {/* Top: Header / Brand minimal */}
          <div className="flex justify-between items-start">
            {/* Empty div to maintain spacing if needed, though here justified-between pushes right item to end regardless */}
            <div></div>

            {/* Current Slide Number */}
            <div className="flex flex-col items-end relative top-8 md:top-2">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "text-3xl md:text-4xl text-white mix-blend-difference",
                  playfair.className
                )}
              >
                {String(current + 1).padStart(2, '0')}
              </motion.div>
              <div className="w-12 h-px bg-white/30 mt-2" />
            </div>
          </div>

          {/* Center: Main Title with Reveal */}
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="overflow-hidden">
                  <motion.p
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-amber-200 text-xs md:text-sm uppercase tracking-[0.3em]"
                  >
                    {SLIDES[current].category}
                  </motion.p>
                </div>

                <div className="overflow-hidden">
                  <motion.h1
                    className={cn(
                      "text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1]",
                      playfair.className
                    )}
                  >
                    {SLIDES[current].title}
                  </motion.h1>
                </div>

                <div className="overflow-hidden">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed"
                  >
                    {SLIDES[current].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>


          {/* Bottom: Progress & Scroll Indicator */}
          <div className="flex items-end justify-between">
            {/* Indicators - Restored to left */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "group cursor-pointer relative h-1 transition-all duration-500 rounded-full pointer-events-auto overflow-hidden",
                      index === current ? "w-16 bg-white/40" : "w-3 bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {index === current && (
                      <span
                        key={`progress-${current}`}
                        className="absolute inset-0 bg-white rounded-full origin-left"
                        style={{
                          animation: 'fillProgress 5000ms linear forwards'
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={onScrollClick}
              className="group flex flex-col items-center gap-2 pointer-events-auto"
            >
              <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                Découvrir
              </span>
              <div className="w-px h-12 bg-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white animate-slide-down opacity-50" />
              </div>
            </button>
          </div>
        </div>
      </div>



      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fillProgress {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
          @keyframes slide-down {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .animate-slide-down {
            animation: slide-down 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
          }
        `
      }} />
    </div>
  )
}
