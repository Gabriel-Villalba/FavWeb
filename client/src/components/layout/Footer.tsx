import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-heading font-bold uppercase text-primary">
              Parrillas & Asadores Gabriel
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Artesanía en hierro y acero para los amantes del buen asado. Calidad que dura toda la vida.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold uppercase">Navegación</h4>
            <div className="flex flex-col gap-2">
              <Link href="/"><a className="text-muted-foreground hover:text-primary transition-colors">Inicio</a></Link>
              <Link href="/catalogo"><a className="text-muted-foreground hover:text-primary transition-colors">Catálogo</a></Link>
              <Link href="/donde-estamos"><a className="text-muted-foreground hover:text-primary transition-colors">Dónde Estamos</a></Link>
              <Link href="/nosotros"><a className="text-muted-foreground hover:text-primary transition-colors">Nosotros</a></Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold uppercase">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/5493492588185" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={18} />
                <span>+54 9 3492 588185</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span>Erasmo Poggi 483, Rafaela, Santa Fe</span>
              </div>
              <a href="mailto: favproduccciones@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} />
                <span>favproduccciones@gmail.com</span>
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/fav.asadores" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Parrillas & Asadores Gabriel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
