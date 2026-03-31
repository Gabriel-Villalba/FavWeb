import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { Link } from "wouter";
import hero1 from "@assets/generated_images/fondo1.png";
import hero2 from "@assets/generated_images/fondo2.png";

const slides = [
  {
    id: 1,
    image: hero1,
    eyebrow: "Artesanía Argentina",
    title: "FUEGO EN ESTADO PURO",
    subtitle: "Asadores construidos a mano con hierro macizo, para quienes el asado es religión.",
    cta: "Ver Catálogo",
    ctaPath: "/catalogo",
  },
  {
    id: 2,
    image: hero2,
    eyebrow: "Desde Rafaela para todo el país",
    title: "TU PARRILLA IDEAL TE ESPERA",
    subtitle: "Cada pieza sale del taller con la misma pasión que ponés al encender el fuego.",
    cta: "Conocer Más",
    ctaPath: "/nosotros",
  }
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5500 })]);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  return (
    <div className="relative group overflow-hidden bg-black">
      <div className="embla" ref={emblaRef}>
        <div className="flex h-[65vh] md:h-[85vh]">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
              {/* Multi-layer image overlay */}
              <div className="absolute inset-0 bg-black/55 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
              
              {/* Fire color tint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5 z-10" />

              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center px-6 md:px-20">
                <div className="max-w-2xl">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Flame size={14} className="text-primary" />
                    <span className="text-xs font-heading uppercase tracking-[0.25em] text-primary/90">
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="font-heading font-900 text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-5 animate-in fade-in slide-in-from-bottom-6 duration-800"
                    style={{ textShadow: "0 2px 40px hsl(22 100% 52% / 0.2)" }}
                  >
                    {slide.title}
                  </h1>

                  {/* Fire divider */}
                  <div className="divider-fire w-32 mb-5 opacity-70 animate-in fade-in duration-1000" />

                  {/* Subtitle */}
                  <p className="text-base md:text-lg text-white/80 font-sans font-light leading-relaxed mb-8 max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-900 delay-100">
                    {slide.subtitle}
                  </p>

                  {/* CTA */}
                  <Link href={slide.ctaPath}>
                    <a className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-heading font-700 uppercase tracking-[0.15em] text-sm px-7 py-3.5 rounded-md transition-all duration-300 shadow-[0_0_20px_hsl(22_100%_52%_/_0.45)] hover:shadow-[0_0_32px_hsl(22_100%_52%_/_0.65)] animate-in fade-in duration-1000 delay-200">
                      <Flame size={15} />
                      {slide.cta}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-md bg-black/30 hover:bg-primary/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-primary/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-md bg-black/30 hover:bg-primary/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-primary/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={22} />
      </button>

      {/* Bottom gradient into page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </div>
  );
}
