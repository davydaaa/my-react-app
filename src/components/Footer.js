import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-text">
          Schoolpen: Your Gateway to Educational Excellence and Inspiration.
          </p>
        </div>
        <div className="footer-right">
          <img src="/youtube.png" alt="YouTube" />
          <img src="/facebook.png" alt="Facebook" />
          <img src="/twitter.png" alt="Twitter" />
          <img src="/linkedin.png" alt="LinkedIn" />
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="copyright">&copy; 2023 IoT. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;