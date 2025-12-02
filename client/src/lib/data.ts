import { Car, Flame, Info, MapPin, Phone, ShieldCheck, Truck, UtensilsCrossed } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Asador tambor completo",
    description: "Simple, práctico y rendidor. Perfecto para quienes aman el sabor del asado a la leña y buscan durabilidad en su inversión. Un tambor, mil momentos compartidos",
    price: 195000,
    category: "Parrillas",
    image: "@assets/product1.png", // Will map to generated assets
    features: ["Hierro macizo", "Portátil", "Facil limpieza", "Ruedas reforzadas"]
  },
  {
    id: 2,
    name: "Asador rectangular Premium",
    description: "El lujo del asador moderno: amplio, cómodo y con tabli­ta de regalo para cortar y servir. Perfecto para el asador detallista que cuida cada punto del fuego.",
    price: 240000,
    category: "Asadores",
    image: "@assets/product2.png",
    features: ["Hierro macizo", "Portátil", "Liviano", "Tabla rebatible"]
  },
  {
    id: 3,
    name: "Medio Tambor",
    description: "Compacto, pero poderoso. Ideal para espacios chicos y departamentos. Y de yapa  ¡viene con parrilla de regalo! Porque el fuego se disfruta en todos los tamaños .",
    price: 100.000,
    category: "Parrillas",
    image: "@assets/product3.png",
    features: ["Pequeño", "Liviana", "Incluye parrilla", "Fácil limpieza"]
  },
  {
    id: 4,
    name: "Asador Horno vertical 2 en 1",
    description: "Horno asador vertical de tambor con tres niveles revestidos en ladrillos refractarios. Abajo: cámara de fuego. Medio: funciona como horno por calor inferior y superior. Arriba: parrilla para asar. Permite cocinar al horno y a la parrilla al mismo tiempo, con excelente retención de calor y bajo consumo.",
    price: 200.000,
    category: "Fogoneros",
    image: "@assets/hero2.png",
    features: ["Tambor vertical", "Vajo consumo", "Incluye parrilla"]
  },
  {
    id: 5,
    name: "Kit Parrillero Pro",
    description: "Set completo de herramientas: Pala, atizador, pinza y tenedor. Todo lo que necesitas para dominar el fuego.",
    price: 45000,
    category: "Accesorios",
    image: "@assets/workshop.png", // Placeholder
    features: ["Mango de madera", "Hierro 8mm", "Largo 80cm"]
  },
  {
    id: 6,
    name: "Disco de Arado Original",
    description: "Disco de arado auténtico curado, con patas desmontables y tapa. Para los mejores guisos y pollos al disco.",
    price: 95000,
    category: "Discos",
    image: "@assets/hero1.png", // Placeholder
    features: ["Acero boro", "Patas a rosca", "Tapa con chimenea"]
  },
  {
    id: 7,
    name: "Brasero Uruguayo",
    description: "Cesta leñera tipo uruguayo para generar brasas de forma constante y separada de la carne.",
    price: 55000,
    category: "Accesorios",
    image: "@assets/product1.png", // Placeholder
    features: ["Hierro reforzado", "Separa brasas", "Alta durabilidad"]
  },
  {
    id: 8,
    name: "Plancheta 2 Hornallas",
    description: "Plancha de hierro para dos hornallas. Cocina vegetales, carnes y huevos de forma práctica.",
    price: 35000,
    category: "Accesorios",
    image: "@assets/product2.png", // Placeholder
    features: ["Hierro 3.2mm", "Bordes plegados", "Apta fuego directo"]
  },
  {
    id: 9,
    name: "Parrilla Rodante Full",
    description: "Parrilla completa con tejuelas refractarias, tapa y mesada lateral de madera.",
    price: 380000,
    category: "Parrillas",
    image: "@assets/product3.png", // Placeholder
    features: ["Tejuelas refractarias", "Tapa corrediza", "Mesada lateral"]
  },
];

export const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Catálogo", path: "/catalogo" },
  { name: "Dónde Estamos", path: "/donde-estamos" },
  { name: "Nosotros", path: "/nosotros" },
];
