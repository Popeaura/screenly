import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="nav-left" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <div className="logo-circle" />
        <span className="brand-text">Dev.</span>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="nav-actions">
        <button className="btn-outline" onClick={() => navigate("/login")}>
          Log in
        </button>
        <button className="btn-solid" onClick={() => navigate("/signup")}>
          Start Free Trial
        </button>
      </div>
    </header>
  );
};

export default Navbar;
