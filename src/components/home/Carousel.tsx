import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from "wouter";
import hero1 from "@assets/generated_images/fondo1.png";
import hero2 from "@assets/generated_images/fondo2.png";

const slides = [
  {
    id: 1,
    image: hero1,
    pos: "68% center",
    eyebrow: "Artesanía argentina",
    title: "Tu verano se enciende acá",
    subtitle: "Asadores y parrillas hechos a mano, listos para tus mejores tardes.",
    cta: "Ver Catálogo",
    ctaPath: "/catalogo",
  },
  {
    id: 2,
    image: hero2,
    pos: "center",
    eyebrow: "Desde Rafaela para todo el país",
    title: "Patio, amigos y buen fuego",
    subtitle: "Cada pieza sale del taller con la misma pasión con que encendés el asado.",
    cta: "Conocer Más",
    ctaPath: "/nosotros",
  }
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5500 })]);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  const arrow = "absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-foreground shadow-soft transition hover:bg-white md:grid";

  return (
    <section className="px-3 md:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] shadow-soft md:rounded-[2.5rem]">
        <div className="embla" ref={emblaRef}>
          <div className="flex h-[72svh] max-h-[640px] min-h-[480px] md:h-[620px]">
            {slides.map((slide) => (
              <div key={slide.id} className="relative min-w-0 flex-[0_0_100%]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: slide.pos }}
                />
                <div className="absolute inset-x-3 bottom-3 rounded-3xl bg-white/95 p-5 shadow-soft backdrop-blur md:inset-x-auto md:bottom-8 md:left-8 md:w-[470px] md:p-8">
                  <span className="inline-block rounded-full bg-sun px-3 py-1 text-xs font-bold text-foreground">
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-3 text-[2rem] font-extrabold leading-[1.02] md:text-5xl">{slide.title}</h1>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{slide.subtitle}</p>
                  <Link href={slide.ctaPath}>
                    <a className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-pop transition hover:-translate-y-0.5">
                      {slide.cta} <ArrowRight size={16} />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-4 top-4 z-10 grid h-20 w-20 rotate-12 place-items-center rounded-full bg-sun p-2 text-center text-[0.65rem] font-extrabold leading-tight shadow-soft md:right-8 md:top-8 md:h-24 md:w-24 md:text-xs">
          Hecho a mano en Rafaela
        </div>

        <button onClick={scrollPrev} aria-label="Anterior" className={`${arrow} left-4`}><ChevronLeft size={22} /></button>
        <button onClick={scrollNext} aria-label="Siguiente" className={`${arrow} right-4`}><ChevronRight size={22} /></button>
      </div>
    </section>
  );
}
