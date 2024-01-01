import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
    <nav className="header-navigation" aria-label="main-navigation">
      <button onClick={toggleModalOpen} className="hamburger-btn"><img src={IconMenu} alt="Open menu button"/></button>
      <ul className="link-list">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/products/category/mens">Mens</Link></li>
        <li><Link to="/products/category/womens">Womens</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <AnimatePresence>
      { modalOpen && 
        <div className="nav-modal">
          <motion.div 
            className="sidebar"
            initial={{x: -250}}
            animate={{x: 0}}
            exit={{x: -250}}
          >
            <button className="close-menu-btn" onClick={toggleModalOpen}>
              <img src={IconClose} alt="Close menu icon"/>
            </button>
            <ul className="modal-list">
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/products/category/mens">Mens</Link></li>
              <li><Link to="/products/category/womens">Womens</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>
      </div>
      }
      </AnimatePresence>
    </nav>
  )
};

export default Navbar;