import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon"></span>
          <span className="logo-text">PixelVault</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/tienda">Catálogo</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navbar-admin-link">
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
