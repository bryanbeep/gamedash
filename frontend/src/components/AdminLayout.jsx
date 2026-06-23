import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { JoystickIcon } from "./Icons";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="admin-header-container">
          <Link to="/dashboard" className="admin-logo">
            <JoystickIcon size={24} className="admin-logo-icon" />
            <span className="admin-logo-text">PixelVault</span>
            <span className="admin-badge">Admin</span>
          </Link>
          <div className="admin-user">
            <span className="admin-user-name">{user?.username}</span>
            <button onClick={handleLogout} className="admin-logout-btn">
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>
      <main className="admin-main">{children}</main>
    </div>
  );
}

export default AdminLayout;
