type GameCardProps = {
	gameTitle: string;
	gameSerie: string;
	gameDev: string;
	gameCoverImage: string;
	gameTag?: string;
}

export function GameCard({ gameTitle, gameSerie, gameDev, gameCoverImage, gameTag: gameTag }: GameCardProps) {
	return (
		<div className="gamecard-wrapper">
			<div className="gamecard-cover-container">
				<button className="gamecard-gametag">{gameTag}</button>
				<img src={gameCoverImage} alt={gameTitle} />
			</div>
			<div className="gamecard-info-container">
				<span>{gameTitle}</span>
				<span>{gameSerie}</span>
				<span>{gameDev}</span>
			</div>
		</div>
	)
}