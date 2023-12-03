import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import './App.css'

function App() {
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>console.log(json))
  }, [])
  return (
    <div>
      <div >Navbar</div>
      <main>
        <Outlet />
      </main>
      <div>Footer</div>
    </div>
      
  )
}

export default App
