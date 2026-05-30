import { FilterBox } from "./FilterBox.tsx";
import { useState } from 'react';
import filterIcon from "/src/assets/icons/filter-icon.png";
import crossRefIcon from "/src/assets/icons/cross-reference-empty.png";
import searchIcon from "/src/assets/icons/search-icon.svg";
import { CrossRefDropInBox } from "../crossreference/CrossRefIDropInBox.tsx";
import { StatusLog } from "./StatusLog.tsx";
// import { useEffect } from 'react';
// import { SearchResults } from "./SearchResults.tsx";
export function SearchBar() {

  const [filterOpen, setFilterOpen] = useState(false);
  const [crossRefBoxOpen, setCrossRefBoxOpen] = useState(false);
  // const [results, setResults] = useState([]);

  // const [query, setQuery] = useState("");  
  // const [debouncedQuery, setDebouncedQuery] = useState(query);  

  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setDebouncedQuery(query);
  //   }, 100);

  //   return () => {
  //     clearTimeout(handler);
  //   };
  // }, [query]);

  // useEffect(() => {
  //   if (debouncedQuery) {
  //     (async ()=>{
  //       const r = await fetch(`https://cqft3ppix5lafhomkq83xeeb.dverso.io/api/games/games/search/?q=${encodeURIComponent(debouncedQuery)}`);
  //       const json = await r.json();
  //       setResults(json.results);
  //     })()
  //     // Make API call here
  //   }
  // }, [debouncedQuery]);

  return (
    <>
      <div className="search-bar-wrapper">
        <button className="filter-icon" aria-label="filter search" onClick={() => setFilterOpen((oldValue) => !oldValue)}>
          <img src={filterIcon} alt="Filter" />
        </button>
        <div className="search-bar-container">
          <span className="search-bar-prefix" aria-hidden="true">&gt;</span>
          <input
            id="search-bar-input"
            type="text"
            placeholder="search..."
            aria-label="Search"
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
          />
          <div className="search-bar-icons">
            <button className="search-icon" aria-label="Cross reference" onClick={() => setCrossRefBoxOpen((oldValue) => !oldValue)}>
              <img src={crossRefIcon} alt="" />
            </button>
            <button className="search-icon" aria-label="Search">
              <img src={searchIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
      {filterOpen && <FilterBox />}
      {/* {results.length && <SearchResults results={results}></SearchResults>} */}
      {crossRefBoxOpen && <CrossRefDropInBox />}
      <StatusLog />
    </>
  )
}
