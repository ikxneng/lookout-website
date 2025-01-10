import React, {useState} from 'react';
import './Navbar.css'; 
import logo from '../assets/Black_PNG-c6d0ce6.png';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          {["Home", "About", "Events", "Gallery", "Services", "Chat With Us"].map((item, index) => (
            <a
              key={index}
              href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} 
              className={`nav-link ${activeLink === item ? "active" : ""}`}
              onClick={() => handleLinkClick(item)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
