function CartItem({
  item,
  onUpdateQuantity,
  onRemove
}) {
  return (
    <div
      className="cart-item"
      key={`${item.id}-${item.size}`}
    >

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-info">

        <p className="cart-brand">
          {item.brand}
        </p>

        <h2>
          {item.name}
        </h2>

        <p>
          Size: {item.size}
        </p>

        <p className="cart-price">
          {item.price.toLocaleString('vi-VN')} ₫
        </p>

      </div>

      <div className="cart-quantity">

        <button
          onClick={() =>
            onUpdateQuantity(
              item.id,
              item.size,
              Math.max(
                1,
                item.quantity - 1
              )
            )
          }
        >
          -
        </button>

        <span>
          {item.quantity}
        </span>

        <button
          onClick={() =>
            onUpdateQuantity(
              item.id,
              item.size,
              item.quantity + 1
            )
          }
        >
          +
        </button>

      </div>

      <button
        className="remove-button"
        onClick={() =>
          onRemove(
            item.id,
            item.size
          )
        }
      >
        Xóa
      </button>

    </div>
  )
}

export default CartItem