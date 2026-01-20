import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CreateEvaluationPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    candidateName: "",
    candidateEmail: "",
    skill: "",
    score: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // later: send to backend
    console.log("New evaluation:", form);
    navigate("/dashboard");
  };

  return (
    <div className="app-shell">
      <Navbar />
      <div style={{ maxWidth: 480, marginTop: 40 }}>
        <h2 style={{ marginBottom: 12 }}>Create evaluation</h2>
        <p className="small-muted" style={{ marginBottom: 24 }}>
          Record a new candidate or student evaluation.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Candidate name</label>
            <input
              name="candidateName"
              value={form.candidateName}
              onChange={handleChange}
              placeholder="Student or candidate name"
            />
          </div>
          <div className="form-group">
            <label>Candidate email</label>
            <input
              type="email"
              name="candidateEmail"
              value={form.candidateEmail}
              onChange={handleChange}
              placeholder="optional@email.com"
            />
          </div>
          <div className="form-group">
            <label>Skill / role</label>
            <input
              name="skill"
              value={form.skill}
              onChange={handleChange}
              placeholder="e.g. Math, English, Frontend Dev"
            />
          </div>
          <div className="form-group">
            <label>Score (0–100)</label>
            <input
              type="number"
              name="score"
              value={form.score}
              onChange={handleChange}
              placeholder="e.g. 82"
            />
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #1f2937",
                background: "#020617",
                color: "var(--text-main)",
              }}
              placeholder="Strengths, weaknesses, next steps..."
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: "100%" }}>
            Save evaluation
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvaluationPage;
