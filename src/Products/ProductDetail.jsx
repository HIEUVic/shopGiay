import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import products from '../data/products'
import './ProductDetail.css'
import AddToCart from '../Cart/AddToCart'

function ProductDetail() {
  const { id } = useParams()

  const product = products.find(
    (product) => product.id === Number(id)
  )

  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Không tìm thấy sản phẩm</h1>
        <Link to="/products">
          Quay lại sản phẩm
        </Link>
      </div>
    )
  }

  

  return (
    <div className="product-detail-page">
      <div className="product-detail">

        <div className="product-detail-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-detail-info">

          <p className="detail-brand">
            {product.brand}
          </p>

          <h1>{product.name}</h1>

          <p className="detail-price">
            {product.price.toLocaleString('vi-VN')} ₫
          </p>

          <div className="detail-section">
            <h3>Chọn size</h3>

            <div className="size-list">
              {[39, 40, 41, 42, 43, 44].map((item) => (
                <button
                  key={item}
                  className={size === item ? 'size active' : 'size'}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h3>Số lượng</h3>

            <div className="quantity">

              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>
          </div>

          <AddToCart
            product={product}
            size={size}
            quantity={quantity}
          />

          <Link
            to="/products"
            className="back-products"
          >
            ← Quay lại sản phẩm
          </Link>

        </div>

      </div>
    </div>
  )
}

export default ProductDetail