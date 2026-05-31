import { FilterBox } from "./FilterBox.tsx";
import { useState } from "react";
import filterIcon from "/src/assets/icons/filter-icon.png";
import crossRefIcon from "/src/assets/icons/cross-reference-empty.png";
import searchIcon from "/src/assets/icons/search-icon.svg";
import { CrossRefDropInBox } from "../crossreference/CrossRefIDropInBox.tsx";
import { StatusLog } from "./StatusLog.tsx";
import { SearchResults } from "./SearchResults.tsx";
import { useGameSearch } from "../../hooks/useGameSearch.tsx";

export function SearchBar() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [crossRefBoxOpen, setCrossRefBoxOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Hook di ricerca
  const { results, search, loading } = useGameSearch();

  // Handler centrale della ricerca
  const handleSearch = () => {
    search(query);
  };

  return (
    <>
      <div className="search-bar-wrapper">
        <button
          className="filter-icon"
          aria-label="filter search"
          onClick={() => setFilterOpen((old) => !old)}
        >
          <img src={filterIcon} alt="Filter" />
        </button>

        <div className="search-bar-container">
          <span className="search-bar-prefix" aria-hidden="true">
            &gt;
          </span>

          <input
            id="search-bar-input"
            type="text"
            placeholder="search..."
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <div className="search-bar-icons">
            <button
              className="search-icon"
              aria-label="Cross reference"
              onClick={() => setCrossRefBoxOpen((old) => !old)}
            >
              <img src={crossRefIcon} alt="" />
            </button>

            <button
              className="search-icon"
              aria-label="Search"
              onClick={handleSearch}
            >
              <img src={searchIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
      
      {/* loading */}
      {loading && <div className="search-loading">Loading...</div>}

      {filterOpen && <FilterBox />}
      {results.length > 0 && <SearchResults results={results} />}
      {crossRefBoxOpen && <CrossRefDropInBox />}
      <StatusLog />
    </>
  );
}