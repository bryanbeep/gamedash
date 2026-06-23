import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">PixelVault</h1>
          <p className="hero-tagline">Revive la era dorada</p>
          <p className="hero-description">
            Cartuchos, consolas y joyas perdidas de los 80 y 90. Una bóveda
            llena de tesoros para coleccionistas y nostálgicos.
          </p>
          <Link to="/tienda" className="hero-cta">
            Explorar catálogo
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2 className="features-title">¿Por qué PixelVault?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🕹️</div>
              <h3>Clásicos auténticos</h3>
              <p>
                Cada juego pasa por nuestro control de calidad antes de llegar a
                tus manos.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>Envío seguro</h3>
              <p>
                Embalaje especial para que tu cartucho llegue como salió de
                fábrica.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💛</div>
              <h3>Hecho con amor</h3>
              <p>Somos coleccionistas atendiendo a otros coleccionistas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
