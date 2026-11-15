import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductModal } from "@/components/catalog/ProductModal";
import { products, Product } from "@/lib/data";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 8;

export default function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return products.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleToggleSelect = (product: Product) => {
    if (selectedItems.find(i => i.id === product.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== product.id));
    } else {
      setSelectedItems([...selectedItems, product]);
    }
  };

  const handleBulkConsult = () => {
    const itemsList = selectedItems.map(i => `- ${i.name}`).join('\n');
    const message = `Hola! Me interesan los siguientes productos:\n${itemsList}\n\nQuisiera más información.`;
    window.open(`https://wa.me/5493492588185?text=${encodeURIComponent(message)}`, '_blank');
  };

  const pageBtn = "grid h-12 w-12 place-items-center rounded-full bg-white text-foreground shadow-soft transition hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-40";

  return (
    <Layout>
      <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-4 md:px-6 md:pt-8">
        <div className="mb-7 md:mb-10">
          <span className="inline-block rounded-full bg-peach px-3 py-1 text-xs font-bold text-primary">Todos los productos</span>
          <h1 className="mt-3 text-5xl md:text-7xl">
            Catálogo <span className="hl">Fav</span>
          </h1>
          <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">
            Tocá un producto para ver el detalle. Marcá varios con el ✓ y consultalos todos juntos por WhatsApp.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {currentProducts.map((product, i) => (
            <div key={product.id} style={{ animationDelay: `${i * 60}ms` }}>
              <ProductCard
                product={product}
                onOpen={handleOpenModal}
                isSelected={!!selectedItems.find(item => item.id === product.id)}
                onSelect={handleToggleSelect}
              />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className={pageBtn}
              aria-label="Página anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-heading text-lg font-extrabold">
              {currentPage} <span className="text-muted-foreground">/ {totalPages}</span>
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className={pageBtn}
              aria-label="Página siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Barra de selección: flotante abajo, cómoda para el pulgar */}
      {selectedItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between gap-3 rounded-full bg-pool py-2 pl-6 pr-2 text-white shadow-soft md:inset-x-auto md:left-1/2 md:min-w-[380px] md:-translate-x-1/2"
        >
          <span className="text-sm font-bold">{selectedItems.length} seleccionados</span>
          <button
            onClick={handleBulkConsult}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sun px-5 text-sm font-bold text-foreground transition hover:brightness-105"
          >
            <MessageCircle size={16} /> Consultar Lote
          </button>
        </motion.div>
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
}
