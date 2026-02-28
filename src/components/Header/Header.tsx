import './Header.css';

function Header({ cartCount = 0 }) {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-icon">🛒</span>
        <h1>ShopBoard</h1>
      </div>

      <nav className="header-nav">
        <a href="#" className="nav-link">Produits</a>
        <a href="#" className="nav-link">Catégories</a>
        <a href="#" className="nav-link">Stats</a>
      </nav>

      <div className="header-cart">
        <button className="cart-button">
          🛍️ Panier
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;