import { FiltersSelection } from "./FiltersSelection.tsx";
import type { FiltersState, FilterOptions } from "../props/FilterProps.tsx";

type FilterBoxProps = {
  filterOptions: FilterOptions;
  filters: FiltersState;
  toggleFilter: (type: keyof FiltersState, value: string) => void;
  resetFilters: () => void;
};

export function FilterBox({ filterOptions, filters, toggleFilter, resetFilters }: FilterBoxProps) {
  const activeFiltersCount = filters.genres.length + filters.platforms.length + filters.years.length;

  return (
    <div id="filter-box-wrapper">
      <div id="filter-box-container">

        <div id="active-filters-container">
          <span id="current_active_filters_count"> Active Filters: {activeFiltersCount} </span>
          <button id="active-filter-reset-all" onClick={resetFilters}> RESET </button>
        </div>
        <hr />

        <div id="filter-params-box-container">
          <div className="filter-params-box">
            <span className="filter-params-type">GENRES</span>
            <div className="filter-params-select-wrapper">
              <FiltersSelection
                showByGenres={true}
                showByArtStyles={false}
                showByPlatforms={false}
                options={filterOptions.genres}
                selected={filters.genres}
                onToggle={(value) => toggleFilter("genres", value)}
              />
              <span className="select-arrow">▼</span>
            </div>
            {/* <span className="filter-params-type-description">[FILTER_BY_GENRE_ALL]</span> */}
          </div>

          <div className="filter-params-box">
            <span className="filter-params-type">YEAR</span>
            <div className="filter-params-select-wrapper">
              <FiltersSelection
                showByGenres={false}
                showByArtStyles={true}
                showByPlatforms={false}
                options={filterOptions.years}
                selected={filters.years}
                onToggle={(value) => toggleFilter("years", value)}
              />
              <span className="select-arrow">▼</span>
            </div>
            {/* <span className="filter-params-type-description">[FILTER_BY_YEAR_ALL]</span> */}
          </div>

          <div className="filter-params-box">
            <span className="filter-params-type">PLATFORMS</span>
            <div className="filter-params-select-wrapper">
              <FiltersSelection
                showByGenres={false}
                showByArtStyles={false}
                showByPlatforms={true}
                options={filterOptions.platforms}
                selected={filters.platforms}
                onToggle={(value) => toggleFilter("platforms", value)}
              />
              <span className="select-arrow">▼</span>
            </div>
            {/* <span className="filter-params-type-description">[FILTER_BY_PLATFORM_ALL]</span> */}
          </div>
        </div>

      </div>
    </div>
  );
}

// //import filterIcon from "/src/assets/icons/filter-icon.png";

// import { FiltersSelection } from "./FiltersSelection";

// export function FilterBox() {
// 	return (
// 		<div id="filter-box-wrapper">
// 			<div id="filter-box-container">

// 				<div id="active-filters-container">
// 					<span id="current_active_filters_count"> Active Filters: 0 </span>
// 					<button id="active-filter-reset-all"> RESET </button>
// 				</div>
// 				<hr /> 

// 				{/* <div id="filter-box">
// 					<img id="filter-params-icon" src={filterIcon} alt="Filter" />
// 					<span className="filters-text">FILTER_PARAMS.query</span>
// 				</div> */}
// 				{/* <hr /> */}

// 				<div id="filter-params-box-container">
// 					<div className="filter-params-box">
// 						<span className="filter-params-type">GENRES</span>

// 						<div className="filter-params-select-wrapper">
// 							{/* <select className="filter-params-input">
// 								<option className="filter-selection" value="">-</option>
// 							</select> */}

// 							<FiltersSelection
// 								showByGenres={true}
// 								showByArtStyles={false}
// 								showByPlatforms={false}
// 							/>

// 							<span className="select-arrow">▼</span>
// 						</div>

// 						<span className="filter-params-type-description">[FILTER_BY_GENRE_ALL]</span>
// 					</div>

// 					<div className="filter-params-box">
// 						<span className="filter-params-type">YEAR</span>
// 						{/* <span className="filter-params-type">ART_STYLE</span> */}

// 						<div className="filter-params-select-wrapper">
// 							{/* <select className="filter-params-input">
// 								<option className="filter-selection" value="">-</option>
// 							</select> */}
// 							<FiltersSelection
// 								showByGenres={false}
// 								showByArtStyles={true}
// 								showByPlatforms={false}
// 							/>
// 							<span className="select-arrow">▼</span>
// 						</div>

// 						<span className="filter-params-type-description">[FILTER_BY_YEAR_ALL]</span>
// 						{/* <span className="filter-params-type-description">[FILTER_BY_ART_STYLE_ALL]</span> */}
// 					</div>

// 					<div className="filter-params-box">
// 						<span className="filter-params-type">PLATFORMS</span>

// 						<div className="filter-params-select-wrapper">
// 							{/* <select className="filter-params-input">
// 								<option className="filter-selection" value="">-</option>
// 							</select> */}
// 							<FiltersSelection
// 								showByGenres={false}
// 								showByArtStyles={false}
// 								showByPlatforms={true}
// 							/>
// 							<span className="select-arrow">▼</span>
// 						</div>

// 						<span className="filter-params-type-description">[FILTER_BY_PLATFORM_ALL]</span>
// 					</div>
// 				</div>
				

// 			</div>
// 		</div>
// 	)
// }
// // selezione multipla dei filtri (di genre_types, release_year e platform_target) con possibilità di rimuovere i filtri attivi