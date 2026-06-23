import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <Link to={`/tienda/${product.id}`} className="product-card">
      <div className="product-image">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.title} />
        ) : (
          <div className="product-image-placeholder">🎮</div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        {product.platform && (
          <span className="product-platform">{product.platform}</span>
        )}
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
