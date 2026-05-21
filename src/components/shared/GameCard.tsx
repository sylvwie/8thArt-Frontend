type GameCardProps = {
	game: Game;
}

export type Game = {
	gameTag: string;
	gameTitle: string;
	gameSerie: string;
	gameDev: string;
	gameCoverImage: string;
}

export function GameCard({game}: GameCardProps) {
	return (
		<div className="gamecard-wrapper">
			<div className="gamecard-cover-container">
				<button className="gamecard-gametag">{game.gameTag}</button>
				<img src={game.gameCoverImage} alt={game.gameTitle} />
			</div>
			<div className="gamecard-info-container">
				<span>{game.gameTitle}</span>
				<span>{game.gameSerie}</span>
				<span>{game.gameDev}</span>
			</div>
		</div>
	)
}