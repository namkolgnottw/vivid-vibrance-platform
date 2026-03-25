import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductGrid = () => (
  <section id="products" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
    <h2 className="section-heading mb-12">Featured Collection</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} />
      ))}
    </div>
  </section>
);

export default ProductGrid;
