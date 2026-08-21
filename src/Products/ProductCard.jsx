import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">

        <p className="product-brand">
          {product.brand}
        </p>

        <h2>{product.name}</h2>

        <p className="product-price">
          {product.price.toLocaleString('vi-VN')} ₫
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-button"
        >
          Xem chi tiết
        </Link>

      </div>

    </div>
  )
}

export default ProductCard