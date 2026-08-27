import { Link, NavLink, useNavigate  } from 'react-router-dom'
import Search from '../Products/Search'
import CartCount from '../Cart/CartCount'
import './Header.css'
import { useEffect, useState } from 'react'

const base = import.meta.env.BASE_URL
function Header() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')

    return savedUser
      ? JSON.parse(savedUser)
      : null
  })
  const [showUserMenu, setShowUserMenu] = useState(false)

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('user')

    setUser(null)

    window.dispatchEvent(
      new Event('userUpdated')
    )

    window.dispatchEvent(
      new Event('cartUpdated')
    )
    navigate('/login')
  }
  useEffect(() => {
    const handleUserUpdated = () => {
      const savedUser = localStorage.getItem('user')

      setUser(
        savedUser
          ? JSON.parse(savedUser)
          : null
      )
    }

    window.addEventListener(
      'userUpdated',
      handleUserUpdated
    )

    return () => {
      window.removeEventListener(
        'userUpdated',
        handleUserUpdated
      )
    }

  }, [])
  return (
    <header className="header">

      <div className="header-top">

        <Link
          to="/products"
          className="logo"
        >
         <h2> HShop</h2>
        </Link>

        <Search />

        <div className="header-actions">

          {user ? (
            <div className="user-menu">

              <button
                className="user-button"
                onClick={() =>
                  setShowUserMenu(!showUserMenu)
                }
              >
                👤 {user.name} ▾
              </button>

              {showUserMenu && (
                <div className="user-dropdown">

                  <button
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </button>

                </div>
              )}

            </div>
          ) : (
            <Link to="/login">
              👤 Đăng nhập
            </Link>
          )}

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