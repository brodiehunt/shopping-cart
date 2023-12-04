import {useState, useEffect} from 'react';
import ProductImageState from '../components/ProductImageState.jsx';
import IconPlus from '../assets/icon-plus.svg';
import IconMinus from '../assets/icon-minus.svg';
import IconNext from '../assets/icon-next.svg';
import IconPrevious from '../assets/icon-next.svg';
import IconCart from '../assets/icon-cart-white.svg';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  useEffect(() => {
    const sampleData = {
      title: "Fall Limited Edition Sneakers",
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: 125.00,
      discount: "50%",
      oldPrice: 250.00,
      image: ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'],
    }
    setProduct(sampleData);
  }, []);

  function changeQuantity(isIncrease) {
    if (isIncrease) {
      setCurrentQuantity(currentQuantity + 1);
    } else {
      if (currentQuantity === 0) return
      setCurrentQuantity(currentQuantity -1);
    }
  }

  return (
    product && <div className="product-container">
    <ProductImageState lrgImages={product.image}/>
    <div className="product-info">
      <div className="company">Sneaker company</div>
      <h1>{product.title}</h1>
      <p className="description">
        {product.description}
      </p>
      <div className="price-info">
        <div className="price">
          {`$${product.price}.00`} 
          {product.discount && 
            <span className="discount">
              {product.discount}
            </span>
          }
        </div>
        {product.oldPrice &&
          <div className="price-old">
            {`$${product.oldPrice}.00`}
          </div>
        }
      </div>
      <div className="btns-container">
        <div className="quantity-container">
          <button onClick={() => changeQuantity(false)}>
            <img src={IconMinus} alt="Decrease quantity button icon"/>
          </button>
          <span className="quantity">{currentQuantity}</span>
          <button onClick={() => changeQuantity(true)}>
            <img src={IconPlus} alt="Increase quantity button icon"/>
          </button>
        </div>
        <button className="add-cart-btn">
          <img src={IconCart} alt="add to cart icon"/>
          Add to cart
        </button>
      </div>
    </div>
  </div>
      
  )
}

export default Product;