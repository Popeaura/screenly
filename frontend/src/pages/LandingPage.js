import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-lime-400 flex items-center justify-center text-slate-900 font-bold text-sm">
              Sc
            </div>
            <span className="font-semibold tracking-tight">Screenly</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-slate-50 transition">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-slate-50 transition">
              How it works
            </a>
            <a href="#pricing" className="hover:text-slate-50 transition">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3 text-sm">
            <Link
              to="/login"
              className="px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:border-slate-500 transition"
            >
              Log in
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-lime-400 text-slate-900 font-semibold hover:bg-lime-300 transition"
            >
              Start free
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-slate-400 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              Evaluation & assessment platform
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
              Run{" "}
              <span className="text-lime-400">
                smarter evaluations
              </span>{" "}
              in minutes.
            </h1>

            <p className="text-slate-300 text-sm md:text-base max-w-xl mb-6">
              Screenly helps evaluators create assessments, capture scores, and
              review candidates in one clean dashboard. No spreadsheets, no
              chaos.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link
                to="/login"
                className="px-6 py-3 rounded-full bg-lime-400 text-slate-900 font-semibold hover:bg-lime-300 transition text-sm"
              >
                Go to app
              </Link>
              <Link
                to="/login"
                className="text-sm text-slate-300 hover:text-slate-100 underline underline-offset-4"
              >
                I already have an account
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div>
                <p className="font-semibold text-slate-200">JWT secured</p>
                <p>Protected endpoints with DRF + SimpleJWT.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Evaluations first</p>
                <p>Built for scoring, not marketing pages.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-16 bg-lime-400/10 blur-3xl pointer-events-none" />
            <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1">
                    Current evaluation
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Frontend Engineer – Technical Task
                  </p>
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-lime-400">
                  In progress
                </span>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 mb-4">
                <p className="text-xs text-slate-400 mb-1">Latest comment</p>
                <p className="text-sm text-slate-100 mb-2">
                  “Strong UI skills, needs improvement on accessibility.”
                </p>
                <p className="text-[11px] text-slate-500">Evaluator • 5 min ago</p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3">
                  <p className="text-slate-400 mb-1">Candidates</p>
                  <p className="text-lg font-semibold text-slate-50">18</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3">
                  <p className="text-slate-400 mb-1">Avg. score</p>
                  <p className="text-lg font-semibold text-lime-400">4.2</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3">
                  <p className="text-slate-400 mb-1">Pending</p>
                  <p className="text-lg font-semibold text-orange-300">5</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
