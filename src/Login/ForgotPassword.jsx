import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './ForgotPassword.css'

function ForgotPassword() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const handleForgotPassword = (e) => {
    e.preventDefault()

    if (!email) {
      alert('Vui lòng nhập email')
      return
    }

    alert('Yêu cầu đặt lại mật khẩu đã được gửi!')

    navigate('/login')
  }

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <h1>Quên mật khẩu</h1>

        <p className="forgot-description">
          Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu.
        </p>

        <form onSubmit={handleForgotPassword}>
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">
            Gửi yêu cầu
          </button>
        </form>

        <div className="forgot-links">
          <Link to="/login">
            Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword