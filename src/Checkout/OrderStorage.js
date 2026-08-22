export function getOrders() {
  const savedOrders = localStorage.getItem('orders')

  return savedOrders
    ? JSON.parse(savedOrders)
    : []
}

export function saveOrder(order) {
  const orders = getOrders()

  const newOrders = [
    ...orders,
    order
  ]

  localStorage.setItem(
    'orders',
    JSON.stringify(newOrders)
  )
}