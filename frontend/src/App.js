import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";

const App = () => (
  <div className="app-root">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </div>
);

export default App;
