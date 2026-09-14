function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        
        {/* Desktop Navbar */}
        <div className="hidden md:flex h-16 items-center justify-between">
          
          {/* Brand */}
          <a
            href="/"
            className="text-xl font-bold text-slate-900"
          >
            Dev Stack
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-7">
            <a
              href="/"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Sign In
            </button>

            <button
              type="button"
              className="px-5 py-2 rounded-full text-sm font-medium text-white
              bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600
              hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden h-16 grid grid-cols-3 items-center">
          
          {/* Menu */}
          <div className="flex justify-start">
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center
              text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <span className="text-xl">☰</span>
            </button>
          </div>

          {/* Brand */}
          <div className="flex justify-center">
            <a
              href="/"
              className="text-lg font-bold text-slate-900 whitespace-nowrap"
            >
              Dev Stack
            </a>
          </div>

          {/* Auth */}
          <div className="flex justify-end items-center gap-2">
            <button
              type="button"
              className="text-xs font-medium text-slate-600"
            >
              Sign In
            </button>

            <button
              type="button"
              className="px-3 py-1.5 rounded-full text-[11px] font-medium text-white
              bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;