import { Link } from "react-router-dom";
import type { Game } from "../props/ArchiveProps.tsx";
import gameCoverTemplate from "/src/assets/template/game-cover-template.png";

type SearchProps = {
  results: Game[];
};

export function SearchResults({ results }: SearchProps) {
  return (
    <div id="search-results-wrapper">
      {results.map((result) => (
        <div key={result.game_id} className="search-result-container">
          <Link to={`/game-detail/${result.game_id}`}>
            <div className="search-result-items">
              <div className="search-result-cover">
                <img
                  className="search-result-content"
                  src={result.main_cover_url ?? gameCoverTemplate}
                  alt={result.title}
                />
              </div>
              <div className="search-result-info">
                <span className="search-result-title">{result.title}</span>
                <p className="search-result-description">
                  {result.description ?? ""}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}



// import { Link } from "react-router-dom";
// import type { SearchResultProps } from "../props/SearchResultProps";

// type SearchProps = {
//   results: SearchResultProps[];
// };

// export function SearchResults({ results }: SearchProps ) {
//   return (
//     <div id="search-results-wrapper">
//       {results.map((result, index) => (
//         <div key={`${result.title}-${index}`} className="search-result-container">
//           <Link to={`/game-detail/${result.game_id}`}>
//           <div className="search-result-items">
//             <div className="search-result-cover">
//               <img
//                 className="search-result-content"
//                 src={result.main_cover_url}
//                 alt={result.title}
//               />
//             </div>
//             <div className="search-result-info">
//               <span className="search-result-title">
//                 {result.title}
//               </span>
//               <p className="search-result-description">
//                 {result.description}
//               </p>
//             </div>
//           </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }