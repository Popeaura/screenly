function Navbar() {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="text-sm font-semibold text-slate-50">
          Screenly
        </div>
        <button className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-medium text-emerald-950 hover:bg-emerald-400">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Navbar;
