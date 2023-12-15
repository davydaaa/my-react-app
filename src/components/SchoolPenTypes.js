import React, { useState, useEffect } from 'react';
import NewSchoolPenComponent from './NewSchoolPenComponent';

function SchoolPenTypes() {
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

  const staticImage = '/schoolpen.png'; // Replace with your actual static image path

  return (
    <div className="schoolpen-types">
      {isLoading ? (
        // Display loader while data is being fetched
        <div className="loader">Loading...</div>
      ) : (
        <div>
          <div className="schoolpen-column">
            {schoolpenTypes.slice(0, visibleCount).map(schoolpen => (
              <NewSchoolPenComponent key={schoolpen.id} schoolpen={{ ...schoolpen, image: staticImage }} />
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

export default SchoolPenTypes;