import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h2>MYSHOES</h2>

          <p>
            Cửa hàng giày chính hãng.
          </p>

          <p>
            Mang đến những sản phẩm chất lượng
            với giá tốt nhất.
          </p>

        </div>

        <div className="footer-column">

          <h3>Danh mục</h3>

          <Link to="/products?brand=Nike">
            Nike
          </Link>

          <Link to="/products?brand=Adidas">
            Adidas
          </Link>

          <Link to="/products?brand=Asics">
            Asics
          </Link>

          <Link to="/products?brand=Lacoste">
            Lacoste
          </Link>

          <Link to="/products?brand=Puma">
            Puma
          </Link>

        </div>

        <div className="footer-column">

          <h3>Hỗ trợ</h3>

          <Link to="/products">
            Sản phẩm
          </Link>

          <Link to="/cart">
            Giỏ hàng
          </Link>

          <Link to="/checkout">
            Thanh toán
          </Link>

          <Link to="/login">
            Đăng nhập
          </Link>

        </div>

        <div className="footer-column">

          <h3>Liên hệ</h3>

          <p>
            📞 0123 456 789
          </p>

          <p>
            ✉️ support@myshoes.vn
          </p>

          <p>
            📍 Hà Nội, Việt Nam
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 MyShoes. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer