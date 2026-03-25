interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard = ({ image, title, price }: ProductCardProps) => (
  <div className="product-card group">
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
  </div>
);

export default ProductCard;
