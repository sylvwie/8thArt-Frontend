import { ViewGameBtn } from "../shared/ViewGameBtn.tsx";

// Questo è box dei singoli giochi visibile nella sezione Games del Developer e della Console

type GameCardProps = {
	game: GameInfo;
}

export type GameInfo = {
	rating: string;
	coverImage: string;

	title: string;
	description: string;
	genre: string;
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
						<span className="gamecard-genre">{game.genre}</span>
						<span className="gamecard-dev">{game.developer}</span>
						<span className="gamecard-release">{game.release}</span>

						<button className="gamecard-tags">TAG</button>
						{/* componente genre / tag */}
					</div>

					<ViewGameBtn/>
				</div>

			</div>
			{/* aggiungo special background*/}
		</div>
	)
}
