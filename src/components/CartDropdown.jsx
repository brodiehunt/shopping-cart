import {useState} from 'react';
import CartIcon from '../assets/icon-cart.svg';

const CartDropdown = () => {
  const [modalOpen, setModalOpen] = useState(false);
  let purposeFalse = false;
  function toggleModal() {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="cart-icon-container">
      <button onClick={toggleModal} className="cart-btn">
        <img src={CartIcon} alt="Shopping Cart Icon" />
      </button>
      {modalOpen &&
        <div className="cart-dropdown">
          <h2>Cart</h2>
          <div className="items-container">
            {purposeFalse ? (
                <div>Items will go here</div>
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