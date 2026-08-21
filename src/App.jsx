import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Layout/Header'
import Login from './Login/Login'
import Register from './Login/Register'
import ForgotPassword from './Login/ForgotPassword'
import Products from './Products/Products'
import ProductDetail from './Products/ProductDetail'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App