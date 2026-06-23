import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(username, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Link to="/" className="login-logo">
          <span className="login-logo-icon">🎮</span>
          <span className="login-logo-text">PixelVault</span>
        </Link>
        <p className="login-subtitle">Panel de administración</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" disabled={loading} className="login-submit">
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <Link to="/" className="login-back">
          ← Volver a la tienda
        </Link>
      </div>
    </div>
  );
}

export default Login;
