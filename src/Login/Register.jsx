import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Register.css'

function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      alert('Vui lòng nhập đầy đủ thông tin')
      return
    }

    if (password !== confirmPassword) {
      alert('Mật khẩu nhập lại không giống nhau')
      return
    }

    alert('Đăng ký thành công!')

    navigate('/login')
  }

  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Đăng ký</h1>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Họ và tên</label>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <div className="form-group">
            <label>Nhập lại mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Đăng ký
          </button>
        </form>

        <div className="register-links">
          <p>
            Đã có tài khoản?{' '}
            <Link to="/login">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register