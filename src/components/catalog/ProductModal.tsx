import { Product } from "@/lib/data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { useMemo } from "react";
import { ProductImageCarousel } from "@/components/catalog/ProductImageCarousel";
import { getProductImages } from "@/lib/productImages";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const productImages = useMemo(
    () => (product ? getProductImages(product) : []),
    [product],
  );
  if (!product) return null;

  const whatsappMessage = `Hola! Estoy interesado en el producto ${product.name} ($${product.price}) que vi en la web. ¿Está disponible?`;
  const whatsappLink = `https://wa.me/5493492588185?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Cel: hoja que sube desde abajo · Pantallas grandes: tarjeta centrada */}
      <DialogContent className="max-h-[92svh] w-full max-w-4xl gap-0 overflow-hidden rounded-t-[2rem] border-0 bg-card p-0 shadow-soft sm:rounded-[2rem] max-sm:bottom-0 max-sm:top-auto max-sm:max-w-none max-sm:translate-y-0 max-sm:slide-in-from-bottom max-sm:slide-in-from-left-0 max-sm:slide-out-to-bottom max-sm:slide-out-to-left-0">
        <div className="grid max-h-[92svh] overflow-y-auto md:grid-cols-2 md:overflow-hidden">
          <div className="relative h-72 bg-white md:h-full md:min-h-[520px]">
            <ProductImageCarousel
              key={product.id}
              images={productImages}
              alt={product.name}
              className="h-full w-full"
              imageClassName="h-full w-full object-contain p-3"
            />
            <span className="absolute left-4 top-4 z-10 rounded-full bg-sun px-3 py-1 text-xs font-bold text-foreground">
              {product.category}
            </span>
          </div>

          <div className="flex flex-col md:max-h-[92svh] md:overflow-y-auto">
            <div className="flex-1 p-6 md:p-9">
              <DialogTitle className="text-3xl font-extrabold leading-tight md:text-4xl">{product.name}</DialogTitle>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-extrabold tracking-tight text-primary">
                  ${product.price.toLocaleString('es-AR')}
                </span>
                <span className="text-xs font-bold text-muted-foreground">ARS</span>
              </div>

              <DialogDescription className="mt-5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </DialogDescription>

              <h4 className="mb-3 mt-7 text-sm font-bold">Características</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-sm font-medium">
                    <CheckCircle2 size={16} className="shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sticky bottom-0 flex flex-col gap-2 border-t border-border bg-card p-4 md:px-9 md:pb-7">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-[#1FA855] px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:brightness-110"
              >
                <MessageCircle size={18} /> Consultar por WhatsApp
              </a>
              <button
                onClick={onClose}
                className="min-h-11 rounded-full px-6 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                Volver al Catálogo
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
