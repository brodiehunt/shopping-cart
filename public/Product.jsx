import {useState, useEffect} from 'react';
import ProductImage from '../components/ProductImage.jsx';

const Product = () => {
  const [product, setProduct] = useState(null);
  return (
    <div className="product-container">
      <ProductImage />

    </div>
  )
}

export default Product;