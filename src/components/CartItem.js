// CartItem.js
import React from 'react';

function CartItem({ item, quantity, onQuantityChange, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className='cart-name'>
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
      </div>
      <div className="item-details">
        <div className="quantity-control">
          <button onClick={() => onQuantityChange(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onQuantityChange(quantity + 1)}>+</button>
        </div>
        <p>${item.price * quantity}</p>
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;