import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getProducts, deleteProduct } from "../api/productService";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      setProducts(response.data);
    } catch (err) {
      setError("Error al cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("¿Eliminar este producto?")) return;
    try {
      await deleteProduct(id);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      alert("Error al eliminar el producto");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <div>
          <h1>GameDash</h1>
          <p>Hola, {user?.username}</p>
        </div>
        <button onClick={logout}>Cerrar sesión</button>
      </header>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => navigate("/products/new")}>
          + Nuevo producto
        </button>
      </div>

      {loading && <p>Cargando productos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && products.length === 0 && (
        <p>No hay productos cargados todavía.</p>
      )}

      {!loading && products.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ccc" }}>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Título</th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>
                Plataforma
              </th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Género</th>
              <th style={{ textAlign: "right", padding: "0.5rem" }}>Precio</th>
              <th style={{ textAlign: "right", padding: "0.5rem" }}>Stock</th>
              <th style={{ padding: "0.5rem" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "0.5rem" }}>{product.title}</td>
                <td style={{ padding: "0.5rem" }}>{product.platform}</td>
                <td style={{ padding: "0.5rem" }}>{product.genre}</td>
                <td style={{ padding: "0.5rem", textAlign: "right" }}>
                  ${product.price}
                </td>
                <td style={{ padding: "0.5rem", textAlign: "right" }}>
                  {product.stock}
                </td>
                <td style={{ padding: "0.5rem" }}>
                  <button
                    style={{ marginRight: "0.5rem" }}
                    onClick={() => navigate(`/products/${product.id}/edit`)}
                  >
                    Editar
                  </button>
                  <button onClick={() => handleDelete(product.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;
