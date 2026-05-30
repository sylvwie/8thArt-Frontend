// Box di risultato inserito nel container CrossSearchResult
import templateCover from "/src/assets/template/game-cover-template.png";
import { ViewGameBtn } from "../shared/ViewGameBtn.tsx";

export function CrossReferenceResultBox() {
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
					<span className="game-title">Title</span>
					<img className="game-cover" src={templateCover} alt="game cover" />
				</div>

				{/* info */}
				<div className="cross-reference-result-upper-content-info">

					<div className="cross-reference-result-upper-content-info-left-column">
						{/* develper */}
						<div className="cross-reference-result-upper-content-info-developer">
							<span>[ DEVELOPER ]</span>
							<span className="developer-name">john developer</span>
						</div>

						{/* genre */}
						<div className="cross-reference-result-upper-content-info-genre">
							<span>[ GENRE ]</span>
							<div className="genres-button">
								<button className="genres">genre</button>
								<button className="genres">genre</button>
								<button className="genres">genre</button>
							</div>
						</div>

						{/* platforms */}
						<div className="cross-reference-result-upper-content-info-platforms">
							<span>[ PLATFORMS ]</span>
							<div className="platforms-buttons">
								<button className="platforms">platform</button>
								<button className="platforms">platform</button>
								<button className="platforms">platform</button>
							</div>
						</div>

						{/* synopsis */}
						<div className="cross-reference-result-upper-content-info-synopsis">
							<span>[ SYNOPSIS ]</span>
							<p className="synopsis">this is the synopsis of the game this is the synopsis of the game this is the synopsis of the game this is the synopsis of the game this is the synopsis of the game this is the synopsis of the game this is the synopsis of the game this is the synopsis of the game</p>
						</div>
					</div>

					<div className="cross-reference-result-upper-content-info-right-column">


						{/* release */}
						<div className="cross-reference-result-upper-content-info-release">
							<span>[ RELEASE ]</span>
							<span className="release-date">release date</span>
						</div>

						{/* key feature */}
						<div className="cross-reference-result-upper-content-info-keyfeature">
							<span>[ KEY FEATURE ]</span>
							<ul className="key-features">
								<li>this is the key feature number 1</li>
								<li>this is the key feature number 2</li>
								<li>this is the key feature number 3</li>
								<li>this is the key feature number 4</li>
								<li>this is the key feature number 5</li>
							</ul>
						</div>

						{/* <div className="cross-reference-result-upper-content-info-palette">
						</div> */}
					</div>

				</div>
				<div className="view-game-button">
					<ViewGameBtn />
				</div>
			</div>

			{/* LOWER BOX */}
			<div className="cross-reference-result-lower-content">
				{/* similarity - left */}
				<div className="cross-reference-result-lower-content-similarity">
					{/* similiar game column */}
					<span className="similar-game-row-title">[ SIMILAR GAMES ]</span>
					<div className="similar-games-container">
						<span className="similar-game-title">similar game</span>
						<span className="similar-game-title">similar game</span>
						<span className="similar-game-title">similar game</span>
						<span className="similar-game-title">similar game</span>
						<span className="similar-game-title">similar game</span>
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
