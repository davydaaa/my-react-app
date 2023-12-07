import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header>
      <div id="logo_name">
        <img src="/schoolpen.png" alt="schoolpen" />
        <p>SchoolPen</p>
      </div>
      <nav>
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/catalog">Catalog</Link>
        </div>
        <div className="nav-item">
          <Link to="/shopping-cart">Cart {cartCount}</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;