export function getCart() {
  const savedCart = localStorage.getItem('cart')

  return savedCart
    ? JSON.parse(savedCart)
    : []
}

export function saveCart(cart) {
  localStorage.setItem(
    'cart',
    JSON.stringify(cart)
  )
}