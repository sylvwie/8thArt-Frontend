//import filterIcon from "/src/assets/icons/filter-icon.png";

import { FiltersSelection } from "./filtersSelection";

export function FilterBox() {
	return (
		<div id="filter-box-wrapper">
			<div id="filter-box-container">

				{/* <div id="filter-box">
					<img id="filter-params-icon" src={filterIcon} alt="Filter" />
					<span className="filters-text">FILTER_PARAMS.query</span>
				</div> */}
				{/* <hr /> */}

				<div id="filter-params-box-container">
					<div className="filter-params-box">
						<span className="filter-params-type">GENRE_TYPE</span>

						<div className="filter-params-select-wrapper">
							{/* <select className="filter-params-input">
								<option className="filter-selection" value="">-</option>
							</select> */}

							<FiltersSelection
								showByGenres={true}
								showByArtStyles={false}
								showByPlatforms={false}
							/>

							<span className="select-arrow">▼</span>
						</div>

						<span className="filter-params-type-description">[FILTER_BY_GENRE_ALL]</span>
					</div>

					<div className="filter-params-box">
						<span className="filter-params-type">ART_STYLE</span>

						<div className="filter-params-select-wrapper">
							{/* <select className="filter-params-input">
								<option className="filter-selection" value="">-</option>
							</select> */}
							<FiltersSelection
								showByGenres={false}
								showByArtStyles={true}
								showByPlatforms={false}
							/>
							<span className="select-arrow">▼</span>
						</div>

						<span className="filter-params-type-description">[FILTER_BY_ART_STYLE_ALL]</span>
					</div>

					<div className="filter-params-box">
						<span className="filter-params-type">PLATFORM_TARGET</span>

						<div className="filter-params-select-wrapper">
							{/* <select className="filter-params-input">
								<option className="filter-selection" value="">-</option>
							</select> */}
							<FiltersSelection
								showByGenres={false}
								showByArtStyles={false}
								showByPlatforms={true}
							/>
							<span className="select-arrow">▼</span>
						</div>

						<span className="filter-params-type-description">[FILTER_BY_PLATFORM_ALL]</span>
					</div>
				</div>

				{/* <hr /> */}
				{/* <div id="active-filters-counter-container">
					<span id="active-filter-counter">ACTIVE_FILTERS: <span id="current_active_filters_num">NULL</span></span>
				</div> */}

			</div>
		</div>
	)
}
// selezione multipla dei filtri (di genre_types, release_year e platform_target) con possibilità di rimuovere i filtri attivi