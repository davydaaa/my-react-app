// CatalogPage.js
import React, { useState, useEffect } from 'react';
import NewSchoolPenComponent from './NewSchoolPenComponent';
import { Link } from 'react-router-dom';

function CatalogPage({ addToCart }) {
  const initialVisibleCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isExpanded, setIsExpanded] = useState(false);
  const [schoolpenTypes, setSchoolpenTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/schoolpenTypes')
      .then(response => response.json())
      .then(data => {
        setSchoolpenTypes(data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching schoolpen types:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const handleViewMoreClick = () => {
    if (isExpanded) {
      setVisibleCount(initialVisibleCount);
    } else {
      setVisibleCount(schoolpenTypes.length);
    }
    setIsExpanded(prevExpanded => !prevExpanded);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Product added to cart!');
  };

  const staticImage = '/schoolpen.png'; // Replace with your actual static image path

  return (
    <div className="catalog-page">
      {isLoading ? (
        // Display loader while data is being fetched
        <div className="loader">Loading...</div>
      ) : (
        <div>
          <div className="catalog-column">
            {schoolpenTypes.slice(0, visibleCount).map(schoolpen => (
              <div key={schoolpen.id} className="product-card">
                <img src={schoolpen.image || staticImage} alt={schoolpen.name} />
                <h3>{schoolpen.name}</h3>
                <p>{schoolpen.description}</p>
                <p>Price: ${schoolpen.price}</p>
                <Link to={`/product/${schoolpen.id}`}>
                  <button className="view-more-button">View More</button>
                </Link>
                <button onClick={() => handleAddToCart(schoolpen)}>Add to Cart</button>
              </div>
            ))}
          </div>
          {visibleCount < schoolpenTypes.length && (
            <div className="view-more-container">
              <button className="view-more" onClick={handleViewMoreClick}>
                {isExpanded ? 'View Less' : 'View More'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CatalogPage;
