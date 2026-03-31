import { Layout } from "@/components/layout/Layout";
import { Carousel } from "@/components/home/Carousel";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Flame, ShieldCheck, Truck, Wrench, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <Carousel />

      {/* Features strip */}
      <section className="border-y border-primary/10 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { icon: ShieldCheck, label: "Hierro 100% soldado", sub: "Materiales de primera calidad" },
              { icon: Truck, label: "Envíos a todo el país", sub: "Logística segura y profesional" },
              { icon: Wrench, label: "Fabricación artesanal", sub: "Cada pieza, hecha a mano" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4 px-8 py-5">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-heading text-sm uppercase tracking-wide text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FAV */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 badge-fire mb-4">
              <Flame size={10} /> Por qué elegirnos
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              El Asador Serio<br />
              <span className="text-fire">Elige en Serio</span>
            </h2>
            <div className="divider-fire w-20 mx-auto opacity-60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Calidad sin concesiones",
                body: "Acero de primera, soldaduras perfectas y acabados que se mantienen año tras año sin importar cuántos asados lleven encima.",
              },
              {
                num: "02",
                title: "Diseño funcional",
                body: "Líneas limpias, piezas intuitivas y detalles pensados por quienes realmente entienden el fuego y la cocción perfecta.",
              },
              {
                num: "03",
                title: "Envíos seguros",
                body: "Embalaje profesional y seguimiento real. Tu asador llega en perfecto estado a cualquier punto del país.",
              },
            ].map(({ num, title, body }) => (
              <article
                key={num}
                className="group relative bg-card rounded-lg border border-border hover:border-primary/30 p-7 transition-all duration-300 overflow-hidden hover:shadow-[0_8px_30px_hsl(22_100%_52%_/_0.1)]"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/3 transition-all duration-500 rounded-lg" />

                <span className="font-heading text-5xl font-900 text-primary/12 group-hover:text-primary/20 transition-colors duration-300 block mb-4 leading-none">
                  {num}
                </span>
                <h3 className="font-heading text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl border border-primary/20 overflow-hidden">
            {/* Background fire */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-card to-accent/5" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-12 py-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Flame size={16} className="text-primary" />
                  <span className="text-xs text-primary font-heading uppercase tracking-[0.18em]">¿Listo para encender?</span>
                </div>
                <h3 className="font-heading text-3xl md:text-4xl text-foreground">
                  Tu próximo asado empieza<br />
                  <span className="text-fire">con el asador correcto</span>
                </h3>
              </div>
              <Link href="/catalogo">
                <a className="shrink-0 inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-heading font-700 uppercase tracking-[0.12em] text-sm px-8 py-4 rounded-md transition-all duration-300 shadow-[0_0_20px_hsl(22_100%_52%_/_0.35)] hover:shadow-[0_0_30px_hsl(22_100%_52%_/_0.55)]">
                  Ver Catálogo Completo
                  <ArrowRight size={16} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
