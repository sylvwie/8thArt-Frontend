// Box di risultato inserito nel container CrossSearchResult
import templateCover from "/src/assets/template/template-no-image.jpg";
import { ViewGameBtn } from "../shared/ViewGameBtn.tsx";
import type { CrossReferenceProps } from "../props/CrossReferenceProps.tsx";
import { Link } from "react-router-dom";
import type { SearchResultProps } from "../props/SearchResultProps.tsx";

type Props = {
	game: CrossReferenceProps;
	similarGames: CrossReferenceProps[];
	results: SearchResultProps[];
};

export function CrossReferenceResultBox({ game, similarGames, results }: Props) { 		

	const genreList = Object.values(game.genres).flat();
	const platformList = game.platforms; 

	return (
		<div id="cross-reference-result-container">

			{/* UPPER BOX */}
			<div id="cross-reference-result-upper-content">

				{/* header */}
				<div className="cross-reference-result-upper-content-header">
					<span>[ PRIMARY MATCH IDENTIFIED ]</span>
					<span id="reference-result"> REFERENCE RESULT</span>
				</div>

				{/* image and title */}
				<div className="cross-reference-result-upper-content-cover">
						<img className="game-cover" src={game.main_cover_url || templateCover} alt={game.title} />
				</div>
				<div className="cross-reference-result-upper-content-title">
						<span className="game-title">{game.title}</span>
				</div>

				{/* info */}
				<div className="cross-reference-result-upper-content-info">

					<div className="cross-reference-result-upper-content-info-left-column">
						{/* develper */}
						<div className="cross-reference-result-upper-content-info-developer">
							<span>[ DEVELOPER ]</span>
							<span className="developer-name"> {game.developers}</span>
						</div>

						{/* genre */}
						<div className="cross-reference-result-upper-content-info-genre">
							<span>[ GENRE ]</span>
							<div className="genres-button">
								{genreList.map((g) => (
									<button key={g} className="genres">{g}</button>
								))}
							</div>
						</div>

						{/* platforms */}
						<div className="cross-reference-result-upper-content-info-platforms">
							<span>[ PLATFORMS ]</span>
							<div className="platforms-buttons">
								{platformList.map((p) => (
									<button key={p} className="platforms">
										{p}
									</button>
								))}
							</div>
						</div>

						{/* explanation */}
						<div className="cross-reference-result-upper-content-info-explanation">
							<span>[ EXPLANATION ]</span>
							<p className="explanation">{game.explanation}</p>
						</div>
					</div>

					<div className="cross-reference-result-upper-content-info-right-column">


						{/* release */}
						<div className="cross-reference-result-upper-content-info-release">
							<span>[ RELEASE ]</span>
							<span className="release-date">{game.year}</span>
						</div>

						{/* moby score */}
						{/* <div className="cross-reference-result-upper-content-moby-score">
							{game.moby_score > 0 && (
								<div>
									<span>[ MOBY SCORE ]</span>
									<span>{game.moby_score}</span>
								</div>
							)}
						</div> */}

						{/* key feature */}
						<div className="cross-reference-result-upper-content-info-keyfeature">
							<span>[ KEY FEATURES ]</span>
							<ul className="key-features">
								{game.tags.map((tag, i) => (
									<li key={i}>{tag}</li>
								))}
							</ul>
						</div>
					</div>

				</div>
				<div className="view-game-button">
					<ViewGameBtn gameId={game.game_id} />
				</div>
			</div>

			{/* LOWER BOX */}
			<div className="cross-reference-result-lower-content">
				{/* similarity - left */}
				<div className="cross-reference-result-lower-content-similarity">
					{/* similiar game column */}
					<span className="similar-game-row-title">[ SIMILAR GAMES ]</span>
					{/* LOWER BOX - similar games */}
					<div className="similar-games-container">
						{results.map((results) => (
						<Link to={`/game-detail/${results.game_id}`}>
							{similarGames.map((sg) => (
									<span key={sg.game_id} className="similar-game-title">{sg.title}</span>
								))}
						</Link>
						))}
					</div>
				</div>

				{/* ------ IGNORE NOW ----- */}
				{/* analysis report - right */}
				<div className="cross-reference-result-lower-content-analysis">
					{/* <span className="analysis-report-title">[ ANALYSIS REPORT ]</span> */}
					{/* visual composition */}
					{/* technical markers  */}
					{/* identified elements */}
				</div>

			</div>
		</div>
	)
}
