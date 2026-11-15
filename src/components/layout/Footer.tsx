import { Phone, MapPin, Mail, Facebook, Instagram, Flame } from "lucide-react";
import { Link } from "wouter";

const iconBox = "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-sun";

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden rounded-t-[2.5rem] bg-pool text-white md:mt-16 md:rounded-t-[3.5rem]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sun/15" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-8 pt-12 md:px-6 md:pt-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Flame size={26} className="text-sun" />
              <h3 className="font-heading text-4xl font-extrabold tracking-tight">FAV</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/80">
              Asadores y parrillas artesanales hechos en Rafaela para todo el país. Para que tu verano sea de patio, amigos y buen fuego.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-sun">Navegación</h4>
            <div className="flex flex-wrap gap-2 md:flex-col md:items-start">
              {[
                { label: "Inicio", path: "/" },
                { label: "Catálogo", path: "/catalogo" },
                { label: "Dónde Estamos", path: "/donde-estamos" },
                { label: "Nosotros", path: "/nosotros" },
              ].map((link) => (
                <Link key={link.path} href={link.path}>
                  <a className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-pool">
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-sun">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://wa.me/5493492588185" className="flex items-center gap-3 hover:text-sun">
                <span className={iconBox}><Phone size={16} /></span> +54 9 3492 588185
              </a>
              <div className="flex items-center gap-3">
                <span className={iconBox}><MapPin size={16} /></span> Erasmo Poggi 483, Rafaela
              </div>
              <a href="mailto:favproduccciones@gmail.com" className="flex items-center gap-3 break-all hover:text-sun">
                <span className={iconBox}><Mail size={16} /></span> favproduccciones@gmail.com
              </a>
            </div>
            <div className="flex gap-2 pt-1">
              <a href="https://www.facebook.com/fav.asadores" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-sun hover:text-foreground">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-sun hover:text-foreground">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-6 text-xs text-white/70 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} FAV Asadores. Todos los derechos reservados.</span>
          <span>Hecho con fuego en Rafaela, Santa Fe</span>
        </div>
      </div>
    </footer>
  );
}
