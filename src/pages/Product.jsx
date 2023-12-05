import {useState, useEffect} from 'react';
import {useParams, useOutletContext} from 'react-router-dom';
import ProductImageState from '../components/ProductImageState.jsx';
import IconPlus from '../assets/icon-plus.svg';
import IconMinus from '../assets/icon-minus.svg';
import IconCart from '../assets/icon-cart-white.svg';
import ErrorComponent from '../components/ErrorComponent.jsx';
import LoadingComponent from '../components/LoadingComponent.jsx';


const Product = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [addCartError, setAddCartError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const {productId} = useParams(); 
  const {addToCart} = useOutletContext();

  useEffect(() => {
    console.log(productId);
    if (productId == 0) {
      const sampleData = {
        title: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: "125.00",
        discount: "50%",
        oldPrice: "250.00",
        image: ['/image-product-1.jpg', '/image-product-2.jpg', '/image-product-3.jpg', '/image-product-4.jpg'],
      }
      setProduct(sampleData);
      setLoading(false);
    } else {
      // do something with api data
      
      fetch(`https://fakestoreapi.com/products/${productId}`,{mode: 'cors'})
        .then((response)=> {
          if (response.status >= 400) {
            throw new Error("server error")
          }
          return response.json()
        })
        .then((data) => {
          const transformedData = {...data, image: [data.image]};
          console.log(transformedData);
          setProduct(transformedData);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        })
    }
    
    
  }, []);

  function handleAddCart(){
    if (currentQuantity === 0) {
      return setAddCartError("Must have a valid quantity");
    }
    addToCart(product, currentQuantity);
  }

  function changeQuantity(isIncrease) {
    setAddCartError(null);
    if (isIncrease) {
      setCurrentQuantity(currentQuantity + 1);
    } else {
      if (currentQuantity === 0) return
      setCurrentQuantity(currentQuantity -1);
    }
  }

  if (error) return <ErrorComponent error={error}/>
  if (loading) return <LoadingComponent />
  return (
    <div className="product-container">
      <ProductImageState lrgImages={product.image}/>
      <div className="product-info">
        <div className="company">Sneaker company</div>
        <h1>{product.title}</h1>
        <p className="description">
          {product.description}
        </p>
        <div className="price-info">
          <div className="price">
            {`$${product.price}`} 
            {product.discount && 
              <span className="discount">
                {product.discount}
              </span>
            }
          </div>
          {product.oldPrice &&
            <div className="price-old">
              {`$${product.oldPrice}`}
            </div>
          }
        </div>
        {addCartError && 
          <div className="add-cart-error-container">{addCartError}</div>
        }
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
          <button 
            onClick={handleAddCart}
            className="add-cart-btn"
          >
            <img src={IconCart} alt="add to cart icon"/>
            Add to cart
          </button>
        </div>
      </div>
    </div>  
  )
}

export default Product;