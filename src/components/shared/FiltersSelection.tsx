type FiltersSelectionProps = {
  showByGenres?: boolean;
  showByArtStyles?: boolean;
  showByPlatforms?: boolean;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
};

export function FiltersSelection({
  showByGenres = true,
  showByArtStyles = true,
  //showByPlatforms = true,
  options,
  selected,
  onToggle,
}: FiltersSelectionProps) {
  const wrapperClass = showByGenres
    ? "filters-by-genre-types"
    : showByArtStyles
    ? "filters-by-art-styles"
	: "filters-by-platform-targets";

  return (
    <div className={wrapperClass}>
      <select
        className="filter-params-input"
        value=""
        onChange={(e) => {
          if (e.target.value) onToggle(e.target.value);
        }}
      >
        <option className="single-filter" value="">-</option>
        {options
          .filter((opt) => !selected.includes(opt))
          .map((opt) => (
            <option key={opt} className="single-filter" value={opt}>
              {opt}
            </option>
          ))}
      </select>

      {selected.length > 0 && (
        <div className="active-filter-chips">
          {selected.map((value) => (
            <button
              key={value}
              type="button"
              className="active-filter-chip"
              onClick={() => onToggle(value)}
            >
              {value} ✕
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


// export function FiltersSelection({
// 	showByGenres = true,
// 	showByArtStyles = true,
// 	showByPlatforms = true,
// 	}) {
// 	return <>
// 			{showByGenres && (
// 			<div className="filters-by-genre-types">
// 				<select className="filter-params-input">
// 					<option className="single-filter" value="">-</option>
// 					<option className="single-filter" value="genre-filters">the others here</option>
// 				</select>
// 			</div>
// 			)}

// 			{showByArtStyles && (
// 			<div className="filters-by-art-styles">
// 				<select className="filter-params-input">
// 					<option className="single-filter" value="">-</option>
// 					<option className="single-filter" value="art-styles-filters">the others here</option>
// 				</select>
// 			</div>
// 			)}
			
// 			{showByPlatforms && (
// 			<div className="filters-by-platform-targets">
// 				<select className="filter-params-input">
// 					<option className="single-filter" value="">-</option>
// 					<option className="single-filter" value="platform-filters">the others here</option>
// 				</select>
// 			</div>
// 			)}
// 	</>
// }