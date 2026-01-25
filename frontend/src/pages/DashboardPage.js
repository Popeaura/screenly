import React from "react";

const DashboardPage = () => {
  const recentEvaluations = [
    {
      id: 1,
      candidate: "Jane Doe",
      title: "Frontend Engineer – Screening",
      date: "Today • 09:30",
      status: "In review",
      score: "—",
      statusColor: "bg-yellow-300",
    },
    {
      id: 2,
      candidate: "Sam Patel",
      title: "Product Designer – Portfolio",
      date: "Yesterday • 16:10",
      status: "Approved",
      score: "4.7",
      statusColor: "bg-lime-400",
    },
    {
      id: 3,
      candidate: "Alex Kim",
      title: "Backend Engineer – Tech Task",
      date: "Mon • 11:45",
      status: "Changes requested",
      score: "3.9",
      statusColor: "bg-orange-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 px-4 py-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-xs text-slate-400 mt-1">
              Overview of candidates, evaluations, and scores.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="text-right">
              <p className="font-medium">Evaluator</p>
              <p className="text-slate-400">
                JWT session •{" "}
                <span className="text-lime-400">Active</span>
              </p>
            </div>
            <div className="h-8 w-8 rounded-full bg-slate-700" />
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <p className="text-xs text-slate-400 mb-1">Total candidates</p>
            <p className="text-2xl font-semibold text-slate-50">48</p>
            <p className="mt-2 text-[11px] text-slate-500">
              All candidates in the system.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <p className="text-xs text-slate-400 mb-1">Active evaluations</p>
            <p className="text-2xl font-semibold text-lime-400">12</p>
            <p className="mt-2 text-[11px] text-emerald-400">
              +3 since last week.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <p className="text-xs text-slate-400 mb-1">Average score</p>
            <p className="text-2xl font-semibold text-lime-300">4.3</p>
            <p className="mt-2 text-[11px] text-slate-500">
              Across completed evaluations.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <p className="text-xs text-slate-400 mb-1">Pending reviews</p>
            <p className="text-2xl font-semibold text-slate-50">5</p>
            <p className="mt-2 text-[11px] text-orange-300">
              Due this week.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">Recent evaluations</h2>
              <button className="text-xs text-slate-400 hover:text-slate-200">
                View all
              </button>
            </div>
            <div className="space-y-3 text-xs">
              {recentEvaluations.map((ev) => (
                <div
                  key={ev.id}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${ev.statusColor}`}
                    />
                    <div>
                      <p className="font-medium text-slate-100">
                        {ev.candidate}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {ev.title}
                      </p>
                      <p className="text-[11px] text-slate-500">{ev.date}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-[11px] text-slate-200">
                      {ev.status}
                    </span>
                    <p className="text-[11px] text-slate-400">
                      Score:{" "}
                      <span className="text-slate-100">{ev.score}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <h2 className="text-sm font-semibold mb-3">Evaluation health</h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span>On time</span>
                  <span className="text-lime-300">72%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-3/4 bg-lime-400" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Overdue</span>
                  <span className="text-orange-300">18%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-1/5 bg-orange-400" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Drafts</span>
                  <span className="text-slate-300">10%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-1/6 bg-slate-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
