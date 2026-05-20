import suggestedGameBoxIcon from "/src/assets/icons/suggested-game-icon.svg";
import suggestedGameBoxCover from "/src/assets/template/suggested-games-cover-template.png";

export function RecommendedGames() {
	return (
		<div className="suggested-game-box">
			<div className="suggested-game-box-head">
				<img src={suggestedGameBoxIcon} alt="Suggested Game" className="suggested-game-icon"/> 
				<span className="suggested-game-text">MAY INTEREST YOU.sys</span>
				<span className="suggested-game-title">Game Title</span>
			</div>
			<div className="game-cover-container">
				<img src={suggestedGameBoxCover} alt="Suggested Game Cover" className="suggested-game-cover"/>
			</div>
		</div> 
	)
}

// inserire il game title e la game cover 