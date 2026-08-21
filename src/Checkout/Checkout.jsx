import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Checkout.css'

function Checkout() {
  const [cart] = useState(() => {
    const savedCart = localStorage.getItem('cart')

    return savedCart ? JSON.parse(savedCart) : []
  })

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: ''
  })

  const [payment, setPayment] = useState('cod')

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  )

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleOrder = (e) => {
    e.preventDefault()

    if (cart.length === 0) {
      alert('Giỏ hàng đang trống')
      return
    }

    if (
      !form.name ||
      !form.phone ||
      !form.address
    ) {
      alert('Vui lòng nhập đầy đủ thông tin nhận hàng')
      return
    }

    alert('Đặt hàng thành công!')

    localStorage.removeItem('cart')

    window.location.href = '/products'
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h1>Không có sản phẩm</h1>

        <p>
          Bạn chưa có sản phẩm nào trong giỏ hàng.
        </p>

        <Link to="/products">
          Quay lại sản phẩm
        </Link>
      </div>
    )
  }

  return (
    <div className="checkout-page">

      <div className="checkout-container">

        <h1>Thanh toán</h1>

        <div className="checkout-content">

          <form
            className="checkout-form"
            onSubmit={handleOrder}
          >

            <h2>Thông tin nhận hàng</h2>

            <div className="form-group">
              <label>Họ và tên</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nhập họ và tên"
              />
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="form-group">
              <label>Địa chỉ nhận hàng</label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Nhập địa chỉ nhận hàng"
                rows="4"
              />
            </div>

            <h2>Phương thức thanh toán</h2>

            <label className="payment-option">
              <input
                type="radio"
                value="cod"
                checked={payment === 'cod'}
                onChange={(e) =>
                  setPayment(e.target.value)
                }
              />

              Thanh toán khi nhận hàng
            </label>

            <label className="payment-option">
              <input
                type="radio"
                value="banking"
                checked={payment === 'banking'}
                onChange={(e) =>
                  setPayment(e.target.value)
                }
              />

              Chuyển khoản ngân hàng
            </label>

            <button
              type="submit"
              className="order-button"
            >
              Đặt hàng
            </button>

          </form>

          <div className="order-summary">

            <h2>Đơn hàng của bạn</h2>

            {cart.map((item) => (
              <div
                className="summary-item"
                key={`${item.id}-${item.size}`}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h3>{item.name}</h3>

                  <p>
                    Size: {item.size}
                  </p>

                  <p>
                    Số lượng: {item.quantity}
                  </p>
                </div>

              </div>
            ))}

            <div className="summary-total">

              <span>Tổng tiền</span>

              <strong>
                {total.toLocaleString('vi-VN')} ₫
              </strong>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout