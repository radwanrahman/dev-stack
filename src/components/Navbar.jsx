function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            Dev Stack
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#technologies" className="text-gray-700 hover:text-gray-900">
            Technologies
          </a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900">
            Projects
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-gray-700">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          <button className="text-2xl">
            ☰
          </button>

          <button className="text-sm text-gray-700">
            Sign In
          </button>

          <button className="px-3 py-2 rounded-full text-sm bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;