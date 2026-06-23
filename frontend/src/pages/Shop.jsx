import { useEffect, useState } from "react";
import { getProducts } from "../api/productService";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (err) {
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="shop">
      <div className="shop-header">
        <h1 className="shop-title">Catálogo</h1>
        <p className="shop-subtitle">Explora nuestra colección de clásicos</p>
      </div>

      <div className="shop-content">
        {loading && <p className="shop-message">Cargando productos...</p>}
        {error && <p className="shop-message shop-error">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="shop-message">No hay productos disponibles todavía.</p>
        )}

        {!loading && products.length > 0 && (
          <div className="shop-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
