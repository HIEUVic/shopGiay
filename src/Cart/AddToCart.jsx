import './Style.css'

function AddToCart({
  product,
  size,
  quantity
}) {
  async function handleAddToCart() {

    if (!size) {
      alert('Vui lòng chọn size giày')
      return
    }

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {
      alert('Vui lòng đăng nhập trước')
      return
    }

    try {

      const response = await fetch(
        'http://localhost:5000/api/cart',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: user.id,
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            size,
            quantity
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

    } catch (error) {

      console.error(error)

      alert('Không thể kết nối đến server')

    }
  }

  return (
    <button
      className="add-cart-button"
      onClick={handleAddToCart}
    >
      Thêm vào giỏ hàng
    </button>
  )
}

export default AddToCart