import { Link } from "react-router-dom";
import type { SearchResultProps } from "../props/SearchResultProps";

type SearchProps = {
  results: SearchResultProps[];
};

export function SearchResults({ results }: SearchProps ) {
  return (
    <div id="search-results-wrapper">
      {results.map((result, index) => (
        <div key={`${result.title}-${index}`} className="search-result-container">
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
               <Link to={`/game-detail/${result.game_id}`}>
                {result.title}
              </Link>
              </span>
              <p className="search-result-description">
                {result.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}