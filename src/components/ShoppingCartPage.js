// ShoppingCartPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartItem from './CartItem';

function ShoppingCartPage({ cart, removeFromCart, checkout }) {
  const [quantityMap, setQuantityMap] = useState(() => {
    const storedQuantityMap = localStorage.getItem('quantityMap');
    return storedQuantityMap ? JSON.parse(storedQuantityMap) : {};
  });

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantityMap((prevQuantityMap) => {
      const updatedQuantityMap = {
        ...prevQuantityMap,
        [productId]: newQuantity,
      };

      localStorage.setItem('quantityMap', JSON.stringify(updatedQuantityMap));

      return updatedQuantityMap;
    });
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * (quantityMap[item.id] || item.quantity),
      0
    );
  };

  useEffect(() => {
    // Зберігаємо корзину в localStorage при зміні
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="shopping-cart-page">
      <Header cartCount={cart.length} />
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            quantity={quantityMap[item.id] || item.quantity}
            onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <div className="total-price">
        <p>Total: ${calculateTotal().toFixed(2)}</p>
      </div>
      <div className="cart-buttons">
        <button onClick={() => checkout(calculateTotal())}>Continue</button>
        <Link to="/catalog">
          <button>Back to Catalog</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCartPage;
