import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Minus, Plus, Share2 } from "lucide-react";
import { getProductById } from "@/data/products";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <AnnouncementBar />
        <Navbar />
        <NavMenu />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Product Not Found</h2>
            <Link to="/" className="nav-link underline">Return to Store</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <NavMenu />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-8">
        <Link to="/" className="inline-flex items-center gap-2 nav-link mb-8 hover:opacity-60">
          <ArrowLeft className="w-4 h-4" /> Back to collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Image */}
          <div className="overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.title}
              className="w-full aspect-square object-cover"
              width={640}
              height={640}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {product.title}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{product.price}</p>

            <div className="mt-8 space-y-6">
              {/* Color selector */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em] font-medium text-foreground font-body block mb-2">
                  Style
                </label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-border bg-background text-foreground font-body focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  <option value="">Select a style</option>
                  {product.colors.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Size selector */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em] font-medium text-foreground font-body block mb-2">
                  Size
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-border bg-background text-foreground font-body focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  <option value="">Select a size</option>
                  {product.sizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em] font-medium text-foreground font-body block mb-2">
                  Quantity
                </label>
                <div className="inline-flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-3 text-foreground hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 py-3 text-sm font-medium text-foreground font-body min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-3 text-foreground hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="mt-8 w-full py-4 text-sm uppercase tracking-[0.25em] font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-body">
              Add to Cart
            </button>

            {/* Share */}
            <button className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
              <Share2 className="w-4 h-4" /> Share
            </button>

            {/* Description */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm leading-relaxed text-muted-foreground font-body">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
