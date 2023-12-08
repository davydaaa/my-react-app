// App.js (додаємо роут для ShoppingCartPage)
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';
import ShoppingCartPage from './components/ShoppingCartPage'; 
import SortingOptions from './components/SortingOptions';
import Navigation from './components/Navigation';
import SchoolPenTypes from './components/SchoolPenTypes';
import ProductDetailPage from './components/ProductDetailPage';
import productsData from './components/productsData';

import './App.css';

function App() {
  const [sortType, setSortType] = useState('priceAsc');
  const [cart, setCart] = useState([]);

  const handleSortChange = (selectedSortType) => {
    setSortType(selectedSortType);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const checkout = (total) => {
    alert(`Your order of total $${total} was sent for processing.`);
    setCart([]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header cartCount={cart.length} />
                <Navigation />
                <SchoolPenTypes />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/catalog"
            element={
              <React.Fragment>
                <Header cartCount={cart.length} />
                <SortingOptions onSortChange={handleSortChange} />
                <CatalogPage
                  products={productsData}
                  sortType={sortType}
                  addToCart={addToCart}
                />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCartPage
                cart={cart}
                removeFromCart={removeFromCart}
                checkout={checkout}
              />
            }
          />
          <Route
            path="/product/:productId"
            element={<ProductDetailPage products={productsData} addToCart={addToCart} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
