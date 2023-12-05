import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import CartIcon from '../assets/icon-cart.svg';
import CartItem from './CartItem';

const CartDropdown = ({cart, deleteCartItem, changeCartItemQuantity}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setModalOpen(false);
  }, [location.pathname]);

  function toggleModal() {
    setModalOpen(!modalOpen);
  };

  const cartItems = cart.map((item) => {
    return (
      <CartItem 
        key={item.id}
        id={item.id}
        imageUrl={item.image[0]}
        title={item.title}
        price={item.price}
        quantity={item.quantity}
        total={item.quantity * (parseFloat(item.price))}
        deleteCartItem={deleteCartItem}
      />
    )
  })

  return (
    <div className="cart-icon-container">
      <button onClick={toggleModal} className="cart-btn">
        {cart.length > 0 && <div className="cart-value">{cart.length}</div>}
        <img src={CartIcon} alt="Shopping Cart Icon" />
      </button>
      {modalOpen &&
        <div className="cart-dropdown">
          <h2>Cart</h2>
          <div className="items-container">
            {cartItems.length > 0 ? (
                cartItems
              ) : (
                <div className="no-items">Your cart is empty.</div>
              )
            }
          </div>
        </div>
      }
    </div>
  )
}

export default CartDropdown;