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
    description: "Parrilla de acero inoxidable de alta calidad con sistema de elevación frontal y emparrillado en V. Ideal para exigentes del asado.",
    price: 450000,
    category: "Parrillas",
    image: "@assets/product1.png", // Will map to generated assets
    features: ["Acero Inoxidable 304", "Sistema de elevación", "Grasera desmontable", "Ruedas reforzadas"]
  },
  {
    id: 2,
    name: "Asador rectangular Premium",
    description: "Cruz asador tradicional de hierro reforzado, perfecta para costillares y corderos a la llama. Regulable en 3 posiciones.",
    price: 85000,
    category: "Asadores",
    image: "@assets/product2.png",
    features: ["Hierro macizo", "Base giratoria 360°", "3 posiciones de inclinación", "Desmontable"]
  },
  {
    id: 3,
    name: "Medio Tambor",
    description: "La compañera ideal para tus viajes. Parrilla compacta, plegable y resistente. Llévala donde quieras.",
    price: 65000,
    category: "Parrillas",
    image: "@assets/product3.png",
    features: ["Plegable", "Liviana", "Incluye bolso", "Fácil limpieza"]
  },
  {
    id: 4,
    name: "Fogoneo Rústico",
    description: "Fogonero de diseño para jardín. Ideal para cocinar al disco o mantener el calor en noches frescas.",
    price: 120000,
    category: "Fogoneros",
    image: "@assets/hero2.png",
    features: ["Chapa calada", "Pintura alta temperatura", "Incluye estaca pequeña"]
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
