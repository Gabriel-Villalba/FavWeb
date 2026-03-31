import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { navLinks } from "@/lib/data";
import logoImage from "@assets/generated_images/iconFav.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
    return;
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-background/95 backdrop-blur-2xl py-3 border-b border-primary/20 shadow-[0_4px_30px_hsl(22_100%_52%_/_0.08)]"
          : "bg-background/70 backdrop-blur-xl py-5 border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_16px_hsl(22_100%_52%_/_0.4)] group-hover:shadow-[0_0_24px_hsl(22_100%_52%_/_0.65)] transition-shadow duration-300">
              <img src={logoImage} alt="Logo" className="w-6 h-6 object-contain" />
              {/* ember dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent animate-pulse-ember" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-900 text-xl uppercase tracking-[0.12em] text-foreground group-hover:text-fire transition-colors duration-200">
                FAV
              </span>
              <span className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.2em] font-medium">
                Asadores & Parrillas
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <a
                className={`relative text-xs font-heading font-700 uppercase tracking-[0.15em] transition-colors duration-200 pb-1 ${
                  location === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {location === link.path && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-primary to-accent" />
                )}
              </a>
            </Link>
          ))}
          <a
            href="https://wa.me/5493492588185"
            target="_blank"
            rel="noreferrer"
            className="relative overflow-hidden group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-md font-heading font-700 text-xs uppercase tracking-[0.12em] transition-all duration-300 shadow-[0_0_16px_hsl(22_100%_52%_/_0.35)] hover:shadow-[0_0_24px_hsl(22_100%_52%_/_0.55)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent/60 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Phone size={13} className="relative z-10" />
            <span className="relative z-10">Contacto</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-panel"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 260 }}
                className="absolute right-0 top-0 bottom-0 w-72 bg-card border-l border-primary/20 shadow-[-8px_0_40px_hsl(22_100%_52%_/_0.15)] flex flex-col p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="self-end mb-8 p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <X size={22} />
                </button>

                {/* Fire divider */}
                <div className="divider-fire mb-8 opacity-60" />

                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <Link key={link.path} href={link.path}>
                      <a
                        className={`flex items-center gap-3 font-heading text-2xl uppercase tracking-[0.1em] transition-colors ${
                          location === link.path
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        style={{ animationDelay: `${i * 60}ms` }}
                      >
                        {location === link.path && <Flame size={16} className="text-primary shrink-0" />}
                        {link.name}
                      </a>
                    </Link>
                  ))}
                </div>

                <div className="divider-fire mt-8 mb-8 opacity-40" />

                <a
                  href="https://wa.me/5493492588185"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-3 rounded-md bg-primary text-white p-4 font-heading font-700 uppercase tracking-widest text-sm shadow-[0_0_20px_hsl(22_100%_52%_/_0.4)]"
                >
                  <Phone size={17} /> WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>,
        document.body,
      )}
    </header>
  );
}
