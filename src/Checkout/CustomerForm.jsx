function CustomerForm({
  customer,
  onChange
}) {
  return (
    <div className="checkout-form">

      <h2>Thông tin nhận hàng</h2>

      <div className="form-group">
        <label>Họ và tên</label>

        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={onChange}
          placeholder="Nhập họ và tên"
        />
      </div>

      <div className="form-group">
        <label>Số điện thoại</label>

        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={onChange}
          placeholder="Nhập số điện thoại"
        />
      </div>

      <div className="form-group">
        <label>Địa chỉ</label>

        <textarea
          name="address"
          value={customer.address}
          onChange={onChange}
          placeholder="Nhập địa chỉ nhận hàng"
          rows="4"
        />
      </div>

      <h2>Phương thức thanh toán</h2>

      <label className="payment-option">
        <input
          type="radio"
          name="payment"
          value="cod"
          checked={customer.payment === 'cod'}
          onChange={onChange}
        />

        Thanh toán khi nhận hàng
      </label>

      <label className="payment-option">
        <input
          type="radio"
          name="payment"
          value="bank"
          checked={customer.payment === 'bank'}
          onChange={onChange}
        />

        Chuyển khoản ngân hàng
      </label>

    </div>
  )
}

export default CustomerForm