import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CartItem from './CartItem'
import './Style.css'

function Cart() {
  const [cart, setCart] = useState([]) 
  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {
      return
    }

    const fetchCart = async () => {

      try {

        const response = await fetch(
          `https://shopgiay-onlb.onrender.com/api/cart/${user.id}`
        )

        const data = await response.json()

        if (!response.ok) {
          alert(data.message)
          return
        }

        setCart(data)

      } catch (error) {

        console.error(error)

        alert('Không thể kết nối đến server')

      }

    }

    fetchCart()

  }, [])

  const updateQuantity = async (
    id,
    size,
    quantity
  ) => {

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {
      alert('Vui lòng đăng nhập trước')
      return
    }

    try {

      const response = await fetch(
        `https://shopgiay-onlb.onrender.com/api/cart/${user.id}/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            size,
            quantity
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        alert(data.message)
        return
      }

      setCart(data.cart)

      window.dispatchEvent(
        new Event('cartUpdated')
      )

    } catch (error) {

      console.error(error)

      alert('Không thể kết nối đến server')

    }
  }

  const removeItem = async (id, size) => {

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {
      alert('Vui lòng đăng nhập trước')
      return
    }

    try {

      const response = await fetch(
        `https://shopgiay-onlb.onrender.com/api/cart/${user.id}/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            size
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        alert(data.message)
        return
      }

      setCart(data.cart)

      window.dispatchEvent(
        new Event('cartUpdated')
      )

    } catch (error) {

      console.error(error)

      alert('Không thể kết nối đến server')

    }
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