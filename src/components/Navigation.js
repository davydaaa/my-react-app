import React from 'react';

function Navigation() {
  return (
    <nav>
      <div className="schoolpens-info">
        <img src="/schoolpens.jpg" alt="schoolpens" />
        <div className="schoolpens-description">
          <h2>SchoolPen info</h2>
          <p>SchoolPen: A platform designed for students, educators, and lifelong learners, providing an extensive array of resources and tools to foster academic excellence, inspire creativity, and document your educational journey. </p>
          <p>From interactive study materials to collaborative projects and knowledge-sharing, SchoolPen is your gateway to enriching your educational experience and sharing your intellectual achievements with the world.</p>
          <button>Read More</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;