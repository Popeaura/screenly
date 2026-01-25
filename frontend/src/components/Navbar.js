import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    // Redirect to login
    navigate("/login");
  };

  return (
    <nav
      className="flex justify-between items-center px-6 py-4 shadow-lg"
      style={{ backgroundColor: "#1e293b" }}
    >
      <div className="flex gap-6">
        <Link
          to="/dashboard"
          className="text-white font-semibold hover:text-blue-400 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/evaluations"
          className="text-white font-semibold hover:text-blue-400 transition"
        >
          Evaluations
        </Link>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
