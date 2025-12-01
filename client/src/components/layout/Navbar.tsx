import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { navLinks } from "@/lib/data";
import logoImage from "@assets/generated_images/iconFav.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-background/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div >
               <img src={logoImage} alt="Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none uppercase tracking-tighter">
                Fav
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Parrillas & Asadores
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <a
                className={`text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors ${
                  location === link.path ? "text-primary font-bold" : "text-foreground"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <a
            href="https://wa.me/5493492588185"
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <Phone size={16} />
            Contacto
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{isOpen &&
  createPortal(
    <div className="fixed inset-0 z-[9999] md:hidden">
      {/* Backdrop that captures clicks - calm gray */}
      <div
        className="absolute inset-0 bg-gray-700/95"
        onClick={() => setIsOpen(false)}
      />

      <div
        className="absolute inset-0 text-white flex flex-col p-8 gap-6 pointer-events-auto z-[10000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button inside overlay (visible) */}
        <button
          aria-label="Cerrar menú"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-[10001] p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <X size={22} />
        </button>
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path}>
            <a
              className={`text-2xl font-heading font-bold uppercase tracking-wide ${
                location === link.path ? "text-primary" : "text-white"
              }`}
            >
              {link.name}
            </a>
          </Link>
        ))}
        <div className="mt-auto flex flex-col gap-4">
          <a
            href="https://wa.me/5493492588185"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white p-4 rounded-lg font-bold text-center uppercase flex items-center justify-center gap-2"
          >
            <Phone size={20} /> WhatsApp
          </a>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={18} />
            <span>Erasmo Poggi 483, Rafaela</span>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )}

    </header>
  );
}
