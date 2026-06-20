import { FilterBox } from "./FilterBox.tsx";
import { useState } from "react";
import filterIcon from "/src/assets/icons/filter-icon.png";
import searchIcon from "/src/assets/icons/search-icon.svg";
import { SearchResults } from "./SearchResults.tsx";
import { useFilterSearch } from "../../hooks/useFilterSearch.tsx";

export function ArchiveSearchBar() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [query, setQuery] = useState("");

  const {
    results,
    loading,
    filters,
    filterOptions,
    toggleFilter,
    resetFilters,
    search,
  } = useFilterSearch();

  // Handler centrale della ricerca
  const handleSearch = () => {
    search(query, filters);
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
            placeholder="search for games, platforms, genres, developers..."
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

      {filterOpen && (
        <FilterBox
          filterOptions={filterOptions}
          filters={filters}
          toggleFilter={toggleFilter}
          resetFilters={resetFilters}
        />
      )}
      {results.length > 0 && <SearchResults results={results} />}
    </>
  );
}