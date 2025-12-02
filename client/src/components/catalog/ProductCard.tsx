import { Product } from "@/lib/data";
import { motion } from "framer-motion";
import { Eye, Check } from "lucide-react";
import { useMemo } from "react";
// Use dynamic imports so we don't have to import each image manually.
// We'll load all images from the generated_images folder at build time
// and map them by filename. Ensure `product.image` contains the filename
// (e.g. `rectangular.png`) or adapt the key used below.
// Note: use a relative path from this file to the `attached_assets` folder
// so Vite can resolve the glob correctly.
const imageModules = import.meta.glob(
  '../../../../attached_assets/generated_images/*.{png,jpg,jpeg,svg}',
  { eager: true },
) as Record<string, { default: string }>;

const imageMap: Record<string, string> = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const filename = path.split('/').pop() || path;
    return [filename, (mod as any).default as string];
  }),
);

const fallbackImage = imageMap['medioTambor.png'] || Object.values(imageMap)[0] || '';

// Legacy mapping for keys used in `products` data (e.g. '@assets/product1.png')
const legacyImageKeys: Record<string, string> = {
  '@assets/product1.png': 'tamborCompleto.jpg',
  '@assets/product2.png': 'rectangular.png',
  '@assets/product3.png': 'medioTambor.png',
  '@assets/hero2.png': 'tamborHornoVertical.jpeg',
  '@assets/workshop.png': 'metal_workshop_interior.png',
  '@assets/hero1.png': 'stainless_steel_parrilla_grill.png',
};

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  isSelected?: boolean;
  onSelect?: (product: Product) => void;
}

export function ProductCard({ product, onOpen, isSelected, onSelect }: ProductCardProps) {
    
  // Simple image mapping based on ID or name since we don't have a real DB
  const imageSrc = useMemo(() => {
    // Expecting product.image to be a filename (e.g. 'rectangular.png')
    if (!product.image) return fallbackImage;
    // If product.image already holds a full URL/path (startsWith('/') or 'http'), use it directly
    if (product.image.startsWith('/') || product.image.startsWith('http')) return product.image;
    // If it's a legacy key like '@assets/product1.png', map it to a real filename
    if (legacyImageKeys[product.image]) {
      const fname = legacyImageKeys[product.image];
      return imageMap[fname] || fallbackImage;
    }
    // If product.image contains a slash, take the basename
    const basename = product.image.includes('/') ? product.image.split('/').pop()! : product.image;
    return imageMap[basename] || fallbackImage;
  }, [product.image]);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`group relative bg-card rounded-lg shadow-sm overflow-hidden border transition-all ${isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/50 hover:shadow-md'}`}
    >
      <div className="aspect-square relative overflow-hidden bg-secondary/20">
        <img 
          src={imageSrc} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button 
            onClick={() => onOpen(product)}
            className="bg-white text-foreground hover:text-primary px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye size={16} /> Ver Detalle
          </button>
        </div>
        
        {onSelect && (
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect(product);
                }}
                className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10 ${isSelected ? 'bg-primary text-white' : 'bg-black/30 text-white hover:bg-primary/80'}`}
            >
                <Check size={16} />
            </button>
        )}
      </div>
      
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="font-heading font-bold text-lg leading-tight mb-2 truncate">{product.name}</h3>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-primary text-xl">
            ${product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
