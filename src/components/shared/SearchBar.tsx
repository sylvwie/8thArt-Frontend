
export function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <span className="search-bar-prefix" aria-hidden="true">&gt;</span>
        <input
          className="search-bar-input"
          type="text"
          placeholder="search..."
          aria-label="Search"
        />
        <div className="search-bar-icons">
          <button className="search-icon" aria-label="Cross reference">
            <img src="/src/assets/icons/crossref.svg" alt="" />
          </button>
          <button className="search-icon" aria-label="Search">
            <img src="/src/assets/icons/search.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
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