import { Product } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Flame, X } from "lucide-react";
import { useMemo } from "react";

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

const legacyImageKeys: Record<string, string> = {
  '@assets/product1.png': 'tamborCompleto.jpg',
  '@assets/product2.png': 'rectangular.png',
  '@assets/product3.png': 'medioTambor.png',
  '@assets/hero2.png': 'tamborHornoVertical.jpeg',
  '@assets/workshop.png': 'palitaYatizador.png',
  '@assets/hero1.png': 'parrilla.png',
  '@assets/hero4.png': 'brasero.png',
  '@assets/product4.png': 'calentador.png',
  '@assets/product5.png': 'varilla.png',
};

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

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

  const whatsappMessage = `Hola! Estoy interesado en el producto ${product.name} ($${product.price}) que vi en la web. ¿Está disponible?`;
  const whatsappLink = `https://wa.me/5493492588185?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border border-primary/20 shadow-[0_0_60px_hsl(22_100%_52%_/_0.15)] max-w-[95vw] max-h-[90vh]">
        <div className="grid md:grid-cols-2 h-full max-h-[90vh]">
          
          {/* Image side */}
          <div className="relative h-64 md:h-auto bg-secondary/40 overflow-hidden flex items-center justify-center">
            {/* Fire overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent z-10 pointer-events-none" />
            
            <img
              src={imageSrc}
              alt={product.name}
              className="w-full h-full object-contain max-h-[60vh] md:max-h-full relative z-0 p-4"
            />

            {/* Bottom label */}
            <div className="absolute bottom-4 left-4 z-20">
              <span className="badge-fire">{product.category}</span>
            </div>
          </div>

          {/* Info side */}
          <div className="flex flex-col overflow-y-auto">
            <div className="p-7 md:p-10 flex-1">
              
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Flame size={14} className="text-primary" />
                  <span className="text-xs font-heading uppercase tracking-[0.2em] text-primary">{product.category}</span>
                </div>
                <DialogTitle className="font-heading text-3xl md:text-4xl leading-none mb-4 text-foreground">
                  {product.name}
                </DialogTitle>
                <div className="divider-fire w-16 mb-4 opacity-60" />
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-900 text-primary tracking-tight">
                    ${product.price.toLocaleString('es-AR')}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">ARS</span>
                </div>
              </div>

              {/* Description */}
              <DialogDescription className="text-sm text-muted-foreground leading-relaxed mb-7">
                {product.description}
              </DialogDescription>

              {/* Features */}
              <div>
                <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-primary/80 mb-4">Características</h4>
                <ul className="space-y-2.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="p-7 md:px-10 md:pb-10 border-t border-border">
              <div className="flex flex-col gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-700 uppercase tracking-[0.12em] text-sm px-6 py-3.5 rounded-md transition-all duration-300 shadow-[0_0_16px_hsl(142_70%_45%_/_0.3)] hover:shadow-[0_0_24px_hsl(142_70%_45%_/_0.5)]"
                >
                  <MessageCircle size={16} /> Consultar por WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground font-heading font-700 uppercase tracking-[0.12em] text-xs px-6 py-3 rounded-md transition-all duration-200"
                >
                  Volver al Catálogo
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
