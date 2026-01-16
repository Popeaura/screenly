import React from "react";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  const fakeName = "Alex";

  return (
    <div className="app-shell">
      <Navbar />
      <div style={{ marginTop: 40 }}>
        <h2>Welcome, {fakeName}</h2>
        <p className="small-muted">
          This is your dashboard. Soon you’ll see evaluations and students here.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
