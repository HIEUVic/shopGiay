import { getCart, saveCart } from './CartStorage'
import './Style.css'

function AddToCart({
  product,
  size,
  quantity
}) {
  function handleAddToCart() {

    if (!size) {
      alert('Vui lòng chọn size giày')
      return
    }

    const cart = getCart()

    const existingItem = cart.find(
      (item) =>
        item.id === product.id &&
        item.size === size
    )

    let newCart

    if (existingItem) {

      newCart = cart.map((item) =>
        item.id === product.id &&
        item.size === size
          ? {
              ...item,
              quantity:
                item.quantity + quantity
            }
          : item
      )

    } else {

      newCart = [
        ...cart,
        {
          id: product.id,
          name: product.name,
          brand: product.brand,
          price: product.price,
          image: product.image,
          size,
          quantity
        }
      ]

    }

    saveCart(newCart)

    window.dispatchEvent(
      new Event('cartUpdated')
    )

    alert('Đã thêm sản phẩm vào giỏ hàng')
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