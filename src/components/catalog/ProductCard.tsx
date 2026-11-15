import { Product } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useMemo } from "react";
import { ProductImageCarousel } from "@/components/catalog/ProductImageCarousel";
import { getProductImages } from "@/lib/productImages";

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  isSelected?: boolean;
  onSelect?: (product: Product) => void;
}

export function ProductCard({ product, onOpen, isSelected, onSelect }: ProductCardProps) {
  const normalizedPrice = useMemo(() => {
    const p = product.price as unknown;
    if (typeof p === 'number') return p;
    if (typeof p === 'string') {
      let s = (p as string).trim().replace(/\s+/g, '');
      const hasDot = s.indexOf('.') !== -1;
      const hasComma = s.indexOf(',') !== -1;
      if (hasDot && hasComma) {
        s = s.replace(/\./g, '').replace(',', '.');
      } else if (hasDot && !hasComma) {
        if (/\d+\.\d{3}(?:\.\d{3})*$/.test(s)) s = s.replace(/\./g, '');
      } else if (!hasDot && hasComma) {
        s = s.replace(',', '.');
      }
      const n = Number(s);
      return Number.isFinite(n) ? n : 0;
    }
    return 0;
  }, [product.price]);

  const productImages = useMemo(() => getProductImages(product), [product.images]);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative cursor-pointer rounded-[1.5rem] p-2 transition-colors animate-float-up md:rounded-[2rem] md:p-3 ${
        isSelected ? 'bg-peach ring-2 ring-primary' : 'bg-card shadow-soft'
      }`}
      onClick={() => onOpen(product)}
    >
      <div className="relative aspect-square overflow-hidden rounded-[1.1rem] bg-white md:rounded-3xl">
        <ProductImageCarousel
          key={product.id}
          images={productImages}
          alt={product.name}
          className="h-full w-full"
          imageClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-2 top-2 z-10 max-w-[65%] truncate rounded-full bg-white/95 px-2.5 py-1 text-[0.65rem] font-bold text-foreground md:text-xs">
          {product.category}
        </span>

        {onSelect && (
          <button
            onClick={(e) => { e.stopPropagation(); onSelect(product); }}
            className={`absolute right-2 top-2 z-10 grid h-9 w-9 place-items-center rounded-full border-2 transition before:absolute before:-inset-1.5 before:content-[''] ${
              isSelected ? 'border-primary bg-primary text-white' : 'border-white bg-white/90 text-muted-foreground hover:text-primary'
            }`}
            aria-label="Seleccionar producto"
            aria-pressed={!!isSelected}
          >
            <Check size={16} strokeWidth={3} />
          </button>
        )}
      </div>

      <div className="px-1.5 pb-1 pt-3 md:px-2">
        <h3 className="line-clamp-2 min-h-[2.5rem] text-[0.95rem] font-bold leading-snug md:text-lg md:min-h-[3.25rem]" title={product.name}>
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between gap-1">
          <span className="font-heading text-lg font-extrabold tracking-tight text-primary md:text-2xl">
            ${normalizedPrice.toLocaleString('es-AR')}
          </span>
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(product); }}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-white transition group-hover:bg-primary"
            aria-label={`Ver detalle de ${product.name}`}
          >
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
