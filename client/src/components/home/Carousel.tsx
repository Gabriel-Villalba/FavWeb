import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from "../../../../attached_assets/generated_images/steaks_grilling_on_a_parrilla.png";
import hero2 from "../../../../attached_assets/generated_images/modern_backyard_bbq_setup.png";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "Pasión por el Fuego",
    subtitle: "Parrillas artesanales diseñadas para durar toda la vida."
  },
  {
    id: 2,
    image: hero2,
    title: "Tu Espacio Ideal",
    subtitle: "Transformamos tu patio en el mejor lugar de encuentro."
  }
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative group overflow-hidden bg-black">
      <div className="embla" ref={emblaRef}>
        <div className="flex h-[60vh] md:h-[80vh]">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                  <h2 className="text-4xl md:text-7xl font-heading font-bold text-white mb-4 drop-shadow-lg uppercase tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl text-white/90 font-light drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/20 hover:bg-primary/80 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/10 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/20 hover:bg-primary/80 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/10 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
