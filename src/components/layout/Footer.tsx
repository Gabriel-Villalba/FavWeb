import { Phone, MapPin, Mail, Facebook, Instagram, Flame } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-primary/15 overflow-hidden">
      {/* Glow superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-8 bg-primary/5 blur-xl" />

      <div className="container mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Flame size={22} className="text-primary" />
              <h3 className="font-heading font-900 text-3xl tracking-[0.15em] text-foreground">FAV</h3>
            </div>
            <div className="divider-fire w-24 opacity-50" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Forjado con fuego, construido para durar. Asadores y parrillas artesanales desde Rafaela para todo el país.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-primary">Navegación</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Inicio", path: "/" },
                { label: "Catálogo", path: "/catalogo" },
                { label: "Dónde Estamos", path: "/donde-estamos" },
                { label: "Nosotros", path: "/nosotros" },
              ].map((link) => (
                <Link key={link.path} href={link.path}>
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group">
                    <span className="w-3 h-px bg-primary/40 group-hover:w-5 group-hover:bg-primary transition-all duration-200" />
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-primary">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="https://wa.me/5493492588185" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={13} className="text-primary" />
                </div>
                +54 9 3492 588185
              </a>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
                  <MapPin size={13} className="text-primary" />
                </div>
                Erasmo Poggi 483, Rafaela
              </div>
              <a href="mailto:favproduccciones@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={13} className="text-primary" />
                </div>
                favproduccciones@gmail.com
              </a>
            </div>

            <div className="flex gap-2 pt-1">
              <a href="https://www.facebook.com/fav.asadores" 
                className="w-9 h-9 rounded-md border border-border bg-secondary/50 hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200">
                <Facebook size={15} />
              </a>
              <a href="#" 
                className="w-9 h-9 rounded-md border border-border bg-secondary/50 hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200">
                <Instagram size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider-fire opacity-20 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/60">
          <span>&copy; {new Date().getFullYear()} FAV Asadores. Todos los derechos reservados.</span>
          <span className="flex items-center gap-1.5">
            Hecho con <Flame size={11} className="text-primary" /> en Rafaela, Santa Fe
          </span>
        </div>
      </div>
    </footer>
  );
}
