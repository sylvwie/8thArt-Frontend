import { ArchiveSearch } from "../components/ArchiveSearch";
// import { SingleCard } from "../components/shared/SingleCard";

export function Dashboard() {
	/*
	const cardList = [
		{ title: "titolo 1", description : 'descrizione 1'},
		{ title: "titolo 2", description : 'descrizione 2'}
	];
	*/

	return <>
		<ArchiveSearch/>
		<hr/>

		{ /* cardList.map((card)=> <SingleCard text={card.title} description={card.description} />) */} 

	</>
}