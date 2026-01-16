import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Left side */}
      <div>
        <h1 className="hero-title">GROW UP YOUR SKILL IN MINUTES</h1>
        <p className="hero-subtitle">
          Explore unlimited courses and assessments that fit your process of
          skill development.
        </p>

        <div className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
          <button className="btn-ghost">Try for free</button>
        </div>

        <div className="hero-stats">
          <div className="stat-block">
            <div className="stat-badge">
              <span role="img" aria-label="smile">
                🙂
              </span>
              <span>600 happy students</span>
            </div>
            <p className="small-muted">
              “The process of evaluation has never been this easy.”
            </p>
          </div>

          <div className="stat-block">
            <span className="small-muted">Trusted worldwide</span>
            <div className="stat-value">Auto skill reports</div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="hero-figure">
        <div className="hero-card">
          <div className="hero-floating">
            <div>5 Star Rating</div>
            <div className="small-muted">
              Avg rating 4.8 makes us world best
            </div>
            <div className="rating-stars">★★★★★</div>
          </div>

          <div className="hero-photo">
            {/* Replace with your own image later */}
            Student image placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
