import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Black_PNG-c6d0ce6.png";
import { FaBars, FaTimes } from "react-icons/fa"; 



const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);

  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {["Home", "About", "Events", "Services", "Gallery", "Chat With Us"].map(
            (item, index) => {
              const path = item === "Home" ? "/" : `/${item.replace(/\s+/g, "-").toLowerCase()}`;
              return(
              <Link
                key={index}
                to={path}
                className={`nav-link ${activeLink === item ? "active" : ""}`}
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </Link>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
