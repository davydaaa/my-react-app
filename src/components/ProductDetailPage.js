import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function ProductDetailPage({ products, addToCart }) {
  const { productId } = useParams();

  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    // Логіка додавання продукту в кошик
    addToCart(product);
  };

  return (
    <div className="product-detail-page">
      <Header />
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <div className="product-description">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="product-footer">
        <p>Price: ${product.price}</p>
        <div className="buttons">
          <Link to="/catalog">
            <button className="go-back-button">Go Back</button>
          </Link>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
