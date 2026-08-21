import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Cart.css'

function Cart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')

    return savedCart ? JSON.parse(savedCart) : []
  })

  const updateQuantity = (id, size, quantity) => {
    const newCart = cart.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity }
        : item
    )

    setCart(newCart)

    localStorage.setItem(
      'cart',
      JSON.stringify(newCart)
    )
  }

  const removeItem = (id, size) => {
    const newCart = cart.filter(
      (item) =>
        !(item.id === id && item.size === size)
    )

    setCart(newCart)

    localStorage.setItem(
      'cart',
      JSON.stringify(newCart)
    )
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Giỏ hàng</h1>

        <p>
          Giỏ hàng của bạn đang trống.
        </p>

        <Link to="/products">
          Tiếp tục mua hàng
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-container">

        <h1>Giỏ hàng</h1>

        <div className="cart-list">

          {cart.map((item) => (
            <div
              className="cart-item"
              key={`${item.id}-${item.size}`}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-info">

                <p className="cart-brand">
                  {item.brand}
                </p>

                <h2>
                  {item.name}
                </h2>

                <p>
                  Size: {item.size}
                </p>

                <p className="cart-price">
                  {item.price.toLocaleString('vi-VN')} ₫
                </p>

              </div>

              <div className="cart-quantity">

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.size,
                      Math.max(
                        1,
                        item.quantity - 1
                      )
                    )
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.size,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>

              </div>

              <button
                className="remove-button"
                onClick={() =>
                  removeItem(
                    item.id,
                    item.size
                  )
                }
              >
                Xóa
              </button>

            </div>
          ))}

        </div>

        <div className="cart-summary">

          <h2>
            Tổng tiền:{' '}
            {total.toLocaleString('vi-VN')} ₫
          </h2>

          <Link
            to="/checkout"
            className="checkout-button"
          >
            Tiến hành thanh toán
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Cart