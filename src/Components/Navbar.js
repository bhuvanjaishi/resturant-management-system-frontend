import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Scroll to top and close menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="brand">
          Restaurant<span> Booking</span>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Signup</Link>
        </nav>

        <button className={`nav-toggle ${open ? "toggle" : ""}`} onClick={() => setOpen(!open)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
