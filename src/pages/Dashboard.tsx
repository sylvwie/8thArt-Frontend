import { ArchiveSearch } from "../components/ArchiveSearch";
import { DirectoryBar } from "../components/shared/DirectoryBar";
//import { GameCard } from "../components/shared/GameCard";

export function Dashboard() {
	/*
	const cardList = [
		{ gameTitle: "titolo 1", gameDescription : 'descrizione 1', gameSerie: 'serie 1' },
		{ gameTitle: "titolo 2", gameDescription : 'descrizione 2', gameSerie: 'serie 2' }
	];
	*/

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
			{/* <GameCard /> */}
		</div>

		{ /* cardList.map((card)=> <GameCard gameTitle={card.gameTitle} gameDescription={card.gameDescription} gameSerie={card.gameSerie} />) */} 

	</>
}