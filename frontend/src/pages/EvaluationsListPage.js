import React, { useEffect, useState } from "react";
import { fetchEvaluations } from "../api/evaluations";

const EvaluationsListPage = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchEvaluations();
        setEvaluations(data);
      } catch (err) {
        console.error(err);
        setError("Could not load evaluations.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 px-4 py-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Evaluations</h1>
            <p className="text-xs text-slate-400 mt-1">
              Manage all candidate evaluations in one place.
            </p>
          </div>
          <button className="inline-flex items-center rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-lime-300 transition">
            + New evaluation
          </button>
        </header>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400">Filters:</span>
            <select className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-slate-200 text-xs">
              <option>All statuses</option>
            </select>
            <select className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-slate-200 text-xs">
              <option>Any role</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search candidate or role…"
              className="w-full md:w-64 rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-[11px] text-slate-100 placeholder:text-slate-500 outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/60"
            />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs">
          {loading ? (
            <p className="text-slate-400 text-[11px]">Loading evaluations…</p>
          ) : error ? (
            <p className="text-red-400 text-[11px]">{error}</p>
          ) : evaluations.length === 0 ? (
            <p className="text-slate-400 text-[11px]">
              No evaluations yet. Create your first one.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-6 gap-4 border-b border-slate-800 pb-2 text-[11px] text-slate-400">
                <span>Candidate</span>
                <span className="col-span-2">Evaluation</span>
                <span>Date</span>
                <span>Status</span>
                <span className="text-right">Score</span>
              </div>

              <div className="divide-y divide-slate-800">
                {evaluations.map((ev) => (
                  <div
                    key={ev.id}
                    className="grid grid-cols-6 gap-4 py-3 items-center"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-lime-400" />
                      <div>
                        <p className="text-slate-100 text-xs font-medium">
                          {ev.candidate_name || ev.candidate?.name || "Candidate"}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {ev.evaluator_name || ev.evaluator?.username || "Evaluator"}
                        </p>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <p className="text-xs text-slate-100">
                        {ev.title || "Evaluation"}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        ID #{ev.id}
                      </p>
                    </div>

                    <div className="text-[11px] text-slate-400">
                      {ev.created_at || ev.date || ""}
                    </div>

                    <div>
                      <span className="inline-flex items-center rounded-full border border-slate-700 px-2 py-1 text-[11px] text-slate-100">
                        {ev.status || "Pending"}
                      </span>
                    </div>

                    <div className="text-right text-[11px] text-slate-100">
                      {ev.score ?? "—"}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default EvaluationsListPage;
