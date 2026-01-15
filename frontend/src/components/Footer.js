function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Screenly. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-200">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-200">
            Terms
          </a>
          <a href="#" className="hover:text-slate-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
