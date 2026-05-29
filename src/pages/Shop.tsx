import { CrossSearchBox } from "../components/CrossSearchBox";
import { CrossSearchResult } from "../components/CrossSearchResult";
import { CrossSearchScanning } from "../components/CrossSearchScanning";

export function Shop() {

	return <>
			<h1>Shop</h1>

			<CrossSearchBox/>

			<CrossSearchScanning/>

			<CrossSearchResult/>
		</>
}