// Box di risultato inserito nel container CrossSearchResult

import viewGameIcon from "/src/assets/icons/view-game-icon.svg";

export function CrossReferenceResultBox() {
	return (
	<div id="cross-reference-result-wrapper">
		<div id="cross-reference-result-container">

			{/* UPPER BOX */}
			<div className="cross-reference-result-upper-content">

				{/* header */}
				<div className="cross-reference-result-upper-content-header">
					<span>[ PRIMARY MATCH IDENTIFIED ]</span>
					<span> REFERENCE RESULT</span>
				</div>

				{/* image and title */}
				<div className="cross-reference-result-upper-content-cover"> 
					<span className="game-title">Game Title</span>
					{/* <img className="game-cover" src={GameCover} alt="game cover" /> */}
				</div>

				{/* info */}
				<div className="cross-reference-result-upper-content-info">
					{/* develper */}
					<div className="cross-reference-result-upper-content-info-developer">
					</div>

					{/* genre */}
					<div className="cross-reference-result-upper-content-info-genre">
					</div>

					{/* platforms */}
					<div className="cross-reference-result-upper-content-info-platforms">
					</div>

					{/* synopsis */}
					<div className="cross-reference-result-upper-content-info-synopsis">
					</div>

					{/* release */}
					<div className="cross-reference-result-upper-content-info-release">
					</div>

					{/* key feature */}
					<div className="cross-reference-result-upper-content-info-keyfeature">
					</div>
				
					{/* palette */}
					<div className="cross-reference-result-upper-content-info-palette">
					</div>
				</div>

				<div className="view-game-button">
					<button id="gamecard-view-game-btn">
						<img className='gamecard-view-game-icon' src={viewGameIcon} alt="View Game" />
						[ View Game ]
					</button>
				</div>
			</div>

			{/* LOWER BOX */}
			<div className="cross-reference-result-lower-content">
				{/* similarity - left */}
				<div className="cross-reference-result-lower-content-similarity">
					{/* similiar game row */}
				</div>

				{/* analysis report - right */}
				<div className="cross-reference-result-lower-content-analysis">
					{/* visual composition */}
					
					{/* technical markers  */}

					{/* identified elements */}
				</div>

			</div>

		</div>
	</div>
				
	)
}
