import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {/* existing fields unchanged */}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
