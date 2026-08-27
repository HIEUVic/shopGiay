import express from 'express'
import cors from 'cors' 
import productRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const app = express()

// Cho phép Frontend React gọi API
app.use(cors())

// Cho phép Backend đọc dữ liệu JSON
app.use(express.json())

// Api sản phẩm
app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)

// Khởi động server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Backend đang chạy tại port ${PORT}`)
})