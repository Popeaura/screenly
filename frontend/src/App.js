import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import EvaluationsListPage from "./pages/EvaluationsListPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/evaluations"
          element={
            <ProtectedRoute>
              <EvaluationsListPage />
            </ProtectedRoute>
  }
/>
      </Routes>
    </div>
  );
}

export default App;
