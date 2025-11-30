import { Product } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { useMemo } from "react";
import product1Img from "@assets/generated_images/stainless_steel_parrilla_grill.png";
import product2Img from "@assets/generated_images/iron_asador_cross.png";
import product3Img from "@assets/generated_images/steaks_grilling_on_a_parrilla.png"; // Fallback

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  // Simple image mapping (same as card)
  const imageSrc = useMemo(() => {
    if (product.image.includes("product1")) return product1Img;
    if (product.image.includes("product2")) return product2Img;
    return product3Img;
  }, [product?.image]);

  const whatsappMessage = `Hola! Estoy interesado en el producto: ${product.name} ($${product.price})`;
  const whatsappLink = `https://wa.me/5493492000000?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-none">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-64 md:h-auto bg-secondary/30 relative">
             <img 
               src={imageSrc} 
               alt={product.name}
               className="w-full h-full object-cover"
             />
          </div>
          
          <div className="p-6 md:p-10 flex flex-col h-full">
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

            <div className="flex flex-col gap-3 mt-6">
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
      </DialogContent>
    </Dialog>
  );
}
