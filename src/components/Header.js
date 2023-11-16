import React from 'react';

function Header() {
  return (
    <header>
      <div id="logo_name">
        <img src="/schoolpen.png" alt="schoolpen" />
      </div>
      <nav>
        <div className="nav-item">
          <a href="#">Home</a>
        </div>
        <div className="nav-item">
          <a href="#">Catalog</a>
        </div>
        <div className="nav-item">
          <a href="#">Cart</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;