import React from "react";
import Navbar from "../components/Navbar";

const PlaceholderPage = ({ title }) => {
  return (
    <div className="app-shell">
      <Navbar />
      <div style={{ marginTop: 40 }}>
        <h2>{title}</h2>
        <p className="small-muted">
          This section will be implemented later.
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
