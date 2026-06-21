import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGameFilterSearch } from "../../hooks/useGameFilterSearch.tsx";
import { GameCard } from "../games/GameCard.tsx";
import { normalizeToGameInfo } from "../utils/normalizeToGameInfo.tsx";

export function DeveloperPage() {
  const { developerName } = useParams<{ developerName: string }>();
  const { games, count, loading, error, search } = useGameFilterSearch();

  useEffect(() => {
    if (developerName) {
      search({ developer: developerName });
    }
  }, [developerName, search]);

  return (
    <>
	<div className="developer-page-container">
		<div className="developer-header"> 
			<span>{developerName}</span>

			{loading && <div className="developer-loading">Loading...</div>}
			{error && <div className="developer-error">{error}</div>}

			<div className="developer-games-count">{count} giochi trovati</div>
		</div>

		<div className="developer-games-list">
			{games.map((game) => (
				<GameCard key={game.game_id} game={normalizeToGameInfo(game)} />
			))}
		</div>
	</div>
    </>
  );
}