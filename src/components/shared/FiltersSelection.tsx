export function FiltersSelection({
	showByGenres = true,
	showByArtStyles = true,
	showByPlatforms = true,
	}) {
	return <>
			{showByGenres && (
			<div className="filters-by-genre-types">
				<select className="filter-params-input">
					<option className="single-filter" value="">-</option>
					<option className="single-filter" value="genre-filters">the others here</option>
				</select>
			</div>
			)}

			{showByArtStyles && (
			<div className="filters-by-art-styles">
				<select className="filter-params-input">
					<option className="single-filter" value="">-</option>
					<option className="single-filter" value="art-styles-filters">the others here</option>
				</select>
			</div>
			)}
			
			{showByPlatforms && (
			<div className="filters-by-platform-targets">
				<select className="filter-params-input">
					<option className="single-filter" value="">-</option>
					<option className="single-filter" value="platform-filters">the others here</option>
				</select>
			</div>
			)}
	</>
}