import suggestedGameBoxIcon from "/src/assets/icons/suggested-game-icon.svg";
import gameCoverTemplate from "/src/assets/template/game-cover-template.png";

export function SuggestedGames() {
	return (
		<div className="suggested-game-box">
			<div className="suggested-game-box-head">
				<img src={suggestedGameBoxIcon} alt="Suggested Game" className="suggested-game-icon"/> 
				<span className="suggested-game-text">MAY INTEREST YOU</span>
				<span className="suggested-game-title">Game Title</span>
			</div>
			<div className="game-cover-container">
				<img src={gameCoverTemplate} alt="Suggested Game Cover" className="suggested-game-cover"/>
			</div>
		</div> 
	)
}

// inserire chiamata api di game title e la game cover 