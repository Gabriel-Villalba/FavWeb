import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { navLinks } from "@/lib/data";
import logoImage from "@assets/generated_images/iconFav.png";

function Brand() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-sun">
        <img src={logoImage} alt="Logo" className="h-6 w-6 object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl font-extrabold tracking-tight">FAV</span>
        <span className="text-[0.65rem] font-semibold text-muted-foreground">Asadores & Parrillas</span>
      </span>
    </span>
  );
}

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border bg-white/85 pl-2 pr-2 backdrop-blur-xl transition-shadow duration-300 md:h-16 md:pl-3 md:pr-3 ${
          scrolled ? "border-border shadow-soft" : "border-white/70 shadow-sm"
        }`}
      >
        <Link href="/">
          <a aria-label="FAV, ir al inicio"><Brand /></a>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <a
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  location === link.path
                    ? "bg-peach text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
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
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-pop transition hover:-translate-y-0.5"
          >
            <Phone size={15} /> Contacto
          </a>
        </nav>

        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <Menu size={22} />
        </button>
      </div>

      {isOpen && createPortal(
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex flex-col overflow-hidden bg-background px-5 pb-6 pt-3 md:hidden"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sun/70" />
          <div className="pointer-events-none absolute -left-20 bottom-24 h-48 w-48 rounded-full bg-aqua" />

          <div className="relative flex h-14 items-center justify-between">
            <Brand />
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
              className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-soft"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="relative mt-8 flex flex-col">
            {navLinks.map((link, i) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`flex items-center justify-between border-b border-border/80 py-4 font-heading text-4xl font-extrabold tracking-tight ${
                    location === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  <span>
                    <span className="mr-3 align-middle text-sm font-bold text-muted-foreground">0{i + 1}</span>
                    {link.name}
                  </span>
                  <ArrowUpRight size={26} className="opacity-60" />
                </a>
              </Link>
            ))}
          </nav>

          <a
            href="https://wa.me/5493492588185"
            target="_blank"
            rel="noreferrer"
            className="relative mt-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary p-4 text-base font-bold text-primary-foreground shadow-pop"
          >
            <Phone size={18} /> WhatsApp
          </a>
        </motion.div>,
        document.body,
      )}
    </header>
  );
}
