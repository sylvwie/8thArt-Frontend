import { ViewGameBtn } from "../shared/ViewGameBtn.tsx";

// Questo è box dei singoli giochi visibile nella sezione Games del Developer e della Console

// Props da mettere in un file a parte in futuro se serve
type GameCardProps = {
	game: GameInfo;
}

export type GameInfo = {
	game_id: number;
	rating: string;
	coverImage: string;
	tags: string;
	title: string;
	description: string;
	genres: string[];
	developer: string;
	release: string;
}

export function GameCard({ game }: GameCardProps) {
	return (
		<div className="gamecard-wrapper">
			<div className="gamecard-container">

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

						<button className="gamecard-tags">{game.tags}</button>
						{/* componente genre / tag */}
					</div>

					<div className="view-game-button">
						<ViewGameBtn gameId={game.game_id} />
					</div>
				</div>

			</div>
		</div>
	)
}
