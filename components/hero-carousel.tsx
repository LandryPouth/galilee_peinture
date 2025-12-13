"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "motion/react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop",
    keywords: "Excellence, Précision, Art",
    title: "GALILÉE PEINTURE, l'art de sublimer vos murs",
    subtitle: "Des peintures murales décoratives pour un intérieur unique",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    keywords: "Couleur, Texture, Émotion",
    title: "Votre Vision, Notre Création",
    subtitle: "Transformez vos espaces avec nos finitions haut de gamme",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2070&auto=format&fit=crop",
    keywords: "Innovation, Qualité, Durable",
    title: "Donnez Vie à Vos Murs",
    subtitle: "Spécialistes en peinture décorative et revêtements muraux",
  },
]

export function HeroCarousel() {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false })
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

  return (
    <div className="relative w-full min-h-screen">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full h-full min-h-screen"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full min-h-screen -ml-0">
          {SLIDES.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0 h-full min-h-screen relative">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-[0.6]"
                  priority={slide.id === 1}
                />
              </div>
              <div className="relative z-10 h-full min-h-screen flex flex-col items-center justify-center text-center text-white px-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-sm md:text-base lg:text-lg mb-4 tracking-widest uppercase text-gray-300"
                >
                  {slide.keywords}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight max-w-4xl"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base md:text-lg lg:text-xl max-w-2xl mb-8 text-gray-200"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full" asChild>
                    <a href="#projects">Découvrir nos réalisations</a>
                  </Button>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Slide Numbers */}
      <div className="absolute bottom-10 right-10 flex items-end gap-2 z-20 text-white">
        <span className="text-4xl font-bold leading-none">
          {String(current + 1).padStart(2, '0')}
        </span>
        <span className="text-xl leading-none pb-1 text-gray-300">
          / {String(count).padStart(2, '0')}
        </span>
      </div>

      {/* Custom Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`h-1 transition-all duration-300 rounded-full ${index === current ? "w-12 bg-white" : "w-8 bg-white/40 hover:bg-white/60"
              }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
