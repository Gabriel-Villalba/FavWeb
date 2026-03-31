import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductModal } from "@/components/catalog/ProductModal";
import { products, Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle, Flame } from "lucide-react";
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 pt-28">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame size={14} className="text-primary" />
              <span className="text-xs font-heading uppercase tracking-[0.22em] text-primary">Todos los productos</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-none text-foreground mb-2">
              CATÁLOGO<br /><span className="text-fire">FAV</span>
            </h1>
            <div className="divider-fire w-24 mt-3 opacity-50" />
          </div>

          {selectedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 bg-primary/10 border border-primary/25 px-5 py-3 rounded-lg shadow-[0_0_16px_hsl(22_100%_52%_/_0.1)]"
            >
              <Flame size={14} className="text-primary" />
              <span className="font-heading text-sm uppercase tracking-wide text-primary">{selectedItems.length} seleccionados</span>
              <button
                onClick={handleBulkConsult}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-700 uppercase tracking-wide text-xs px-4 py-2 rounded-md transition-all duration-200 shadow-[0_0_10px_hsl(22_100%_52%_/_0.3)]"
              >
                <MessageCircle size={13} /> Consultar Lote
              </button>
            </motion.div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="w-9 h-9 rounded-md border border-border hover:border-primary/40 disabled:opacity-30 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
              {currentPage} <span className="text-primary/40 mx-1">/</span> {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="w-9 h-9 rounded-md border border-border hover:border-primary/40 disabled:opacity-30 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
}
