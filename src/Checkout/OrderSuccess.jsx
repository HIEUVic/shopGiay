import { Link } from 'react-router-dom'
import './Checkout.css'

function OrderSuccess() {
  return (
    <div className="checkout-empty">

      <h1>Đặt hàng thành công!</h1>

      <p>
        Cảm ơn bạn đã mua hàng.
      </p>

      <Link to="/products">
        Tiếp tục mua hàng
      </Link>

    </div>
  )
}

export default OrderSuccess