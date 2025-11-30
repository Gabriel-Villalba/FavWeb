import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductModal } from "@/components/catalog/ProductModal";
import { products, Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 8;

export default function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Multi-select logic
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
    window.open(`https://wa.me/5493492000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-2">Nuestros Productos</h1>
            <p className="text-muted-foreground">Calidad artesanal para tu hogar.</p>
          </div>
          
          {selectedItems.length > 0 && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/10 border border-primary/20 p-4 rounded-lg flex items-center gap-4 w-full md:w-auto"
            >
                <span className="font-bold text-primary">{selectedItems.length} seleccionados</span>
                <Button onClick={handleBulkConsult} className="bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs">
                    <MessageCircle className="w-4 h-4 mr-2" /> Consultar Lote
                </Button>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentProducts.map((product) => (
            <ProductCard 
                key={product.id} 
                product={product} 
                onOpen={handleOpenModal}
                isSelected={!!selectedItems.find(i => i.id === product.id)}
                onSelect={handleToggleSelect}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <Button 
              variant="outline" 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm font-bold">
              Página {currentPage} de {totalPages}
            </span>
            <Button 
              variant="outline" 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
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
