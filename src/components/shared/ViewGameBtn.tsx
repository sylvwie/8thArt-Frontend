import { useState } from "react";
import { useNavigate } from "react-router-dom";
import viewGameIcon from "/src/assets/icons/view-game-icon.svg";
import viewGameIconVariant from "/src/assets/icons/view-game-icon-variant.svg";

type Props = {
  gameId: number;
};

export function ViewGameBtn({ gameId }: Props) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="view-game-button">
      <button
        id="gamecard-view-game-btn"
        onClick={() => navigate(`/game-detail/${gameId}`)}
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