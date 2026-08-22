import { Link } from 'react-router-dom'
import { useState } from 'react'
import CartItem from './CartItem'
import { getCart, saveCart } from './CartStorage'
import './Style.css'

function Cart() {
  const [cart, setCart] = useState(getCart) 

  const updateQuantity = (
    id,
    size,
    quantity
  ) => {
    const newCart = cart.map((item) =>
      item.id === id &&
      item.size === size
        ? { ...item, quantity }
        : item
    )
    setCart(newCart)
    saveCart(newCart)

    window.dispatchEvent(
      new Event('cartUpdated')
    )
  
  }

  const removeItem = (id, size) => {
    const newCart = cart.filter(
      (item) =>
        !(
          item.id === id &&
          item.size === size
        )
    )
    setCart(newCart)
    saveCart(newCart)

    window.dispatchEvent(
      new Event('cartUpdated')
    )

  }

  // const clearCart = () => {
  //   setCart([])
  //   saveCart([])

  //   window.dispatchEvent(
  //     new Event('cartUpdated')
  //   )
  // }

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
            <CartItem
              key={`${item.id}-${item.size}`}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}

        </div>

        {/* <button
          className="clear-cart-button"
          onClick={clearCart}
        >
          Xóa toàn bộ giỏ hàng
        </button> */}

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