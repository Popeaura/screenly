import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Call Django token endpoint
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        {
          username,
          password,
        }
      );

      // Save tokens to localStorage
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);

      // Redirect to evaluations page
      navigate("/evaluations");
    } catch (err) {
      setError(err.response?.data?.detail || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="w-full max-w-md p-8 rounded-lg shadow-2xl" style={{ backgroundColor: "#1e293b" }}>
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Screenly</h1>
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-200">
          Login
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-600 text-white rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border border-gray-600 rounded px-4 py-2 text-white"
              style={{ backgroundColor: "#0f172a" }}
              placeholder="Enter your username"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-600 rounded px-4 py-2 text-white"
              style={{ backgroundColor: "#0f172a" }}
              placeholder="Enter your password"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-900 bg-opacity-30 rounded border border-blue-700 text-sm text-gray-300">
          <p className="font-semibold mb-2">Demo Credentials:</p>
          <p>Username: <span className="text-white font-mono">admin</span></p>
          <p>Password: <span className="text-white font-mono">admin</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
