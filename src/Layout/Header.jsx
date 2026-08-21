import { Link, NavLink } from 'react-router-dom'
import Search from '../Products/Search'
import './Header.css'

function Header() {
  return (
    <header className="header">

      <div className="header-top">

        <Link
          to="/products"
          className="logo"
        >
          KICKS
        </Link>

        <Search />

        <div className="header-actions">

          <Link to="/login">
            👤 Đăng nhập
          </Link>

          <Link to="/cart">
            🛒 Giỏ hàng
          </Link>

        </div>

      </div>

      <nav className="category-menu">

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Tất cả sản phẩm
        </NavLink>

        <NavLink
          to="/products?brand=Nike"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Nike
        </NavLink>

        <NavLink
          to="/products?brand=Adidas"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Adidas
        </NavLink>

        <NavLink
          to="/products?brand=Asics"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Asics
        </NavLink>

        <NavLink
          to="/products?brand=Lacoste"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Lacoste
        </NavLink>

        <NavLink
          to="/products?brand=Puma"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          Puma
        </NavLink>

      </nav>
      

    </header>
  )
}

export default Header