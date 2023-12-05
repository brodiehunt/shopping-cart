import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import IconMenu from '../assets/icon-menu.svg';
import IconClose from '../assets/icon-close.svg';


const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setModalOpen(false);
  }, [location.pathname])

  function toggleModalOpen() {
    setModalOpen(!modalOpen);
  }

  return (
    <nav className="header-navigation">
      <button onClick={toggleModalOpen} className="hamburger-btn"><img src={IconMenu} alt="Open menu button"/></button>
      <ul className="link-list">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/products/category/mens">Mens</Link></li>
        <li><Link to="/products/category/womens">Womens</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      { modalOpen && 
        <div className="nav-modal">
          <div className="sidebar">
            <button className="close-menu-btn" onClick={toggleModalOpen}>
              <img src={IconClose} alt="Close menu icon"/>
            </button>
            <ul className="modal-list">
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/products/category/mens">Mens</Link></li>
              <li><Link to="/products/category/womens">Womens</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
      </div>
      }
    </nav>
  )
};

export default Navbar;