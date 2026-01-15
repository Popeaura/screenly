function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
        Launch better products, faster.
      </h1>
      <p className="max-w-xl text-sm text-slate-300 sm:text-base">
        This is your hero section. We will customize the text and layout once
        everything is wired up.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-emerald-950 hover:bg-emerald-400">
          Get started
        </button>
        <button className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900">
          Learn more
        </button>
      </div>
    </section>
  );
}

export default Hero;
