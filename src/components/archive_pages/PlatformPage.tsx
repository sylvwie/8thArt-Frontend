import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGameFilterSearch } from "../../hooks/useGameFilterSearch.tsx";
import { GameCard } from "../games/GameCard.tsx";
import { normalizeToGameInfo } from "../utils/normalizeToGameInfo.tsx";

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
	<div className="platform-page-container">

	<div className="platform-header"> 
      <span className="platform-name">{platformName}</span>

      {loading && <div className="platform-loading">Loading...</div>}
      {error && <div className="platform-error">{error}</div>}

      <div className="platform-games-count">{count} games found </div>
	</div>
	
	{/* <div className="platform-games-list">
	{games.map((game) => (
		<div key={game.game_id} className="platform-game-box">
		<span>{game.title}</span>
		</div>
		))}
	</div> */}

	  <div className="platform-games-list">
		{games.map((game) => (
			<GameCard key={game.game_id} game={normalizeToGameInfo(game)} />
		))}
	</div>
	</div>
    </>
  );
}