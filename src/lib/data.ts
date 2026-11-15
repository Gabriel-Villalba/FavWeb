import { Car, Flame, Info, MapPin, Phone, ShieldCheck, Truck, UtensilsCrossed } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Asador tambor completo",
    description: "Simple, práctico y rendidor. Perfecto para quienes aman el sabor del asado a la leña y buscan durabilidad en su inversión. Un tambor, mil momentos compartidos",
    price: 215000,
    category: "Asadores",
    images: ["tamborCompleto-1.jpg", "tamborCompleto-2.jpg"],
    features: ["Stock permanente", "Portátil", "Fácil limpieza", "Ruedas reforzadas"]
  },
  {
    id: 2,
    name: "Asador rectangular Premium",
    description: "El lujo del asador moderno: amplio, cómodo y con tabli­ta de regalo para cortar y servir. Perfecto para el asador detallista que cuida cada punto del fuego.",
    price: 280000,
    category: "Asadores",
    images: ["asadorrectangular-1.png", "asadorrectangular-2.jpg", "asadorrectangular-3.png"],
    features: ["Consultar stock", "Portátil", "Liviano", "Tabla rebatible"]
  },
  {
    id: 3,
    name: "Medio Tambor",
    description: "Compacto, pero poderoso. Ideal para espacios chicos y departamentos. Y de yapa  ¡viene con parrilla de regalo! Porque el fuego se disfruta en todos los tamaños .",
    price: 120000,
    category: "Asadores",
    images: ["@assets/product3.png"],
    features: ["Consultar stock","Pequeño", "Incluye parrilla", "Fácil limpieza"]
  },
  {
    id: 4,
    name: "Asador Horno vertical 2 en 1",
    description: "Horno asador vertical de tambor con tres niveles revestidos en ladrillos refractarios. Abajo: cámara de fuego. Medio: funciona como horno por calor inferior y superior. Arriba: parrilla para asar. Permite cocinar al horno y a la parrilla al mismo tiempo, con excelente retención de calor y bajo consumo.",
    price: 250000,
    category: "Asador Horno",
    images: ["@assets/hero2.png"],
    features: ["A pedido", "Bajo consumo", "Incluye parrilla"]
  },
  {
    id: 5,
    name: "Palita y atizador",
    description: "Set completo de herramientas: Pala y atizador. Todo lo que necesitas para dominar el fuego.",
    price: 20000,
    category: "Accesorios",
    images: ["@assets/workshop.png"],
    features: ["Stock permanente","Mango de madera", "Hierro 8mm", "Largo 80cm"]
  },
  {
    id: 6,
    name: "Parrilla",
    description: "Parrilla hierro, 45 cm x 75 cm, con sector achuras.",
    price: 45000,
    category: "accesorios",
    images: ["@assets/hero1.png"],
    features: ["Stock permanente","Hierro ángulo", "Patas 13 cm", "Hierro 6mm"]
  },
  {
    id: 7,
    name: "Brasero",
    description: "Cesta leñera tipo uruguayo para generar brasas de forma constante y separada de la carne.",
    price: 38000,
    category: "Accesorios",
    images: ["@assets/hero4.png"],
    features: ["Stock permanente","Hierro reforzado", "Separa brasas", "Alta durabilidad"]
  },
  {
    id: 8,
    name: "Calentador de marcas de ganado vacuno",
    description: "El Calentador de Marcas a gas 2/4 marcas es la solución ideal para el marcado de ganado, diseñado específicamente para facilitar el trabajo en el campo",
    price: 120000,
    category: "Agro & Ganadería",
    images: ["calentador-1.png", "calentador-2.png"],
    features: ["Chapa 1.25 mm", "A gas envasado", "Dos marcas"]
  },
  {
    id: 9,
    name: "Varilla Boyero",
    description: " Varilla de hierro liso con rulo de 8 mm de grosor y de 105 cm de altura, tiene 15 cm para ser enterrado en el suelo por lo tanto el rulo esta a 90 cm del suelo una vez colocada, las dos puntas tienen una apertura de 10 cm.",
    price: 4000,
    category: "Agro & Ganadería",
    images: ["@assets/product5.png"],
    features: ["Hierro 8 mm", "Rulo aislado","Precio por unidad", "Paquete x 5 unidades"]
  },
  {
    id: 10,
    name: "Traba Para Escalera De Aluminio X 2",
    description: "El traba escalera es un producto artesanal. Es telescópico, se adapta a todas las medidas.\n\nSu función principal es asegurar la escalera, evitando que se deslice o se mueva durante el uso. Se utiliza comúnmente cuando la escalera se apoya contra paredes, bordes, barandas o estructuras, proporcionando mayor estabilidad y seguridad al usuario.\n\nFotos reales, con una escalera que necesita las trabas.",
    price: 38000,
    category: "Hogar",
    images: ["trabaEscalera.jpeg", "trabaEscalera2.jpeg", "trabaEscalera3.jpeg"],
    features: ["Fabricación artesanal", "Sistema telescópico", "Se adapta a distintas medidas", "Pack x 2"]
  },
  {
    id: 11,
    name: "Soporte para manguera y limpiafondo de piscina / Organizador",
    description: "Liviano y fácil de transportar, el soporte Fav es ideal para clavarlo cerca de la piscina o moverlo donde más cómodo te quede.\n\nMuy resistente, está fabricado con materiales de excelente calidad, pintura resistente a los rayos UV y no se oxida.\n\n¡Una inversión segura que te acompañará por años! No requiere instalación: simplemente clávalo con el pie usando el peso del cuerpo y listo.\n\nLa mejor solución para tener tu piscina limpia, ordenada y lista para la acción.",
    price: 70000,
    category: "Hogar",
    images: ["organizadorPileta1.jpeg", "organizadorPileta2.jpeg"],
    features: ["Liviano y fácil de transportar", "Resistente a rayos UV", "No requiere instalación", "Se fija clavándolo con el pie"]
  },
];

export const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Catálogo", path: "/catalogo" },
  { name: "Dónde Estamos", path: "/donde-estamos" },
  { name: "Nosotros", path: "/nosotros" },
];
