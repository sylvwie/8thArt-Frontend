import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGameFilterSearch } from "../../hooks/useGameFilterSearch.tsx";

export function GenrePage() {
  const { genreCategory, genreValue } = useParams<{ genreCategory: string; genreValue: string }>();
  const { games, count, loading, error, search } = useGameFilterSearch();

  useEffect(() => {
    if (genreCategory && genreValue) {
      search({ genre_category: genreCategory, genre_value: genreValue });
    }
  }, [genreCategory, genreValue, search]);

  return (
    <>
      <span>{genreValue}</span>

      {loading && <div className="genre-loading">Loading...</div>}
      {error && <div className="genre-error">{error}</div>}

      <div className="genre-games-count">{count} giochi trovati</div>

      <div className="genre-games-list">
        {games.map((game) => (
          <div key={game.game_id} className="genre-game-box">
            <span>{game.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}