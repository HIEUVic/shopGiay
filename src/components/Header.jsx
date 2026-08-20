function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          KICKS
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button>🔍</button>
        </div>

        <div className="header-actions">
          <a href="/login">👤 Đăng nhập</a>
          <a href="/cart">🛒 Giỏ hàng</a>
        </div>
      </div>

      <nav className="category-menu">
        <a href="/products">Tất cả sản phẩm</a>
        <a href="/products">Nike</a>
        <a href="/products">Adidas</a>
        <a href="/products">Asics</a>
        <a href="/products">Lacoste</a>
        <a href="/products">Puma</a>
      </nav>
    </header>
  )
}

export default Header