// ViewGameButton.tsx
import { useState } from "react";
import viewGameIcon from "/src/assets/icons/view-game-icon.svg";
import viewGameIconVariant from "/src/assets/icons/view-game-icon-variant.svg";

export function ViewGameBtn() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="view-game-button">
      <button
        id="gamecard-view-game-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="gamecard-view-game-icon"
          src={isHovered ? viewGameIconVariant : viewGameIcon}
          alt="View Game"
        />
        [ View Game ]
      </button>
    </div>
  );
}