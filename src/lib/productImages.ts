import type { Product } from "@/lib/data";

const imageModules = import.meta.glob(
  [
    "../assets/*.{png,jpg,jpeg,svg}",
    "../../attached_assets/generated_images/*.{png,jpg,jpeg,svg}",
  ],
  { eager: true },
) as Record<string, { default: string }>;

const imageMap: Record<string, string> = Object.fromEntries(
  Object.entries(imageModules).flatMap(([path, mod]) => {
    const filename = path.split("/").pop() || path;
    const lastDot = filename.lastIndexOf(".");
    const base = lastDot === -1 ? filename : filename.slice(0, lastDot);
    const ext = lastDot === -1 ? "" : filename.slice(lastDot + 1);
    const cleanBase = base.replace(/-[A-Za-z0-9]{6,}$/, "");
    const cleanFilename = ext ? `${cleanBase}.${ext}` : cleanBase;
    const url = mod.default;

    return [
      [filename, url],
      [cleanFilename, url],
      [cleanBase, url],
    ];
  }),
);

const fallbackImage =
  imageMap["medioTambor.png"] ||
  imageMap["medioTambor"] ||
  Object.values(imageMap)[0] ||
  "";

const legacyImageKeys: Record<string, string> = {
  "@assets/product1.png": "tamborCompleto.jpg",
  "@assets/product2.png": "rectangular.png",
  "@assets/product3.png": "medioTambor.png",
  "@assets/hero2.png": "tamborHornoVertical.jpeg",
  "@assets/workshop.png": "palitaYatizador.png",
  "@assets/hero1.png": "parrilla.png",
  "@assets/hero4.png": "brasero.png",
  "@assets/product4.png": "calentador.png",
  "@assets/product5.png": "varilla.png",
};

export function resolveProductImage(image: string | undefined): string {
  if (!image) return fallbackImage;
  if (image.startsWith("/") || image.startsWith("http")) return image;

  const mappedFilename = legacyImageKeys[image];
  const basename = mappedFilename || (image.includes("/") ? image.split("/").pop()! : image);
  return imageMap[basename] || fallbackImage;
}

export function getProductImages(product: Pick<Product, "images">): string[] {
  const sources = product.images?.length ? product.images : [undefined];
  return sources.map(resolveProductImage).filter(Boolean);
}
