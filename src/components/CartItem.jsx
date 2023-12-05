import IconDelete from '../assets/icon-delete.svg';
const CartItem = ({id, imageUrl, title, price, quantity, total, deleteCartItem, changeCartItemQuantity}) => {
  
  return (
    <div className="cart-item">
      <div className="img-container">
        <img src={imageUrl} alt="dynamic image attribute"/>
      </div>
      <div className="item-info">
        <h3>{title}</h3>
        <div className="price">
          <div className="single-price">${price} x {quantity}</div>
          <div className="total">${total}</div>
        </div>
      </div>
      <button 
        onClick={() => deleteCartItem(id)}
        className="delete-icon">
        <img src={IconDelete} alt="delete cart item icon"/>
      </button>
    </div>
  )
}

export default CartItem;