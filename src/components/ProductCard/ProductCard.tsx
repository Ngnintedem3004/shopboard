import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  // Calcul du prix avec réduction
  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.discount > 0 && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>

        <div className="product-price">
          {product.discount > 0 && (
            <span className="original-price">{product.price.toFixed(2)} €</span>
          )}
          <span className="final-price">{finalPrice.toFixed(2)} €</span>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
        >
          {product.stock > 0 ? 'Ajouter au panier' : 'Rupture de stock'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;