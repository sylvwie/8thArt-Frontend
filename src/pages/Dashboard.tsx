import { ArchiveSearch } from "../components/ArchiveSearch";
import { GameCard, type Game } from "../components/shared/GameCard";

export function Dashboard() {
	
	const cardList: Game[] = [
		{ gameTitle: "titolo 1", gameSerie: 'serie 1', gameDev: 'dev 1', gameCoverImage: 'https://www.mobygames.com/images/covers/l/1234567-game-title-windows-front-cover.jpg', gameTag: 'tag1' },
		{ gameTitle: "titolo 2", gameSerie: 'serie 2', gameDev: 'dev 2', gameCoverImage: 'https://www.mobygames.com/images/covers/l/1234567-game-title-windows-front-cover.jpg', gameTag: 'tag2' }
	];
	
	return <>
		<div id="main-showcase">
			<div className="showcase-side showcase-side-left">
			</div>
			<div className="showcase-center">
				<ArchiveSearch/>
			</div>
		</div>
		
		<hr/>

		<div id="homepage-content-section">
			{cardList.map((card) => (
				<GameCard game={card} />
			))}
		</div>

	</>
}