function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-14 md:py-16">

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-2">
              <span
                className="w-7 h-7 rounded-md
                flex items-center justify-center
                text-[9px] font-bold text-white
                bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600"
              >
                DS
              </span>

              <span className="text-base font-bold text-slate-900">
                Dev Stack
              </span>
            </a>

            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-900">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="/"
                className="block text-xs text-slate-500 hover:text-slate-900 transition-colors"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block text-xs text-slate-500 hover:text-slate-900 transition-colors"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="block text-xs text-slate-500 hover:text-slate-900 transition-colors"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-900">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#about"
                className="block text-xs text-slate-500 hover:text-slate-900 transition-colors"
              >
                About
              </a>

              <a
                href="#contact"
                className="block text-xs text-slate-500 hover:text-slate-900 transition-colors"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-slate-900 transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-900">
              Legal
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-slate-900 transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-xs text-slate-500 hover:text-slate-900 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div
          className="mt-12 pt-6
          border-t border-slate-100
          flex flex-col sm:flex-row
          items-start sm:items-center
          justify-between gap-4"
        >
          <p className="text-[11px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[11px] text-slate-400 hover:text-slate-700 transition-colors"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[11px] text-slate-400 hover:text-slate-700 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;