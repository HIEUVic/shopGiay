import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './login.css'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Vui lòng nhập đầy đủ email và mật khẩu')
      return
    }

    alert('Đăng nhập thành công!')
    navigate('/products')
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Đăng nhập</h1>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Đăng nhập
          </button>
        </form>

        <div className="login-links">
          <Link to="/forgot-password">
            Quên mật khẩu?
          </Link>

          <p>
            Chưa có tài khoản?{' '}
            <Link to="/register">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login