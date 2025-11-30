import { Product } from "@/lib/data";
import { motion } from "framer-motion";
import { Eye, Check } from "lucide-react";
import { useMemo } from "react";
import product1Img from "@assets/generated_images/stainless_steel_parrilla_grill.png";
import product2Img from "@assets/generated_images/iron_asador_cross.png";
import product3Img from "@assets/generated_images/steaks_grilling_on_a_parrilla.png"; // Fallback

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  isSelected?: boolean;
  onSelect?: (product: Product) => void;
}

export function ProductCard({ product, onOpen, isSelected, onSelect }: ProductCardProps) {
    
  // Simple image mapping based on ID or name since we don't have a real DB
  const imageSrc = useMemo(() => {
    if (product.image.includes("product1")) return product1Img;
    if (product.image.includes("product2")) return product2Img;
    return product3Img;
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
