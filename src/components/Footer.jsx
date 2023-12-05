import {Link} from 'react-router-dom';
import Logo from '../assets/logo-white.svg';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/square-facebook.svg';
import Linkedin from '../assets/linkedin.svg';

const Footer = () => {

  return (
    <footer>
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Sneakers Company Logo"/>
        </Link>
      </div>
      <div className="link-container">
        <h2>Product</h2>
        <ul>
          <li>
            <Link to="/products">All Products</Link>
          </li>
          <li>
            <Link to="/products/category/mens">Mens</Link>
          </li>
          <li>
            <Link to="/products/category/womens">Womens</Link>
          </li>
        </ul>
      </div>
      <div className="link-container">
        <h2>Company</h2>
        <ul>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          
        </ul>
      </div>
      <div className="link-container">
        <h2>Connect</h2>
        <ul>
          <li>
            <a className="icon-link" 
              target="_blank" 
              href="https://instagram.com"
              rel="noopener noreferrer">
              <img src={Facebook} alt="facebook icon"/>
              Facebook
            </a>
          </li>
          <li>
            <a className="icon-link" 
              target="_blank" 
              href="https://facebook.com"
              rel="noopener noreferrer">
              <img src={Instagram} alt="instagram icon"/>
              Instagram
            </a>
          </li>
          <li>
            <a className="icon-link" 
              target="_blank" 
              href="https://linkedin.com"
              rel="noopener noreferrer">
              <img src={Linkedin} alt="linkedin icon"/>
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
