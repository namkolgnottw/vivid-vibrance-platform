import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  { image: product1, title: "Abstract Geometry Print", price: "$120.00 USD" },
  { image: product2, title: "Ink Brush Composition", price: "$95.00 USD" },
  { image: product3, title: "Expressionist Portrait", price: "$185.00 USD" },
  { image: product4, title: "Golden Horizon Landscape", price: "$150.00 USD" },
  { image: product5, title: "Bronze Figure Sculpture", price: "$420.00 USD" },
  { image: product6, title: "Artisan Ceramic Vase", price: "$210.00 USD" },
];

const ProductGrid = () => (
  <section id="products" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
    <h2 className="section-heading mb-12">Featured Collection</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  </section>
);

export default ProductGrid;
