import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location.pathname])


  function addToCart(product, quantity) {
    const newItem = {...product};
    const existingItem = cart.find((item) => item.id == newItem.id);

    if (existingItem) {
      const newState = cart.map((item, index) => {
        if (item.id == newItem.id) {
          return { ...item, quantity: item.quantity + quantity }
        }
        return item;
      })
      return setCart(newState);
    }
    newItem.quantity = quantity;
    const newState = [...cart, newItem];
    setCart(newState);
  }

  function changeCartItemQuantity(product, isIncrease) {
    
    const newState = cart.reduce((newCart, item) => {
      if (item.id === product.id) {
        const newQuantity = isIncrease ? item.quantity + 1 : item.quantity - 1;
        if (newQuantity > 0) {
          return newCart.push({...item, quantity: newQuantity})
        }
      } else {
        return newCart.push({...item})
      }
      return newCart;
    }, [])
    setCart(newState);
  }

  function deleteCartItem(id) {
    const newState = cart.filter((item) => item.id !== id)
    setCart(newState);
  }

  return (
    <div className="app-container">
      <Header 
        cart={cart}
        deleteCartItem={deleteCartItem}
        changeCartItemQuantity={changeCartItemQuantity}
      />
      <main>
        <Outlet 
          context={{addToCart}}
        />
      </main>
      <Footer />
    </div>
      
  )
}

export default App
