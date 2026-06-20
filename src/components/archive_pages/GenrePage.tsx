import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGameFilterSearch } from "../../hooks/useGameFilterSearch.tsx";
import { GameCard } from "../games/GameCard.tsx";
import { normalizeToGameInfo } from "../utils/normalizeToGameInfo.tsx";

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
			<div className="genre-page-container">

				<div className="genre-header">
					<span className="genre-name">{genreValue}</span>

					{loading && <div className="genre-loading">Loading...</div>}
					{error && <div className="genre-error">{error}</div>}

					<div className="genre-games-count">{count} games found </div>
				</div>

				{/* <div className="genre-games-list">
					{games.map((game) => (
					<div key={game.game_id} className="genre-game-box">
						<span>{game.title}</span>
					</div>
					))}
				</div> */}

				<div className="genre-games-list">
					{games.map((game) => (
						<GameCard key={game.game_id} game={normalizeToGameInfo(game)} />
					))}
				</div>
			</div>
		</>
	);
}