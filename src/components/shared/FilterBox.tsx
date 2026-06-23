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
