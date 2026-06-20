import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGameFilterSearch } from "../../hooks/useGameFilterSearch.tsx";

export function PlatformPage() {
  const { platformName } = useParams<{ platformName: string }>();
  const { games, count, loading, error, search } = useGameFilterSearch();

  useEffect(() => {
    if (platformName) {
      search({ platform: platformName });
    }
  }, [platformName, search]);

  return (
    <>
      <span>{platformName}</span>

      {loading && <div className="platform-loading">Loading...</div>}
      {error && <div className="platform-error">{error}</div>}

      <div className="platform-games-count">{count} giochi trovati</div>

      <div className="platform-games-list">
        {games.map((game) => (
          <div key={game.game_id} className="platform-game-box">
            <span>{game.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}