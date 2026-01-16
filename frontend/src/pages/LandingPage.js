import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <section className="bottom-stats">
        <div>
          <div className="stat-value">2.5M+</div>
          <div className="small-muted">Total active students</div>
        </div>
        <div>
          <div className="stat-value">137</div>
          <div className="small-muted">Total courses</div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
