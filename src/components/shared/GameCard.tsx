type GameCardProps = {
	gameTitle: string;
	gameDescription: string;
	gameSerie: string;
	gameCoverImage: string;
	gameTag?: string;
}

export function GameCard({ gameTitle, gameDescription, gameSerie, gameCoverImage, gameTag: gameTag }: GameCardProps) {
	return (
		<div className="gamecard-wrapper">
			<div className="gamecard-cover-container">
				<span className="gamecard-gametag">{gameTag}</span>
				<img src={gameCoverImage} alt={gameTitle} />
			</div>
			<div className="gamecard-info-container">
				<span>{gameTitle}</span>
				<span>{gameSerie}</span>
				<span>{gameDescription}</span>
			</div>
		</div>
	)
}