import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/icons.css'; // Ensure the correct path to your CSS file

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="icon-con text-center">
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61551058143609" className="text-white me-3">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a href="https://www.instagram.com/" className="text-white me-3">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://twitter.com/" className="text-white">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div>    
      </div>
      <p className="mt-3">Follow us on social media for updates</p>
    </footer>
  );
}

export default Footer;
