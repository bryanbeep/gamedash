import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "../api/productService";
import AdminLayout from "../components/AdminLayout";
import "./Dashboard.css";

function Dashboard() {
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
    <AdminLayout>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Productos</h1>
          <p className="dashboard-subtitle">
            Administra el catálogo de PixelVault
          </p>
        </div>
        <button
          className="dashboard-new-btn"
          onClick={() => navigate("/products/new")}
        >
          + Nuevo producto
        </button>
      </div>

      {loading && <p className="dashboard-message">Cargando productos...</p>}
      {error && <p className="dashboard-message dashboard-error">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <div className="dashboard-empty">
          <p>No hay productos cargados todavía.</p>
          <button onClick={() => navigate("/products/new")}>
            Crear el primero
          </button>
        </div>
      )}

      {!loading && products.length > 0 && (
        <div className="dashboard-table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Plataforma</th>
                <th>Género</th>
                <th className="text-right">Precio</th>
                <th className="text-right">Stock</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="cell-title">{product.title}</td>
                  <td>
                    {product.platform && (
                      <span className="tag tag-platform">
                        {product.platform}
                      </span>
                    )}
                  </td>
                  <td>
                    {product.genre && (
                      <span className="tag tag-genre">{product.genre}</span>
                    )}
                  </td>
                  <td className="text-right cell-price">${product.price}</td>
                  <td className="text-right">{product.stock}</td>
                  <td className="text-right">
                    <button
                      className="btn-edit"
                      onClick={() => navigate(`/products/${product.id}/edit`)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(product.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}

export default Dashboard;
