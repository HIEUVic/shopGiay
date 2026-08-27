import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import CustomerForm from './CustomerForm'
import OrderSummary from './OrderSummary'

import './Checkout.css'

function Checkout() {
  const navigate = useNavigate()

  const [cart, setCart] = useState([])
  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {
      navigate('/login')
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

  }, [navigate])

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

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (
      !customer.name ||
      !customer.phone ||
      !customer.address
    ) {
      alert('Vui lòng nhập đầy đủ thông tin')
      return
    }

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {
      alert('Vui lòng đăng nhập trước')
      navigate('/login')
      return
    }

    try {

      const response = await fetch(
        'https://shopgiay-onlb.onrender.com/api/orders',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: user.id,
            customer
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        alert(data.message)
        return
      }

      window.dispatchEvent(
        new Event('cartUpdated')
      )

      alert(data.message)

      navigate('/order-success')

    } catch (error) {

      console.error(error)

      alert('Không thể kết nối đến server')

    }
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