
// Box di risultato inserito nel container CrossPlaygroundResult
import { useNavigate } from "react-router-dom";
import { useCrossPlaygroundStore } from "../store/useCrossPlaygroundStore";
import { ViewGameBtn } from "../components/shared/ViewGameBtn.tsx";
import { GameCard } from "../components/games/GameCard.tsx";

import specialBgAscii from "/src/assets/template/special-background-ascii.gif";
import templateCover from "/src/assets/template/template-no-image.jpg";

import type { CrossReferenceProps } from "../components/props/CrossReferenceProps.tsx";

type Props = {
  game: CrossReferenceProps;
  similarGames: CrossReferenceProps[];
};

export function CrossPlaygroundResultBox({ game, similarGames }: Props) {
  const navigate = useNavigate();

  const resetUpload = useCrossPlaygroundStore((s) => s.resetUpload);

  const previewUrl = useCrossPlaygroundStore((s) => s.view.data.previewUrl);

  const genreList = Object.entries(game.genres).flatMap(
    ([category, values]) => values.map((value) => ({ category, value }))
  );
  const platformList = game.platforms;

  return (

	<div className="cross-search-section">

      <div className="cross-search-box-wrapper">
        <div className="cross-search-box">

          <div className="cross-search-container">
            <img id="special-background" src={specialBgAscii} alt="Special Background" />

			<div className="cross-search-header">
				<span id="cross-search-header-text"></span> 
				<div id="cross-search-header-buttons">
				{/* RESET BTN */}
				<button id="cross-search-reset-button" onClick={resetUpload}>RESET</button>
				<button id="cross-search-close-button">
                </button>
				</div>
			</div>

			{/* RESULT */}
				<div id="cross-reference-result-container">

				{/* UPPER BOX */}
				<div id="cross-reference-result-upper-content">

					{/* header */}
					<div className="cross-reference-result-upper-content-header">
					<span>[ PRIMARY MATCH IDENTIFIED ]</span>
					<span id="reference-result"> REFERENCE RESULT</span>
					</div>

					{/* image cover and input */}
					<div className="cross-reference-result-upper-content-cover">
					<img
						className="game-cover"
						src={game.main_cover_url || templateCover}
						alt={game.title}
					/>

					{previewUrl && (
						<div
						className="cross-search-input-image"
						style={{ backgroundImage: `url(${previewUrl})` }}
						>
						<div className="cross-search-input-image-title">
							<span> [ INPUT IMAGE ] </span>
						</div>
						</div>
					)}
					</div>

					{/* title */}
					<div className="cross-reference-result-upper-content-title">
					<span className="game-title">{game.title}</span>
					</div>

					{/* info */}
					<div className="cross-reference-result-upper-content-info">

					<div className="cross-reference-result-upper-content-info-left-column">
						{/* developer */}
						<div className="cross-reference-result-upper-content-info-developer">
						<span>[ DEVELOPER ]</span>
						<button
							className="developer-name"
							onClick={() => navigate(`/developer/${encodeURIComponent(game.developers)}`)}
						>
							{game.developers}
						</button>
						</div>

						{/* genre */}
						<div className="cross-reference-result-upper-content-info-genre">
						<span>[ GENRE ]</span>
						<div className="genres-button">
							{genreList.map(({ category, value }) => (
							<button
								key={`${category}-${value}`}
								className="genres"
								onClick={() => navigate(`/genre/${encodeURIComponent(category)}/${encodeURIComponent(value)}`)}
							>
								{value}
							</button>
							))}
						</div>
						</div>

						{/* platforms */}
						<div className="cross-reference-result-upper-content-info-platforms">
						<span>[ PLATFORMS ]</span>
						<div className="platforms-buttons">
							{platformList.map((p) => (
							<button
								key={p}
								className="platforms"
								onClick={() => navigate(`/platform/${encodeURIComponent(p)}`)}
							>
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
				<div className="cross-reference-result-similariar-games-wrapper">
					{/* similar games column */}
					<span className="similar-game-row-title">[ OTHER MATCHES ]</span>
					{/* similar games container */}
					<div className="cross-reference-similar-games-container">
					{similarGames.map((sg) => (
						<GameCard
						key={sg.game_id}
						game={{
							game_id: sg.game_id,
							rating: sg.moby_score > 0 ? `★ ${sg.moby_score}` : "—",
							coverImage: sg.main_cover_url,
							title: sg.title,
							description: sg.explanation,
							genres: Object.entries(sg.genres).flatMap(([category, values]) =>
							values.map((value) => ({ category, value }))
							),
							developer: sg.developers,
							developerList: [sg.developers],
							release: sg.year,
							tags: sg.tags,
						}}
						/>
					))}
					</div>
				</div>

				</div>
          </div>
        </div>
      </div>
    </div>
  );
}