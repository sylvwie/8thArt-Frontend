import type { SearchResult } from "../../api_manager/types/Search";

type Props = {
  results: SearchResult[];
};

export function SearchResults({
  results,
}: Props) {
  return (
    <>
      {results.map((result) => (
        <div
          key={result.title}
          className="search-result-container"
        >
          <div className="search-result-item">
            <div className="search-result-cover">
                <img
                className="search-result-content"
                src={result.main_cover_url}
                alt={result.title}
                />
            </div>
            <div className="search-result-info">
              <span>{result.title}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}