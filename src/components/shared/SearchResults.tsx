import type { SearchResult } from "../search/Search";

type Props = {
  results: SearchResult[];
};

export function SearchResults({ results }: Props) {
  return (
    <div id="search-results-wrapper">
      {results.map((result) => (
        <div key={result.title} className="search-result-container">
          <div className="search-result-items">
            <div className="search-result-cover">
              <img
                className="search-result-content"
                src={result.main_cover_url}
                alt={result.title}
              />
            </div>
            <div className="search-result-info">
              <span className="search-result-title">
                {result.title}
              </span>
              <p className="search-result-description">
                this is where the description of the game belongs, the real description will be added later when the api will be ready, for now let's just pretend this is the game description. Ok it's not really a description, but it will be maybe.
                {/* {result.description} */}
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>
  );
}