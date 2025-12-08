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
    category: "Asadores",
    image: "@assets/product1.png", // Will map to generated assets
    features: ["Stock permanente", "Portátil", "Fácil limpieza", "Ruedas reforzadas"]
  },
  {
    id: 2,
    name: "Asador rectangular Premium",
    description: "El lujo del asador moderno: amplio, cómodo y con tabli­ta de regalo para cortar y servir. Perfecto para el asador detallista que cuida cada punto del fuego.",
    price: 240000,
    category: "Asadores",
    image: "@assets/product2.png",
    features: ["Consultar stock", "Portátil", "Liviano", "Tabla rebatible"]
  },
  {
    id: 3,
    name: "Medio Tambor",
    description: "Compacto, pero poderoso. Ideal para espacios chicos y departamentos. Y de yapa  ¡viene con parrilla de regalo! Porque el fuego se disfruta en todos los tamaños .",
    price: 100000,
    category: "Asadores",
    image: "@assets/product3.png",
    features: ["Consultar stock","Pequeño", "Incluye parrilla", "Fácil limpieza"]
  },
  {
    id: 4,
    name: "Asador Horno vertical 2 en 1",
    description: "Horno asador vertical de tambor con tres niveles revestidos en ladrillos refractarios. Abajo: cámara de fuego. Medio: funciona como horno por calor inferior y superior. Arriba: parrilla para asar. Permite cocinar al horno y a la parrilla al mismo tiempo, con excelente retención de calor y bajo consumo.",
    price: 200000,
    category: "Asador Horno",
    image: "@assets/hero2.png",
    features: ["A pedido", "Vajo consumo", "Incluye parrilla"]
  },
  {
    id: 5,
    name: "Palita y atizador",
    description: "Set completo de herramientas: Pala y atizador. Todo lo que necesitas para dominar el fuego.",
    price: 20000,
    category: "Accesorios",
    image: "@assets/workshop.png", // Placeholder
    features: ["Stock permanente","Mango de madera", "Hierro 8mm", "Largo 80cm"]
  },
  {
    id: 6,
    name: "Parrilla",
    description: "Parrilla hierro, 45 cm x 75 cm, con sector achuras.",
    price: 45000,
    category: "accesorios",
    image: "@assets/hero1.png", // Placeholder
    features: ["Stock permanente","Hierro ángulo", "Patas 13 cm", "Hierro 6mm"]
  },
  {
    id: 7,
    name: "Brasero",
    description: "Cesta leñera tipo uruguayo para generar brasas de forma constante y separada de la carne.",
    price: 35000,
    category: "Accesorios",
    image: "@assets/hero4.png", // Placeholder
    features: ["Stock permanente","Hierro reforzado", "Separa brasas", "Alta durabilidad"]
  },
  {
    id: 8,
    name: "Calentador de marcas de ganado vacuno",
    description: "El Calentador de Marcas a gas 2/4 marcas es la solución ideal para el marcado de ganado, diseñado específicamente para facilitar el trabajo en el campo",
    price: 110000,
    category: "Agro & Ganadería",
    image: "@assets/product4.png", // Placeholder
    features: ["Chapa 1.25 mm", "A gas envasado", "Dos marcas"]
  },
  {
    id: 9,
    name: "Varilla Boyero",
    description: " Varilla de hierro liso con rulo de 8 mm de grosor y de 105 cm de altura, tiene 15 cm para ser enterrado en el suelo por lo tanto el rulo esta a 90 cm del suelo una vez colocada, las dos puntas tienen una apertura de 10 cm.",
    price: 4000,
    category: "Agro & Ganadería",
    image: "@assets/product5.png", // Placeholder
    features: ["Hierro 8 mm", "Rulo aislado","Precio por unidad", "Paquete x 5 unidades"]
  },
];

export const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Catálogo", path: "/catalogo" },
  { name: "Dónde Estamos", path: "/donde-estamos" },
  { name: "Nosotros", path: "/nosotros" },
];
