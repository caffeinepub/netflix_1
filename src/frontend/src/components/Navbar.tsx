import { Bell, ChevronDown, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  searchQuery: string;
  onSearch: (query: string) => void;
}

export function Navbar({
  onNavigate,
  currentPage,
  searchQuery,
  onSearch,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "TV Shows", page: "shows" },
    { label: "Movies", page: "movies" },
    { label: "New & Popular", page: "new" },
    { label: "My List", page: "mylist" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(0,0,0,0.95)"
          : "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          type="button"
          className="text-netflix-red font-black text-2xl md:text-3xl tracking-widest flex-shrink-0 hover:opacity-90 transition-opacity"
          onClick={() => onNavigate("home")}
          data-ocid="nav.link"
        >
          NETFLIX
        </button>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <button
              key={link.page}
              type="button"
              onClick={() => onNavigate(link.page)}
              data-ocid="nav.link"
              className={`text-sm font-medium transition-colors hover:text-white ${
                currentPage === link.page
                  ? "text-white"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile nav dropdown */}
        <div className="flex md:hidden items-center gap-1">
          <span className="text-xs text-muted-foreground">Browse</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-4 ml-auto md:ml-0">
          {/* Search */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <div className="flex items-center gap-2 border border-muted-foreground/50 bg-black/80 px-3 py-1.5 rounded">
                <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Titles, people, genres"
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="bg-transparent text-white text-sm outline-none w-40 md:w-52 placeholder:text-muted-foreground"
                  data-ocid="nav.search_input"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    onSearch("");
                  }}
                  className="text-muted-foreground hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="text-muted-foreground hover:text-white transition-colors p-1"
                data-ocid="nav.button"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Bell */}
          <button
            type="button"
            className="text-muted-foreground hover:text-white transition-colors p-1 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-netflix-red" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="h-8 w-8 rounded bg-netflix-red flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              U
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground group-hover:text-white transition-all group-hover:rotate-180" />
          </div>
        </div>
      </div>
    </header>
  );
}
