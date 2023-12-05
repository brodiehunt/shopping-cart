import {Link} from 'react-router-dom';

const ProductCard = ({item, imgUrl, title, price, id, handleAddToCart}) => {

  return (
    <article className="product-card">
      <div className="img-container">
        <img 
          className="product-card-img"
          alt="Some card image"
          src={imgUrl[0]}
        />
      </div>
      <h2 className="product-card-title">
        {title}
      </h2>
      <div className="product-card-price" >${price}</div>
      <div className="product-card-btns">
        <button 
          onClick={() => handleAddToCart(item, 1)}
          className="add-to-cart"
        >
          Add To Cart
        </button>
        <Link 
          to={`/products/${id}`}
          className="view-product"
        >
          View Item
        </Link>
      </div>
    </article>
  )
};

export default ProductCard;