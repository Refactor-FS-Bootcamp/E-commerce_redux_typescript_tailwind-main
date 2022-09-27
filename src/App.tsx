import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import WebLayout from './layouts/WebLayout/WebLayout';
import ProductDetail from './pages/ProductDetail';
import ProductsPage from './pages/ProductsPage';
import 'react-toastify/dist/ReactToastify.css';
import ProductsByCategory from './components/ProductsByCategory';
import Cart from './components/Cart/Favorite';
import AddProduct from './components/AddProductForm';
function App() {
  console.log('running')
  return (
    <div className="mx-auto">
      <main>
          <Routes>
            <Route path="/" element={<WebLayout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="categories/:id" element={<ProductsByCategory />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
      </main>
      <ToastContainer autoClose={2500} limit={5} />
    </div>
  );
}

export default App;
