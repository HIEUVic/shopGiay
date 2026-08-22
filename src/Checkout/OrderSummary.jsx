function OrderSummary({ cart }) {
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  )

  return (
    <div className="order-summary">

      <h2>Đơn hàng của bạn</h2>

      {cart.map((item) => (
        <div
          className="summary-item"
          key={`${item.id}-${item.size}`}
        >

          <img
            src={item.image}
            alt={item.name}
          />

          <div>
            <h3>{item.name}</h3>

            <p>
              Size: {item.size}
            </p>

            <p>
              Số lượng: {item.quantity}
            </p>

            <p>
              {item.price.toLocaleString('vi-VN')} ₫
            </p>
          </div>

        </div>
      ))}

      <div className="summary-total">

        <strong>Tổng tiền</strong>

        <strong>
          {total.toLocaleString('vi-VN')} ₫
        </strong>

      </div>

    </div>
  )
}

export default OrderSummary