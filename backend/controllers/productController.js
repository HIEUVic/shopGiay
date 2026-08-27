import products from '../data/products.js'

export const getProducts = (req, res) => {
  res.json(products)
}

export const getProductById = (req, res) => {
  const id = Number(req.params.id)

  const product = products.find(
    (product) => product.id === id
  )

  if (!product) {
    return res.status(404).json({
      message: 'Không tìm thấy sản phẩm'
    })
  }

  res.json(product)
}