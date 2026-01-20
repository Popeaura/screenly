import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import CreateEvaluationPage from "./pages/CreateEvaluationPage";


const App = () => (
  <div className="app-root">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/about" element={<PlaceholderPage title="About Us" />} />
      <Route path="/courses" element={<PlaceholderPage title="Courses" />} />
      <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
      <Route path="/evaluations/new" element={<CreateEvaluationPage />} />
    </Routes>
  </div>
);

export default App;
