// import { GameCard } from "../games/GameCard";
// import type { GameDetailProps } from "../props/GameDetailProps";

// type GenreGameCardsProps = {
// 	games: GameDetailProps[];
// }

// export function GenrePage({ games }: GenreGameCardsProps) {
// 	return <>

// 		<div id="genre-page">
// 			<span>Genre's name clicked here</span>
// 			<div className="genre-gamecards-list">
// 				{games.map((sg) => (
// 						<GameCard
// 							key={sg.game_id}
// 							game={{
// 								game_id: sg.game_id,
// 								rating: sg.moby_score > 0 ? `★ ${sg.moby_score}` : "—",
// 								coverImage: sg.main_cover_url,
// 								title: sg.title,
// 								description: sg.description_short ?? sg.description ?? "No description available.",
// 								genres: Object.values(sg.genres).flat(),
// 								developer: sg.developers ?? "Unknown",
// 								release: sg.year,
// 								tags: sg.tags,
// 							}}
// 						/>
// 					))}
// 			</div>
// 		</div>
// 	</>

// }