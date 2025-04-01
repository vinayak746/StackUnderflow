import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  const fakeSearch = (query) =>
    [
      "Why does JavaScript hate me?",
      "How to fix an error I don't understand?",
      "Is my bug a feature?",
      "Stack Overflow banned me. What now?",
      "Why does CSS never listen to me?",
    ].filter((q) => q.toLowerCase().includes(query.toLowerCase()));

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setSearchResults([]);
      return;
    }
    setSearchResults(fakeSearch(search));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b shadow-md p-4 w-full">
      {/* Navbar Main Row */}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-orange-500">Stack Underflow</h1>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-100 rounded-md border border-gray-300 px-3 py-2 w-96"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for help..."
            className="flex-1 bg-transparent text-black outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-1 rounded-md hover:bg-orange-600 transition"
          >
            Search
          </button>
        </form>

        {/* Ask Question Button */}
        <Link to="/questionPage">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
            Ask a Useless Question
          </button>
        </Link>
      </div>

      {/* Search Results Dropdown */}
      <div
        ref={searchRef}
        className="relative w-full flex flex-col items-center"
      >
        {searchResults.length > 0 ? (
          <div className="mt-2 w-full bg-gray-100 border border-gray-300 rounded-md shadow-md p-3 max-w-6xl mx-auto">
            <h2 className="font-semibold text-gray-700">Search Results:</h2>
            <ul className="list-disc pl-4 mt-1 space-y-1">
              {searchResults.map((result, index) => (
                <li key={index} className="text-gray-700">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          search.length > 0 && (
            <div className="mt-2 w-full bg-gray-100 border border-gray-300 rounded-md shadow-md p-3 max-w-6xl mx-auto text-gray-600">
              No results found. Try asking a worse question!
            </div>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
