import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import Product from './pages/Product.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';
import Contact from './pages/Contact.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home />},
        {
          path: '/products',
          element: <ProductList />,
        },
        {
          path: '/products/:productId',
          element: <Product />,
        },
        {
          path: '/products/category/:category',
          element: <ProductList />,
        },
        {
          path: '/cart',
          element: <ShoppingCart />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
};

export default Router;
