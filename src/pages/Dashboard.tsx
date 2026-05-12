import { SearchBar } from "../components/shared/SearchBar";
import { SingleCard } from "../components/shared/SingleCard";

export function Dashboard() {
	const boxList = [
		{ title: "titolo 1", description : 'descrizione 1'},
		{ title: "titolo 2", description : 'descrizione 2'}
	];
	return <>
		<h1>Dashboard</h1>
		<SearchBar/>
		<hr />

		{ boxList.map((box)=> <SingleCard text={box.title} description={box.description} />)}

	</>
}