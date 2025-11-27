import React, { useState, useEffect, useRef } from "react";
import { Menu, Search, X, Play } from "lucide-react";

const Navbar = ({ onToggleSidebar, onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setSearchOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition-all ${
        isScrolled
          ? "bg-gray-950/95 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-gradient-to-b from-gray-950 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 text-white hover:bg-gray-800 rounded-full"
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Play className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold text-white">StreamBox</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center">
          {searchOpen && (
            <form onSubmit={submitSearch} className="relative w-60">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-gray-900 text-white border border-gray-700 rounded-full px-4 py-2 w-full"
                placeholder="Search..."
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-2 text-gray-400"
              >
                <X size={16} />
              </button>
            </form>
          )}

          {!searchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-white hover:bg-gray-800 rounded-full"
            >
              <Search size={22} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;