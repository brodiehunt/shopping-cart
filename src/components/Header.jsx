import {Link} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';
import CartDropdown from './CartDropdown.jsx';
const Header = ({cart, deleteCartItem, changeCartItemQuantity}) => {

  return (
    <header data-testid="main-header">
      <Navbar />
      <Link to="/">
       <img className="logo" src={Logo} alt="Sneakers Company Logo"/>
      </Link>
      <CartDropdown 
        deleteCartItem={deleteCartItem}
        changeCartItemQuantity={changeCartItemQuantity}
        cart={cart}
      />
      <div className="profile-icon-container">
        <img src={Avatar} alt="User profile avatar"/>
      </div>
    </header>
  )
}

export default Header;