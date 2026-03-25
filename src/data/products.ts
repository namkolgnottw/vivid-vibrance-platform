import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: "abstract-geometry-print",
    image: product1,
    title: "Abstract Geometry Print",
    price: "$120.00 USD",
    description: "A striking geometric composition featuring bold shapes in red and black. Printed on archival-quality fine art paper with a natural oak frame. Perfect as a statement piece for modern interiors.",
    sizes: ['8"x10"', '12"x16"', '18"x24"', '24"x36"'],
    colors: ["Natural Oak Frame", "Black Frame", "White Frame"],
  },
  {
    id: "ink-brush-composition",
    image: product2,
    title: "Ink Brush Composition",
    price: "$95.00 USD",
    description: "Minimalist ink brush strokes on cream paper, inspired by Japanese calligraphy traditions. Each print captures the raw energy of the original brushwork. Framed in dark walnut.",
    sizes: ['8"x10"', '12"x16"', '18"x24"'],
    colors: ["Dark Walnut Frame", "Black Frame"],
  },
  {
    id: "expressionist-portrait",
    image: product3,
    title: "Expressionist Portrait",
    price: "$185.00 USD",
    description: "A vibrant expressionist portrait bursting with color and emotion. Giclée printed on heavyweight cotton canvas with museum-grade pigment inks for lasting brilliance.",
    sizes: ['12"x16"', '18"x24"', '24"x36"'],
    colors: ["Natural Oak Frame", "Gold Frame", "Unframed"],
  },
  {
    id: "golden-horizon-landscape",
    image: product4,
    title: "Golden Horizon Landscape",
    price: "$150.00 USD",
    description: "An abstract landscape featuring layers of earth tones and gold leaf accents. This mixed-media print brings warmth and depth to any room. Presented in a sleek black frame.",
    sizes: ['12"x12"', '18"x18"', '24"x24"'],
    colors: ["Black Frame", "Natural Oak Frame"],
  },
  {
    id: "bronze-figure-sculpture",
    image: product5,
    title: "Bronze Figure Sculpture",
    price: "$420.00 USD",
    description: "An elegant bronze sculpture of an abstract human figure on a natural wood base. Hand-cast using the lost-wax method. Each piece has subtle variations making it truly unique.",
    sizes: ['Small (8")', 'Medium (12")', 'Large (18")'],
    colors: ["Antique Bronze", "Polished Bronze"],
  },
  {
    id: "artisan-ceramic-vase",
    image: product6,
    title: "Artisan Ceramic Vase",
    price: "$210.00 USD",
    description: "A hand-painted ceramic vase featuring bold geometric patterns in black and white. Crafted by skilled artisans using traditional techniques. Functional art for your space.",
    sizes: ['Small (8")', 'Medium (12")', 'Large (16")'],
    colors: ["Black & White", "Earth Tones"],
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
