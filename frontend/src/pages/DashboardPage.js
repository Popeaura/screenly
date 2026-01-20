import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const mockEvaluations = [
  {
    id: 1,
    candidateName: "John Doe",
    skill: "Math",
    score: 78,
    createdAt: "2026-01-10",
  },
  {
    id: 2,
    candidateName: "Anne Wanjiru",
    skill: "English",
    score: 88,
    createdAt: "2026-01-13",
  },
  {
    id: 3,
    candidateName: "Brian Otieno",
    skill: "Frontend Dev",
    score: 92,
    createdAt: "2026-01-15",
  },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const fakeName = "Alex";

  return (
    <div className="app-shell">
      <Navbar />

      <div style={{ marginTop: 40, marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2>Welcome, {fakeName}</h2>
          <p className="small-muted">
            Here are your recent evaluations.
          </p>
        </div>
        <button
          className="btn-primary"
          onClick={() => navigate("/evaluations/new")}
        >
          + New evaluation
        </button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
            background: "#020617",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "10px 12px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "10px 12px", textAlign: "left" }}>Skill</th>
              <th style={{ padding: "10px 12px", textAlign: "left" }}>Score</th>
              <th style={{ padding: "10px 12px", textAlign: "left" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {mockEvaluations.map((ev) => (
              <tr key={ev.id}>
                <td style={{ padding: "10px 12px", borderTop: "1px solid #111827" }}>
                  {ev.candidateName}
                </td>
                <td style={{ padding: "10px 12px", borderTop: "1px solid #111827" }}>
                  {ev.skill}
                </td>
                <td style={{ padding: "10px 12px", borderTop: "1px solid #111827" }}>
                  {ev.score}
                </td>
                <td style={{ padding: "10px 12px", borderTop: "1px solid #111827" }}>
                  {ev.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
