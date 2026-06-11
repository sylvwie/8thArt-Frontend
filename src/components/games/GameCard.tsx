import { Link } from "react-router";
import { ViewGameBtn } from "../shared/ViewGameBtn.tsx";

// Questo è box dei singoli giochi visibile nei dettagli di gioco, sezione games di developer e platforms
type GameCardProps = {
	game: GameInfo;
}

type GameInfo = {
  game_id: number;
  rating: string;
  coverImage: string;
  title: string;
  description: string;
  genres: string[];
  developer: string;
  release: string;
  tags?: string[];
}

export function GameCard({ game }: GameCardProps) {
	return (
		<div className="gamecard-wrapper">
			<div className="gamecard-container">
				<Link to={`/game/${game.game_id}`} className="gamecard-link"> 

				<div id="gamecard-cover-container">
					<button className="gamecard-rating">{game.rating}</button>
					<img className="gamecard-cover" src={game.coverImage} alt="game cover" />
				</div>

				<div id="gamecard-info-container">
					<div id="gamecard-info-overview">
						<span className="gamecard-title">{game.title}</span>
						<p className="gamecard-description">{game.description}</p>
					</div>

					<div id="game-info-specifics">
						<span className="gamecard-genre">{game.genres.join(", ")}</span>
						<span className="gamecard-dev">{game.developer}</span>
						<span className="gamecard-release">{game.release}</span>

						<div className="gamecard-tags-container">
							{game.genres.slice(0, 3).map((genre) => (
								<button
								key={genre}
								className="gamecard-tags"
								>
								{genre}
								</button>
							))}
						</div>
					</div>

					<div className="view-game-button">
						<ViewGameBtn gameId={game.game_id} />
					</div>
				</div>
				</Link>
			</div>
		</div>
	)
}
