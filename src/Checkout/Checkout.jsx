import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import CustomerForm from './CustomerForm'
import OrderSummary from './OrderSummary'

import { getCart, saveCart } from '../Cart/CartStorage'
import { saveOrder } from './OrderStorage'

import './Checkout.css'

function Checkout() {
  const navigate = useNavigate()

  const [cart] = useState(getCart)

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'cod'
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setCustomer({
      ...customer,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !customer.name ||
      !customer.phone ||
      !customer.address
    ) {
      alert('Vui lòng nhập đầy đủ thông tin')
      return
    }

    const total = cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    )

    const order = {
      id: Date.now(),
      customer,
      items: cart,
      total,
      date: new Date().toLocaleString('vi-VN')
    }

    saveOrder(order)

    saveCart([])

    window.dispatchEvent(
      new Event('cartUpdated')
    )

    navigate('/order-success')
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">

        <h1>Thanh toán</h1>

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
    <div className="checkout-page">

      <div className="checkout-container">

        <h1>Thanh toán</h1>

        <div className="checkout-content">

          <CustomerForm
            customer={customer}
            onChange={handleChange}
          />

          <OrderSummary
            cart={cart}
          />

        </div>

        <button
          className="order-button"
          onClick={handleSubmit}
        >
          Đặt hàng
        </button>

      </div>

    </div>
  )
}

export default Checkout