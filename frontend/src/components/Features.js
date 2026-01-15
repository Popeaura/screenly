const features = [
  {
    title: "Ready-made layout",
    desc: "Navbar, hero, features, and footer already wired together.",
  },
  {
    title: "Fast to customize",
    desc: "Change the text and colors to match your product in minutes.",
  },
  {
    title: "Built with React",
    desc: "Use components to keep your code clean and reusable.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="mx-auto mt-16 max-w-6xl px-4 text-center"
    >
      <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
        What you get.
      </h2>
      <p className="mt-2 text-sm text-slate-300 sm:text-base">
        A simple starting point you can grow into a full app.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              {item.title}
            </h3>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
