import suggestedGameBoxIcon from "/src/assets/icons/suggested-game-icon.svg";
import suggestedGameBoxCover from "/src/assets/template/suggested-games-cover-template.png";

export function RecommendedGames() {
	return (
		<div id="suggested-game-box">
			<div id="suggested-game-box-head">
				<img src={suggestedGameBoxIcon} alt="Suggested Game" id="suggested-game-icon"/> 
				<span id="suggested-game-text">MAY INTEREST YOU.sys</span>
				<span id="suggested-game-title">Game Title</span>
			</div>
			<div id="game-cover-container">
				<img src={suggestedGameBoxCover} alt="Suggested Game Cover" id="suggested-game-cover"/>
			</div>
		</div>
	)
}

// inserire il game title e la game cover 