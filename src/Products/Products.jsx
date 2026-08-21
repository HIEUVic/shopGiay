import { useSearchParams } from 'react-router-dom'

import products from '../data/products'

import ProductCard from './ProductCard'

import './Products.css'

function Products() {
  const [searchParams] = useSearchParams()

  const keyword = searchParams.get('search') || ''
  const brand = searchParams.get('brand') || ''

  const filteredProducts = products.filter((product) => {
    const text =
      `${product.name} ${product.brand}`.toLowerCase()

    const matchKeyword =
      text.includes(keyword.toLowerCase())

    const matchBrand =
      !brand || product.brand === brand

    return matchKeyword && matchBrand
  })

  return (
    <div className="products-page">

      <div className="products-container">

        <div className="products-header">

          <h1>Danh sách sản phẩm</h1>

          {keyword && (
            <p>
              Kết quả tìm kiếm: "{keyword}"
            </p>
          )}

        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <h2>Không tìm thấy sản phẩm</h2>

            <p>
              Không có sản phẩm phù hợp.
            </p>
          </div>
        ) : (
          <div className="products-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  )
}

export default Products