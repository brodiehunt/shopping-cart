import {useEffect, useState} from 'react';
import {useParams, useOutletContext} from 'react-router-dom';
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [itemList, setitemList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();
  const {addToCart} = useOutletContext();

  useEffect(() => {
    let fetchUrl = 'https://fakestoreapi.com/products'
    if (category === 'mens') {
      const encodedCategory = encodeURIComponent("men's clothing");
      fetchUrl += `/category/${encodedCategory}`;
    }
    if (category === 'womens') {
      const encodedCategory = encodeURIComponent("women's clothing");
      fetchUrl += `/category/${encodedCategory}`;
    }
    fetch(fetchUrl, {mode: 'cors'})
      .then((response) => {
        if (!response.ok) {
          throw new Error('server error')
        }
        return response.json();
      })
      .then((data) => {
        setitemList(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))

  }, [category]);

  const productCards = itemList ? itemList.map((item, index) => {
    return (
      <ProductCard key={item.id}
        item={{...item, image: [item.image]}}
        id={item.id}
        price={item.price}
        imgUrl={[item.image]}
        title={item.title}
        handleAddToCart={addToCart}
      />
    )
  }) : null;

  if (loading) return <p>Still loading</p>
  if (error) return <p>Error</p>
  return (
    <section className="product-card-grid">
      <ProductCard 
        item={{
          id: 0,
          title: "Fall Limited Edition Sneakers",
          price: "150.00",
          image: ['/image-product-1.jpg']
        }}
        id={0}
        imgUrl={['/image-product-1.jpg']}
        title="Fall Limited Edition Sneakers"
        price={"150.00"}
        handleAddToCart={addToCart}
      />
      {productCards}
    </section>
  )
}

export default ProductList;