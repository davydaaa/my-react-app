// CatalogPage.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function CatalogPage({ products, sortType, addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const sortProducts = (a, b) => {
    if (sortType === 'priceAsc') {
      return a.price - b.price;
    } else if (sortType === 'priceDesc') {
      return b.price - a.price;
    } else if (sortType === 'nameAsc') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'nameDesc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  };

  const sortedProducts = [...products].sort(sortProducts);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div className="catalog-page">
      <h1>Catalog</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="product-list">
        {sortedProducts
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="view-more-button">View More</button>
              </Link>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CatalogPage;
