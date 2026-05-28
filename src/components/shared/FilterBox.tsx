import filterIcon from "/src/assets/icons/filter-icon.png";

export function FilterBox() {
	return (
		<div id="filter-box-wrapper">
			<div id="filter-box-container">

				<div id="filter-box">
					<img id="filter-params-icon" src={filterIcon} alt="Filter" />
					<span className="filters-text">FILTER_PARAMS.query</span>
				</div>

				<hr />

				<div id="filter-params-box-container">
					<div className="filter-params-box">
						<span className="filter-params-type">GENRE_TYPE</span>
						<div className="filter-params-select-wrapper">
							<select className="filter-params-input">
								<option value="">-</option>
							</select>
							<span className="select-arrow">▼</span>
						</div>
						<span className="filter-params-type-description">[CMD: FILTER_BY_GENRE_ALL]</span>
					</div>
					<div className="filter-params-box">
						<span className="filter-params-type">RELEASE_YEAR</span>
						<div className="filter-params-select-wrapper">
							<select className="filter-params-input">
								<option value="">-</option>
							</select>
							<span className="select-arrow">▼</span>
						</div>
						<span className="filter-params-type-description">[CMD: FILTER_BY_YEAR_ALL]</span>
					</div>
					<div className="filter-params-box">
						<span className="filter-params-type">PLATFORM_TARGET</span>
						<div className="filter-params-select-wrapper">
							<select className="filter-params-input">
								<option value="">-</option>
							</select>
							<span className="select-arrow">▼</span>
						</div>
						<span className="filter-params-type-description">[CMD: FILTER_BY_PLATFORM_ALL]</span>
					</div>
				</div>

				<hr />

				<div id="active-filters-counter-container">
					<span id="active-filter-counter">ACTIVE_FILTERS: <span id="current_active_filters_num">NULL</span></span>
				</div>

			</div>
		</div>
	)
}
// aggiungere le opzioni selezionabili dei types nei select
// sostituire NULL con il counter di filtri attivi