import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Collections", path: "/collections" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Search Submit Handler
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/collections?search=${encodeURIComponent(searchQuery.trim())}`);
      setMenuOpen(false);
    }
  };

  const linkStyle = ({ isActive }) =>
    `relative text-[14px] font-medium tracking-wide transition-all duration-300 ${
      isActive
        ? "text-[#e8a0b5]"
        : "text-white/70 hover:text-[#e8a0b5]"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      {/* MAIN NAVBAR */}
      <nav className="mx-auto max-w-7xl rounded-full border border-white/10 bg-[#0d0b0c]/95 px-5 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-7">
        <div className="flex h-[74px] items-center justify-between">

          {/* LOGO */}
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="shrink-0"
          >
            <div className="font-serif text-[27px] font-bold tracking-[0.18em] text-white">
              LUMÉRA
            </div>
            <div className="mt-[-2px] text-center text-[8px] font-medium tracking-[0.42em] text-[#d995a9]">
              BEAUTY
            </div>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden items-center gap-2 md:flex">

            {/* SEARCH */}
            <div className="flex h-10 items-center rounded-full border border-white/10 bg-white/[0.06] px-4 transition focus-within:border-[#b85c76]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-[17px] w-[17px] text-[#d995a9]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search & hit enter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="w-32 bg-transparent text-xs text-white outline-none placeholder:text-white/40 lg:w-40"
              />
            </div>

            {/* WISHLIST */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition hover:border-[#b85c76] hover:bg-[#b85c76]/15 hover:text-[#e8a0b5]"
              aria-label="Wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[19px] w-[19px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
              </svg>
            </button>

            {/* CART */}
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition hover:border-[#b85c76] hover:bg-[#b85c76]/15 hover:text-[#e8a0b5]"
              aria-label="Shopping bag"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[19px] w-[19px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 8h12l1 13H5L6 8Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8a3 3 0 0 1 6 0"
                />
              </svg>
              <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#b85c76] px-1 text-[9px] font-semibold text-white">
                0
              </span>
            </button>

            {/* SIGN IN */}
            <NavLink
              to="/signin"
              className="ml-1 rounded-full bg-[#b85c76] px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-lg shadow-[#b85c76]/20 transition hover:bg-[#d06f89]"
            >
              Sign In
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/10 bg-white/[0.06] p-2.5 text-[#e8a0b5] transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-white/10 py-6 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-full px-5 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#b85c76]/20 text-[#e8a0b5]"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* MOBILE SEARCH */}
              <div className="mt-1 flex h-11 items-center rounded-full border border-white/10 bg-white/[0.06] px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4 text-[#d995a9]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
                </svg>

                <input
                  type="text"
                  placeholder="Search & hit enter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                />
              </div>

              {/* MOBILE SIGN IN */}
              <NavLink
                to="/signin"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#b85c76] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#d06f89]"
              >
                Sign In
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;