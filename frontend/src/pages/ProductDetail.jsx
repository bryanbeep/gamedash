import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProduct } from "../api/productService";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await getProduct(id);
        setProduct(response.data);
      } catch (err) {
        setError("No se pudo cargar el producto.");
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return <p className="detail-message">Cargando...</p>;
  }

  if (error || !product) {
    return (
      <div className="detail-message">
        <p>{error || "Producto no encontrado."}</p>
        <Link to="/tienda" className="detail-back-link">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="detail">
      <button onClick={() => navigate("/tienda")} className="detail-back">
        ← Volver al catálogo
      </button>

      <div className="detail-content">
        <div className="detail-image">
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.title} />
          ) : (
            <div className="detail-image-placeholder">🎮</div>
          )}
        </div>

        <div className="detail-info">
          <h1 className="detail-title">{product.title}</h1>

          <div className="detail-tags">
            {product.platform && (
              <span className="detail-tag detail-tag-platform">
                {product.platform}
              </span>
            )}
            {product.genre && (
              <span className="detail-tag detail-tag-genre">
                {product.genre}
              </span>
            )}
          </div>

          <p className="detail-price">${product.price}</p>

          {product.description && (
            <div className="detail-description">
              <h3>Descripción</h3>
              <p>{product.description}</p>
            </div>
          )}

          <div className="detail-stock">
            {product.stock > 0 ? (
              <span className="stock-available">
                ✓ Disponible ({product.stock} en stock)
              </span>
            ) : (
              <span className="stock-out">Sin stock</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
