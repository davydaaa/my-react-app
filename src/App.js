// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';
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
    // Логіка для додавання продукту до корзини
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
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
                <Header />
                <SortingOptions onSortChange={handleSortChange} />
                <CatalogPage products={productsData} sortType={sortType} addToCart={addToCart} />
                <Footer />
              </React.Fragment>
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
