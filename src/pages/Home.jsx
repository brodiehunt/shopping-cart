import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-container">
        <img src="landing-img.jpg" alt="pair of white shoes on a gray background"/>
        <div className="hero-content">
          <h1>Find <br/>your <br/>feet.</h1>
          <button className="hero-btn">
            <Link to='/products'>Shop Now</Link>
          </button>
        </div>
      </section>
      <section className="category-container">
        <h2>Shop by category</h2>
        <div className="category-grid">
          <Link to="/products" className="grid-item-container">
            <div className="grid-item">
              <img src='unisex.jpg' alt="White leather unisex sneakers"/>
              <div className="grid-item-text">
                Shop All
              </div>
            </div>
          </Link>
          <Link to="/products/category/mens" className="grid-item-container">
            <div className="grid-item">
              <img src='mens.jpg' alt="White nike hightops on concrete"/>
              <div className="grid-item-text">
                Shop Mens
              </div>
            </div>
          </Link>
          <Link to="/products/category/womens" className="grid-item-container">
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