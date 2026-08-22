import { useEffect, useState } from 'react'
import { getCart } from './CartStorage'

function CartCount() {
  const [count, setCount] = useState(() => {
    const cart = getCart()

    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    )
  })

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart()

      setCount(
        cart.reduce(
          (total, item) => total + item.quantity,
          0
        )
      )
    }

    window.addEventListener(
      'cartUpdated',
      updateCartCount
    )

    return () => {
      window.removeEventListener(
        'cartUpdated',
        updateCartCount
      )
    }
  }, [])

  return (
    <span className="cart-count">
      ({count})
    </span>
  )
}

export default CartCount