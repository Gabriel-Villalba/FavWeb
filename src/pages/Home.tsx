import { Layout } from "@/components/layout/Layout";
import { Carousel } from "@/components/home/Carousel";
import { Link } from "wouter";
import { ShieldCheck, Truck, Wrench, ArrowRight, Flame } from "lucide-react";

const wrap = "mx-auto w-full max-w-6xl px-4 md:px-6";

export default function Home() {
  return (
    <Layout>
      <Carousel />

      {/* Ventajas: carrusel de chips en cel, grilla en pantallas grandes */}
      <section className={`${wrap} mt-6`}>
        <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {[
            { icon: ShieldCheck, label: "Hierro 100% soldado", sub: "Materiales de primera", tone: "bg-peach" },
            { icon: Truck, label: "Envíos a todo el país", sub: "Logística segura", tone: "bg-aqua" },
            { icon: Wrench, label: "Fabricación artesanal", sub: "Cada pieza, a mano", tone: "bg-accent" },
          ].map(({ icon: Icon, label, sub, tone }) => (
            <div key={label} className={`flex min-w-[240px] snap-start items-center gap-3 rounded-full ${tone} py-3 pl-3 pr-6 md:min-w-0`}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-primary">
                <Icon size={20} />
              </span>
              <span>
                <span className="block text-sm font-bold leading-tight">{label}</span>
                <span className="block text-xs text-muted-foreground">{sub}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Por qué FAV */}
      <section className={`${wrap} py-16 md:py-24`}>
        <div className="mb-10 max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-peach px-3 py-1 text-xs font-bold text-primary">
            <Flame size={12} /> Por qué elegirnos
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            El asador serio <span className="hl">elige en serio</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {[
            { num: "01", title: "Calidad sin concesiones", tone: "bg-peach", body: "Acero de primera, soldaduras perfectas y acabados que se mantienen año tras año sin importar cuántos asados lleven encima." },
            { num: "02", title: "Diseño funcional", tone: "bg-aqua", body: "Líneas limpias, piezas intuitivas y detalles pensados por quienes realmente entienden el fuego y la cocción perfecta." },
            { num: "03", title: "Envíos seguros", tone: "bg-accent", body: "Embalaje profesional y seguimiento real. Tu pedido llega en perfecto estado a cualquier punto del país." },
          ].map(({ num, title, body, tone }) => (
            <article key={num} className={`rounded-[2rem] ${tone} p-6 transition hover:-translate-y-1 md:p-8`}>
              <span className="font-heading text-5xl font-extrabold text-foreground/20">{num}</span>
              <h3 className="mt-3 text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={wrap}>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-7 text-primary-foreground md:rounded-[2.5rem] md:p-12">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-sun" />
          <div className="pointer-events-none absolute -bottom-16 right-24 h-40 w-40 rounded-full bg-coral" />
          <div className="relative max-w-xl">
            <span className="text-sm font-bold text-sun">¿Listo para encender?</span>
            <h3 className="mt-2 text-3xl leading-tight md:text-5xl">Tu próximo asado empieza con el asador correcto</h3>
            <Link href="/catalogo">
              <a className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-primary shadow-soft transition hover:-translate-y-0.5">
                Ver Catálogo Completo <ArrowRight size={16} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
