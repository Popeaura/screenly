import React from "react";

const EvaluationsListPage = () => {
  const evaluations = [
    {
      id: 1,
      candidate: "Jane Doe",
      role: "Frontend Engineer",
      type: "Technical task",
      date: "Today • 09:30",
      status: "In review",
      statusColor: "bg-yellow-300",
      score: "—",
    },
    {
      id: 2,
      candidate: "Sam Patel",
      role: "Product Designer",
      type: "Portfolio review",
      date: "Yesterday • 16:10",
      status: "Approved",
      statusColor: "bg-lime-400",
      score: "4.7",
    },
    {
      id: 3,
      candidate: "Alex Kim",
      role: "Backend Engineer",
      type: "Tech interview",
      date: "Mon • 11:45",
      status: "Changes requested",
      statusColor: "bg-orange-400",
      score: "3.9",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 px-4 py-6">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
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

        {/* Filters */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400">Filters:</span>
            <select className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-slate-200 text-xs">
              <option>All statuses</option>
              <option>In review</option>
              <option>Approved</option>
              <option>Changes requested</option>
            </select>
            <select className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-slate-200 text-xs">
              <option>Any role</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Design</option>
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

        {/* Table */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs">
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
                  <span
                    className={`h-2 w-2 rounded-full ${ev.statusColor}`}
                  />
                  <div>
                    <p className="text-slate-100 text-xs font-medium">
                      {ev.candidate}
                    </p>
                    <p className="text-[11px] text-slate-500">{ev.role}</p>
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="text-xs text-slate-100">{ev.type}</p>
                  <p className="text-[11px] text-slate-500">
                    Evaluation #{ev.id.toString().padStart(3, "0")}
                  </p>
                </div>

                <div className="text-[11px] text-slate-400">{ev.date}</div>

                <div>
                  <span className="inline-flex items-center rounded-full border border-slate-700 px-2 py-1 text-[11px] text-slate-100">
                    {ev.status}
                  </span>
                </div>

                <div className="text-right text-[11px] text-slate-100">
                  {ev.score}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EvaluationsListPage;
