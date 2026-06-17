import { useState } from "react";
import { FilterBox } from "./FilterBox.tsx";
import { SearchResults } from "./SearchResults.tsx";
import { StatusLog } from "./StatusLog.tsx";
import { CrossRefDropInBox } from "../crossreference/CrossReferencePopUp.tsx";
import filterIcon from "/src/assets/icons/filter-icon.png";
import crossRefIcon from "/src/assets/icons/cross-reference-empty.png";
import searchIcon from "/src/assets/icons/search-icon.svg";
import { useGameSearch } from "../../hooks/useGameSearch.tsx";
import { useShowcaseStore } from "../../store/useShowcaseStore.tsx";

export function SearchBar() {
  const [filterOpen, setFilterOpen] = useState(false);

  const [query, setQuery] = useState("");

  const goToCrossSearch = useShowcaseStore(
    (s) => s.goToCrossSearch
  );

  // SEARCH HOOK
  const { results, search, loading } = useGameSearch();

  const handleSearch = () => { search(query); };

  // CROSS REF POPUP
  const [crossRefBoxOpen, setCrossRefBoxOpen] = useState(false);

  // POPUP TIMER
  const [closeTimer, setCloseTimer] = useState<number | null>(null);

  const openPopup = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
    }
    setCrossRefBoxOpen(true);
  }; 

  const closePopup = () => {
    const timer = window.setTimeout(() => {
      setCrossRefBoxOpen(false);
      setCloseTimer(null);
    }, 1500); // CLOSING DELAY 
    setCloseTimer(timer);
  };

  const popupEnter = ()=>{
    //console.log('enter');
    if (closeTimer){
      clearTimeout(closeTimer);
    }
  }

  const popupLeave = ()=>{
    //console.log('leave');
    setCrossRefBoxOpen(false);
  }

  return (
    <>
      <div className="search-bar-wrapper">
        {/* FILTER */}
        <button
          className="filter-icon"
          aria-label="filter search"
          onClick={() => setFilterOpen((old) => !old) }
          >
          <img src={filterIcon} alt="Filter" />
        </button>

        {/* SEARCH BAR */}
        <div className="search-bar-container">
          <span className="search-bar-prefix" aria-hidden="true" > &gt; </span>

          <input
            id="search-bar-input"
            type="text"
            placeholder="search..."
            aria-label="Search"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <div className="search-bar-icons">
            {/* CROSS REFERENCE */}
            <div
              className="cross-ref-popup"
              onMouseEnter={openPopup}
              onMouseLeave={closePopup}
            >
              <button
                className="search-icon"
                aria-label="Cross reference"
                onClick={goToCrossSearch}
              >
                <img
                  src={crossRefIcon}
                  alt="Cross Reference"
                />
              </button>

            </div>

            {/* SEARCH */}
            <button
              className="search-icon"
              aria-label="Search"
              onClick={handleSearch}
              >
              <img
                src={searchIcon}
                alt="Search"
                />
            </button>
          </div>
        </div>
      </div>

      {/* FILTER BOX */}
      {filterOpen && <FilterBox />}

      {/* LOADING */}
      {loading && (
        <div className="search-loading">
          Loading...
        </div>
      )}

      {/* RESULTS */}
      {results.length > 0 && (
        <SearchResults results={results} />
      )}

      {crossRefBoxOpen && (
        <CrossRefDropInBox popupEnter={popupEnter} popupLeave={popupLeave} />
      )}
      <StatusLog />
    </>
  );
}