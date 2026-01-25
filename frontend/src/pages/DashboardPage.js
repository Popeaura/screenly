import React from "react";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  // For now, just static cards – later we can fetch real stats
  const stats = [
    { label: "Total evaluations", value: 12 },
    { label: "In review", value: 4 },
    { label: "Completed", value: 6 },
    { label: "Pending", value: 2 },
  ];

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen p-6"
        style={{ backgroundColor: "#0f172a" }}
      >
        <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg p-4 shadow-lg"
              style={{ backgroundColor: "#1e293b" }}
            >
              <div className="text-gray-300 text-sm mb-2">{s.label}</div>
              <div className="text-2xl font-bold text-white">{s.value}</div>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg p-6 shadow-lg"
          style={{ backgroundColor: "#1e293b" }}
        >
          <h2 className="text-xl font-semibold text-white mb-4">
            Welcome to Screenly
          </h2>
          <p className="text-gray-300">
            Use the navigation above to manage evaluations, review candidate
            progress, and explore more features as we add them.
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
