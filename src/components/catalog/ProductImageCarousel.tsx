import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageCarouselProps {
  images: string[];
  alt: string;
  imageClassName: string;
  className?: string;
}

export function ProductImageCarousel({
  images,
  alt,
  imageClassName,
  className = "",
}: ProductImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;

    if (!start || !touch || !hasMultipleImages) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

    event.stopPropagation();
    suppressClick.current = true;
    if (deltaX > 0) showPrevious();
    else showNext();
  };

  return (
    <div
      className={`relative ${className}`}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={handleTouchEnd}
      onClickCapture={(event) => {
        if (!suppressClick.current) return;
        suppressClick.current = false;
        event.stopPropagation();
      }}
      onKeyDown={(event) => {
        if (!hasMultipleImages) return;
        if (event.key === "ArrowLeft") {
          event.stopPropagation();
          showPrevious();
        } else if (event.key === "ArrowRight") {
          event.stopPropagation();
          showNext();
        }
      }}
    >
      <img
        src={images[activeIndex] || images[0]}
        alt={hasMultipleImages ? `${alt}, imagen ${activeIndex + 1} de ${images.length}` : alt}
        className={imageClassName}
        draggable={false}
      />

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 bg-black/55 p-2 text-white shadow transition hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Imagen anterior de ${alt}`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 bg-black/55 p-2 text-white shadow transition hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Imagen siguiente de ${alt}`}
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1.5 backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-4 bg-white" : "w-2 bg-white/55 hover:bg-white/80"
                }`}
                aria-label={`Mostrar imagen ${index + 1} de ${alt}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
