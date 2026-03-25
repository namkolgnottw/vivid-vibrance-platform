import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
}

const ProductCard = ({ id, image, title, price }: ProductCardProps) => (
  <Link to={`/products/${id}`} className="product-card group block">
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="product-card-image"
        loading="lazy"
        width={640}
        height={640}
      />
    </div>
    <p className="product-card-title">{title}</p>
    <p className="product-card-price">{price}</p>
  </Link>
);

export default ProductCard;
