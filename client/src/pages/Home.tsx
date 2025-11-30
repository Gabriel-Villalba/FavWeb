import { Layout } from "@/components/layout/Layout";
import { Carousel } from "@/components/home/Carousel";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, ShieldCheck, Truck, Wrench } from "lucide-react";
//mport { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-border hover:border-primary/50 transition-colors rounded-lg bg-card shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Calidad Garantizada</h3>
              <p className="text-muted-foreground">Materiales de primera línea y soldaduras reforzadas para una durabilidad extrema.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-border hover:border-primary/50 transition-colors rounded-lg bg-card shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Wrench size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Diseño Funcional</h3>
              <p className="text-muted-foreground">Pensado por asadores para asadores. Cada detalle tiene un propósito.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-border hover:border-primary/50 transition-colors rounded-lg bg-card shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Envíos a Todo el País</h3>
              <p className="text-muted-foreground">Llevamos tu parrilla a donde estés. Embalaje seguro y logística confiable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 uppercase">
            ¿Listo para mejorar tus asados?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explora nuestro catálogo completo y encontrá la parrilla que se adapta a tu estilo de cocina.
          </p>
          <Link href="/catalogo">
            <Button size="lg" className="text-lg px-8 py-6 font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-white">
              Ver Catálogo Completo <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
