import carts from '../data/carts.js'

export const getCart = (req, res) => {

  const userId = Number(req.params.userId)

  const cart = carts.find(
    (cart) => cart.userId === userId
  )

  if (!cart) {
    return res.json([])
  }

  res.json(cart.items)
}


export const addToCart = (req, res) => {

  const userId = Number(req.body.userId)

  const {
    id,
    name,
    brand,
    price,
    image,
    size,
    quantity
  } = req.body

  if (
    !userId ||
    !id ||
    !size ||
    !quantity
  ) {
    return res.status(400).json({
      message: 'Thiếu thông tin sản phẩm'
    })
  }

  let userCart = carts.find(
    (cart) => cart.userId === userId
  )

  if (!userCart) {

    userCart = {
      userId,
      items: []
    }

    carts.push(userCart)
  }

  const existingItem = userCart.items.find(
    (item) =>
      item.id === id &&
      item.size === size
  )

  if (existingItem) {

    existingItem.quantity += quantity

  } else {

    userCart.items.push({
      id,
      name,
      brand,
      price,
      image,
      size,
      quantity
    })

  }

  res.status(201).json({
    message: 'Đã thêm sản phẩm vào giỏ hàng',
    cart: userCart.items
  })
}


export const updateCart = (req, res) => {

  const userId = Number(req.params.userId)
  const itemId = Number(req.params.id)
  const size = req.body.size
  const quantity = Number(req.body.quantity)

  const userCart = carts.find(
    (cart) => cart.userId === userId
  )

  if (!userCart) {
    return res.status(404).json({
      message: 'Không tìm thấy giỏ hàng'
    })
  }

  const item = userCart.items.find(
    (item) =>
      item.id === itemId &&
      item.size === size
  )

  if (!item) {
    return res.status(404).json({
      message: 'Không tìm thấy sản phẩm'
    })
  }

  item.quantity = quantity

  res.json({
    message: 'Cập nhật giỏ hàng thành công',
    cart: userCart.items
  })
}


export const removeFromCart = (req, res) => {

  const userId = Number(req.params.userId)
  const itemId = Number(req.params.id)
  const size = req.body.size

  const userCart = carts.find(
    (cart) => cart.userId === userId
  )

  if (!userCart) {
    return res.status(404).json({
      message: 'Không tìm thấy giỏ hàng'
    })
  }

  userCart.items = userCart.items.filter(
    (item) =>
      !(
        item.id === itemId &&
        item.size === size
      )
  )

  res.json({
    message: 'Đã xóa sản phẩm khỏi giỏ hàng',
    cart: userCart.items
  })
}