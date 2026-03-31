import { Product } from "@/lib/data";
import { motion } from "framer-motion";
import { Eye, Check, Flame } from "lucide-react";
import { useMemo } from "react";

const imageModules = import.meta.glob(
  '../../assets/*.{png,jpg,jpeg,svg}',
  { eager: true },
) as Record<string, { default: string }>;

const imageMap: Record<string, string> = Object.fromEntries(
  Object.entries(imageModules).flatMap(([path, mod]) => {
    const filename = path.split('/').pop() || path;
    const lastDot = filename.lastIndexOf('.');
    const base = lastDot === -1 ? filename : filename.slice(0, lastDot);
    const ext = lastDot === -1 ? '' : filename.slice(lastDot + 1);
    const cleanBase = base.replace(/-[A-Za-z0-9]{6,}$/, '');
    const cleanFilename = ext ? `${cleanBase}.${ext}` : cleanBase;
    const url = (mod as any).default as string;
    return [
      [filename, url],
      [cleanFilename, url],
      [cleanBase, url],
    ];
  }),
);

const fallbackImage =
  imageMap['medioTambor.png'] ||
  imageMap['medioTambor'] ||
  Object.values(imageMap)[0] ||
  '';

const legacyImageKeys: Record<string, string> = {
  '@assets/product1.png': 'tamborCompleto.jpg',
  '@assets/product2.png': 'rectangular.png',
  '@assets/product3.png': 'medioTambor.png',
  '@assets/hero2.png': 'tamborHornoVertical.jpeg',
  '@assets/workshop.png': 'palitaYatizador.png',
  '@assets/hero1.png': 'parrilla.png',
  '@assets/hero4.png': 'brasero.png',
  '@assets/product5.png': 'varilla.png',
  '@assets/product4.png': 'calentador.png',
};

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

  const imageSrc = useMemo(() => {
    if (!product.image) return fallbackImage;
    if (product.image.startsWith('/') || product.image.startsWith('http')) return product.image;
    if (legacyImageKeys[product.image]) {
      const fname = legacyImageKeys[product.image];
      return imageMap[fname] || fallbackImage;
    }
    const basename = product.image.includes('/') ? product.image.split('/').pop()! : product.image;
    return imageMap[basename] || fallbackImage;
  }, [product.image]);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative bg-card rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer animate-float-up ${
        isSelected
          ? 'border-primary/60 shadow-[0_0_20px_hsl(22_100%_52%_/_0.2)]'
          : 'border-border hover:border-primary/35 hover:shadow-[0_8px_30px_hsl(22_100%_52%_/_0.12)]'
      }`}
      onClick={() => onOpen(product)}
    >
      {/* Image */}
      <div className="aspect-square relative overflow-hidden bg-secondary/40">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
        />
        
        {/* Dark overlay + fire tint on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-400" />

        {/* View button */}
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(product); }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-md text-xs font-heading font-700 text-white uppercase tracking-wider opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_14px_hsl(22_100%_52%_/_0.5)]"
        >
          <Eye size={13} /> Ver detalle
        </button>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="badge-fire">{product.category}</span>
        </div>

        {/* Select button */}
        {onSelect && (
          <button
            onClick={(e) => { e.stopPropagation(); onSelect(product); }}
            className={`absolute top-3 right-3 w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 z-10 border ${
              isSelected
                ? 'bg-primary border-primary text-white shadow-[0_0_10px_hsl(22_100%_52%_/_0.5)]'
                : 'bg-black/40 border-white/20 text-white hover:bg-primary/70 hover:border-primary/60 backdrop-blur-sm'
            }`}
            aria-label="Seleccionar producto"
          >
            <Check size={14} />
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading text-base leading-tight mb-1 text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2" title={product.name}>
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1.5">
            <Flame size={12} className="text-primary" />
            <span className="font-heading font-700 text-primary text-xl tracking-tight">
              ${normalizedPrice.toLocaleString('es-AR')}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
