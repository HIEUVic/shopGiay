import orders from '../data/orders.js'
import carts from '../data/carts.js'

export const createOrder = (req, res) => {

  const {
    userId,
    customer
  } = req.body

  if (
    !userId ||
    !customer ||
    !customer.name ||
    !customer.phone ||
    !customer.address
  ) {
    return res.status(400).json({
      message: 'Vui lòng nhập đầy đủ thông tin'
    })
  }

  const userCart = carts.find(
    (cart) => cart.userId === Number(userId)
  )

  if (
    !userCart ||
    userCart.items.length === 0
  ) {
    return res.status(400).json({
      message: 'Giỏ hàng đang trống'
    })
  }

  const total = userCart.items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  )

  const order = {
    id: Date.now(),
    userId: Number(userId),
    customer,
    items: [...userCart.items],
    total,
    date: new Date().toLocaleString('vi-VN')
  }

  orders.push(order)

  userCart.items = []

  res.status(201).json({
    message: 'Đặt hàng thành công',
    order
  })
}