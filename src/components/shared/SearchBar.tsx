import { FilterBox } from "./FilterBox.tsx";
import { useState } from 'react';
import filterIcon from "/src/assets/icons/filter-icon.png";
import crossRefIcon from "/src/assets/icons/cross-reference-empty.png";
import searchIcon from "/src/assets/icons/search-icon.svg";
import { CrossRefDropInBox } from "./CrossRefIDropInBox.tsx";

export function SearchBar() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [crossRefBoxOpen, setCrossRefBoxOpen] = useState(false);
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
    {crossRefBoxOpen && <CrossRefDropInBox />}
    <div className="status-logs">
      <span>STATUS: ONLINE</span>
      <span>UPTIME: 99.9%</span>
      <span>PING: 12ms</span>
    </div>
  </>
  )
}


/*
type SearchBarProps = {
	borderStyle?: string
}

export function SearchBar({ borderStyle } : SearchBarProps) {
	return <input className = "searchbar" style =
	{
		{
			backgroundColor: '#ffffff',
			borderColor: borderStyle ?? '#000000', // esempio di props
			color: '#242424'
		}
	} type="text" placeholder="Search" />
}
*/