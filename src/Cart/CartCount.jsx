import { useEffect, useState } from 'react'

function CartCount() {
  const [count, setCount] = useState(0)

  const fetchCartCount = async () => {
    const savedUser = localStorage.getItem('user')

    if (!savedUser) {
      return
    }

    const user = JSON.parse(savedUser)

    try {
      const response = await fetch(
        `https://shopgiay-onlb.onrender.com/api/cart/${user.id}`
      )

      const data = await response.json()

      if (!response.ok) {
        return
      }

      const total = data.reduce(
        (sum, item) =>
          sum + item.quantity,
        0
      )

      setCount(total)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const handleCartUpdated = () => {
      fetchCartCount()
    }

    window.addEventListener(
      'cartUpdated',
      handleCartUpdated
    )

    return () => {
      window.removeEventListener(
        'cartUpdated',
        handleCartUpdated
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