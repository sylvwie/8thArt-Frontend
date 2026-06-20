
import { Link } from "react-router-dom";
import { useRandomGame } from "../hooks/useRandomGame";
import suggestedGameBoxIcon from "/src/assets/icons/suggested-game-icon.svg";
import gameCoverTemplate from "/src/assets/template/template-no-image.jpg";

export function SuggestedGames() {
  const { game, loading } = useRandomGame();

  return (
    <div className="suggested-game-box">
      <div className="suggested-game-box-head">
        <img src={suggestedGameBoxIcon} alt="Suggested Game" className="suggested-game-icon" />
        <span className="suggested-game-text">MAY INTEREST YOU</span>
        <span className="suggested-game-title">
          {loading ? "..." : (game?.title ?? "—")}
        </span>
      </div>
      <div className="game-cover-container">
      <Link to={`/game-detail/${game?.game_id}`} className="suggested-game-link">
        <img
          src={game?.main_cover_url || gameCoverTemplate}
          alt={game?.title ?? "Suggested Game Cover"}
          className="suggested-game-cover"
        />
      </Link>
      </div>
    </div>
  );
}


// import suggestedGameBoxIcon from "/src/assets/icons/suggested-game-icon.svg";
// import gameCoverTemplate from "/src/assets/template/game-cover-template.png";

// export function SuggestedGames() {
// 	return (
// 		<div className="suggested-game-box">
// 			<div className="suggested-game-box-head">
// 				<img src={suggestedGameBoxIcon} alt="Suggested Game" className="suggested-game-icon"/> 
// 				<span className="suggested-game-text">MAY INTEREST YOU</span>
// 				<span className="suggested-game-title">Game Title</span>
// 			</div>
// 			<div className="game-cover-container">
// 				<img src={gameCoverTemplate} alt="Suggested Game Cover" className="suggested-game-cover"/>
// 			</div>
// 		</div> 
// 	)
// }






// import { Link } from "react-router-dom";
// import { useRandomGame } from "../hooks/useRandomGame";

// import suggestedGameBoxIcon from "/src/assets/icons/suggested-game-icon.svg";
// import gameCoverTemplate from "/src/assets/template/template-no-image.jpg";

// export function SuggestedGames() {
//   const { game, loading } = useRandomGame();

//   if (loading) {
//     return (
//       <div className="suggested-game-box">
//         Loading...
//       </div>
//     );
//   }

//   if (!game) return null;

//   return (
//     <Link
//       to={`/game-detail/${game.game_id}`}
//       className="suggested-game-link"
//     >
//       <div className="suggested-game-box">
//         <div className="suggested-game-box-head">
//           <img
//             src={suggestedGameBoxIcon}
//             alt="Suggested Game"
//             className="suggested-game-icon"
//           />

//           <span className="suggested-game-text">
//             MAY INTEREST YOU
//           </span>

//           <span className="suggested-game-title">
//             {game.title}
//           </span>
//         </div>

//         <div className="game-cover-container">
//           <img
//             src={game.main_cover_url || gameCoverTemplate}
//             alt={game.title}
//             className="suggested-game-cover"
//           />
//         </div>
//       </div>
//     </Link>
//   );
// }





