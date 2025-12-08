import { Product } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";
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
  '@assets/workshop.png': 'palitaYatizador.png',
  '@assets/hero1.png': 'parrilla.png',
  '@assets/hero4.png': 'brasero.png',
  '@assets/product4.png': 'calentador.png',
  '@assets/product5.png': 'varilla.png'
};



interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  // Dynamic image mapping based on ID or name since we don't have a real DB
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

  const whatsappMessage = `Hola! Estoy interesado en el producto ${product.name} ($${product.price}) que vi en la web. ¿Está disponible?`;
  const whatsappLink = `https://wa.me/5493492588185?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-none max-w-[95vw] max-h-[90vh]">
          <div className="grid md:grid-cols-2 h-full max-h-[90vh]">
            <div className="h-64 md:h-auto bg-secondary/30 relative flex items-center justify-center overflow-hidden">
               <img 
                 src={imageSrc} 
                 alt={product.name}
                 className="w-full h-full object-contain max-h-[60vh] md:max-h-full"
               />
            </div>

            <div className="p-6 md:p-10 flex flex-col h-full overflow-y-auto">
            <div className="mb-auto">
                <span className="text-sm text-primary font-bold uppercase tracking-wider block mb-2">
                    {product.category}
                </span>
                <DialogTitle className="font-heading text-3xl md:text-4xl font-bold mb-4 uppercase">
                    {product.name}
                </DialogTitle>
                
                <div className="text-3xl font-bold text-foreground mb-6">
                    ${product.price.toLocaleString()}
                </div>
                
                <DialogDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                </DialogDescription>
                
                <div className="space-y-3 mb-8">
                    <h4 className="font-bold uppercase text-sm">Características:</h4>
                    <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 size={16} className="text-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t pt-6">
              <div className="flex flex-col gap-3 sticky bottom-0 bg-card py-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold uppercase tracking-wide"
                >
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Consultar por WhatsApp
                  </a>
                </Button>
                <Button variant="outline" onClick={onClose} className="w-full uppercase tracking-wide font-bold">
                  Volver al Catálogo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
