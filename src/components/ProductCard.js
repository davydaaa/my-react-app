import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart, searchTerm }) {
  return (
    <div className="product-card">
      {product.name.toLowerCase().includes(searchTerm.toLowerCase()) && (
        <><Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </Link><button className="view-more-button">View More</button><button onClick={() => addToCart(product)}>Add to Cart</button></>
      )}
    </div>
  );
}

export default ProductCard;
