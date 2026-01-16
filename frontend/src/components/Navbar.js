import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="logo-circle" />
        <span className="brand-text">Dev.</span>
      </div>

      <nav className="nav-links">
        <span>Home</span>
        <span>About Us</span>
        <span>Courses</span>
        <span>Contact</span>
      </nav>

      <div className="nav-actions">
        <button className="btn-outline">Log in</button>
        <button className="btn-solid">Start Free Trial</button>
      </div>
    </header>
  );
};

export default Navbar;
