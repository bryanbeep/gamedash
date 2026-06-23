import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">🎮 PixelVault</span>
          <p className="footer-tagline">Revive la era dorada</p>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} PixelVault. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
