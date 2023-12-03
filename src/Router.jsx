import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import Product from './pages/Product.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';


const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <h1>This is the error page</h1>,
      children: [
        {index: true, element: <Home />},
        {
          path: '/products',
          element: <ProductList />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
        {
          path: '/products/category/:category',
          element: <ProductList />,
        },
        {
          path: '/cart',
          element: <ShoppingCart />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
};

export default Router;
