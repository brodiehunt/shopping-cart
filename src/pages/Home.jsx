import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section aria-labelledby="main-heading" className="hero-container">
        <img src="landing-img.jpg" alt="pair of white shoes on a gray background"/>
        <div className="hero-content">
          <h1 id="main-heading">Find <br/>your <br/>feet.</h1>
            <Link to='/products' className="hero-btn">Shop Now</Link>
        </div>
      </section>
      <section aria-labelledby="category-heading" className="category-container">
        <h2 id="category-heading">Shop by category</h2>
        <div className="category-grid">
          <Link to="/products" className="grid-item-container" aria-label="Shop All Products">
            <div className="grid-item">
              <img src='unisex.jpg' alt="White leather unisex sneakers"/>
              <div className="grid-item-text">
                Shop All
              </div>
            </div>
          </Link>
          <Link to="/products/category/mens" className="grid-item-container" aria-label="Shop mens products">
            <div className="grid-item">
              <img src='mens.jpg' alt="White nike hightops on concrete"/>
              <div className="grid-item-text">
                Shop Mens
              </div>
            </div>
          </Link>
          <Link to="/products/category/womens" className="grid-item-container" aria-label="Shop womens products">
            <div className="grid-item">
              <img src='womens.jpg' alt="Colorful sneakers on a pedastool"/>
              <div className="grid-item-text">
                Shop Womens
              </div>
            </div>
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home;