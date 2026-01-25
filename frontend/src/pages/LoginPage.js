import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
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
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Log in to continue reviewing with Screenly.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
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
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-lime-400/40 placeholder:text-slate-500 focus:border-lime-400 focus:ring-2"
                placeholder="you@example.com"
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
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-lime-400/40 placeholder:text-slate-500 focus:border-lime-400 focus:ring-2"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-lime-400 py-2.5 text-sm font-semibold text-slate-900 hover:bg-lime-300 transition"
            >
              Log in
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-slate-400">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-lime-400 hover:text-lime-300 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
