import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // not used in backend yet, but kept in UI
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Call Django signup endpoint
      await axios.post(`${API_BASE_URL}/signup/`, {
        username,
        password,
        // fullName and email are ignored by backend for now,
        // but you can add them to your model later if you want.
      });

      // On success, send user to login
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.detail || "Could not create account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl flex justify-center">
        <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-8 shadow-xl">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-slate-900 font-bold">
              Sc
            </div>
            <h1 className="text-xl font-semibold text-slate-50">
              Create your Screenly account
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Set up an evaluator profile to start creating evaluations.
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-600/90 px-3 py-2 text-xs text-white">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="mb-1 block text-sm font-medium text-slate-200"
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/40"
                placeholder="Mitchell O. A."
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="mb-1 block text-sm font-medium text-slate-200"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/40"
                placeholder="evaluator01"
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/40"
                placeholder="you@example.com"
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-slate-200"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/40"
                placeholder="Create a strong password"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-lg bg-lime-400 py-2.5 text-sm font-semibold text-slate-900 hover:bg-lime-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-lime-400 hover:text-lime-300 font-medium"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
