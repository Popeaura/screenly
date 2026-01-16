import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // later you’ll call the backend here
    navigate("/dashboard");
  };

  return (
    <div className="app-shell">
      <Navbar />
      <div style={{ maxWidth: 380, marginTop: 40 }}>
        <h2 style={{ marginBottom: 12 }}>Log in</h2>
        <p className="small-muted" style={{ marginBottom: 24 }}>
          Access your evaluations and student dashboards.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary" style={{ width: "100%" }}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
