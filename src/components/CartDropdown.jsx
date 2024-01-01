import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CartIcon from '../assets/icon-cart.svg';
import CartItem from './CartItem';
import IconClose from '../assets/icon-close.svg';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%'}
}

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
      <AnimatePresence>
        {modalOpen &&
          <motion.div
            initial={{x: 360}}
            animate={{x: 0}}
            exit={{x: 360}}
            className="cart-dropdown">
            <h2>Cart</h2>
            <button 
              onClick={toggleModal}
              className="exit-cart"
            >
              <img src={IconClose} alt="close cart button" />
            </button>
            <div className="items-container">
              {cartItems.length > 0 ? (
                  cartItems
                ) : (
                  <div className="no-items">Your cart is empty.</div>
                )
              }
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default CartDropdown;