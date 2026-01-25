import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchEvaluationStats } from "../api/evaluations";

const DashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        const data = await fetchEvaluationStats();
        setStats(data);
      } catch (err) {
        setError(err.message || "Failed to load stats");
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen p-6"
        style={{ backgroundColor: "#0f172a" }}
      >
        <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>

        {loading && <div className="text-white">Loading stats...</div>}
        {error && (
          <div className="mb-4 p-3 bg-red-600 text-white rounded text-sm">
            {error}
          </div>
        )}

        {stats && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div
                className="rounded-lg p-4 shadow-lg"
                style={{ backgroundColor: "#1e293b" }}
              >
                <div className="text-gray-300 text-sm mb-2">
                  Total evaluations
                </div>
                <div className="text-2xl font-bold text-white">
                  {stats.total}
                </div>
              </div>

              {stats.by_status.map((s) => (
                <div
                  key={s.status}
                  className="rounded-lg p-4 shadow-lg"
                  style={{ backgroundColor: "#1e293b" }}
                >
                  <div className="text-gray-300 text-sm mb-2">
                    {s.label}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {s.count}
                  </div>
                </div>
              ))}

              <div
                className="rounded-lg p-4 shadow-lg"
                style={{ backgroundColor: "#1e293b" }}
              >
                <div className="text-gray-300 text-sm mb-2">
                  Average score
                </div>
                <div className="text-2xl font-bold text-white">
                  {stats.average_score ? `${stats.average_score.toFixed(1)}%` : "-"}
                </div>
              </div>
            </div>

            <div
              className="rounded-lg p-6 shadow-lg"
              style={{ backgroundColor: "#1e293b" }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                Overview
              </h2>
              <p className="text-gray-300">
                You currently have <span className="font-bold text-white">{stats.total}</span>{" "}
                evaluations tracked. Use the Evaluations page to drill into individual
                candidates and update their status and scores.
              </p>
            </div>
          </>
        )}

        {!loading && !error && !stats && (
          <div className="text-gray-300">No statistics available yet.</div>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
