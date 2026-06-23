import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  getProduct,
  updateProduct,
} from "../api/productService";
import AdminLayout from "../components/AdminLayout";
import "./ProductForm.css";

function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState({
    title: "",
    description: "",
    genre: "",
    platform: "",
    price: "",
    stock: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEdit) {
      const loadProduct = async () => {
        try {
          const response = await getProduct(id);
          setForm({
            title: response.data.title || "",
            description: response.data.description || "",
            genre: response.data.genre || "",
            platform: response.data.platform || "",
            price: response.data.price ?? "",
            stock: response.data.stock ?? "",
            imageUrl: response.data.imageUrl || "",
          });
        } catch (err) {
          setError("Error al cargar el producto");
        }
      };
      loadProduct();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = {
        ...form,
        price: parseFloat(form.price),
        stock: parseInt(form.stock, 10) || 0,
      };

      if (isEdit) {
        await updateProduct(id, data);
      } else {
        await createProduct(data);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Error al guardar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="form-page">
        <button onClick={() => navigate("/dashboard")} className="form-back">
          ← Volver al dashboard
        </button>

        <div className="form-card">
          <h1 className="form-title">
            {isEdit ? "Editar producto" : "Nuevo producto"}
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group form-group-full">
                <label>Título *</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-group-full">
                <label>Descripción</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
            </div>

            <div className="form-row form-row-double">
              <div className="form-group">
                <label>Plataforma</label>
                <input
                  type="text"
                  name="platform"
                  value={form.platform}
                  onChange={handleChange}
                  placeholder="NES, SNES, PS1..."
                />
              </div>
              <div className="form-group">
                <label>Género</label>
                <input
                  type="text"
                  name="genre"
                  value={form.genre}
                  onChange={handleChange}
                  placeholder="RPG, Arcade, Plataformas..."
                />
              </div>
            </div>

            <div className="form-row form-row-double">
              <div className="form-group">
                <label>Precio *</label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-group-full">
                <label>URL de imagen</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={form.imageUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>
            </div>

            {error && <p className="form-error">{error}</p>}

            <div className="form-actions">
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="form-cancel"
              >
                Cancelar
              </button>
              <button type="submit" disabled={loading} className="form-submit">
                {loading
                  ? "Guardando..."
                  : isEdit
                    ? "Guardar cambios"
                    : "Crear producto"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ProductForm;
