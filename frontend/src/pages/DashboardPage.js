import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fakeName = "Alex"; // later we’ll replace this with real user data

  useEffect(() => {
    api
      .get("evaluations/")
      .then((res) => {
        setEvaluations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to load evaluations");
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-shell">
      <Navbar />

      <div
        style={{
          marginTop: 40,
          marginBottom: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Welcome, {fakeName}</h2>
          <p className="small-muted">Here are your recent evaluations.</p>
        </div>

        <button
          className="btn-primary"
          onClick={() => navigate("/evaluations/new")}
        >
          + New evaluation
        </button>
      </div>

      {loading ? (
        <p>Loading evaluations...</p>
      ) : (
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
                <th style={{ padding: "10px 12px", textAlign: "left" }}>
                  Candidate
                </th>
                <th style={{ padding: "10px 12px", textAlign: "left" }}>
                  Skill
                </th>
                <th style={{ padding: "10px 12px", textAlign: "left" }}>
                  Score
                </th>
                <th style={{ padding: "10px 12px", textAlign: "left" }}>
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {evaluations.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    style={{
                      padding: 20,
                      textAlign: "center",
                      color: "#9ca3af",
                    }}
                  >
                    No evaluations yet
                  </td>
                </tr>
              ) : (
                evaluations.map((ev) => (
                  <tr key={ev.id}>
                    <td
                      style={{
                        padding: "10px 12px",
                        borderTop: "1px solid #111827",
                      }}
                    >
                      {ev.candidate?.first_name}{" "}
                      {ev.candidate?.last_name}
                    </td>

                    <td
                      style={{
                        padding: "10px 12px",
                        borderTop: "1px solid #111827",
                      }}
                    >
                      {ev.skill || "—"}
                    </td>

                    <td
                      style={{
                        padding: "10px 12px",
                        borderTop: "1px solid #111827",
                      }}
                    >
                      {ev.score ?? "—"}
                    </td>

                    <td
                      style={{
                        padding: "10px 12px",
                        borderTop: "1px solid #111827",
                      }}
                    >
                      {new Date(ev.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
