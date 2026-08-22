import { Link, NavLink } from 'react-router-dom'
import Search from '../Products/Search'
import CartCount from '../Cart/CartCount'
import './Header.css'

const base = import.meta.env.BASE_URL
function Header() {
  return (
    <header className="header">

      <div className="header-top">

        <Link
          to="/products"
          className="logo"
        >
         <h2> Myshoes</h2>
        </Link>

        <Search />

        <div className="header-actions">

          <Link to="/login">
            👤 Đăng nhập
          </Link>

          <Link to="/cart">
            🛒 Giỏ hàng <CartCount />
          </Link>

        </div>

      </div>

      <nav className="category-menu">

        <NavLink
          to="/products?brand=Nike"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <img src={`${base}icon/nike-icon.png`} alt="nike" />
          Nike
        </NavLink>

        <NavLink
          to="/products?brand=Adidas"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <img src={`${base}icon/adidas-icon.png`} alt="Adidas" />
          Adidas
        </NavLink>

        <NavLink
          to="/products?brand=Asics"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <img src={`${base}icon/asics-icon.png`}  alt="Asics" />
          Asics
        </NavLink>

        <NavLink
          to="/products?brand=Lacoste"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <img src={`${base}icon/lacote-icon.png`} alt="lacote" />
          Lacoste
        </NavLink>

        <NavLink
          to="/products?brand=Puma"
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          <img src={`${base}icon/puma-icon.png`} alt="puma" />
          Puma
        </NavLink>

        <NavLink to="/products">
          <img src={`${base}icon/pickleball-40x40.png`} alt="pickleball" />
          Pickleball
        </NavLink>

        <NavLink to="/products?brand=Puma">
          <img src={`${base}icon/thethao-icon.png`} alt="" />
          Thể Thao
        </NavLink>

        <NavLink to="/products?brand=Lacoste">
          <img src={`${base}icon/bag-icon.png`} alt="bag" />
          Phụ Kiện
        </NavLink>

        <NavLink>
          <img src={`${base}icon/sale-icon.png`} alt="thunder" />
          Sale
        </NavLink>

      </nav>
      

    </header>
  )
}

export default Header