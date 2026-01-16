import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // later call backend, for now just go to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="app-shell">
      <Navbar />
      <div style={{ maxWidth: 380, marginTop: 40 }}>
        <h2 style={{ marginBottom: 12 }}>Create your account</h2>
        <p className="small-muted" style={{ marginBottom: 24 }}>
          Start evaluating students and candidates in minutes.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input placeholder="Your name" />
          </div>
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

export default SignupPage;
